# Checkbox with label — 815:75

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=815-75
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Checkbox/CheckboxWithLabel.figma.ts)

## Props

- **Show description** boolean (default true)
- **Label** text (default "Label")
- **Description** text (default "Description text")
- **State** variant: default | disabled (default default)
- **Selected** variant: false | indeterminate | true (default false)
- **Style** variant: has-background | no-background (default no-background)

## Variants (9)

- State=default, Selected=false, Style=no-background — 135×40 (base)
- State=default, Selected=false, Style=has-background — 171×56
- State=disabled, Selected=false, Style=no-background — 135×40
- State=default, Selected=indeterminate, Style=no-background — 135×40
- State=default, Selected=indeterminate, Style=has-background — 171×56
- State=disabled, Selected=indeterminate, Style=no-background — 135×40
- State=default, Selected=true, Style=no-background — 135×40
- State=default, Selected=true, Style=has-background — 171×56
- State=disabled, Selected=true, Style=no-background — 135×40

## Base tree — State=default, Selected=false, Style=no-background

- **State=default, Selected=false, Style=no-background** `component` size 135×40 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 8=PADDING/8
  - **Checkbox** `instance` size 24×24 · sizing hug/hug · size.vars ICONS/24 × ICONS/24 · layout row align min/min · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance Checkbox › Type=stroke, State=default, Selected=false
  - **label** `frame` size 103×40 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 4
    - **Label** `text` size 103×18 · sizing fill/hug · text "Label" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
    - **Description text** `text` size 103×18 · sizing fill/hug · text "Description text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### State=default, Selected=false, Style=has-background

- `(root)` size: 135×40 → 171×56
- `(root)` padding: 0 0 0 0 → 8=PADDING/8 24=PADDING/24 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` radius: – → 10=10
- `Checkbox` sizing: hug/hug → fixed/fixed
- `Checkbox` size.vars: ICONS/24 × ICONS/24 → –
- `Checkbox` layout: row align min/min → row align center/center
- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=filled, State=default, Selected=false

### State=disabled, Selected=false, Style=no-background

- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=stroke, State=disabled, Selected=false
- `label/Label` color: CONTENT/Primary → CONTENT/Disabled
- `label/Description text` color: CONTENT/Secondary → CONTENT/Disabled

### State=default, Selected=indeterminate, Style=no-background

- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=stroke, State=default, Selected=indeterminate

### State=default, Selected=indeterminate, Style=has-background

- `(root)` size: 135×40 → 171×56
- `(root)` padding: 0 0 0 0 → 8=PADDING/8 24=PADDING/24 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` radius: – → 10=10
- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=filled, State=default, Selected=indeterminate

### State=disabled, Selected=indeterminate, Style=no-background

- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=stroke, State=disabled, Selected=indeterminate
- `label/Label` color: CONTENT/Primary → CONTENT/Disabled
- `label/Description text` color: CONTENT/Secondary → CONTENT/Disabled

### State=default, Selected=true, Style=no-background

- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=stroke, State=default, Selected=true
- `label/Label` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `label/Label` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### State=default, Selected=true, Style=has-background

- `(root)` size: 135×40 → 171×56
- `(root)` padding: 0 0 0 0 → 8=PADDING/8 24=PADDING/24 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` radius: – → 10=10
- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=filled, State=default, Selected=true
- `label/Label` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `label/Label` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### State=disabled, Selected=true, Style=no-background

- `Checkbox` instance: Checkbox › Type=stroke, State=default, Selected=false → Checkbox › Type=stroke, State=disabled, Selected=true
- `label/Label` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `label/Label` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `label/Label` color: CONTENT/Primary → CONTENT/Disabled
- `label/Description text` color: CONTENT/Secondary → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Small | `var(--text-small)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/bold
- text: SYSTEM/Body/sm/regular

## Values without variable

- `label` gap 4 (9/9 variants)
- `Checkbox` fixed width 24 (1/9 variants)

## Nested components

- Checkbox (124:2639) — connected: app/components/Checkbox/Checkbox.figma.ts

## Icons

none
