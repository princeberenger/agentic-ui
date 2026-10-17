# CopyButton — 4124:12068

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-12068
- Extracted: 2026-10-17
- Code Connect: yes (app/components/CodeBlock/CopyButton.figma.ts)

## Props

- **State** variant: default | disabled | focus | hover | pressed (default default)
- **Size** variant: lg | sm (default lg)

## Variants (7)

- State=default, Size=lg — 32×32 (base)
- State=hover, Size=lg — 32×32
- State=focus, Size=lg — 32×32
- State=pressed, Size=lg — 32×32
- State=default, Size=sm — 16×16
- State=hover, Size=sm — 16×16
- State=disabled, Size=lg — 32×32

## Base tree — State=default, Size=lg

- **State=default, Size=lg** `component` size 32×32 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0 · radius 4=4
  - **Button** `instance` size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · radius 10=10 · instance Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Copy

## Differences vs base

### State=hover, Size=lg

- `(root)` radius: 4=4 → –
- `Button` instance: Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none → Button › Size=md, Style=ghost, Type=icon-only, State=hover, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Copy → Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Copy
- `Button` fill: – → BUTTON/Secondary + INPUT/Hover (Dark)@0.04
- `Button/icon` only here: size 16×16
- `Tooltip item` only here: size 122×27 · sizing hug/hug · layout column align max/center · padding 0 0 0 0 · gap 0 · instance Tooltip › Position=Bottom, Caret alignment=Center · props Tooltip text="Copy to clipboard"

### State=focus, Size=lg

- `(root)` radius: 4=4 → –
- `(root)` effect: – → Components/Focus
- `Button` stroke: – → 1.5=md inside BORDER/Accent
- `Tooltip item` only here: size 122×27 · sizing hug/hug · layout column align max/center · padding 0 0 0 0 · gap 0 · instance Tooltip › Position=Bottom, Caret alignment=Center · props Tooltip text="Copy to clipboard"

### State=pressed, Size=lg

- `(root)` size.vars: – → ICONS/32 × ICONS/32
- `Button` instance: Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none → Button › Size=md, Style=ghost, Type=icon-only, State=hover, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Copy → Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Copy
- `Button` fill: – → BUTTON/Secondary + INPUT/Hover (Dark)@0.04
- `Button/icon` only here: size 16×16
- `Tooltip item` only here: size 58×27 · sizing hug/hug · layout column align max/center · padding 0 0 0 0 · gap 0 · instance Tooltip › Position=Bottom, Caret alignment=Center · props Tooltip text="Copied"

### State=default, Size=sm

- `(root)` size: 32×32 → 16×16
- `Button` size: 32×32 → 16×16
- `Button` size.vars: ICONS/32 × ICONS/32 → ICONS/16 × ICONS/16
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` radius: 10=10 → 6=6
- `Button` instance: Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none → Button › Size=xs, Style=ghost, Type=icon-only, State=default, Icon position=none
- `Button/icon` only here: size 13×13

### State=hover, Size=sm

- `(root)` size: 32×32 → 16×16
- `(root)` radius: 4=4 → –
- `Button` size: 32×32 → 16×16
- `Button` size.vars: ICONS/32 × ICONS/32 → ICONS/16 × ICONS/16
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` radius: 10=10 → 4=4
- `Button` instance: Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none → Button › Size=xs, Style=ghost, Type=icon-only, State=hover, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Copy → Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Copy
- `Button` fill: – → BUTTON/Secondary + INPUT/Hover (Dark)@0.04
- `Tooltip` only here: size 122×27 · sizing hug/hug · layout column align max/center · padding 0 0 0 0 · gap 0 · instance Tooltip › Position=Bottom, Caret alignment=Center · props Tooltip text="Copy to clipboard"

### State=disabled, Size=lg

- `Button` instance: Button › Size=md, Style=ghost, Type=icon-only, State=default, Icon position=none → Button › Size=md, Style=ghost, Type=icon-only, State=disabled, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Copy → Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Copy
- `Button/icon/Vector (Stroke)` only here: fill CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| 10 | `var(--radius-10)` | ok |
| 4 | `var(--radius-xs)` | ok |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Accent | – | no WEB code syntax |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| md | `var(--stroke-md)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| sm | `var(--stroke-sm)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |

## Styles

- effect: Components/Focus

## Values without variable

none

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- Tooltip (2001:2681) — connected: app/components/Tooltip/Tooltip.figma.ts

## Icons

none
