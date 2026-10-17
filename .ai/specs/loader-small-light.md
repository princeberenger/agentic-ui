# LOADER SMALL (LIGHT) — 713:2805

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=713-2805
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Property 1** variant: Default | Variant2 | Variant3 | Variant4 | Variant5 | Variant6 | Variant7 | Variant8 (default Default)

## Variants (8)

- Property 1=Default — 12×12 (base)
- Property 1=Variant2 — 12×12
- Property 1=Variant3 — 12×12
- Property 1=Variant4 — 12×12
- Property 1=Variant5 — 12×12
- Property 1=Variant6 — 12×12
- Property 1=Variant7 — 12×12
- Property 1=Variant8 — 12×12

## Base tree — Property 1=Default

- **Property 1=Default** `component` size 12×12
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.1
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.4
  - **loader-square-element** `rectangle` size 4×4 · fill BACKGROUND/Primary · opacity 0.1

## Differences vs base

### Property 1=Variant2

- `loader-square-element` opacity: 0.1 → 0.4
- `loader-square-element#2` opacity: 0.4 → 0.1
- `loader-square-element#3` opacity: – → 0.4
- `loader-square-element#4` absent
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#7` opacity: 0.1 → 0.5
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1

### Property 1=Variant3

- `loader-square-element` absent
- `loader-square-element#2` absent
- `loader-square-element#4` opacity: 0.4 → 0.1
- `loader-square-element#5` absent
- `loader-square-element#6` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant4

- `loader-square-element#2` absent
- `loader-square-element#3` absent
- `loader-square-element#4` absent
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#6` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant5

- `loader-square-element` absent
- `loader-square-element#2` absent
- `loader-square-element#3` opacity: – → 0.1
- `loader-square-element#5` opacity: 0.1 → –
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1
- `[run 2]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4

### Property 1=Variant6

- `loader-square-element` opacity: 0.1 → –
- `loader-square-element#3` opacity: – → 0.1
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4

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
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1

### Property 1=Variant8

- `loader-square-element` absent
- `loader-square-element#2` opacity: 0.4 → –
- `loader-square-element#3` absent
- `loader-square-element#4` absent
- `loader-square-element#7` absent
- `loader-square-element#8` absent
- `loader-square-element#9` absent
- `[run 1]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4
- `[run 2]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.1
- `[run 3]` only here: size 4×4 · fill BACKGROUND/Primary · opacity 0.4


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| ICONS/12 | `var(--icon-12)` | ok |

## Values without variable

none

## Nested components

none

## Icons

none
