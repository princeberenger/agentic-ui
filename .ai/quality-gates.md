# Phase 5 — Quality Control Levels

Every level is blocking. A component cannot advance to the next level until the current level passes.

## Final gate (commands)

```
npx tsc --noEmit
npm run lint
npm run figma:typecheck
bash scripts/audit-interactive-states.sh
npm run figma:diff -- <node-id>
```

| Command | Checks |
|---|---|
| `npx tsc --noEmit` | TypeScript strict, whole repo |
| `npm run lint` | ESLint (`eslint-config-next` core-web-vitals + typescript) |
| `npm run figma:typecheck` | Code Connect templates (`tsconfig.figma.json`) |
| `bash scripts/audit-interactive-states.sh` | every CSS module with `cursor: pointer` has `:hover` and `:focus-visible`; every component with event handlers has `'use client'` |
| `npm run figma:diff -- <node-id>` | the component still matches its Figma snapshot (exit 1 on changes) |

Zero failures = ship. After an alignment with Figma, rebaseline with `npm run figma:diff:update` and commit the specs.

---

## QC Level 0: Generation Gate

**Trigger**: after extraction, before generation. See the QC-0 checklist in `.ai/extraction.md`.

Icon checks:
- [ ] Every icon svg has a `viewBox` matching the Figma frame size (not path bounds)
- [ ] All monochrome icon fills normalized to `#000000`
- [ ] Icon paths wrapped in `<g transform="translate(x, y)">` with the MCP inset offsets

**Fail** → re-extract from Figma. Do not proceed.

---

## QC Level 1: Visual Fidelity

**Trigger**: component renders on its demo page (`app/<component-slug>/page.tsx`).
**Owner**: designer (user), visual inspection.

- [ ] Side-by-side Figma vs. rendered output, pixel match
- [ ] Typography: font, weight, size, line-height, color
- [ ] Spacing: padding, gap match Figma auto-layout
- [ ] Colors: every fill, stroke, border color matches its token, in light and dark
- [ ] Border radius, shadows
- [ ] Icons: correct svg, size, color, position, 1:1 with Figma
- [ ] Responsive: no break at different container widths
- [ ] States: hover, focus, active, disabled, loading visually correct

**Fail** → the user gives redline notes. Apply fixes and re-present.
**Pass** → refactoring passes (`.ai/refactoring.md`).

---

## QC Level 2: Code Quality

**Trigger**: after refactoring passes 1–3.

- [ ] `npx tsc --noEmit` and `npm run lint` pass
- [ ] No `any`
- [ ] No hardcoded visual values in `.tsx` or `.css` (grep `#`, `rgb(`, raw `px` outside `var()`)
- [ ] Named exports only (Code Connect templates excepted)
- [ ] `bash scripts/audit-interactive-states.sh` passes

---

## QC Level 3: Accessibility & Behavior

**Trigger**: after refactoring pass 4.

- [ ] All interactive elements reachable with Tab, logical order
- [ ] Focus ring visible in light and dark
- [ ] Keyboard: Enter/Space, Escape, arrows where relevant
- [ ] Icon-only controls have an accessible name
- [ ] Zoom 200%: no overflow, no truncation

**Fail** → a11y violations are P0. Fix before merge.

---

## QC Level 4: Figma Sync

**Trigger**: after refactoring pass 5.

- [ ] `npm run figma:typecheck` and `npm run figma:parse` pass
- [ ] `npm run figma:diff -- <node-id>` reports no change
- [ ] Every reproduced Figma inconsistency is in `.ai/figma-debt.md`
- [ ] Demo page covers every variant and state

**Pass** → component is shippable.

---

## QC Level 5: Integration

**Trigger**: after merge to main.

- [ ] `npm run build` passes
- [ ] Component used in at least one real screen or demo page
- [ ] No console errors when the component renders
- [ ] Design review: matches Figma in the application context
