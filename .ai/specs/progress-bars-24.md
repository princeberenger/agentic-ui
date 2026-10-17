# Progress - Bars (24) — 4096:7708

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7708
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ProgressBars/ProgressBars24.figma.ts)

## Props

- **Filled** variant: 10% | 20% | 30% | 40% | 45% | 55% | 60% | 70% | 80% | 90% | 100% | 50% (default 10%)

## Variants (12)

- Filled=10% — 142×16 (base)
- Filled=20% — 142×16
- Filled=30% — 142×16
- Filled=40% — 142×16
- Filled=45% — 142×16
- Filled=50% — 142×16
- Filled=55% — 142×16
- Filled=60% — 142×16
- Filled=70% — 142×16
- Filled=80% — 142×16
- Filled=90% — 142×16
- Filled=100% — 142×16

## Base tree — Filled=10%

- **Filled=10%** `component` size 142×16 · sizing fixed/fixed · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
  - **10** ×2 `rectangle` size 4×16 · sizing fill/fill · fill CONTENT/Primary
  - **30** ×22 `rectangle` size 4×16 · sizing fill/fill · fill BACKGROUND/Disabled

## Differences vs base

### Filled=20%

- `[run 1]` count: 2 → 4
- `[run 2]` count: 22 → 20

### Filled=30%

- `[run 1]` count: 2 → 6
- `[run 2]` count: 22 → 18

### Filled=40%

- `[run 1]` count: 2 → 8
- `[run 2]` count: 22 → 16

### Filled=45%

- `[run 1]` count: 2 → 10
- `[run 2]` count: 22 → 14

### Filled=50%

- `[run 1]` count: 2 → 12
- `[run 2]` count: 22 → 12

### Filled=55%

- `[run 1]` count: 2 → 14
- `[run 2]` count: 22 → 10

### Filled=60%

- `[run 1]` count: 2 → 16
- `[run 2]` count: 22 → 8

### Filled=70%

- `[run 1]` count: 2 → 18
- `[run 2]` count: 22 → 6

### Filled=80%

- `[run 1]` count: 2 → 20
- `[run 2]` count: 22 → 4

### Filled=90%

- `[run 1]` count: 2 → 22
- `[run 2]` count: 22 → 2

### Filled=100%

- `[run 1]` count: 2 → 24
- `[run 2]` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `(root)` fixed width 142, height 16 (12/12 variants)

## Nested components

none

## Icons

none
