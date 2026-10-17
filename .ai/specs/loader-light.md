# LOADER (LIGHT) — 678:1996

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=678-1996
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Property 1** variant: Default | Variant2 | Variant3 | Variant4 | Variant5 | Variant6 | Variant7 | Variant8 (default Default)

## Variants (8)

- Property 1=Default — 20×20 (base)
- Property 1=Variant2 — 20×20
- Property 1=Variant3 — 20×20
- Property 1=Variant4 — 20×20
- Property 1=Variant5 — 20×20
- Property 1=Variant6 — 20×20
- Property 1=Variant7 — 20×20
- Property 1=Variant8 — 20×20

## Base tree — Property 1=Default

- **Property 1=Default** `component` size 20×20 · sizing hug/hug · layout column align min/min · padding 4 4 4 4 · gap 0
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1

## Differences vs base

### Property 1=Variant2

- `loader-square-element` opacity: 0.1 → 0.4
- `loader-square-element#2` opacity: 0.4 → 0.1
- `loader-square-element#3` opacity: – → 0.4
- `loader-square-element#4` absent
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#7` opacity: 0.1 → 0.5
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1

### Property 1=Variant3

- `loader-square-element` absent
- `loader-square-element#2` absent
- `loader-square-element#4` opacity: 0.4 → 0.1
- `loader-square-element#5` absent
- `loader-square-element#6` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant4

- `loader-square-element#2` absent
- `loader-square-element#3` absent
- `loader-square-element#4` absent
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#6` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant5

- `loader-square-element` absent
- `loader-square-element#2` absent
- `loader-square-element#3` opacity: – → 0.1
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
- `[run 2]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant6

- `loader-square-element` opacity: 0.1 → –
- `loader-square-element#3` opacity: – → 0.1
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant7

- `loader-square-element` opacity: 0.1 → 0.4
- `loader-square-element#2` opacity: 0.4 → –
- `loader-square-element#3` absent
- `loader-square-element#4` absent
- `loader-square-element#5` opacity: 0.1 → 0.4
- `loader-square-element#6` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1

### Property 1=Variant8

- `loader-square-element` absent
- `loader-square-element#2` opacity: 0.4 → –
- `loader-square-element#3` absent
- `loader-square-element#4` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · sizing fixed/fixed · fill BACKGROUND/Primary · opacity 0.4


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |

## Values without variable

- `(root)` paddingTop 4 (8/8 variants)
- `(root)` paddingRight 4 (8/8 variants)
- `(root)` paddingBottom 4 (8/8 variants)
- `(root)` paddingLeft 4 (8/8 variants)
- `loader-square-element` fixed width 4, height 4 (5/8 variants)
- `loader-square-element#2` fixed width 4, height 4 (5/8 variants)
- `loader-square-element#3` fixed width 4, height 4 (5/8 variants)
- `loader-square-element#4` fixed width 4, height 4 (4/8 variants)
- `loader-square-element#5` fixed width 4, height 4 (6/8 variants)
- `loader-square-element#6` fixed width 4, height 4 (5/8 variants)
- `loader-square-element#7` fixed width 4, height 4 (4/8 variants)
- `loader-square-element#8` fixed width 4, height 4 (2/8 variants)
- `loader-square-element#9` fixed width 4, height 4 (1/8 variants)
- `[run 1]` fixed width 4, height 4 (7/8 variants)
- `[run 2]` fixed width 4, height 4 (5/8 variants)
- `[run 3]` fixed width 4, height 4 (3/8 variants)

## Nested components

none

## Icons

none
