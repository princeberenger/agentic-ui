# AGENTIC UI LOGO — 146:1787

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=146-1787
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Variant** variant: Symbol | Logo (default Symbol)

## Variants (2)

- Variant=Symbol — 24×24 (base)
- Variant=Logo — 75×20

## Base tree — Variant=Symbol

- **Variant=Symbol** `component` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 · layout row align center/center · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0
  - **container** `frame` size 20×20 · sizing fill/fill · layout row align center/center · padding 0 0 0 0 · gap 0
    - **Union** `boolean_operation` size 20×20 · sizing fill/fill · fill CONTENT/Primary
      - **logo-icon** `vector` size 20×20 · fill CONTENT/Primary

## Differences vs base

### Variant=Logo

- `(root)` size: 24×24 → 75×20
- `(root)` sizing: fixed/fixed → fill/hug
- `(root)` size.vars: ICONS/24 → –
- `(root)` layout: row align center/center → column align min/min
- `(root)` padding: 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 → 0 0 0 0
- `(root)` gap: 0 → 10
- `container` absent
- `container/Union` absent
- `container/Union/logo-icon` absent
- `logo-wordmark` only here: size 75×20 · sizing fixed/fixed · fill CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `(root)` fixed height 24 (1/2 variants)

## Nested components

none

## Icons

none
