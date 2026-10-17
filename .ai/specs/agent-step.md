# Agent step — 4119:17981

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17981
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/AgentStep.figma.ts)

## Props

- **Expandable** boolean (default false)
- **Icon** instance swap (default Icons / Brain)
- **Label** text (default "State label")
- **State** variant: active | default | disabled (default default)
- **Type** variant: Step | Sub-step (default Step)
- **Sub-step** variant: Complete | Incoplete (default Complete)

## Variants (5)

- State=default, Type=Step, Sub-step=Complete — 88×16 (base)
- State=active, Type=Step, Sub-step=Complete — 88×16
- State=disabled, Type=Step, Sub-step=Complete — 88×16
- State=default, Type=Sub-step, Sub-step=Incoplete — 88×16
- State=default, Type=Sub-step, Sub-step=Complete — 88×16

## Base tree — State=default, Type=Step, Sub-step=Complete

- **State=default, Type=Step, Sub-step=Complete** `component` size 88×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8
  - **Icons / Brain** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Brain
    - ↳ icon color CONTENT/Icon
  - **label** `frame` size 64×15 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4=PADDING/4
    - **progress-label** `text` size 64×15 · sizing hug/hug · text "State label" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **Icons / Chevron--down** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Chevron--down · hidden true
      - ↳ icon color CONTENT/Icon

## Differences vs base

### State=active, Type=Step, Sub-step=Complete

- `Icons / Brain/icon-color` fill: CONTENT/Icon → CONTENT/Primary
- `label/progress-label` color: CONTENT/Secondary → gradient_linear(CONTENT/Primary 19%, CONTENT/Disabled 100%) from 0,0.5 to 1,0.5

### State=disabled, Type=Step, Sub-step=Complete

- `Icons / Brain/icon-color` fill: CONTENT/Icon → CONTENT/Disabled
- `label/progress-label` color: CONTENT/Secondary → CONTENT/Disabled

### State=default, Type=Sub-step, Sub-step=Incoplete

- `Icons / Brain` absent
- `Icons / Brain/icon-color` absent
- `label/Icons / Chevron--down` absent
- `label/Icons / Chevron--down/icon-color` absent
- `icon-wrapper` only here: size 16×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0
- `icon-wrapper/Icons / todo` only here: size 13×13 · sizing fixed/fixed · instance Icons / todo
- `icon-wrapper/Icons / todo/icon-color` only here: fill CONTENT/Icon

### State=default, Type=Sub-step, Sub-step=Complete

- `Icons / Brain` absent
- `Icons / Brain/icon-color` absent
- `label/Icons / Chevron--down` absent
- `label/Icons / Chevron--down/icon-color` absent
- `icon-wrapper` only here: size 16×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0
- `icon-wrapper/Icons / Checkmark--outline` only here: size 13×13 · sizing fixed/fixed · instance Icons / Checkmark--outline
- `icon-wrapper/Icons / Checkmark--outline/icon-color` only here: fill CONTENT/Secondary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/2xs (14) | – | external library variable |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- fill: Gradient/Shimmer
- text: SYSTEM/Body/xs/regular

## Values without variable

- `Icons / Brain` fixed width 16 (3/5 variants)
- `label/Icons / Chevron--down` fixed width 14 (3/5 variants)
- `icon-wrapper` fixed width 16 (2/5 variants)
- `icon-wrapper/Icons / todo` fixed width 13 (1/5 variants)
- `icon-wrapper/Icons / Checkmark--outline` fixed width 13 (1/5 variants)

## Nested components

none

## Icons

- Icons / Brain (4115:15549) → `brain.svg` present
- Icons / Chevron--down (179:14036) → `chevron-down.svg` present
- Icons / todo (4045:82) → `todo.svg` present
- Icons / Checkmark--outline (179:17188) → `checkmark-outline.svg` present
