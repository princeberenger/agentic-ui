# cell-type-action — 771:1556

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1556
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Table/TableActionCell.figma.ts)

## Props

- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)

## Variants (5)

- State=Default — 379×64 (base)
- State=Disabled — 379×64
- State=Loading — 379×64
- State=Focus — 379×64
- State=Hover — 379×64

## Base tree — State=Default

- **State=Default** `component` size 379×64 · sizing fixed/hug · minWidth 124 · maxWidth 400 · layout row align max/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Button Group** `frame` size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8
    - **Primary button** `instance` size 66×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Edit"
    - **Secondary button** `instance` size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Secondary · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Edit", Swap icon=Icons / Overflow-menu--vertical

## Differences vs base

### State=Disabled

- `(root)` sizing: fixed/hug → fixed/fixed
- `Button Group/Primary button` fill: BUTTON/Secondary → CONTENT/On Primary
- `Button Group/Primary button` instance: Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none → Button › Size=lg, Style=secondary, Type=text, State=disabled, Icon position=none
- `Button Group/Secondary button` fill: BUTTON/Secondary → CONTENT/On Primary
- `Button Group/Secondary button` instance: Button › Size=lg, Style=secondary, Type=icon-only, State=default, Icon position=none → Button › Size=lg, Style=secondary, Type=icon-only, State=disabled, Icon position=none
- `Button Group/Secondary button/icon/icon-arrow` only here: fill CONTENT/Disabled

### State=Loading

- `(root)` sizing: fixed/hug → fixed/fixed
- `Button Group` size: 114×40 → 32×32
- `Button Group` gap: 8=PADDING/8 → 0=PADDING/none
- `Button Group/Primary button` absent
- `Button Group/Secondary button` absent
- `Button Group/table-skeleton-loading` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align center/center · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 2=?12104:1047

### State=Focus

- `(root)` sizing: fixed/hug → fixed/fixed
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Hover

- `(root)` sizing: fixed/hug → fixed/fixed
- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `Button Group/Secondary button` fill: BUTTON/Secondary → –


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12104:1047 | – | unresolved id |
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| lg | `var(--stroke-lg)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Values without variable

- `(root)` stroke weight 0/0/1/0 (4/5 variants)
- `(root)` fixed width 379 (5/5 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

none
