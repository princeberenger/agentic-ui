# Radio button — 124:2977

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2977
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Radio/Radio.figma.ts)

## Props

- **State** variant: default | disabled (default default)
- **Selected** variant: true | false (default true)

## Variants (4)

- State=default, Selected=true — 24×24 (base)
- State=disabled, Selected=true — 24×24
- State=default, Selected=false — 24×24
- State=disabled, Selected=false — 24×24

## Base tree — State=default, Selected=true

- **State=default, Selected=true** `component` size 24×24 · sizing hug/hug · layout row align min/min · padding 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 · gap 0
  - **Ellipse 1** `ellipse` size 16×16 · sizing fixed/fixed · stroke 1 inside CONTENT/Primary
  - **Ellipse 2** `ellipse` size 10×10 · sizing fixed/fixed · fill CONTENT/Primary

## Differences vs base

### State=disabled, Selected=true

- `Ellipse 1` stroke: 1 inside CONTENT/Primary → 1 inside CONTENT/Disabled
- `Ellipse 2` fill: CONTENT/Primary → CONTENT/Disabled

### State=default, Selected=false

- `Ellipse 2` absent

### State=disabled, Selected=false

- `Ellipse 1` stroke: 1 inside CONTENT/Primary → 1 inside CONTENT/Disabled
- `Ellipse 2` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| PADDING/4 | `var(--space-4)` | ok |

## Values without variable

- `Ellipse 1` stroke weight 1 (4/4 variants)

## Nested components

none

## Icons

none
