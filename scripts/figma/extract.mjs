#!/usr/bin/env node
// Figma spec extractor (read-only).
//
// Reads components from the Figma REST API and writes one spec per component set to .ai/specs/:
//   <slug>.md    props, variants, base tree, per-variant differences, tokens, unbound values,
//                instances (code connect status), icons (svg present in the repo or not)
//   <slug>.json  normalized snapshot (kept in git, base for the future change detection)
//
// Usage:
//   node scripts/figma/extract.mjs <node-id>...           component sets, components, frames or pages
//   node scripts/figma/extract.mjs --page "Progress"      every component of a page (name match)
//   options: --png      also download a 2x render to .ai/specs/<slug>.png (not committed)
//            --icons    export missing icon svgs to public/assets/icons and add them to the icon batch
//   node scripts/figma/extract.mjs --merge-vars <file>    merge a variables dump (dump-variables.js /
//                                                         resolve-variables.js result) into .ai/figma/variables.json
//
// Auth: FIGMA_ACCESS_TOKEN when set, otherwise the cloud proxy injects it.
// Variable names come from .ai/figma/variables.json (the REST variables endpoint needs an Enterprise
// plan). Unknown ids are listed at the end with the resolve-variables.js snippet to run in use_figma.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const FILE_KEY = 'Dqy0QA70ThT4iZXNgJljkG';
const FILE_URL = `https://www.figma.com/design/${FILE_KEY}/AGENTIC-DESIGN-SYSTEM`;
const ROOT = new URL('../..', import.meta.url).pathname;
const VARS_PATH = join(ROOT, '.ai/figma/variables.json');
const SPECS_DIR = join(ROOT, '.ai/specs');
const ICONS_DIR = join(ROOT, 'public/assets/icons');
const ICON_BATCH = join(ROOT, 'app/components/Icon/Icon.figma.batch.json');
const GLOBALS_CSS = join(ROOT, 'app/globals.css');

// --- io ---------------------------------------------------------------------

function api(path) {
  const args = ['-sS', '--fail-with-body', `https://api.figma.com/v1/${path}`];
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (token && token !== 'placeholder') args.push('-H', `X-Figma-Token: ${token}`);
  const out = execFileSync('curl', args, { maxBuffer: 512 * 1024 * 1024 }).toString();
  return JSON.parse(out);
}

function download(url, dest) {
  execFileSync('curl', ['-sS', '-L', '-o', dest, url]);
}

const readJson = (p, fallback) => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : fallback);

// --- lookups ------------------------------------------------------------------

const variables = readJson(VARS_PATH, {});
const cssTokens = new Set([...readFileSync(GLOBALS_CSS, 'utf8').matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]));
const unresolved = new Set();

function walkFiles(dir, test, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkFiles(p, test, acc);
    else if (test(name)) acc.push(p);
  }
  return acc;
}

// node ids published with Code Connect (templates + icon batch)
const connected = new Map();
for (const f of walkFiles(join(ROOT, 'app'), (n) => n.endsWith('.figma.ts'))) {
  const m = readFileSync(f, 'utf8').match(/node-id=(\d+)-(\d+)/);
  if (m) connected.set(`${m[1]}:${m[2]}`, relative(ROOT, f));
}
const iconBatch = readJson(ICON_BATCH, []);
const iconEntries = Array.isArray(iconBatch) ? iconBatch : Object.values(iconBatch).find(Array.isArray);
const iconByFigmaName = new Map();
for (const e of iconEntries) {
  const m = e.url.match(/node-id=(\d+)-(\d+)/);
  if (m) connected.set(`${m[1]}:${m[2]}`, `icon ${e.name}`);
  iconByFigmaName.set(e.figmaName, e.name);
}

function variable(id) {
  const key = id.replace('VariableID:', '');
  const v = variables[key];
  if (!v) {
    unresolved.add(key);
    return { name: `?${key}`, css: '', known: false };
  }
  const css = v[2] || '';
  return { name: v[0], css, known: true };
}

function tokenLabel(id) {
  const v = variable(id);
  return v.name;
}

// --- normalize ----------------------------------------------------------------

const r1 = (n) => Math.round(n * 100) / 100;

const radiusVar = (b) => b.topLeftRadius ?? b.cornerRadius ?? b['rectangleCornerRadii.RECTANGLE_TOP_LEFT_CORNER_RADIUS'];
const strokeVar = (b) => b.strokeWeight ?? b.strokeTopWeight ?? b['individualStrokeWeights.BORDER_TOP_WEIGHT'];

function hex({ r, g, b, a = 1 }, opacity = 1) {
  const h = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  const alpha = a * opacity;
  return `#${h(r)}${h(g)}${h(b)}${alpha < 1 ? h(alpha) : ''}`;
}

/** boundVariables → { prop: variable name } (fills/strokes handled on paints). */
function bindings(node) {
  const out = {};
  for (const [prop, value] of Object.entries(node.boundVariables ?? {})) {
    if (prop === 'fills' || prop === 'strokes' || prop === 'effects' || prop === 'componentProperties') continue;
    const first = Array.isArray(value) ? value[0] : value;
    if (first?.id) out[prop] = tokenLabel(first.id);
    else if (first && typeof first === 'object') {
      for (const [sub, alias] of Object.entries(first)) if (alias?.id) out[`${prop}.${sub}`] = tokenLabel(alias.id);
    }
  }
  return out;
}

function paint(p) {
  if (p.visible === false) return null;
  if (p.type !== 'SOLID') return { kind: p.type.toLowerCase() };
  const bound = p.boundVariables?.color?.id;
  const opacity = p.opacity ?? 1;
  return bound ? { var: tokenLabel(bound), opacity: opacity < 1 ? r1(opacity) : undefined } : { hex: hex(p.color, opacity) };
}

const paintLabel = (p) =>
  p.var ? `${p.var}${p.opacity ? `@${p.opacity}` : ''}` : p.hex ? `${p.hex} (no variable)` : p.kind;

function radius(node) {
  if (node.rectangleCornerRadii) {
    const [a, b, c, d] = node.rectangleCornerRadii;
    return a === b && b === c && c === d ? a : node.rectangleCornerRadii.join('/');
  }
  return node.cornerRadius;
}

function strokeWeight(node) {
  const s = node.individualStrokeWeights;
  if (s) return [s.top, s.right, s.bottom, s.left].join('/');
  return node.strokeWeight;
}

function effectLabel(node, styles) {
  const visible = (node.effects ?? []).filter((e) => e.visible !== false);
  if (!visible.length) return null;
  const style = node.styles?.effect && styles[node.styles.effect]?.name;
  if (style) return style;
  return visible
    .map((e) => `${e.type.toLowerCase()} ${e.offset ? `${e.offset.x},${e.offset.y} ` : ''}${e.radius ?? 0}${e.spread ? ` ${e.spread}` : ''} ${e.color ? hex(e.color) : ''} (no style)`)
    .join(' + ');
}

/** Flat description of one node: { key: value } used for the tree line and for variant diffs. */
function describe(node, ctx) {
  const d = {};
  const b = bindings(node);
  const bb = node.absoluteBoundingBox;
  if (bb) d.size = `${r1(bb.width)}×${r1(bb.height)}`;
  if (node.layoutSizingHorizontal || node.layoutSizingVertical)
    d.sizing = `${(node.layoutSizingHorizontal ?? '-').toLowerCase()}/${(node.layoutSizingVertical ?? '-').toLowerCase()}`;
  if (b.width || b.height || b['size.x']) d['size.vars'] = [b.width ?? b['size.x'], b.height ?? b['size.y']].filter(Boolean).join(' × ');
  if (node.minWidth) d.minWidth = `${node.minWidth}${b.minWidth ? `=${b.minWidth}` : ''}`;
  if (node.maxWidth) d.maxWidth = `${node.maxWidth}${b.maxWidth ? `=${b.maxWidth}` : ''}`;
  if (node.layoutMode && node.layoutMode !== 'NONE') {
    const pad = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'].map((k) => {
      const v = node[k] ?? 0;
      return b[k] ? `${v}=${b[k]}` : `${v}`;
    });
    d.layout = `${node.layoutMode === 'HORIZONTAL' ? 'row' : 'column'}${node.layoutWrap === 'WRAP' ? ' wrap' : ''} align ${(node.primaryAxisAlignItems ?? 'MIN').toLowerCase()}/${(node.counterAxisAlignItems ?? 'MIN').toLowerCase()}`;
    d.padding = pad.join(' ');
    d.gap = `${node.itemSpacing ?? 0}${b.itemSpacing ? `=${b.itemSpacing}` : ''}`;
  }
  const fills = (node.type === 'TEXT' ? [] : node.fills ?? []).map(paint).filter(Boolean);
  if (fills.length) d.fill = fills.map(paintLabel).join(' + ');
  const strokes = (node.strokes ?? []).map(paint).filter(Boolean);
  if (strokes.length) {
    const w = strokeWeight(node);
    const wb = strokeVar(b);
    d.stroke = `${w}${wb ? `=${wb}` : ''} ${(node.strokeAlign ?? '').toLowerCase()} ${strokes.map(paintLabel).join(' + ')}`;
    if (node.strokeDashes?.length) d.stroke += ` dashed ${node.strokeDashes.join('/')}`;
  }
  const rad = radius(node);
  if (rad) d.radius = `${rad}${radiusVar(b) ? `=${radiusVar(b)}` : ''}`;
  const fx = effectLabel(node, ctx.styles);
  if (fx) d.effect = fx;
  if (node.opacity !== undefined && node.opacity < 1) d.opacity = r1(node.opacity);
  if (node.visible === false) d.hidden = 'true';
  if (node.type === 'TEXT') {
    const s = node.style ?? {};
    const textStyle = node.styles?.text && ctx.styles[node.styles.text]?.name;
    d.text = JSON.stringify(node.characters);
    d.font = `${textStyle ? `${textStyle} · ` : ''}${s.fontFamily} ${s.fontWeight} ${s.fontSize}/${r1(s.lineHeightPx ?? 0)} ls ${r1(s.letterSpacing ?? 0)}${s.textCase ? ` ${s.textCase.toLowerCase()}` : ''}${s.textDecoration ? ` ${s.textDecoration.toLowerCase()}` : ''}${s.textAlignHorizontal && s.textAlignHorizontal !== 'LEFT' ? ` align ${s.textAlignHorizontal.toLowerCase()}` : ''}`;
    const tv = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing'].filter((k) => b[k]).map((k) => b[k]);
    if (tv.length) d['font.vars'] = tv.join(', ');
    const tf = (node.fills ?? []).map(paint).filter(Boolean);
    if (tf.length) d.color = tf.map(paintLabel).join(' + ');
  }
  if (node.type === 'INSTANCE') {
    const comp = ctx.components[node.componentId];
    const set = comp?.componentSetId && ctx.componentSets[comp.componentSetId];
    d.instance = set ? `${set.name} › ${comp.name}` : comp?.name ?? node.componentId;
    const props = Object.entries(node.componentProperties ?? {})
      .filter(([, p]) => p.type !== 'VARIANT')
      .map(([k, p]) => `${k.split('#')[0]}=${p.type === 'INSTANCE_SWAP' ? ctx.components[p.value]?.name ?? p.value : JSON.stringify(p.value)}`);
    if (props.length) d.props = props.join(', ');
  }
  return d;
}

const sigCache = new WeakMap();
/** Structural signature of a subtree, names aside (Figma numbers duplicated layers). */
function signature(node, ctx) {
  if (sigCache.has(node)) return sigCache.get(node);
  const sig = JSON.stringify([node.type, describe(node, ctx), (node.children ?? []).map((c) => signature(c, ctx))]);
  sigCache.set(node, sig);
  return sig;
}

const LINE_KEYS = ['size', 'sizing', 'size.vars', 'minWidth', 'maxWidth', 'layout', 'padding', 'gap', 'fill', 'stroke', 'radius', 'effect', 'opacity', 'text', 'font', 'font.vars', 'color', 'instance', 'props', 'hidden'];

const lineOf = (d) => LINE_KEYS.filter((k) => d[k] !== undefined).map((k) => `${k} ${d[k]}`).join(' · ');

/** Values Figma does not bind to a variable or a style. */
function unbound(node, d, path, ctx) {
  const out = [];
  const b = bindings(node);
  const add = (what) => out.push([path, what]);
  if (node.layoutMode && node.layoutMode !== 'NONE') {
    for (const k of ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'])
      if (node[k] && !b[k]) add(`${k} ${node[k]}`);
    const visibleKids = (node.children ?? []).filter((c) => c.visible !== false).length;
    if (node.itemSpacing && !b.itemSpacing && visibleKids > 1 && node.primaryAxisAlignItems !== 'SPACE_BETWEEN') add(`gap ${node.itemSpacing}`);
  }
  const rad = radius(node);
  if (rad && !radiusVar(b)) add(`radius ${rad}`);
  if ((node.strokes ?? []).some((s) => s.visible !== false) && !strokeVar(b)) add(`stroke weight ${strokeWeight(node)}`);
  for (const p of [...(node.type === 'TEXT' ? [] : node.fills ?? []), ...(node.strokes ?? [])]) {
    const v = paint(p);
    if (v?.hex) add(`color ${v.hex}`);
  }
  if ((node.effects ?? []).some((e) => e.visible !== false) && !node.styles?.effect) add(`effect ${d.effect}`);
  if (node.type === 'TEXT') {
    const hasStyle = node.styles?.text;
    for (const [k, label] of [['fontSize', 'font size'], ['lineHeight', 'line height'], ['letterSpacing', 'letter spacing'], ['fontFamily', 'font family']])
      if (!hasStyle && !b[k]) add(`${label} (no style, no variable)`);
    for (const p of node.fills ?? []) {
      const v = paint(p);
      if (v?.hex) add(`text color ${v.hex}`);
    }
  }
  const fixedW = node.layoutSizingHorizontal === 'FIXED' && !b.width && !b['size.x'];
  const fixedH = node.layoutSizingVertical === 'FIXED' && !b.height && !b['size.y'];
  const sized = ['FRAME', 'COMPONENT', 'INSTANCE', 'RECTANGLE'].includes(node.type);
  if (sized && (fixedW || fixedH) && node.absoluteBoundingBox) {
    const { width, height } = node.absoluteBoundingBox;
    add(`fixed ${[fixedW && `width ${r1(width)}`, fixedH && `height ${r1(height)}`].filter(Boolean).join(', ')}`);
  }
  return out;
}

/** Walks a variant: returns tree lines, flat map path → description, unbound values, instances. */
function walk(root, ctx) {
  const lines = [];
  const flat = {};
  const loose = [];
  const instances = [];

  const visit = (node, path, depth, inInstance, count = 1) => {
    const d = describe(node, ctx);
    if (count > 1) d.count = String(count);
    flat[path] = d;
    lines.push(`${'  '.repeat(depth)}- **${node.name}**${count > 1 ? ` ×${count}` : ''} \`${node.type.toLowerCase()}\` ${lineOf(d)}`);
    if (!inInstance) loose.push(...unbound(node, d, path, ctx));
    if (node.type === 'INSTANCE') {
      instances.push({ id: node.componentId, path });
      // inside an instance only the overridden nodes matter
      const overridden = new Map((node.overrides ?? []).map((o) => [o.id, o.overriddenFields]));
      const comp = ctx.components[node.componentId];
      const isIcon = comp?.name?.startsWith('Icons /');
      const inner = (n, p) => {
        for (const c of n.children ?? []) {
          const cp = `${p}/${c.name}`;
          const fields = overridden.get(c.id);
          const vector = c.type === 'VECTOR' || c.type === 'BOOLEAN_OPERATION';
          if (isIcon && vector) {
            // icon color, overridden or not, under one key so variants compare
            const f = (c.fills ?? []).map(paint).filter(Boolean)[0];
            if (f && !flat[`${path}/icon-color`]) {
              flat[`${path}/icon-color`] = { fill: paintLabel(f) };
              lines.push(`${'  '.repeat(depth + 1)}- ↳ icon color ${paintLabel(f)}`);
            }
          } else if (fields) {
            const cd = describe(c, ctx);
            const keep = Object.fromEntries(Object.entries(cd).filter(([k]) => fieldKeys(fields).has(k)));
            if (Object.keys(keep).length) {
              flat[cp] = keep;
              lines.push(`${'  '.repeat(depth + 1)}- ↳ ${c.name} (override) ${lineOf(keep)}`);
            }
          }
          if (c.type === 'INSTANCE' && !overridden.size) continue;
          inner(c, cp);
        }
      };
      inner(node, path);
      return;
    }
    // consecutive identical siblings (patterns, bars) are visited once and marked ×N
    const kids = node.children ?? [];
    const seen = {};
    let run = 0;
    for (let i = 0; i < kids.length; ) {
      const c = kids[i];
      const sig = signature(c, ctx);
      let n = 1;
      while (i + n < kids.length && signature(kids[i + n], ctx) === sig) n++;
      seen[c.name] = (seen[c.name] ?? 0) + 1;
      // runs are keyed by position so variants with different counts still compare
      const key = n > 1 ? `[run ${++run}]` : seen[c.name] > 1 ? `${c.name}#${seen[c.name]}` : c.name;
      visit(c, `${path}/${key}`, depth + 1, inInstance, n);
      i += n;
    }
  };
  visit(root, root.name, 0, false);
  return { lines, flat, loose, instances };
}

function fieldKeys(fields) {
  const keys = new Set();
  for (const f of fields) {
    if (f === 'fills') ['fill', 'color'].forEach((k) => keys.add(k));
    else if (f === 'strokes' || f.startsWith('stroke')) keys.add('stroke');
    else if (f === 'characters') keys.add('text');
    else if (f === 'visible') keys.add('hidden');
    else if (f === 'effects') keys.add('effect');
    else if (f === 'componentProperties' || f === 'mainComponent') ['instance', 'props'].forEach((k) => keys.add(k));
    else if (f.startsWith('padding')) keys.add('padding');
    else if (f === 'itemSpacing') keys.add('gap');
    else if (f.includes('Radius') || f === 'cornerRadius') keys.add('radius');
    else if (['width', 'height', 'size'].includes(f)) keys.add('size');
    else if (f.startsWith('font') || f === 'textStyleId' || f.startsWith('letter') || f.startsWith('line')) keys.add('font');
    else if (f === 'opacity') keys.add('opacity');
  }
  return keys;
}

// --- component set spec ---------------------------------------------------------

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'component';

const iconFileName = (figmaName) =>
  iconByFigmaName.get(figmaName) ??
  figmaName.replace(/^Icons \/\s*/, '').toLowerCase().replace(/--/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function parseVariant(name) {
  return Object.fromEntries(name.split(',').map((p) => p.split('=').map((s) => s.trim())));
}

function spec(node, ctx) {
  const isSet = node.type === 'COMPONENT_SET';
  const variants = isSet ? node.children.filter((c) => c.type === 'COMPONENT') : [node];
  const defs = node.componentPropertyDefinitions ?? {};
  const defaults = Object.fromEntries(Object.entries(defs).filter(([, d]) => d.type === 'VARIANT').map(([k, d]) => [k, String(d.defaultValue)]));
  const base =
    variants.find((v) => isSet && Object.entries(defaults).every(([k, val]) => parseVariant(v.name)[k] === val)) ?? variants[0];

  const walked = new Map(variants.map((v) => [v, walk(v, ctx)]));
  const baseWalk = walked.get(base);
  const rel = (path) => path.split('/').slice(1).join('/') || '(root)';

  const md = [];
  const url = `${FILE_URL}?node-id=${node.id.replace(':', '-')}`;
  md.push(`# ${node.name} — ${node.id}`, '', `- Source: ${url}`, `- Extracted: ${new Date().toISOString().slice(0, 10)}`);
  const cc = connected.get(node.id);
  md.push(`- Code Connect: ${cc ? `yes (${cc})` : 'no'}`);
  if (node.description) md.push(`- Description: ${node.description.replace(/\s+/g, ' ')}`);

  md.push('', '## Props', '');
  if (!Object.keys(defs).length) md.push('none');
  for (const [k, d] of Object.entries(defs)) {
    const name = k.split('#')[0];
    if (d.type === 'VARIANT') md.push(`- **${name}** variant: ${d.variantOptions.join(' | ')} (default ${d.defaultValue})`);
    else if (d.type === 'INSTANCE_SWAP') md.push(`- **${name}** instance swap (default ${ctx.components[d.defaultValue]?.name ?? d.defaultValue})`);
    else md.push(`- **${name}** ${d.type.toLowerCase()} (default ${JSON.stringify(d.defaultValue)})`);
  }

  md.push('', `## Variants (${variants.length})`, '');
  for (const v of variants) {
    const bb = v.absoluteBoundingBox;
    md.push(`- ${v.name} — ${r1(bb.width)}×${r1(bb.height)}${v === base ? ' (base)' : ''}`);
  }

  md.push('', `## Base tree — ${base.name}`, '', ...baseWalk.lines);

  if (variants.length > 1) {
    md.push('', '## Differences vs base', '');
    const baseFlat = Object.fromEntries(Object.entries(baseWalk.flat).map(([p, d]) => [rel(p), d]));
    for (const v of variants) {
      if (v === base) continue;
      const flat = Object.fromEntries(Object.entries(walked.get(v).flat).map(([p, d]) => [rel(p), d]));
      const diffs = [];
      for (const p of new Set([...Object.keys(baseFlat), ...Object.keys(flat)])) {
        const a = baseFlat[p];
        const b = flat[p];
        if (!a) { diffs.push(`- \`${p}\` only here: ${lineOf(b)}`); continue; }
        if (!b) { diffs.push(`- \`${p}\` absent`); continue; }
        for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
          if (a[k] !== b[k]) diffs.push(`- \`${p}\` ${k}: ${a[k] ?? '–'} → ${b[k] ?? '–'}`);
        }
      }
      md.push(`### ${v.name}`, '', ...(diffs.length ? diffs : ['- identical']), '');
    }
  }

  // tokens
  const used = new Map();
  const collect = (n) => {
    for (const value of Object.values(n.boundVariables ?? {})) {
      for (const a of [value].flat()) {
        if (a?.id) used.set(a.id, true);
        else if (a && typeof a === 'object') for (const s of Object.values(a)) if (s?.id) used.set(s.id, true);
      }
    }
    for (const p of [...(n.fills ?? []), ...(n.strokes ?? [])]) if (p.boundVariables?.color?.id) used.set(p.boundVariables.color.id, true);
    if (n.type !== 'INSTANCE') for (const c of n.children ?? []) collect(c);
  };
  variants.forEach(collect);
  const tokenRows = [...used.keys()]
    .map((id) => ({ ...variable(id), id }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const tokenIssues = [];
  md.push('', '## Tokens', '', '| Figma variable | CSS | status |', '|---|---|---|');
  for (const t of tokenRows) {
    const css = t.css.match(/var\((--[\w-]+)\)/)?.[1];
    const library = t.id.includes('/');
    const status = !t.known
      ? 'unresolved id'
      : library
        ? 'external library variable'
        : !css
          ? 'no WEB code syntax'
          : !cssTokens.has(css)
            ? 'missing in globals.css'
            : 'ok';
    if (status !== 'ok') tokenIssues.push(`${t.name}: ${status}`);
    md.push(`| ${t.name} | ${t.css ? `\`${t.css}\`` : '–'} | ${status} |`);
  }

  // text and effect styles
  const styleNames = new Set();
  const collectStyles = (n) => {
    for (const [kind, id] of Object.entries(n.styles ?? {})) if (ctx.styles[id]) styleNames.add(`${kind}: ${ctx.styles[id].name}`);
    if (n.type !== 'INSTANCE') for (const c of n.children ?? []) collectStyles(c);
  };
  variants.forEach(collectStyles);
  if (styleNames.size) md.push('', '## Styles', '', ...[...styleNames].sort().map((s) => `- ${s}`));

  // unbound
  const loose = new Map();
  for (const w of walked.values()) {
    for (const [path, what] of w.loose) {
      const key = `\`${rel(path)}\` ${what}`;
      loose.set(key, (loose.get(key) ?? 0) + 1);
    }
  }
  md.push(
    '',
    '## Values without variable',
    '',
    ...(loose.size ? [...loose].map(([l, n]) => `- ${l}${variants.length > 1 ? ` (${n}/${variants.length} variants)` : ''}`) : ['none']),
  );

  // instances and icons
  const instanceRows = new Map();
  const icons = new Map();
  for (const w of walked.values()) {
    for (const { id } of w.instances) {
      const comp = ctx.components[id];
      if (!comp) continue;
      if (comp.name.startsWith('Icons /')) {
        const file = iconFileName(comp.name);
        icons.set(id, { figmaName: comp.name, file, present: existsSync(join(ICONS_DIR, `${file}.svg`)) });
        continue;
      }
      const setId = comp.componentSetId;
      const owner = setId ? ctx.componentSets[setId] : comp;
      const ownerId = setId ?? id;
      const key = ownerId;
      if (!instanceRows.has(key)) instanceRows.set(key, `${owner?.name ?? comp.name} (${ownerId}) — ${connected.has(ownerId) ? `connected: ${connected.get(ownerId)}` : 'not connected'}`);
    }
  }
  md.push('', '## Nested components', '', ...(instanceRows.size ? [...instanceRows.values()].map((r) => `- ${r}`) : ['none']));
  md.push('', '## Icons', '', ...(icons.size ? [...icons].map(([id, i]) => `- ${i.figmaName} (${id}) → \`${i.file}.svg\` ${i.present ? 'present' : '**missing**'}`) : ['none']));

  const json = {
    id: node.id,
    name: node.name,
    props: Object.fromEntries(Object.entries(defs).map(([k, d]) => [k.split('#')[0], { type: d.type, default: d.defaultValue, options: d.variantOptions }])),
    variants: Object.fromEntries(variants.map((v) => [v.name, Object.fromEntries(Object.entries(walked.get(v).flat).map(([p, d]) => [rel(p), d]))])),
  };

  return {
    slug: slugify(node.name),
    md: md.join('\n') + '\n',
    json,
    summary: { variants: variants.length, loose: loose.size, tokenIssues, icons: [...icons].filter(([, i]) => !i.present), connected: !!cc },
  };
}

// --- targets --------------------------------------------------------------------

function collectTargets(node) {
  if (node.type === 'COMPONENT_SET') return [node];
  if (node.type === 'COMPONENT') return [node];
  const out = [];
  for (const c of node.children ?? []) out.push(...collectTargets(c));
  return out;
}

function exportIcons(missing) {
  if (!missing.length) return;
  const ids = missing.map(([id]) => id).join(',');
  const { images } = api(`images/${FILE_KEY}?ids=${ids}&format=svg`);
  const entries = iconEntries;
  for (const [id, icon] of missing) {
    const url = images[id];
    if (!url) continue;
    const dest = join(ICONS_DIR, `${icon.file}.svg`);
    download(url, dest);
    const svg = readFileSync(dest, 'utf8').replace(/ width="\d+" height="\d+"/, '').replace(/fill="black"/g, 'fill="#000000"');
    writeFileSync(dest, svg);
    if (!entries.some((e) => e.name === icon.file)) {
      entries.push({
        url: `${FILE_URL}?node-id=${id.replace(':', '-')}`,
        source: 'app/components/Icon/Icon.tsx',
        component: 'Icon',
        name: icon.file,
        figmaName: icon.figmaName,
      });
    }
    console.log(`  icon exported: ${relative(ROOT, dest)}`);
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));
  writeFileSync(ICON_BATCH, JSON.stringify(iconBatch, null, 2) + '\n');
}

const tally = (list) =>
  Object.entries(list.reduce((acc, k) => ({ ...acc, [k]: (acc[k] ?? 0) + 1 }), {}))
    .map(([k, n]) => `${n} ${k}`)
    .join(', ');

// --- main -------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2);
  if (args[0] === '--merge-vars') {
    const add = JSON.parse(readFileSync(args[1], 'utf8'));
    const merged = { ...variables, ...add };
    writeFileSync(VARS_PATH, JSON.stringify(Object.fromEntries(Object.entries(merged).sort()), null, 0).replace(/\],"/g, '],\n"') + '\n');
    console.log(`variables: ${Object.keys(variables).length} → ${Object.keys(merged).length}`);
    return;
  }
  const png = args.includes('--png');
  const withIcons = args.includes('--icons');
  let ids = args.filter((a) => !a.startsWith('--'));
  const pageIdx = args.indexOf('--page');
  if (pageIdx >= 0) {
    const name = args[pageIdx + 1];
    ids = ids.filter((i) => i !== name);
    const file = api(`files/${FILE_KEY}?depth=1`);
    const page = file.document.children.find((p) => p.name.replace(/[↳\s]+/g, ' ').trim().toLowerCase() === name.toLowerCase());
    if (!page) throw new Error(`page not found: ${name}`);
    ids.push(page.id);
  }
  if (!ids.length) {
    console.log('usage: node scripts/figma/extract.mjs <node-id>... [--page <name>] [--png] [--icons]');
    process.exit(1);
  }

  const res = api(`files/${FILE_KEY}/nodes?ids=${ids.map((i) => i.replace('-', ':')).join(',')}`);
  mkdirSync(SPECS_DIR, { recursive: true });
  const missingIcons = new Map();
  const pngIds = [];

  for (const id of Object.keys(res.nodes)) {
    const entry = res.nodes[id];
    if (!entry) { console.log(`${id}: not found`); continue; }
    const ctx = { components: entry.components ?? {}, componentSets: entry.componentSets ?? {}, styles: entry.styles ?? {} };
    for (const target of collectTargets(entry.document)) {
      const s = spec(target, ctx);
      writeFileSync(join(SPECS_DIR, `${s.slug}.md`), s.md);
      writeFileSync(join(SPECS_DIR, `${s.slug}.json`), JSON.stringify(s.json, null, 1) + '\n');
      pngIds.push([target.id, s.slug]);
      for (const [iid, icon] of s.summary.icons) missingIcons.set(iid, icon);
      const flags = [
        s.summary.connected ? 'connected' : 'not connected',
        `${s.summary.loose} unbound`,
        s.summary.tokenIssues.length ? `token issues: ${tally(s.summary.tokenIssues.map((t) => t.split(': ').pop()))}` : null,
        s.summary.icons.length ? `missing icons: ${s.summary.icons.map(([, i]) => i.file).join(', ')}` : null,
      ].filter(Boolean);
      console.log(`${target.name} (${target.id}) ${s.summary.variants} variants → .ai/specs/${s.slug}.md | ${flags.join(' | ')}`);
    }
  }

  if (png && pngIds.length) {
    const { images } = api(`images/${FILE_KEY}?ids=${pngIds.map(([i]) => i).join(',')}&format=png&scale=2`);
    for (const [id, slug] of pngIds) if (images[id]) download(images[id], join(SPECS_DIR, `${slug}.png`));
    console.log(`png: ${pngIds.length} renders in .ai/specs/`);
  }

  if (withIcons) exportIcons([...missingIcons]);
  else if (missingIcons.size) console.log(`missing icons: ${[...missingIcons.values()].map((i) => i.file).join(', ')} (rerun with --icons to export them)`);

  if (unresolved.size) {
    console.log(`\n${unresolved.size} unresolved variable ids. Run scripts/figma/resolve-variables.js in use_figma with:`);
    console.log(`IDS = ${JSON.stringify([...unresolved])}`);
    console.log('then: node scripts/figma/extract.mjs --merge-vars <result.json> and extract again.');
  }
}

main();
