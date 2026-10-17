# Agentic UI — Design System Foundation

## Sources of truth
- Figma: AGENTIC-DESIGN-SYSTEM, file key `Dqy0QA70ThT4iZXNgJljkG`. Figma wins; inconsistencies are reproduced and logged in `.ai/figma-debt.md`, never fixed silently.
- Tokens: `app/globals.css` (CSS custom properties, light on `:root`, dark on `[data-theme='dark']`).
- Figma variables: `.ai/figma/variables.json` (merged dump, see `.ai/extraction.md`).
- Component specs: `.ai/specs/<slug>.md` (readable) + `.ai/specs/<slug>.json` (snapshot used by `figma:diff`).
- Motion: `.ai/motion-rules.md`, tokens in `app/globals.css` and `app/components/motion.ts`.

## Token architecture
Tokens are flat CSS custom properties in `app/globals.css`, named after the Figma variable path. No prefix.

| Family | Examples | Figma collection |
|---|---|---|
| `--color-*` | `--color-bg-primary`, `--color-content-primary`, `--color-border-subtle`, `--color-button-primary` | COLORS + MODE (light/dark) |
| `--space-*` | `--space-4`, `--space-8`, `--space-16` | SPACING / PADDING |
| `--icon-*` | `--icon-16`, `--icon-24` | icon sizes |
| `--input-*` | `--input-small`, `--input-regular` | SPACING / INPUTS |
| `--radius-*` | `--radius-6`, `--radius-10` | radius |
| `--stroke-*` | `--stroke-sm` | stroke widths |
| `--shadow-*` | `--shadow-components-focus` | effect styles |
| `--font-*`, `--text-*`, `--leading-*`, `--weight-*`, `--tracking-*` | `--font-label`, `--text-tiny`, `--leading-tiny` | typography |
| `--duration-*`, `--ease-*` | `--duration-hover`, `--ease-out-expo` | motion |

Rules:
- Components use these tokens directly (`var(--space-8)`). No component-level alias layer.
- Dark mode: every `--color-*` that changes in the MODE collection is redeclared under `[data-theme='dark']`. A subtree can pin a mode with `data-theme` (like Figma's explicit variable mode).
- A Figma value with no variable: reproduce it, add an entry to `.ai/figma-debt.md`.

## Component naming
- Folder and component: PascalCase, matching the Figma component name (`Button`, `TabGroup`, `DialerCard`).
- CSS Modules classes: camelCase, named by structure, not appearance (`.root`, `.label`, `.iconOnly`). Variant classes reuse the prop value (`.secondary-filled`).
- Props: camelCase, derived from Figma properties (`variant`, `size`, `iconPosition`).

## File structure
Every component lives in `app/components/<ComponentName>/`:
- `<ComponentName>.tsx` (component, types exported from the same file)
- `<ComponentName>.module.css`
- `<ComponentName>.figma.ts` (Code Connect template)
- `index.ts` (named exports of the component and its types)

Demo page: `app/<component-slug>/page.tsx` + `page.module.css` (variant, size and state matrix).
Icons: `public/assets/icons/<name>.svg`, rendered by `app/components/Icon` (see `.ai/svg-pipeline.md`).

## Styling approach
- CSS Modules for scoped styles.
- CSS custom properties for every visual value.
- NO Tailwind, NO styled-components, NO CSS-in-JS runtime, NO external UI library.

## State handling
- Visual states (hover, focus, active, disabled) via CSS pseudo-classes.
- Behavioral states (loading, error, selected) via props + CSS class.
- Hover rules inside `@media (hover: hover) and (pointer: fine)`.
- Durations and easings from `.ai/motion-rules.md`; `prefers-reduced-motion` respected.

## Import rules
- Import existing design system components, never recreate them.
- Named exports only.
