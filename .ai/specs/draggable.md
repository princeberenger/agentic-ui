# draggable — 4072:8067

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8067
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Slider/SliderDraggable.figma.ts)

## Props

- **State** variant: Default (default Default)

## Variants (1)

- State=Default — 240×74 (base)

## Base tree — State=Default

- **State=Default** `component` size 240×74 · sizing fixed/hug · layout column align min/min · padding 0 0 0 0 · gap 8=PADDING/8
  - **values** `frame` size 240×18 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 10
    - **0** `text` size 24×18 · sizing fixed/hug · text "0" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
    - **50** `text` size 24×18 · sizing fixed/hug · text "50" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
    - **100** `text` size 24×18 · sizing fixed/hug · text "100" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **slider** `frame` size 240×48 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10
    - **Line 1** `line` size 0×32 · sizing fixed/fixed · size.vars ICONS/32 · stroke 1 center BORDER/Subtle
    - **20%** `rectangle` size 40×48 · sizing fixed/fixed · fill BACKGROUND/Tertiary · radius 10=10
    - **50%** `rectangle` size 121×48 · sizing fixed/fixed · fill CONTENT/Primary · radius 10=10 · hidden true
    - **75%** `rectangle` size 180×48 · sizing fixed/fixed · fill CONTENT/Primary · radius 10=10 · hidden true
    - **100%** `rectangle` size 240×48 · sizing fixed/fixed · fill CONTENT/Primary · radius 10=10 · hidden true

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 240
- `slider/Line 1` stroke weight 1
- `slider/20%` fixed width 40, height 48
- `slider/50%` fixed width 121, height 48
- `slider/75%` fixed width 180, height 48
- `slider/100%` fixed width 240, height 48

## Nested components

none

## Icons

none
