# Progress - Bars (48) — 4072:7514

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-7514
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ProgressBars/ProgressBars48.figma.ts)

## Props

- **Filled** variant: 0 | 50% | 100% (default 0)

## Variants (3)

- Filled=0 — 142×16 (base)
- Filled=50% — 142×16
- Filled=100% — 142×16

## Base tree — Filled=0

- **Filled=0** `component` size 142×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
  - **10** ×48 `rectangle` size 1×16 · sizing fixed/fixed · fill BACKGROUND/Disabled

## Differences vs base

### Filled=50%

- `[run 1]` fill: BACKGROUND/Disabled → CONTENT/Primary
- `[run 1]` count: 48 → 26
- `[run 2]` only here: size 1×16 · sizing fixed/fixed · fill BACKGROUND/Disabled

### Filled=100%

- `[run 1]` fill: BACKGROUND/Disabled → CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |

## Values without variable

- `[run 1]` fixed width 1 (3/3 variants)
- `[run 2]` fixed width 1 (1/3 variants)

## Nested components

none

## Icons

none
