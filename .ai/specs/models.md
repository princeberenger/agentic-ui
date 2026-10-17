# Models — 118:15337

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=118-15337
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ModelLogo/ModelLogo.figma.ts)

## Props

- **Provider** variant: anthropic | anthropic --s | gemini | gemini --s | openai | openai --s | Mistral | mistral --s | xAI | Provider10 (default anthropic)

## Variants (10)

- Provider=anthropic — 32×32 (base)
- Provider=gemini — 32×32
- Provider=openai — 32×32
- Provider=Mistral — 32×32
- Provider=xAI — 32×32
- Provider=Provider10 — 20×20
- Provider=mistral --s — 20×20
- Provider=anthropic --s — 20×20
- Provider=gemini --s — 20×20
- Provider=openai --s — 20×20

## Base tree — Provider=anthropic

- **Provider=anthropic** `component` size 32×32 · sizing fill/fixed · layout column align center/center · padding 11 8 11 8 · gap 8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10
  - **Icons / Anthropic** `instance` size 16×16 · sizing fixed/fixed · layout column align center/center · padding 0 0 0 0 · gap 10 · instance Icons / Anthropic
    - ↳ icon color CONTENT/Primary

## Differences vs base

### Provider=gemini

- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / Gemini` only here: size 16×16 · sizing fixed/fixed · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Icons / Gemini

### Provider=openai

- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / Openai` only here: size 16×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0 · instance Icons / Openai
- `Icons / Openai/icon-color` only here: fill CONTENT/Primary

### Provider=Mistral

- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / Mistral` only here: size 16×16 · sizing fixed/fixed · instance Icons / Mistral
- `Icons / Mistral/icon-color` only here: fill #e10500 (no variable)

### Provider=xAI

- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / xAI` only here: size 15×16 · sizing fixed/fixed · instance Icons / xAI
- `Icons / xAI/icon-color` only here: fill CONTENT/Primary

### Provider=Provider10

- `(root)` size: 32×32 → 20×20
- `(root)` sizing: fill/fixed → fixed/fixed
- `(root)` radius: 10=10 → 6=6
- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / xAI` only here: size 12×13 · sizing fixed/fixed · instance Icons / xAI
- `Icons / xAI/icon-color` only here: fill CONTENT/Primary

### Provider=mistral --s

- `(root)` size: 32×32 → 20×20
- `(root)` sizing: fill/fixed → fixed/fixed
- `(root)` gap: 8 → 0
- `(root)` radius: 10=10 → 6=6
- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / Mistral` only here: size 14×14 · sizing fixed/fixed · instance Icons / Mistral
- `Icons / Mistral/icon-color` only here: fill #e10500 (no variable)

### Provider=anthropic --s

- `(root)` size: 32×32 → 20×20
- `(root)` sizing: fill/fixed → fixed/fixed
- `(root)` radius: 10=10 → 6=6
- `(root)` maxWidth: – → 20
- `Icons / Anthropic` size: 16×16 → 13×13

### Provider=gemini --s

- `(root)` size: 32×32 → 20×20
- `(root)` sizing: fill/fixed → fixed/fixed
- `(root)` radius: 10=10 → 6=6
- `(root)` maxWidth: – → 20
- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Icons / Gemini` only here: size 13×13 · sizing fixed/fixed · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Icons / Gemini

### Provider=openai --s

- `(root)` size: 32×32 → 20×20
- `(root)` sizing: fill/fixed → fixed/fixed
- `(root)` radius: 10=10 → 6=6
- `(root)` maxWidth: – → 20
- `Icons / Anthropic` absent
- `Icons / Anthropic/icon-color` absent
- `Vector` only here: size 13×13 · sizing fixed/fixed · fill CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Values without variable

- `(root)` paddingTop 11 (10/10 variants)
- `(root)` paddingRight 8 (10/10 variants)
- `(root)` paddingBottom 11 (10/10 variants)
- `(root)` paddingLeft 8 (10/10 variants)
- `(root)` fixed height 32 (5/10 variants)
- `Icons / Anthropic` fixed width 16, height 16 (1/10 variants)
- `Icons / Gemini` fixed width 16, height 16 (1/10 variants)
- `Icons / Openai` fixed width 16, height 16 (1/10 variants)
- `Icons / Mistral` fixed width 16, height 16 (1/10 variants)
- `Icons / xAI` fixed width 15, height 16 (1/10 variants)
- `(root)` fixed width 20, height 20 (5/10 variants)
- `Icons / xAI` fixed width 12, height 13 (1/10 variants)
- `Icons / Mistral` fixed width 14, height 14 (1/10 variants)
- `Icons / Anthropic` fixed width 13 (1/10 variants)
- `Icons / Gemini` fixed width 13, height 13 (1/10 variants)

## Nested components

none

## Icons

- Icons / Anthropic (4122:6216) → `anthropic.svg` present
- Icons / Gemini (4122:6215) → `gemini.svg` present
- Icons / Openai (4122:6214) → `openai.svg` present
- Icons / Mistral (6182:2395) → `mistral.svg` present
- Icons / xAI (6182:2368) → `xai.svg` present
