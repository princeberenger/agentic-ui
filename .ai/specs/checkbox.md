# Checkbox — 124:2639

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2639
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Checkbox/Checkbox.figma.ts)

## Props

- **Type** variant: filled | stroke (default stroke)
- **State** variant: default | disabled (default default)
- **Selected** variant: true | false | indeterminate (default false)

## Variants (12)

- Type=stroke, State=default, Selected=true — 24×24
- Type=filled, State=default, Selected=true — 24×24
- Type=stroke, State=disabled, Selected=true — 24×24
- Type=filled, State=disabled, Selected=true — 24×24
- Type=stroke, State=default, Selected=indeterminate — 24×24
- Type=filled, State=default, Selected=indeterminate — 24×24
- Type=stroke, State=disabled, Selected=indeterminate — 24×24
- Type=filled, State=disabled, Selected=indeterminate — 24×24
- Type=stroke, State=default, Selected=false — 24×24 (base)
- Type=filled, State=disabled, Selected=false — 24×24
- Type=filled, State=default, Selected=false — 24×24
- Type=stroke, State=disabled, Selected=false — 24×24

## Base tree — Type=stroke, State=default, Selected=false

- **Type=stroke, State=default, Selected=false** `component` size 24×24 · sizing hug/hug · size.vars ICONS/24 × ICONS/24 · layout row align min/min · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0
  - **Unselected** `frame` size 20×20 · sizing fixed/fixed
    - **vector** `vector` size 16×16 · fill CONTENT/Icon

## Differences vs base

### Type=stroke, State=default, Selected=true

- `Unselected` absent
- `Unselected/vector` absent
- `Selected` only here: size 20×20 · sizing fixed/fixed
- `Selected/filled` only here: size 20×20
- `Selected/filled/Subtract` only here: size 16×16 · fill CONTENT/Primary
- `Selected/filled/Subtract/vector` only here: size 16×16 · fill CONTENT/Primary
- `Selected/filled/Subtract/Vector` only here: size 11.63×8.31 · fill CONTENT/On Primary

### Type=filled, State=default, Selected=true

- `Unselected` absent
- `Unselected/vector` absent
- `filled` only here: size 20×20 · sizing fixed/fixed
- `filled/Subtract` only here: size 16×16 · fill CONTENT/Primary
- `filled/Subtract/vector` only here: size 16×16 · fill CONTENT/Primary · radius 4=4
- `filled/Subtract/Vector` only here: size 10×8 · fill CONTENT/On Primary

### Type=stroke, State=disabled, Selected=true

- `Unselected` absent
- `Unselected/vector` absent
- `Selected` only here: size 20×20 · sizing fixed/fixed
- `Selected/filled` only here: size 20×20
- `Selected/filled/Subtract` only here: size 16×16 · fill CONTENT/Disabled
- `Selected/filled/Subtract/vector` only here: size 16×16 · fill CONTENT/Disabled
- `Selected/filled/Subtract/Vector` only here: size 11.63×8.31 · fill CONTENT/On Primary

### Type=filled, State=disabled, Selected=true

- `Unselected` absent
- `Unselected/vector` absent
- `filled` only here: size 20×20 · sizing fixed/fixed
- `filled/Subtract` only here: size 16×16 · fill CONTENT/Disabled
- `filled/Subtract/vector` only here: size 16×16 · fill CONTENT/Disabled · radius 4=4
- `filled/Subtract/Vector` only here: size 10×8 · fill CONTENT/On Primary

### Type=stroke, State=default, Selected=indeterminate

- `Unselected` absent
- `Unselected/vector` absent
- `checkbox_minus` only here: size 20×20 · sizing fixed/fixed
- `checkbox_minus/filled` only here: size 20×20
- `checkbox_minus/filled/vector` only here: size 16×16 · fill CONTENT/Primary

### Type=filled, State=default, Selected=indeterminate

- `Unselected` absent
- `Unselected/vector` absent
- `filled` only here: size 20×20 · sizing fixed/fixed
- `filled/vector` only here: size 16×16 · fill CONTENT/Primary · radius 4=4

### Type=stroke, State=disabled, Selected=indeterminate

- `Unselected` absent
- `Unselected/vector` absent
- `checkbox_minus` only here: size 20×20 · sizing fixed/fixed
- `checkbox_minus/filled` only here: size 20×20
- `checkbox_minus/filled/vector` only here: size 16×16 · fill CONTENT/Disabled

### Type=filled, State=disabled, Selected=indeterminate

- `Unselected` absent
- `Unselected/vector` absent
- `filled` only here: size 20×20 · sizing fixed/fixed
- `filled/vector` only here: size 16×16 · fill CONTENT/Disabled · radius 4=4

### Type=filled, State=disabled, Selected=false

- `(root)` sizing: hug/hug → fixed/fixed
- `(root)` size.vars: ICONS/24 × ICONS/24 → –
- `(root)` layout: row align min/min → row align center/center
- `(root)` opacity: – → 0.5
- `Unselected` size: 20×20 → 16×16
- `Unselected` fill: – → BACKGROUND/Disabled
- `Unselected` radius: – → 4=4
- `Unselected/vector` absent

### Type=filled, State=default, Selected=false

- `(root)` sizing: hug/hug → fixed/fixed
- `(root)` size.vars: ICONS/24 × ICONS/24 → –
- `(root)` layout: row align min/min → row align center/center
- `Unselected` size: 20×20 → 16×16
- `Unselected` fill: – → BACKGROUND/Tertiary
- `Unselected` radius: – → 4=4
- `Unselected` opacity: – → 0.5
- `Unselected/vector` absent

### Type=stroke, State=disabled, Selected=false

- `Unselected/vector` fill: CONTENT/Icon → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Icon | `var(--color-content-icon)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `Selected` fixed width 20, height 20 (2/12 variants)
- `filled` fixed width 20, height 20 (4/12 variants)
- `checkbox_minus` fixed width 20, height 20 (2/12 variants)
- `Unselected` fixed width 20, height 20 (2/12 variants)
- `(root)` fixed width 24 (2/12 variants)
- `Unselected` fixed width 16, height 16 (2/12 variants)

## Nested components

none

## Icons

none
