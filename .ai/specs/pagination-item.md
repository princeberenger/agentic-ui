# pagination-item — 716:3884

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3884
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Pagination/PaginationItem.figma.ts)

## Props

- **Page number** text (default "1")
- **State** variant: active | default | focus | hover (default default)
- **Type** variant: number | overflow (default number)
- **Open** variant: false | true (default false)
- **Selected** variant: false | true (default false)

## Variants (7)

- State=default, Type=number, Open=false, Selected=false — 32×32 (base)
- State=default, Type=overflow, Open=false, Selected=false — 32×32
- State=hover, Type=overflow, Open=false, Selected=false — 32×32
- State=focus, Type=overflow, Open=false, Selected=true — 32×32
- State=active, Type=overflow, Open=true, Selected=true — 32×32
- State=hover, Type=number, Open=false, Selected=false — 32×32
- State=active, Type=number, Open=false, Selected=true — 32×32

## Base tree — State=default, Type=number, Open=false, Selected=false

- **State=default, Type=number, Open=false, Selected=false** `component` size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0
  - **pagination-item-wrapper** `frame` size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BACKGROUND/Primary · radius 4=4
    - **text-1** `text` size 9×15 · sizing hug/hug · text "1" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper align center · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

## Differences vs base

### State=default, Type=overflow, Open=false, Selected=false

- `pagination-item-wrapper/text-1` absent
- `pagination-item-wrapper/icon` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Overflow-menu--horizontal
- `pagination-item-wrapper/icon/icon-color` only here: fill CONTENT/Icon

### State=hover, Type=overflow, Open=false, Selected=false

- `pagination-item-wrapper` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `pagination-item-wrapper/text-1` absent
- `pagination-item-wrapper/icon` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Overflow-menu--horizontal
- `pagination-item-wrapper/icon/icon-color` only here: fill CONTENT/Primary

### State=focus, Type=overflow, Open=false, Selected=true

- `pagination-item-wrapper` stroke: – → 1=default inside BORDER/Strong
- `pagination-item-wrapper/text-1` absent
- `pagination-item-wrapper/icon` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Overflow-menu--horizontal
- `pagination-item-wrapper/icon/icon-color` only here: fill CONTENT/Primary

### State=active, Type=overflow, Open=true, Selected=true

- `(root)` sizing: fixed/fixed → –
- `(root)` layout: row align min/center → –
- `(root)` padding: 0 0 0 0 → –
- `(root)` gap: 0 → –
- `pagination-item-wrapper` stroke: – → 1=default inside BORDER/Strong
- `pagination-item-wrapper/text-1` absent
- `pagination-item-wrapper/icon` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Overflow-menu--horizontal
- `pagination-item-wrapper/icon/icon-color` only here: fill CONTENT/Primary
- `Select menu overflow` only here: size 32×0
- `Select menu overflow/_pagination-item/_Pagination select menu item/True` only here: size 56×259 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 0 · instance _pagination-item/_Pagination select menu item/True
- `Select menu overflow/_pagination-item/_Pagination select menu item/True/_Select menu chrome menu/Chrome menu/_Select menu chrome menu items` only here: fill Transparent
- `Select menu overflow/_pagination-item/_Pagination select menu item/True/_Select menu chrome menu/Chrome menu/_Select menu chrome menu items/Text + icon/Checkmark` only here: fill Transparent

### State=hover, Type=number, Open=false, Selected=false

- `pagination-item-wrapper` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=active, Type=number, Open=false, Selected=true

- `pagination-item-wrapper` stroke: – → 1=default inside BORDER/Strong


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Semibold | `var(--weight-semibold)` | ok |

## Styles

- text: BUTTON/Label/md/regular

## Values without variable

- `pagination-item-wrapper/icon` fixed height 16 (4/7 variants)

## Nested components

- _pagination-item/_Pagination select menu item/True (742:170) — not connected

## Icons

- Icons / Overflow-menu--horizontal (179:14008) → `overflow-menu-horizontal.svg` present
