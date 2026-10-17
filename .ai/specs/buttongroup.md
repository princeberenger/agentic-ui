# ButtonGroup — 4092:2459

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-2459
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ButtonGroup/ButtonGroup.figma.ts)

## Props

- **Size** variant: lg | md | sm (default lg)

## Variants (3)

- Size=lg — 174×40 (base)
- Size=sm — 112×24
- Size=md — 128×32

## Base tree — Size=lg

- **Size=lg** `component` size 174×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
  - **Button** `instance` size 82×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Cancel"
  - **Button** `instance` size 82×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Primary · radius 10=10 · instance Button › Size=lg, Style=primary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Launch"

## Differences vs base

### Size=sm

- `(root)` size: 174×40 → 112×24
- `Button` size: 82×40 → 51×24
- `Button` padding: 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` radius: 10=10 → 6=6
- `Button` instance: Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none → Button › Size=sm, Style=secondary, Type=text, State=default, Icon position=none
- `Button#2` size: 82×40 → 51×24
- `Button#2` padding: 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button#2` radius: 10=10 → 6=6
- `Button#2` instance: Button › Size=lg, Style=primary, Type=text, State=default, Icon position=none → Button › Size=sm, Style=primary, Type=text, State=default, Icon position=none

### Size=md

- `(root)` size: 174×40 → 128×32
- `Button` size: 82×40 → 59×32
- `Button` padding: 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `Button` instance: Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none → Button › Size=md, Style=secondary, Type=text, State=default, Icon position=none
- `Button#2` size: 82×40 → 59×32
- `Button#2` padding: 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `Button#2` instance: Button › Size=lg, Style=primary, Type=text, State=default, Icon position=none → Button › Size=md, Style=primary, Type=text, State=default, Icon position=none


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Primary | `var(--color-button-primary)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Values without variable

- `(root)` gap 10 (3/3 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

none
