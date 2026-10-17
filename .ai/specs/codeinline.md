# CodeInline — 4124:7606

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-7606
- Extracted: 2026-10-17
- Code Connect: yes (app/components/CodeBlock/CodeInline.figma.ts)

## Props

- **Label** text (default "style_taxonomy")
- **State** variant: active | default | disabled | focus | hover (default default)

## Variants (5)

- State=default — 151×28 (base)
- State=hover — 151×28
- State=active — 151×28
- State=focus — 151×28
- State=disabled — 151×28

## Base tree — State=default

- **State=default** `component` size 151×28 · sizing fill/hug · layout row align center/center · padding 2=PADDING/2 8=PADDING/8 2=PADDING/2 8=PADDING/8 · gap 0 · fill BACKGROUND/Secondary · radius 4=4
  - **style_taxonomy** `text` size 135×24 · sizing hug/hug · text "style_taxonomy" · font SYSTEM/Code/lg · JetBrains Mono 400 16/24 ls 0 · font.vars family/code, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

## Differences vs base

### State=hover

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04

### State=active

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Tertiary

### State=focus

- `(root)` effect: – → Components/Focus

### State=disabled

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary On Elevated
- `style_taxonomy` color: CONTENT/Primary → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BACKGROUND/Secondary On Elevated | – | no WEB code syntax |
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/code | `var(--font-code)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Components/Focus
- text: SYSTEM/Code/lg

## Values without variable

none

## Nested components

none

## Icons

none
