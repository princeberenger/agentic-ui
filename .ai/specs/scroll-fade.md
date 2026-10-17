# SCROLL FADE — 4092:1131

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1131
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Mode** variant: Light | Dark (default Light)

## Variants (2)

- Mode=Light — 320×48 (base)
- Mode=Dark — 320×48

## Base tree — Mode=Light

- **Mode=Light** `component` size 320×48 · sizing fixed/hug · layout row align center/max · padding 0=PADDING/none 0=PADDING/none 8=PADDING/8 0=PADDING/none · gap 0 · fill gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 · effect background_blur 2  (no style)
  - **Icons / Down-to-bottom** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Down-to-bottom
    - ↳ icon color CONTENT/Primary

## Differences vs base

### Mode=Dark

- `(root)` gap: 0 → 10
- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| TRANSPARENT/black/0 | – | no WEB code syntax |
| TRANSPARENT/black/100 | – | no WEB code syntax |
| TRANSPARENT/white/0 | – | no WEB code syntax |

## Styles

- fill: Gradient/Scrollfade (Light)(V1)
- fills: Gradient/Scrollfade (Light)(V1)

## Values without variable

- `(root)` effect background_blur 2  (no style) (2/2 variants)
- `(root)` fixed width 320 (2/2 variants)
- `Icons / Down-to-bottom` fixed width 14, height 14 (2/2 variants)

## Nested components

none

## Icons

- Icons / Down-to-bottom (179:14013) → `down-to-bottom.svg` present
