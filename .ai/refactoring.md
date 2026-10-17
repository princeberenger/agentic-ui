# Phase 4 — Post-Implementation Refactoring

After the component is generated AND the user has visually approved it (QC-1 pass), run these 6 refactoring passes **in order**. Each pass is atomic — commit after each. Never combine passes.

---

## Pass 1: Structural Integrity

**Commit**: `refactor: structural cleanup`

- [ ] Extract sub-components if any JSX block exceeds 30 lines
  → Named sub-components in same file if private, separate file if reusable
- [ ] Single Responsibility: each component does ONE thing
  → If it fetches data AND renders, split into container + presentational
- [ ] Props hygiene:
  → Remove unused props
  → No prop drilling deeper than 2 levels (use composition)
  → Boolean props default to `false`
  → More than 8 props? Consider compound component pattern
- [ ] Render logic:
  → No ternaries nested deeper than 1 level
  → Extract complex conditionals into named variables:
    ```
    BAD:  {variant === 'primary' && size !== 'sm' && !disabled && showIcon && <Icon />}
    GOOD: const shouldShowIcon = showIcon && !disabled;
          {shouldShowIcon && <Icon />}
    ```
- [ ] Type safety:
  → No `any` types
  → No type assertions (`as Type`) unless justified with comment
  → Discriminated unions for variant combos that change structure
- [ ] File organization:
  → Exported types at the top of `<ComponentName>.tsx`
  → Constants at top of file
  → No magic strings — variant values as `const` union types

---

## Pass 2: Token Fidelity Audit

**Commit**: `refactor: token compliance`

- [ ] Scan ALL `.css` and `.tsx` files for hardcoded values:
  → Colors: grep for `#`, `rgb(`, `rgba(`, `hsl(` → replace with `var(--)`
  → Spacing: grep for `px` values not in `var()` → replace with token
  → Font sizes: verify all reference tokens
  → Radii: same treatment
- [ ] Token naming consistency:
  → Every value uses a token of `app/globals.css` (`--color-*`, `--space-*`, `--radius-*`, `--icon-*`…), named after the Figma variable
  → A value with no Figma variable is logged in `.ai/figma-debt.md`, not turned into a new token
- [ ] Dark mode verification:
  → Every token resolves correctly under `[data-theme="dark"]`
  → No color that only works in light mode
  → Toggle theme and compare layouts
- [ ] Token coverage report:
  → List every CSS custom property used, its source token, resolution status per theme
  → Flag gaps

---

## Pass 3: Performance & Memoization

**Commit**: `refactor: performance`

- [ ] Memoization audit:
  → `React.memo()` on components receiving non-primitive props from parents
  → `useMemo()` for expensive derived values
  → `useCallback()` for handlers passed to children
  → DO NOT over-memoize: skip if leaf-level with no children
- [ ] CSS audit:
  → No duplicate property declarations
  → Single-class specificity only (no `.a.b.c` chains)
  → Use `:where()` for inherited custom properties to avoid specificity wars
  → Remove unused CSS classes (cross-reference with JSX)
- [ ] Bundle impact:
  → Icons through `<Icon name>` (svg files), not inlined
  → No imports that pull entire libraries
  → Component code-splittable? (dynamic import if route-specific)
- [ ] Render analysis:
  → No unnecessary re-renders
  → Event handlers not re-created every render
  → Stable `key` prop on all mapped lists (not array index)

---

## Pass 4: Accessibility Hardening

**Commit**: `refactor: a11y hardening`

- [ ] Semantic HTML audit:
  → `<button>` not `<div onClick>`
  → `<nav>`, `<main>`, `<section>`, `<article>` where appropriate
  → Heading hierarchy (no skipped levels)
- [ ] Keyboard navigation:
  → Tab order logical (no `tabIndex > 0`, ever)
  → Enter/Space activate buttons
  → Escape closes overlays/modals
  → Arrow keys for composite widgets (tabs, menus, listboxes)
  → Focus trap in modals
- [ ] Screen reader audit:
  → `aria-label` on icon-only controls
  → `aria-describedby` for supplementary help text
  → `aria-live` regions for dynamic content
  → `visually-hidden` text for layout-conveyed context
- [ ] Visual accessibility:
  → Contrast ≥ 4.5:1 normal text, ≥ 3:1 large text
  → Focus ring visible in ALL themes
  → Disabled: opacity ≥ 0.4, `cursor: not-allowed`
  → No information by color alone (add icon/text pairing)
- [ ] Tab through the demo page, in light and dark mode → every control reachable, focus ring visible

---

## Pass 5: Demo page & Code Connect

**Commit**: `docs: demo page and code connect`

- [ ] Demo page `app/<component-slug>/page.tsx` covers:
  → Every variant (one row per value)
  → Every size
  → All interactive states (default, hover, focus, active, disabled, loading)
  → Composition examples (icon + label, label only, icon only)
  → Edge cases (long text, empty, missing props)
- [ ] JSDoc on every prop, naming the Figma property
- [ ] `<ComponentName>.figma.ts` maps every Figma property → `npm run figma:typecheck` and `npm run figma:parse` pass
- [ ] Inconsistencies reproduced from Figma are listed in `.ai/figma-debt.md`

---

## Pass 6: Dead Code & Final Cleanup

**Commit**: `chore: cleanup`

- [ ] Remove all:
  → `console.log` / `console.warn` (unless intentional error boundary)
  → Commented-out code (use git history)
  → Resolved TODO comments
  → Unused imports, variables, functions
  → Empty CSS rules
- [ ] Naming review:
  → Component name = file name = Figma component name
  → Props: `onClose`, `onClick` (not `handleClose` as prop name)
  → Internal handlers: `handleClose`, `handleClick`
  → CSS classes map to structure, not appearance:
    `GOOD: .root, .label, .icon, .content`
    `BAD:  .blueButton, .smallText, .leftAligned`
- [ ] Import order (convention):
  1. React
  2. Third-party
  3. Internal components
  4. Types
  5. Styles
  6. Assets
- [ ] Export verification:
  → `index.ts` exports component + types
  → Named exports (not default), except Code Connect templates
