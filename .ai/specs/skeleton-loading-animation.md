# Skeleton loading animation — 761:23192

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-23192
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Skeleton/Skeleton.figma.ts)

## Props

- **Phase** variant: 1 | 2 | 3 | 4 | 5 (default 1)

## Variants (5)

- Phase=1 — 160×16 (base)
- Phase=2 — 160×16
- Phase=3 — 160×16
- Phase=4 — 160×16
- Phase=5 — 160×16

## Base tree — Phase=1

- **Phase=1** `component` size 160×16 · sizing fixed/fixed
  - **Skeleton** `frame` size 160×16 · fill #e8e8e8 (no variable)
    - **Gradient** `rectangle` size 160×16 · fill #c6c6c6 (no variable) · opacity 0.5

## Differences vs base

### Phase=2

- `Skeleton/Gradient` opacity: 0.5 → –

### Phase=3

- `Skeleton/Gradient` opacity: 0.5 → –

### Phase=4

- `Skeleton/Gradient` opacity: 0.5 → –

### Phase=5

- identical


## Tokens

| Figma variable | CSS | status |
|---|---|---|

## Values without variable

- `(root)` fixed width 160, height 16 (5/5 variants)
- `Skeleton` color #e8e8e8 (5/5 variants)
- `Skeleton/Gradient` color #c6c6c6 (5/5 variants)

## Nested components

none

## Icons

none
