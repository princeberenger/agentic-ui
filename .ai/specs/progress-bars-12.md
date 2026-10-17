# Progress - Bars (12) — 4096:7139

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7139
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Filled** variant: 10% | 20% | 50% | 70% | 80% | 100% (default 10%)

## Variants (6)

- Filled=10% — 46×16 (base)
- Filled=20% — 46×16
- Filled=50% — 46×16
- Filled=70% — 46×16
- Filled=80% — 46×16
- Filled=100% — 46×16

## Base tree — Filled=10%

- **Filled=10%** `component` size 46×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
  - **10** ×2 `rectangle` size 2×16 · sizing fixed/fixed · fill CONTENT/Primary
  - **30** ×10 `rectangle` size 2×16 · sizing fixed/fixed · fill BACKGROUND/Disabled

## Differences vs base

### Filled=20%

- `[run 1]` count: 2 → 4
- `[run 2]` count: 10 → 8

### Filled=50%

- `[run 1]` count: 2 → 6
- `[run 2]` count: 10 → 6

### Filled=70%

- `[run 1]` count: 2 → 8
- `[run 2]` count: 10 → 4

### Filled=80%

- `[run 1]` count: 2 → 10
- `[run 2]` count: 10 → 2

### Filled=100%

- `[run 1]` count: 2 → 12
- `[run 2]` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `[run 1]` fixed width 2 (6/6 variants)
- `[run 2]` fixed width 2 (5/6 variants)

## Nested components

none

## Icons

none
