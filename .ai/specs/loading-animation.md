# Loading animation — 4030:7034

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4030-7034
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Spinner/Spinner.figma.ts)

## Props

- **Size** variant: Small (default Small)
- **Phase** variant: 1 | 2 | 3 | 4 (default 1)

## Variants (4)

- Size=Small, Phase=1 — 14×14 (base)
- Size=Small, Phase=2 — 14×14
- Size=Small, Phase=3 — 14×14
- Size=Small, Phase=4 — 14×14

## Base tree — Size=Small, Phase=1

- **Size=Small, Phase=1** `component` size 14×14 · sizing fixed/fixed · layout row align min/min · padding 0 0 0 0 · gap 10
  - **loader-container** `frame` size 14×14 · sizing fixed/fixed
    - **Ellipse** `ellipse` size 14×14 · stroke 2=lg inside BORDER/Subtle
    - **Ellipse** `ellipse` size 14×14 · stroke 2=lg inside CONTENT/Primary

## Differences vs base

### Size=Small, Phase=2

- identical

### Size=Small, Phase=3

- identical

### Size=Small, Phase=4

- identical


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| lg | `var(--stroke-lg)` | ok |

## Values without variable

- `(root)` fixed width 14, height 14 (4/4 variants)
- `loader-container` fixed width 14, height 14 (4/4 variants)

## Nested components

none

## Icons

none
