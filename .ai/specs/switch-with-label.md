# Switch with label — 816:3579

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=816-3579
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Switch/SwitchWithLabel.figma.ts)

## Props

- **Show Label** boolean (default true)
- **Show Description** boolean (default true)
- **Label** text (default "Label")
- **Description** text (default "Description text goes here")
- **Selected** variant: false | true (default false)
- **State** variant: default | disabled (default default)
- **Position** variant: left | right (default left)

## Variants (8)

- Selected=false, State=default, Position=left — 217×37 (base)
- Selected=false, State=default, Position=right — 217×37
- Selected=true, State=default, Position=left — 217×37
- Selected=true, State=default, Position=right — 217×37
- Selected=true, State=disabled, Position=left — 217×37
- Selected=true, State=disabled, Position=right — 217×37
- Selected=false, State=disabled, Position=left — 217×37
- Selected=false, State=disabled, Position=right — 217×37

## Base tree — Selected=false, State=default, Position=left

- **Selected=false, State=default, Position=left** `component` size 217×37 · sizing fixed/hug · layout row align min/min · padding 0 0 0 0 · gap 12=PADDING/12
  - **Switch** `instance` size 29×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0 · fill SWITCH/bg/inactive · radius 9999=full · effect inner_shadow 0,1 2 #0000001f (no style) · instance Switch › Selected=false, State=default, Size=sm
  - **label** `frame` size 157×37 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
    - **Label** `text` size 157×18 · sizing fill/hug · text "Label" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
    - **Description text goes here** `text` size 157×15 · sizing hug/hug · text "Description text goes here" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### Selected=false, State=default, Position=right

- `(root)` layout: row align min/min → row align space_between/min
- `(root)` gap: 12=PADDING/12 → 12

### Selected=true, State=default, Position=left

- `Switch` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=true, State=default, Size=sm

### Selected=true, State=default, Position=right

- `(root)` layout: row align min/min → row align space_between/min
- `(root)` gap: 12=PADDING/12 → 12
- `Switch` fill: SWITCH/bg/inactive → SWITCH/bg/active
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=true, State=default, Size=sm

### Selected=true, State=disabled, Position=left

- `Switch` fill: SWITCH/bg/inactive → –
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=true, State=disabled, Size=sm
- `Switch` stroke: – → 1 inside BORDER/Subtle
- `label/Label` color: CONTENT/Primary → CONTENT/Secondary

### Selected=true, State=disabled, Position=right

- `(root)` layout: row align min/min → row align space_between/min
- `(root)` gap: 12=PADDING/12 → 12
- `Switch` fill: SWITCH/bg/inactive → –
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=true, State=disabled, Size=sm
- `Switch` stroke: – → 1 inside BORDER/Subtle
- `label/Label` color: CONTENT/Primary → CONTENT/Secondary

### Selected=false, State=disabled, Position=left

- `Switch` fill: SWITCH/bg/inactive → –
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=false, State=disabled, Size=sm
- `Switch` stroke: – → 1 inside BORDER/Disabled
- `label/Label` color: CONTENT/Primary → CONTENT/Secondary

### Selected=false, State=disabled, Position=right

- `(root)` layout: row align min/min → row align space_between/min
- `(root)` gap: 12=PADDING/12 → 12
- `Switch` fill: SWITCH/bg/inactive → –
- `Switch` effect: inner_shadow 0,1 2 #0000001f (no style) → –
- `Switch` instance: Switch › Selected=false, State=default, Size=sm → Switch › Selected=false, State=disabled, Size=sm
- `Switch` stroke: – → 1 inside BORDER/Disabled
- `label/Label` color: CONTENT/Primary → CONTENT/Secondary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BORDER/Disabled | `var(--color-border-disabled)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| SWITCH/bg/active | `var(--color-switch-bg-active)` | ok |
| SWITCH/bg/inactive | `var(--color-switch-bg-inactive)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed width 217 (8/8 variants)
- `Switch` effect inner_shadow 0,1 2 #0000001f (no style) (2/8 variants)
- `Switch` fixed width 29 (8/8 variants)
- `Switch` stroke weight 1 (4/8 variants)

## Nested components

- Switch (814:110) — connected: app/components/Switch/Switch.figma.ts

## Icons

none
