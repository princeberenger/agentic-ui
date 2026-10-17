# Phase 1 — Design Extraction

## 1. Spec extraction (`npm run figma:extract`)

`scripts/figma/extract.mjs` reads the Figma REST API (read-only) and writes one spec per component set:

```
npm run figma:extract -- <node-id>...          # component sets, components, frames or pages
npm run figma:extract -- --page "Progress"     # every component of a page
  --base "State=default"   compare the variants to this one
  --png                    also download a 2x render (.ai/specs/<slug>.png, not committed)
  --icons                  export missing icon svgs to public/assets/icons + icon batch
```

Output:
- `.ai/specs/<slug>.md`: props, variants, base tree (sizes, layout, padding, gap, fills, radius, text, bound variables), per-variant differences, tokens, unbound values, instances with their Code Connect status, icons present or missing in the repo.
- `.ai/specs/<slug>.json`: normalized snapshot, committed, compared by `figma:diff`.

Auth: `FIGMA_ACCESS_TOKEN` when set, otherwise the cloud proxy injects it. Never ask for a token in chat.

## 2. Variables

The REST variables endpoint returns 403 (it needs an Enterprise plan). Variable names come from `.ai/figma/variables.json`.
- Refresh: run `scripts/figma/dump-variables.js` through the Figma MCP `use_figma` tool, save the result, then `npm run figma:extract -- --merge-vars <file>`.
- Unknown variable ids are listed at the end of an extraction, with the `scripts/figma/resolve-variables.js` snippet to run in `use_figma`.

## 3. Design context (Figma MCP)

`get_design_context` / `get_screenshot` on the node complement the spec: visual reference, icon insets (`.ai/svg-pipeline.md`), text content. For interactive elements, call it on the base component node (listed in "Component descriptions") to read the full variant and state matrix.

## Pre-generation validation (QC-0)

Before writing any code, confirm every item passes:

- [ ] Spec exists in `.ai/specs/` and is up to date (`npm run figma:diff -- <node-id>` reports no change)
- [ ] Every color, spacing, radius, stroke, shadow and text value maps to a token in `app/globals.css`
- [ ] Every unbound value from the spec is either a known token value or logged in `.ai/figma-debt.md`
- [ ] All icons are present in `public/assets/icons` (spec section "Icons")
- [ ] Variant matrix is complete (all property combinations listed)
- [ ] State matrix is complete for every interactive element (default, hover, focus, active, disabled, loading)
- [ ] Auto-layout maps to flexbox/grid

**Fail → re-extract or ask. Do not proceed to generation.**

## Known failures

| Symptom | Cause | Fix |
|---|---|---|
| 403 on `/variables` | plan without the variables API | `use_figma` + `dump-variables.js`, then `--merge-vars` |
| Variable id shown instead of a name | `.ai/figma/variables.json` out of date | run `resolve-variables.js` in `use_figma`, then `--merge-vars` |
| Icon listed as missing | svg not exported yet | `--icons`, then check `.ai/svg-pipeline.md` |
