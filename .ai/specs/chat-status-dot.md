# Chat status dot — 6293:6710

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6293-6710
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatStatusDot.figma.ts)

## Props

- **Show connection line** boolean (default true)
- **Type** variant: Gray | Yellow | Red | Green | Black (default Gray)

## Variants (5)

- Type=Gray — 16×25 (base)
- Type=Black — 16×25
- Type=Yellow — 16×25
- Type=Red — 16×25
- Type=Green — 16×25

## Base tree — Type=Gray

- **Type=Gray** `component` size 16×25 · sizing fixed/hug · layout column align min/center · padding 0 0 0 0 · gap 4=PADDING/4
  - **dot-container** `frame` size 16×7 · sizing fixed/hug · size.vars ICONS/16 · layout row align center/center · padding 0 0 0 0 · gap 0
    - **dot** `ellipse` size 7×7 · sizing fixed/fixed · fill CONTENT/Disabled
  - **connection-line** `frame` size 16×14 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/14 · layout row align center/center · padding 0 0 0 0 · gap 0
    - **connection-line** `rectangle` size 1×14 · sizing fixed/fixed · fill CONTENT/Disabled

## Differences vs base

### Type=Black

- `dot-container/dot` fill: CONTENT/Disabled → CONTENT/Primary
- `connection-line/connection-line` sizing: fixed/fixed → fixed/fill

### Type=Yellow

- `(root)` layout: column align min/center → column align center/center
- `dot-container` size.vars: ICONS/16 → –
- `dot-container` layout: row align center/center → row align center/min
- `dot-container/dot` absent
- `connection-line/connection-line` sizing: fixed/fixed → fixed/fill
- `dot-container/Ellipse 13` only here: size 7×7 · sizing fixed/fixed · fill CONTENT/Warning (Icons)

### Type=Red

- `(root)` size.vars: – → ICONS/16
- `dot-container` size.vars: ICONS/16 → –
- `dot-container/dot` absent
- `connection-line/connection-line` sizing: fixed/fixed → fixed/fill
- `dot-container/Ellipse 13` only here: size 7×7 · sizing fixed/fixed · fill BACKGROUND/Attention

### Type=Green

- `(root)` sizing: fixed/hug → hug/hug
- `(root)` size.vars: – → ICONS/16
- `dot-container` size.vars: ICONS/16 → –
- `dot-container/dot` absent
- `connection-line/connection-line` sizing: fixed/fixed → fixed/fill
- `dot-container/Ellipse 13` only here: size 7×7 · sizing fixed/fixed · fill BACKGROUND/Success


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Attention | `var(--color-bg-attention)` | ok |
| BACKGROUND/Success | `var(--color-bg-success)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Warning (Icons) | `var(--color-content-warning-icons)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |

## Values without variable

- `(root)` fixed width 16 (3/5 variants)
- `connection-line/connection-line` fixed width 1, height 14 (1/5 variants)
- `connection-line/connection-line` fixed width 1 (4/5 variants)
- `dot-container` fixed width 16 (3/5 variants)

## Nested components

none

## Icons

none
