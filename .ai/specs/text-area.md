# Text area — 2003:3900

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2003-3900
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Textarea/Textarea.figma.ts)

## Props

- **Show Label** boolean (default true)
- **Label** text (default "Text area label")
- **Text** text (default "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.")
- **Show helper text** boolean (default true)
- **Placeholder** text (default "Placeholder")
- **Scrolfade** boolean (default true)
- **State** variant: default | disabled | error | filled | readonly | selected (default default)

## Variants (6)

- State=default — 288×157 (base)
- State=selected — 288×157
- State=filled — 288×157
- State=readonly — 288×157
- State=error — 288×157
- State=disabled — 288×157

## Base tree — State=default

- **State=default** `component` size 288×157 · sizing fixed/hug · layout column align min/min · padding 0 0 0 0 · gap 0=PADDING/none
  - **Input label** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 0 0 · gap 0
    - **Label margin** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 8 0 · gap 8
      - **Label text** `text` size 110×18 · sizing hug/hug · text "Text area label" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary
  - **Text input** `frame` size 288×100 · sizing fill/fixed · layout row align min/min · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Primary · stroke 1=default inside BORDER/Subtle · radius 10=10
    - **Placeholder** `text` size 264×76 · sizing fill/fill · text "Placeholder" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary
  - **HelperText** `instance` size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=default, Size=sm, Style=light · props show Icon=true, Label="Helper text"

## Differences vs base

### State=selected

- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/Placeholder` absent
- `Text input/To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.` only here: size 264×76 · sizing fill/fill · text "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations." · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### State=filled

- `Text input/Placeholder` absent
- `Text input/SCROLL FADE` only here: size 288×48 · sizing fixed/hug · layout row align space_between/max · padding 0=PADDING/none 0=PADDING/none 8=PADDING/8 0=PADDING/none · gap 0 · fill gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 · effect background_blur 2  (no style) · instance SCROLL FADE › Mode=Light
- `Text input/To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.` only here: size 264×76 · sizing fill/fill · text "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations." · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### State=readonly

- `Text input` fill: BACKGROUND/Primary → BACKGROUND/Secondary
- `Text input/Placeholder` absent
- `Text input/To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.` only here: size 264×76 · sizing fill/fill · text "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations." · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary

### State=error

- `Text input` fill: BACKGROUND/Primary → –
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/Placeholder` absent
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=error, Size=sm, Style=light
- `Text input/To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.` only here: size 264×76 · sizing fill/fill · text "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations." · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
- `HelperText/helper-text-bg/icon/Status notification/icon` only here: fill CONTENT/Attention

### State=disabled

- `Input label/Label margin/Label text` color: CONTENT/Primary → CONTENT/Disabled
- `Text input` fill: BACKGROUND/Primary → BACKGROUND/Secondary
- `Text input/Placeholder` absent
- `Text input/To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.` only here: size 264×76 · sizing fill/fill · text "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations." · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Attention (Light) | `var(--color-bg-attention-light)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Attention | `var(--color-border-attention)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| size/Small | `var(--text-small)` | ok |
| TRANSPARENT/white/0 | `var(--color-transparent-white-0)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- fill: Gradient/Scrollfade (Light)(V1)
- fills: Gradient/Scrollfade (Light)(V1)
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 288 (6/6 variants)
- `Input label/Label margin` paddingBottom 8 (6/6 variants)
- `Text input` fixed height 100 (6/6 variants)
- `HelperText` fixed height 31 (6/6 variants)
- `Text input/SCROLL FADE` effect background_blur 2  (no style) (1/6 variants)
- `Text input/SCROLL FADE` fixed width 288 (1/6 variants)

## Nested components

- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts
- SCROLL FADE (4092:1131) — connected: app/components/ScrollFade/ScrollFade.figma.ts

## Icons

none
