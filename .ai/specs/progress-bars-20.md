# Progress - Bars (20) — 4096:7377

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7377
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ProgressBars/ProgressBars20.figma.ts)

## Props

- **Filled** variant: 10% | 20% | 30% | 40% | 50% | 60% | 70% | 80% | 90% | 100% (default 10%)

## Variants (10)

- Filled=10% — 78×16 (base)
- Filled=20% — 78×16
- Filled=30% — 78×16
- Filled=40% — 78×16
- Filled=50% — 78×16
- Filled=60% — 78×16
- Filled=70% — 78×16
- Filled=80% — 78×16
- Filled=90% — 78×16
- Filled=100% — 78×16

## Base tree — Filled=10%

- **Filled=10%** `component` size 78×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
  - **10** ×2 `rectangle` size 2×16 · sizing fixed/fixed · fill CONTENT/Primary
  - **30** ×18 `rectangle` size 2×16 · sizing fixed/fixed · fill BACKGROUND/Disabled

## Differences vs base

### Filled=20%

- `[run 1]` count: 2 → 4
- `[run 2]` count: 18 → 16

### Filled=30%

- `[run 1]` count: 2 → 6
- `[run 2]` count: 18 → 14

### Filled=40%

- `[run 1]` count: 2 → 8
- `[run 2]` count: 18 → 12

### Filled=50%

- `[run 1]` count: 2 → 10
- `[run 2]` count: 18 → 10

### Filled=60%

- `[run 1]` count: 2 → 12
- `[run 2]` count: 18 → 8

### Filled=70%

- `[run 1]` count: 2 → 14
- `[run 2]` count: 18 → 6

### Filled=80%

- `[run 1]` count: 2 → 16
- `[run 2]` count: 18 → 4

### Filled=90%

- `[run 1]` count: 2 → 18
- `[run 2]` count: 18 → 2

### Filled=100%

- `[run 1]` count: 2 → 20
- `[run 2]` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `[run 1]` fixed width 2 (10/10 variants)
- `[run 2]` fixed width 2 (9/10 variants)

## Nested components

none

## Icons

none
