# PULSATING-DOT — 4004:93

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-93
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **State** variant: Low | High (default Low)

## Variants (2)

- State=Low — 16×16 (base)
- State=High — 16×16

## Base tree — State=Low

- **State=Low** `component` size 16×16
  - **dot-3** `ellipse` size 8×8 · fill CONTENT/Primary · opacity 0.2
  - **dot-2** `ellipse` size 6×6 · fill CONTENT/Primary · opacity 0.4
  - **dot-1** `ellipse` size 8×8 · fill CONTENT/Primary

## Differences vs base

### State=High

- `dot-3` size: 8×8 → 16×16
- `dot-2` size: 6×6 → 12×12


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Primary | `var(--color-content-primary)` | ok |

## Values without variable

none

## Nested components

none

## Icons

none
