# cell-type-icon — 789:1532

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=789-1532
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Table/TableIconCell.figma.ts)

## Props

- **Icon** instance swap (default Icons / Checkmark)
- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)

## Variants (5)

- State=Default — 379×64 (base)
- State=Disabled — 379×64
- State=Loading — 379×64
- State=Focus — 379×64
- State=Hover — 379×64

## Base tree — State=Default

- **State=Default** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 0 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Icons / Checkmark** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Checkmark
    - ↳ icon color CONTENT/Icon

## Differences vs base

### State=Disabled

- `Icons / Checkmark/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### State=Loading

- `Icons / Checkmark` absent
- `Icons / Checkmark/icon-color` absent
- `Button Group` only here: size 32×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 0=PADDING/none
- `Button Group/table-skeleton-loading` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align center/center · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 2=?12104:1047

### State=Focus

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Hover

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12104:1047 | – | unresolved id |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| default | `var(--stroke-default)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| lg | `var(--stroke-lg)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |

## Values without variable

- `(root)` stroke weight 0/0/1/0 (4/5 variants)
- `(root)` fixed width 379 (5/5 variants)
- `Icons / Checkmark` fixed width 16 (4/5 variants)

## Nested components

none

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
