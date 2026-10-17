# Phase 2 — Component Generation (1:1 Fidelity)

## File structure (mandatory)

```
app/components/<ComponentName>/
  <ComponentName>.tsx          ← component + exported prop and variant types
  <ComponentName>.module.css   ← scoped styles (CSS Modules)
  <ComponentName>.figma.ts     ← Code Connect template
  index.ts                     ← named exports (component + types)
app/<component-slug>/
  page.tsx                     ← demo page: variant / size / state matrix
  page.module.css
```

Icons are not stored per component: they live in `public/assets/icons/` and render through `app/components/Icon` (`.ai/svg-pipeline.md`).

Header of every generated file:
```
// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=<id>
// Extracted: <YYYY-MM-DD>
// Tokens: <tokens used, without the leading -->
```

## Component generation rules

### Structure
- Functional component with `forwardRef` (pattern used across `app/components`).
- `'use client'` on any component with event handlers or internal state.
- TypeScript strict (no `any`, no type assertions unless justified with a comment).
- JSDoc on every prop, naming the Figma property it comes from.
- Named exports from `index.ts` (no default exports, except Code Connect templates).

### Props derivation from Figma
- Map every Figma variant property to a typed prop:
  - `Style=primary,secondary` → `variant: 'primary' | 'secondary'`
  - `Size=sm,md,lg` → `size: 'sm' | 'md' | 'lg'`
  - `State=Default,Hover,Disabled` → CSS pseudo-classes, NOT props (except states with no pseudo-class: loading, selected)
  - Boolean `Show icon=true/false` → `showIcon?: boolean`
- Include `className`, `children` when applicable, and native HTML props of the root element.
- Default values match Figma's default variant.

### Styling rules
- CSS Modules; every visual value is a `var(--…)` from `app/globals.css`.
- Variant classes: `styles[variant]`, `styles[size]`.
- State styles via `:hover` (inside `@media (hover: hover) and (pointer: fine)`), `:focus-visible`, `:active`, `:disabled`.
- **NEVER** inline styles for design properties (exception: runtime values such as an icon mask url or a progress width).

### Pixel fidelity rules
- **Dimensions**: if Figma says 40px height, the component is 40px.
- **Spacing**: padding and gap exactly as in the spec, through the matching `--space-*` token.
- **Border radius**: per corner if Figma specifies it.
- **Line height / letter spacing**: from the typography tokens, never approximated.
- A Figma inconsistency between variants is reproduced as is and logged in `.ai/figma-debt.md`.
- Exception: when reproducing Figma would break the UX (e.g. a layout shift on hover), keep the UX and say so.

### Composition
- Components that contain other design system components **import them** (`Icon`, `Loader`, `Badge`…).
- Slot props for customizable regions (icon slot, action slot).

### Accessibility
- Semantic HTML element (`<button>`, `<input>`, `<nav>`, not `<div>`).
- `role` only when semantic HTML is not possible.
- `aria-label` on icon-only variants.
- Focus-visible ring from `--shadow-components-focus` (never `outline: none` without replacement).
- Keyboard: Enter + Space for buttons, Escape for dismissals, arrows for composite widgets, focus trap in modals (`src/lib/useFocusTrap.ts`, used by `Modal`).

## Code Connect

- One `<ComponentName>.figma.ts` per Figma component set, header `url=`, `source=`, `component=`.
- Check: `npm run figma:typecheck`, then `npm run figma:parse`.
- `npm run figma:publish` only with the user's explicit approval for that publish.

## Demo page (SHOWCASE / FULL)

`app/<component-slug>/page.tsx`, same header as the component, with:
1. every variant at every size
2. the state matrix (default, hover, focus, active, disabled, loading where they exist)
3. interactive examples with real state
4. dark mode through the `ThemeToggle` already in `app/layout.tsx`
