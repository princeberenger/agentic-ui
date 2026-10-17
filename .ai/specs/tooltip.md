# Tooltip — 2001:2681

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2001-2681
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Tooltip/Tooltip.figma.ts)

## Props

- **Tooltip text** text (default "Tooltip text")
- **Position** variant: Bottom | Left | Right | Top (default Top)
- **Caret alignment** variant: Center | End | Start (default Center)

## Variants (8)

- Position=Top, Caret alignment=Center — 83×27 (base)
- Position=Top, Caret alignment=Start — 83×27
- Position=Top, Caret alignment=End — 83×27
- Position=Bottom, Caret alignment=Center — 83×27
- Position=Bottom, Caret alignment=Start — 83×27
- Position=Bottom, Caret alignment=End — 83×27
- Position=Left, Caret alignment=Center — 87×23
- Position=Right, Caret alignment=Center — 87×23

## Base tree — Position=Top, Caret alignment=Center

- **Position=Top, Caret alignment=Center** `component` size 83×27 · sizing hug/hug · layout column align min/center · padding 0 0 0 0 · gap 0
  - **Body** `frame` size 83×23 · sizing hug/hug · maxWidth 208 · layout column align min/min · padding 0 0 0 0 · gap 0
    - **Tooltip content** `frame` size 83×23 · sizing fill/hug · layout column align min/min · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 0 · fill BACKGROUND/Inverse · radius 4=4
      - **Tooltip text** `text` size 67×15 · sizing hug/hug · maxWidth 128 · text "Tooltip text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/On Primary
  - **Tooltip caret** `frame` size 40×4 · sizing hug/hug · layout column align min/center · padding 0 16=PADDING/16 0 16=PADDING/16 · gap 0
    - **icon-arrow** `vector` size 8×4 · sizing fixed/fixed · fill BACKGROUND/Inverse

## Differences vs base

### Position=Top, Caret alignment=Start

- `(root)` layout: column align min/center → column align min/min

### Position=Top, Caret alignment=End

- `(root)` layout: column align min/center → column align min/max

### Position=Bottom, Caret alignment=Center

- `(root)` layout: column align min/center → column align max/center

### Position=Bottom, Caret alignment=Start

- `(root)` layout: column align min/center → column align max/min

### Position=Bottom, Caret alignment=End

- `(root)` layout: column align min/center → column align max/max

### Position=Left, Caret alignment=Center

- `(root)` size: 83×27 → 87×23
- `(root)` layout: column align min/center → row align min/center
- `Tooltip caret` size: 40×4 → 4×16
- `Tooltip caret` padding: 0 16=PADDING/16 0 16=PADDING/16 → 0 4=PADDING/4 0 4=PADDING/4
- `Tooltip caret/icon-arrow` size: 8×4 → 4×8

### Position=Right, Caret alignment=Center

- `(root)` size: 83×27 → 87×23
- `(root)` layout: column align min/center → row align min/center
- `Tooltip caret` size: 40×4 → 4×16
- `Tooltip caret` padding: 0 16=PADDING/16 0 16=PADDING/16 → 0 4=PADDING/4 0 4=PADDING/4
- `Tooltip caret/icon-arrow` size: 8×4 → 4×8


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Inverse | `var(--color-bg-inverse)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| family/Body | `var(--font-body)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/xs/regular

## Values without variable

none

## Nested components

none

## Icons

none
