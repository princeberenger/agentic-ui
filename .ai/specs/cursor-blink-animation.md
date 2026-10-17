# Cursor blink animation — 338:6698

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6698
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **State** variant: Visible | Invisible (default Visible)

## Variants (2)

- State=Visible — 1×17 (base)
- State=Invisible — 1×17

## Base tree — State=Visible

- **State=Visible** `component` size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10
  - **Caret** `rectangle` size 1×17 · sizing fill/fill · fill CONTENT/Primary

## Differences vs base

### State=Invisible

- `(root)` fill: – → CONTENT/On Primary
- `Caret` fill: CONTENT/Primary → –
- `Caret` opacity: – → 0


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |

## Values without variable

- `(root)` fixed width 1, height 17 (2/2 variants)

## Nested components

none

## Icons

none
