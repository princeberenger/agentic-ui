# validation-text-line — 6133:2334

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-2334
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Label** text (default "8 Character minimum")
- **Type** variant: Default | Success | Error (default Default)

## Variants (3)

- Type=Default — 308×23 (base)
- Type=Success — 308×23
- Type=Error — 308×23

## Base tree — Type=Default

- **Type=Default** `component` size 308×23 · sizing fill/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10
  - **Icons / Checkmark** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Checkmark
    - ↳ icon color CONTENT/Icon
  - **8 Character minimum** `text` size 270×15 · sizing fill/hug · text "8 Character minimum" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### Type=Success

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Success (Light)
- `Icons / Checkmark` absent
- `Icons / Checkmark/icon-color` absent
- `8 Character minimum` color: CONTENT/Secondary → CONTENT/Success
- `Icons / Checkmark--filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark--filled
- `Icons / Checkmark--filled/icon-color` only here: fill CONTENT/Success

### Type=Error

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Attention (Light)
- `Icons / Checkmark` absent
- `Icons / Checkmark/icon-color` absent
- `8 Character minimum` color: CONTENT/Secondary → CONTENT/Attention
- `Icons / Close--filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Close--filled
- `Icons / Close--filled/icon-color` only here: fill CONTENT/Attention


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Attention (Light) | `var(--color-bg-attention-light)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BACKGROUND/Success (Light) | `var(--color-bg-success-light)` | ok |
| CONTENT/Attention | `var(--color-content-attention)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| CONTENT/Success | `var(--color-content-success)` | ok |
| family/Body | `var(--font-body)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/xs/regular

## Values without variable

- `Icons / Checkmark` fixed width 14, height 14 (1/3 variants)
- `Icons / Checkmark--filled` fixed width 14, height 14 (1/3 variants)
- `Icons / Close--filled` fixed width 14, height 14 (1/3 variants)

## Nested components

none

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
- Icons / Checkmark--filled (179:17185) → `checkmark-filled.svg` present
- Icons / Close--filled (179:14027) → `close-filled.svg` present
