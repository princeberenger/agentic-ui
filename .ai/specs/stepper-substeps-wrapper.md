# stepper-substeps-wrapper — 4004:466

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-466
- Extracted: 2026-10-17
- Code Connect: no

## Props

none

## Variants (1)

- stepper-substeps-wrapper — 113×188 (base)

## Base tree — stepper-substeps-wrapper

- **stepper-substeps-wrapper** `component` size 113×188 · sizing hug/hug · layout column align min/min · padding 8=PADDING/8 0 8=PADDING/8 16=PADDING/16 · gap 0=PADDING/none
  - **stepper-substep** `instance` size 75×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=completed · props Label="Concept"
  - **stepper-substep** `instance` size 97×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=completed · props Label="Simulation"
  - **stepper-substep** `frame` size 97×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8
    - **dot-wrapper** `frame` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · layout row align center/center · padding 0 0 0 0 · gap 0
      - **divider** `line` size 0×25 · sizing fixed/fixed · stroke 1 center gradient_linear(BORDER/Medium 0%, #e5e5e500 100%) from 0,0.5 to 1,0.5
  - **stepper-substep** `instance` size 61×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=active · props Label="World"
  - **stepper-substep** `instance` size 61×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=disabled · props Label="Story"
  - **stepper-substep** `instance` size 68×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=disabled · props Label="Script"
  - **stepper-substep** `instance` size 90×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=disabled · props Label="Expand IP"
  - **stepper-substep** ×3 `instance` size 112×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8 · instance stepper-substep › State=disabled · props Label="Substep name" · hidden true

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BORDER/Medium | `var(--color-border-medium)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |

## Values without variable

- `stepper-substep#3/dot-wrapper/divider` stroke weight 1

## Nested components

- stepper-substep (4004:82) — connected: app/components/Stepper/StepperSubstep.figma.ts

## Icons

none
