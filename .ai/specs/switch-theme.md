# Switch (Theme) — 6114:855

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6114-855
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Mode** variant: Dark | Light (default Light)

## Variants (2)

- Mode=Light — 43.2×24 (base)
- Mode=Dark — 43.2×24

## Base tree — Mode=Light

- **Mode=Light** `component` size 43.2×24 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0 · fill SWITCH/bg/inactive · radius 9999=full · effect inner_shadow 0,1 2 #0000001f (no style)
  - **Mask** `frame` size 24×24 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 4
    - **Knob** `vector` size 20×20 · sizing fixed/fixed · size.vars ICONS/20 · fill SWITCH/knob/Inactive · stroke 1=default inside SWITCH/knob/Inactive · radius 100 · effect Swtich/Toggle
    - **Icons / Sun** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Sun
      - ↳ icon color CONTENT/Primary

## Differences vs base

### Mode=Dark

- `(root)` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `(root)` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Mask/Knob` fill: SWITCH/knob/Inactive → SWITCH/knob/Active
- `Mask/Knob` stroke: 1=default inside SWITCH/knob/Inactive → 1=default inside SWITCH/knob/Active
- `Mask/Knob` effect: Swtich/Toggle → –
- `Mask/Icons / Sun` absent
- `Mask/Icons / Sun/icon-color` absent
- `Mask/Icons / Moon --filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Moon --filled
- `Mask/Icons / Moon --filled/icon-color` only here: fill CONTENT/On Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| default | `var(--stroke-default)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/20 | `var(--icon-20)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| SWITCH/bg/active | `var(--color-switch-bg-active)` | ok |
| SWITCH/bg/inactive | `var(--color-switch-bg-inactive)` | ok |
| SWITCH/knob/Active | `var(--color-switch-knob-active)` | ok |
| SWITCH/knob/Inactive | `var(--color-switch-knob-inactive)` | ok |

## Styles

- effect: Swtich/Toggle

## Values without variable

- `(root)` effect inner_shadow 0,1 2 #0000001f (no style) (1/2 variants)
- `(root)` fixed width 43.2 (2/2 variants)
- `Mask` gap 4 (2/2 variants)
- `Mask` fixed width 24 (2/2 variants)
- `Mask/Knob` radius 100 (2/2 variants)
- `Mask/Icons / Sun` fixed width 14, height 14 (1/2 variants)
- `Mask/Icons / Moon --filled` fixed width 14, height 14 (1/2 variants)

## Nested components

none

## Icons

- Icons / Sun (179:17087) → `sun.svg` **missing**
- Icons / Moon --filled (6114:852) → `moon-filled.svg` **missing**
