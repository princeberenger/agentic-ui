# CheckboxGroup — 4066:5501

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-5501
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Checkbox/CheckboxGroup.figma.ts)

## Props

- **Show label** boolean (default true)
- **Label text** text (default "Label")
- **Show helper text** boolean (default true)
- **Type** variant: horizontal | vertical (default vertical)
- **Items** variant: 3 | 4 | 5 (default 3)

## Variants (5)

- Type=vertical, Items=4 — 128×189
- Type=vertical, Items=3 — 128×157 (base)
- Type=horizontal, Items=3 — 252×93
- Type=horizontal, Items=4 — 344×93
- Type=vertical, Items=5 — 128×221

## Base tree — Type=vertical, Items=3

- **Type=vertical, Items=3** `component` size 128×157 · sizing fixed/hug · layout column align min/min · padding 0 0 0 0 · gap 8=PADDING/8
  - **label-container** `frame` size 128×22 · sizing fill/hug · layout row align min/center · padding 0 0 4=PADDING/4 0 · gap 0
    - **Label** `text` size 37×18 · sizing hug/hug · text "Label" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **Checkbox with label** ×3 `instance` size 68×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Checkbox with label › State=default, Selected=false, Style=no-background · props Description="Description text", Label="Label", Show description=false
  - **HelperText** `instance` size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=default, Size=sm, Style=light · props show Icon=true, Label="Helper text"

## Differences vs base

### Type=vertical, Items=4

- `(root)` size: 128×157 → 128×189
- `[run 1]` count: 3 → 4

### Type=horizontal, Items=3

- `(root)` size: 128×157 → 252×93
- `(root)` sizing: fixed/hug → hug/hug
- `label-container` size: 128×22 → 252×22
- `[run 1]` absent
- `Frame 1` only here: size 252×24 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 24=PADDING/24
- `Frame 1/[run 1]` only here: size 68×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Checkbox with label › State=default, Selected=false, Style=no-background · props Description="Description text", Label="Label", Show description=false

### Type=horizontal, Items=4

- `(root)` size: 128×157 → 344×93
- `(root)` sizing: fixed/hug → hug/hug
- `label-container` size: 128×22 → 344×22
- `[run 1]` absent
- `Frame 1` only here: size 344×24 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 24=PADDING/24
- `Frame 1/[run 1]` only here: size 68×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Checkbox with label › State=default, Selected=false, Style=no-background · props Description="Description text", Label="Label", Show description=false

### Type=vertical, Items=5

- `(root)` size: 128×157 → 128×221
- `[run 1]` count: 3 → 5


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 128 (3/5 variants)
- `HelperText` fixed height 31 (5/5 variants)

## Nested components

- Checkbox with label (815:75) — connected: app/components/Checkbox/CheckboxWithLabel.figma.ts
- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts

## Icons

none
