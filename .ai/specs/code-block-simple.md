# Code block (Simple) — 4126:5641

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4126-5641
- Extracted: 2026-10-17
- Code Connect: yes (app/components/CodeBlock/CodeBlockSimple.figma.ts)

## Props

- **Code text** text (default "$ npm install --agentic-ui")
- **Show "Copy" button** boolean (default true)
- **State** variant: default | disabled | focus | hover | loading (default default)

## Variants (5)

- State=default — 400×48 (base)
- State=hover — 400×48
- State=focus — 400×48
- State=disabled — 400×48
- State=loading — 400×36

## Base tree — State=default

- **State=default** `component` size 400×48 · sizing fixed/hug · layout column align min/min · padding 12=PADDING/12 64=PADDING/64 12=PADDING/12 16=PADDING/16 · gap 0 · fill BACKGROUND/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10
  - **code-wrapper** `frame` size 320×24 · sizing fill/hug · layout row align center/center · padding 0 0 0 0 · gap 10
    - **$ npm install --agentic-ui** `text` size 320×24 · sizing fill/hug · text "$ npm install --agentic-ui" · font SYSTEM/Code/lg · JetBrains Mono 400 16/24 ls 0 · font.vars family/code, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
  - **CopyButton** `instance` size 32×32 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0 · radius 4=4 · instance CopyButton › State=default, Size=lg

## Differences vs base

### State=hover

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `CopyButton` radius: 4=4 → –
- `CopyButton` instance: CopyButton › State=default, Size=lg → CopyButton › State=hover, Size=lg

### State=focus

- `(root)` effect: – → Components/Focus

### State=disabled

- `(root)` stroke: 0.5=sm inside BORDER/Subtle → –
- `code-wrapper/$ npm install --agentic-ui` color: CONTENT/Primary → CONTENT/Disabled
- `CopyButton/Button/icon/Vector (Stroke)` only here: fill CONTENT/Disabled

### State=loading

- `(root)` size: 400×48 → 400×36
- `(root)` stroke: 0.5=sm inside BORDER/Subtle → –
- `code-wrapper` absent
- `code-wrapper/$ npm install --agentic-ui` absent
- `CopyButton` absent
- `Skeleton loading animation` only here: size 320×12 · sizing fill/fixed · instance Skeleton loading animation › Phase=1


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| 10 | `var(--radius-10)` | ok |
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/code | `var(--font-code)` | ok |
| ICONS/12 | `var(--icon-12)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/64 | – | no WEB code syntax |
| size/Regular | `var(--text-regular)` | ok |
| sm | `var(--stroke-sm)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Components/Focus
- text: SYSTEM/Code/lg

## Values without variable

- `(root)` fixed width 400 (5/5 variants)

## Nested components

- CopyButton (4124:12068) — connected: app/components/CodeBlock/CopyButton.figma.ts
- Skeleton loading animation (761:23192) — connected: app/components/Skeleton/Skeleton.figma.ts

## Icons

none
