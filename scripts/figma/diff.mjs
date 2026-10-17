#!/usr/bin/env node
// Figma change detection (read-only on Figma).
//
// Compares the Figma file with the snapshots committed in .ai/specs/*.json (written by extract.mjs)
// and lists, per component and per variant, what changed since: props, variants, layers, sizes,
// padding, gap, radius, fills, strokes, effects, text, bound variables. Also lists the published
// components that have no snapshot yet, and the snapshots whose node is gone.
//
// Usage:
//   node scripts/figma/diff.mjs             report to the console and .ai/figma/changes.md, exit 1 on changes
//   node scripts/figma/diff.mjs --force     compare even when the file version did not change
//   node scripts/figma/diff.mjs --update    rewrite the changed and new specs (.md + .json), store the version
//   node scripts/figma/diff.mjs <id>...     limit the check to these nodes
//   options: --vars <dump.json>  also compare a fresh variables dump (scripts/figma/dump-variables.js
//                                result) with .ai/figma/variables.json: added, removed, renamed, WEB syntax
//
// Workflow after a Figma update: figma:diff → apply the changes in code → figma:diff --update → commit.

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import {
  FILE_KEY,
  FILE_URL,
  GLOBALS_CSS,
  ROOT,
  SPECS_DIR,
  VARS_PATH,
  api,
  collectTargets,
  connected,
  readJson,
  spec,
  unresolved,
} from './extract.mjs';

const META_PATH = join(ROOT, '.ai/figma/snapshot.json');
const REPORT_PATH = join(ROOT, '.ai/figma/changes.md');
const BATCH = 20;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const only = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--vars').map((a) => a.replace('-', ':'));

// --- stored snapshots ------------------------------------------------------------

function loadSnapshots() {
  const byId = new Map();
  for (const file of readdirSync(SPECS_DIR)) {
    if (!file.endsWith('.json')) continue;
    const json = JSON.parse(readFileSync(join(SPECS_DIR, file), 'utf8'));
    if (json.id) byId.set(json.id, { slug: file.replace(/\.json$/, ''), json });
  }
  return byId;
}

const pageName = (frame) => (frame?.pageName ?? '').replace(/[↳\s]+/g, ' ').trim();

// published component sets and standalone components; the ICONS page is left out (icons and logos
// are exported svgs, covered by the icon batch)
function loadCatalog() {
  const sets = api(`files/${FILE_KEY}/component_sets`).meta.component_sets;
  const comps = api(`files/${FILE_KEY}/components`).meta.components;
  const out = new Map();
  for (const c of [...sets, ...comps]) {
    const page = pageName(c.containing_frame);
    if (c.containing_frame?.containingComponentSet || page === 'ICONS') continue;
    out.set(c.node_id, { name: c.name, page });
  }
  return out;
}

// --- diff --------------------------------------------------------------------------

const show = (v) => (v === undefined ? '–' : typeof v === 'object' ? JSON.stringify(v) : String(v));

function diffSnapshots(before, after) {
  const out = [];
  if (before.name !== after.name) out.push(`- renamed: ${before.name} → ${after.name}`);

  for (const k of new Set([...Object.keys(before.props), ...Object.keys(after.props)])) {
    const a = before.props[k];
    const b = after.props[k];
    if (!a) { out.push(`- prop \`${k}\` added: ${show(b)}`); continue; }
    if (!b) { out.push(`- prop \`${k}\` removed`); continue; }
    for (const f of ['type', 'default', 'options']) {
      if (show(a[f]) !== show(b[f])) out.push(`- prop \`${k}\` ${f}: ${show(a[f])} → ${show(b[f])}`);
    }
  }

  for (const v of new Set([...Object.keys(before.variants), ...Object.keys(after.variants)])) {
    const a = before.variants[v];
    const b = after.variants[v];
    if (!a) { out.push(`- variant \`${v}\` added`); continue; }
    if (!b) { out.push(`- variant \`${v}\` removed`); continue; }
    const lines = [];
    for (const p of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!a[p]) { lines.push(`  - \`${p}\` added`); continue; }
      if (!b[p]) { lines.push(`  - \`${p}\` removed`); continue; }
      for (const k of new Set([...Object.keys(a[p]), ...Object.keys(b[p])])) {
        if (a[p][k] !== b[p][k]) lines.push(`  - \`${p}\` ${k}: ${show(a[p][k])} → ${show(b[p][k])}`);
      }
    }
    if (lines.length) out.push(`- variant \`${v}\``, ...lines);
  }
  return out;
}

// code that implements a node: the Code Connect template and its `source=`
function codeFor(id) {
  const where = connected.get(id);
  if (!where) return 'not connected';
  if (where.startsWith('icon ')) return where;
  const source = readFileSync(join(ROOT, where), 'utf8').match(/^\/\/ source=(.+)$/m)?.[1];
  return source ? `${source} (${where})` : where;
}

// --- variables ------------------------------------------------------------------------

function variableChecks(dumpPath) {
  const cache = readJson(VARS_PATH, {});
  const css = new Set([...readFileSync(GLOBALS_CSS, 'utf8').matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]));
  const out = [];
  for (const [id, [name, , web]] of Object.entries(cache)) {
    const token = web.match(/var\((--[\w-]+)\)/)?.[1];
    if (token && !css.has(token)) out.push(`- ${name} (${id}): \`${token}\` missing in globals.css`);
  }
  if (!dumpPath) return out;
  const dump = JSON.parse(readFileSync(dumpPath, 'utf8'));
  for (const [id, [name, collection, web]] of Object.entries(dump)) {
    const old = cache[id];
    if (!old) { out.push(`- added: ${collection} / ${name} (${id})${web ? ` → ${web}` : ', no WEB code syntax'}`); continue; }
    if (old[0] !== name) out.push(`- renamed: ${old[0]} → ${name} (${id})`);
    if (old[2] !== web) out.push(`- WEB code syntax of ${name}: ${old[2] || '–'} → ${web || '–'}`);
  }
  // library variables (ids with a `/`) are not in a local dump
  for (const [id, [name, collection]] of Object.entries(cache)) {
    if (!id.includes('/') && !(id in dump) && !collection.includes('(deleted)')) out.push(`- removed: ${collection} / ${name} (${id})`);
  }
  return out;
}

// --- main ------------------------------------------------------------------------------

function main() {
  const meta = readJson(META_PATH, {});
  const file = api(`files/${FILE_KEY}?depth=1`);
  const version = { version: file.version, lastModified: file.lastModified };
  const update = flag('--update');

  if (!only.length && !update && !flag('--force') && meta.version === version.version) {
    console.log(`no Figma change since version ${meta.version} (${meta.lastModified})`);
    return 0;
  }

  const snapshots = loadSnapshots();
  const catalog = only.length ? new Map() : loadCatalog();
  // snapshots, published components, and nodes mapped in Code Connect (some are not published)
  const mapped = [...connected].filter(([, where]) => !where.startsWith('icon ')).map(([id]) => id);
  const ids = only.length ? only : [...new Set([...snapshots.keys(), ...catalog.keys(), ...mapped])];

  const changed = [];
  const added = [];
  const deleted = [];
  const toWrite = [];

  for (let i = 0; i < ids.length; i += BATCH) {
    const batch = ids.slice(i, i + BATCH);
    const res = api(`files/${FILE_KEY}/nodes?ids=${batch.join(',')}`);
    for (const id of batch) {
      const entry = res.nodes[id];
      const stored = snapshots.get(id);
      if (!entry) {
        if (stored) deleted.push(`- ${stored.json.name} (${id}) — ${codeFor(id)}`);
        continue;
      }
      const ctx = { components: entry.components ?? {}, componentSets: entry.componentSets ?? {}, styles: entry.styles ?? {} };
      const target = collectTargets(entry.document).find((t) => t.id === id) ?? entry.document;
      if (target.type !== 'COMPONENT_SET' && target.type !== 'COMPONENT') continue;
      const s = spec(target, ctx);
      if (!stored) {
        added.push(`- ${target.name} (${id})${catalog.get(id)?.page ? ` · page ${catalog.get(id).page}` : ''} — ${codeFor(id)}`);
        toWrite.push({ slug: s.slug, s });
        continue;
      }
      const lines = diffSnapshots(stored.json, s.json);
      if (lines.length) {
        changed.push({ title: `### ${target.name} (${id})`, url: `${FILE_URL}?node-id=${id.replace(':', '-')}`, code: codeFor(id), lines });
        toWrite.push({ slug: stored.slug, s });
      }
    }
  }

  const vars = variableChecks(option('--vars'));

  const md = [
    '# Figma changes',
    '',
    `- File version: ${version.version} (${version.lastModified})`,
    `- Snapshot version: ${meta.version ?? 'none'}${meta.lastModified ? ` (${meta.lastModified})` : ''}`,
    `- Checked: ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC, ${ids.length} nodes`,
    '',
    `## Changed components (${changed.length})`,
    '',
    ...(changed.length
      ? changed.flatMap((c) => [c.title, '', `- Figma: ${c.url}`, `- Code: ${c.code}`, ...c.lines, ''])
      : ['none', '']),
    `## Without snapshot (${added.length})`,
    '',
    ...(added.length ? added : ['none']),
    '',
    `## Removed from Figma (${deleted.length})`,
    '',
    ...(deleted.length ? deleted : ['none']),
    '',
    `## Variables (${vars.length})`,
    '',
    ...(vars.length ? vars : ['none']),
    '',
  ];
  if (unresolved.size) md.push(`Unresolved variable ids (run scripts/figma/resolve-variables.js): ${JSON.stringify([...unresolved])}`, '');
  writeFileSync(REPORT_PATH, md.join('\n'));

  console.log(`changed ${changed.length} · without snapshot ${added.length} · removed ${deleted.length} · variables ${vars.length}`);
  for (const c of changed) console.log(`  ${c.title.slice(4)} — ${c.lines.filter((l) => l.startsWith('- ')).length} change groups`);
  console.log(`report: ${relative(ROOT, REPORT_PATH)}`);

  if (update) {
    for (const { slug, s } of toWrite) {
      writeFileSync(join(SPECS_DIR, `${slug}.md`), s.md);
      writeFileSync(join(SPECS_DIR, `${slug}.json`), JSON.stringify(s.json, null, 1) + '\n');
    }
    if (!only.length) writeFileSync(META_PATH, JSON.stringify(version, null, 1) + '\n');
    console.log(`updated ${toWrite.length} specs${only.length ? '' : `, snapshot version ${version.version}`}`);
    return 0;
  }
  return changed.length || added.length || deleted.length || vars.length ? 1 : 0;
}

process.exitCode = main();
