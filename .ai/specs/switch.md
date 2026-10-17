# Switch — 814:110

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=814-110
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Switch/Switch.figma.ts)

## Props

- **Selected** variant: false | true (default false)
- **State** variant: default | disabled | focus | hover (default default)
- **Size** variant: lg | sm (default sm)

## Variants (16)

- Selected=false, State=default, Size=sm — 29×16 (base)
- Selected=false, State=default, Size=lg — 43.2×24
- Selected=false, State=hover, Size=sm — 29×16
- Selected=false, State=hover, Size=lg — 43.2×24
- Selected=false, State=focus, Size=sm — 29×16
- Selected=false, State=focus, Size=lg — 43.2×24
- Selected=false, State=disabled, Size=sm — 29×16
- Selected=false, State=disabled, Size=lg — 43.2×24
- Selected=true, State=default, Size=sm — 29×16
- Selected=true, State=default, Size=lg — 43.2×24
- Selected=true, State=hover, Size=sm — 29×16
- Selected=true, State=hover, Size=lg — 43.2×24
- Selected=true, State=focus, Size=sm — 29×16
- Selected=true, State=focus, Size=lg — 43.2×24
- Selected=true, State=disabled, Size=sm — 29×16
- Selected=true, State=disabled, Size=lg — 43.2×24

## Base tree — Selected=false, State=default, Size=sm

- **Selected=false, State=default, Size=sm** `component` size 29×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0 · fill SWITCH/bg/inactive · radius 9999=full · effect inner_shadow 0,1 2 #0000001f (no style)
  - **Mask** `frame` size 16×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 4
    - **Knob** `vector` size 13×13 · sizing fixed/fixed · size.vars ICONS/13 · fill SWITCH/knob/Inactive · stroke 1=default inside SWITCH/knob/Inactive · radius 100 · effect Swtich/Toggle

## Differences vs base

### Selected=false, State=default, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20

### Selected=false, State=hover, Size=sm

- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/inactive + INPUT/Hover (Dark)@0.04
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside BUTTON/Secondary
- `Mask/Knob` effect: Swtich/Toggle → –

### Selected=false, State=hover, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/inactive + INPUT/Hover (Dark)@0.04
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside BUTTON/Secondary
- `Mask/Knob` effect: Swtich/Toggle → –

### Selected=false, State=focus, Size=sm

- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → Components/Focus
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside BUTTON/Secondary

### Selected=false, State=focus, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → Components/Focus
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside BUTTON/Secondary

### Selected=false, State=disabled, Size=sm

- `(root)` fill: SWITCH/bg/inactive → –
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `(root)` stroke: – → 1 inside BORDER/Disabled
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Disabled
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –

### Selected=false, State=disabled, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → –
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `(root)` stroke: – → 1 inside BORDER/Disabled
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Disabled
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –

### Selected=true, State=default, Size=sm

- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside SWITCH/knob/Active
- `Mask/Checkmark` only here: size 12×12 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 7.32×5.65 · fill SWITCH/knob/Icon

### Selected=true, State=default, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside SWITCH/knob/Active
- `Mask/Checkmark` only here: size 20×20 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 10×8 · fill SWITCH/knob/Icon

### Selected=true, State=hover, Size=sm

- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Mask/Knob` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside SWITCH/knob/Active
- `Mask/Knob` effect: Swtich/Toggle → inner_shadow 0,1 2 #0000001f (no style)
- `Mask/Checkmark` only here: size 12×12 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 7.32×5.65 · fill SWITCH/knob/Icon

### Selected=true, State=hover, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside SWITCH/knob/Active
- `Mask/Knob` effect: Swtich/Toggle → inner_shadow 0,1 2 #0000001f (no style)
- `Mask/Checkmark` only here: size 20×20 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 10×8 · fill SWITCH/knob/Icon

### Selected=true, State=focus, Size=sm

- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → Components/Focus
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –
- `Mask/Checkmark` only here: size 12×12 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 7.32×5.65 · fill SWITCH/knob/Icon

### Selected=true, State=focus, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → Components/Focus
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –
- `Mask/Checkmark` only here: size 20×20 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 10×8 · fill SWITCH/knob/Icon

### Selected=true, State=disabled, Size=sm

- `(root)` fill: SWITCH/bg/inactive → –
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `(root)` stroke: – → 1 inside BORDER/Subtle
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Disabled
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –
- `Mask/Checkmark` only here: size 12×12 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 7.32×5.65 · fill CONTENT/Icon

### Selected=true, State=disabled, Size=lg

- `(root)` size: 29×16 → 43.2×24
- `(root)` fill: SWITCH/bg/inactive → –
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `(root)` stroke: – → 1 inside BORDER/Subtle
- `Mask` size: 16×16 → 24×24
- `Mask/Knob` size: 13×13 → 20×20
- `Mask/Knob` size.vars: ICONS/13 → ICONS/20
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Disabled
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → –
- `Mask/Knob` effect: Swtich/Toggle → –
- `Mask/Checkmark` only here: size 20×20 · sizing fixed/fixed
- `Mask/Checkmark/Vector` only here: size 10×8 · fill CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Disabled | `var(--color-border-disabled)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Icon | `var(--color-content-icon)` | ok |
| default | `var(--stroke-default)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/12 | `var(--icon-12)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/20 | `var(--icon-20)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| SWITCH/bg/active | `var(--color-switch-bg-active)` | ok |
| SWITCH/bg/inactive | `var(--color-switch-bg-inactive)` | ok |
| SWITCH/knob/Active | `var(--color-switch-knob-active)` | ok |
| SWITCH/knob/Disabled | `var(--color-switch-knob-disabled)` | ok |
| SWITCH/knob/Icon | `var(--color-switch-knob-icon)` | ok |
| SWITCH/knob/Inactive | `var(--color-switch-knob-inactive)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |

## Styles

- effect: Components/Focus
- effect: Swtich/Toggle

## Values without variable

- `(root)` effect inner_shadow 0,1 2 #0000001f (no style) (4/16 variants)
- `(root)` fixed width 29 (8/16 variants)
- `Mask` fixed width 16, height 16 (1/16 variants)
- `Mask/Knob` radius 100 (16/16 variants)
- `(root)` fixed width 43.2 (8/16 variants)
- `Mask` fixed width 24 (8/16 variants)
- `Mask` fixed width 16 (7/16 variants)
- `(root)` stroke weight 1 (4/16 variants)
- `Mask` gap 4 (8/16 variants)
- `Mask/Checkmark` fixed width 12 (3/16 variants)
- `Mask/Checkmark` fixed width 20 (4/16 variants)
- `Mask/Knob` effect inner_shadow 0,1 2 #0000001f (no style) (2/16 variants)
- `Mask/Checkmark` fixed width 12, height 12 (1/16 variants)

## Nested components

none

## Icons

none
