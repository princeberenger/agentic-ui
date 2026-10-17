# Radio button with label — 812:4430

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=812-4430
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Radio/RadioWithLabel.figma.ts)

## Props

- **Label** text (default "Label")
- **Description** text (default "Description")
- **Show description** boolean (default true)
- **State** variant: default | disabled (default default)
- **Selected** variant: false | true (default false)

## Variants (4)

- State=default, Selected=false — 106×40 (base)
- State=disabled, Selected=false — 106×40
- State=default, Selected=true — 106×40
- State=disabled, Selected=true — 106×40

## Base tree — State=default, Selected=false

- **State=default, Selected=false** `component` size 106×40 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 8=PADDING/8
  - **Radio button** `instance` size 24×24 · sizing hug/hug · layout row align min/min · padding 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 · gap 0 · instance Radio button › State=default, Selected=false
  - **label** `frame` size 74×40 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
    - **Label** `text` size 36×18 · sizing hug/hug · text "Label" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
    - **Description** `text` size 74×18 · sizing hug/hug · text "Description" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### State=disabled, Selected=false

- `Radio button` instance: Radio button › State=default, Selected=false → Radio button › State=disabled, Selected=false
- `label/Label` color: CONTENT/Primary → CONTENT/Disabled
- `label/Description` color: CONTENT/Secondary → CONTENT/Disabled

### State=default, Selected=true

- `Radio button` instance: Radio button › State=default, Selected=false → Radio button › State=default, Selected=true
- `label/Label` size: 36×18 → 37×18
- `label/Label` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `label/Label` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### State=disabled, Selected=true

- `Radio button` instance: Radio button › State=default, Selected=false → Radio button › State=disabled, Selected=true
- `label/Label` size: 36×18 → 37×18
- `label/Label` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `label/Label` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `label/Label` color: CONTENT/Primary → CONTENT/Disabled
- `label/Description` color: CONTENT/Secondary → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Small | `var(--text-small)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/bold
- text: SYSTEM/Body/sm/regular

## Values without variable

none

## Nested components

- Radio button (124:2977) — connected: app/components/Radio/Radio.figma.ts

## Icons

none
