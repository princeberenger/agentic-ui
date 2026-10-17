# stepper-substep — 4004:82

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-82
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Stepper/StepperSubstep.figma.ts)

## Props

- **Label** text (default "Substep name")
- **State** variant: active | completed | disabled (default disabled)

## Variants (3)

- State=disabled — 112×26 (base)
- State=completed — 112×26
- State=active — 112×26

## Base tree — State=disabled

- **State=disabled** `component` size 112×26 · sizing hug/hug · layout row align min/center · padding 4=PADDING/4 0 4=PADDING/4 0 · gap 8=PADDING/8
  - **dot-wrapper** `frame` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · layout row align center/center · padding 0 0 0 0 · gap 0
    - **Ellipse 34** `ellipse` size 7.09×7.09 · sizing fixed/fixed · stroke 1=default center BORDER/Medium
  - **Substep name** `text` size 88×18 · sizing hug/hug · text "Substep name" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary

## Differences vs base

### State=completed

- `dot-wrapper/Ellipse 34` absent
- `Substep name` color: CONTENT/Secondary → CONTENT/Success
- `dot-wrapper/Icons / Checkmark--filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark--filled
- `dot-wrapper/Icons / Checkmark--filled/icon-color` only here: fill CONTENT/Success

### State=active

- `dot-wrapper` absent
- `dot-wrapper/Ellipse 34` absent
- `Substep name` color: CONTENT/Secondary → gradient_linear(CONTENT/Primary 19%, CONTENT/Disabled 100%) from 0,0.5 to 1,0.5
- `PULSATING-DOT` only here: size 16×16 · sizing fixed/fixed · instance PULSATING-DOT › State=Low


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BORDER/Medium | `var(--color-border-medium)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| CONTENT/Success | `var(--color-content-success)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- fill: Gradient/Shimmer
- text: SYSTEM/Label/md/regular

## Values without variable

- `dot-wrapper/Icons / Checkmark--filled` fixed width 14 (1/3 variants)
- `PULSATING-DOT` fixed width 16, height 16 (1/3 variants)

## Nested components

- PULSATING-DOT (4004:93) — not connected

## Icons

- Icons / Checkmark--filled (179:17185) → `checkmark-filled.svg` present
