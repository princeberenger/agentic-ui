# ChatScrollButton — 6255:14244

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6255-14244
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatScrollButton.figma.ts)

## Props

- **Mode** variant: Light | Dark (default Light)
- **Type** variant: Icon | Icon + Text (default Icon)
- **Background** variant: On primary | On secondary (default On primary)

## Variants (8)

- Mode=Light, Type=Icon, Background=On primary — 360×48 (base)
- Mode=Light, Type=Icon, Background=On secondary — 360×48
- Mode=Light, Type=Icon + Text, Background=On primary — 360×48
- Mode=Light, Type=Icon + Text, Background=On secondary — 360×48
- Mode=Dark, Type=Icon, Background=On primary — 360×48
- Mode=Dark, Type=Icon, Background=On secondary — 360×48
- Mode=Dark, Type=Icon + Text, Background=On primary — 360×48
- Mode=Dark, Type=Icon + Text, Background=On secondary — 360×48

## Base tree — Mode=Light, Type=Icon, Background=On primary

- **Mode=Light, Type=Icon, Background=On primary** `component` size 360×48 · sizing fill/hug · layout row align center/max · padding 0=PADDING/none 0=PADDING/none 8=PADDING/8 0=PADDING/none · gap 0 · fill gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 · effect background_blur 2  (no style)
  - **Button** `instance` size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BUTTON/Primary · radius 9999=full · effect Shadows/elevation2 · instance Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Arrow--down
    - ↳ icon (override) fill CONTENT/On Primary

## Differences vs base

### Mode=Light, Type=Icon, Background=On secondary

- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1 + gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1

### Mode=Light, Type=Icon + Text, Background=On primary

- `Button` size: 32×32 → 85×24
- `Button` sizing: fixed/fixed → hug/fixed
- `Button` size.vars: ICONS/32 × ICONS/32 → –
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=sm, Style=primary, Type=text, State=default, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Arrow--down → Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Arrow--down, Label="New messages"
- `Button/icon/icon` absent

### Mode=Light, Type=Icon + Text, Background=On secondary

- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1 + gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1
- `Button` size: 32×32 → 85×24
- `Button` sizing: fixed/fixed → hug/fixed
- `Button` size.vars: ICONS/32 × ICONS/32 → –
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=sm, Style=primary, Type=text, State=default, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Arrow--down → Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Arrow--down, Label="New messages"
- `Button/icon/icon` absent

### Mode=Dark, Type=Icon, Background=On primary

- `(root)` gap: 0 → 10
- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1
- `Button` fill: BUTTON/Primary → BACKGROUND/Inverse
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=md, Style=secondary, Type=icon-only, State=default, Icon position=none
- `Button` stroke: – → 0.5=sm inside BORDER/Strong

### Mode=Dark, Type=Icon, Background=On secondary

- `(root)` gap: 0 → 10
- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(#19191900 0%, NEUTRAL/Neutral 800 100%) from 0.5,0 to 0.5,1 + gradient_linear(#19191900 0%, NEUTRAL/Neutral 800 100%) from 0.5,0 to 0.5,1
- `Button` fill: BUTTON/Primary → BACKGROUND/Inverse
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=md, Style=secondary, Type=icon-only, State=default, Icon position=none
- `Button` stroke: – → 0.5=sm inside BORDER/Strong

### Mode=Dark, Type=Icon + Text, Background=On primary

- `(root)` gap: 0 → 10
- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/black/0 0%, TRANSPARENT/black/100 100%) from 0.5,0 to 0.5,1
- `Button` size: 32×32 → 85×24
- `Button` sizing: fixed/fixed → hug/fixed
- `Button` size.vars: ICONS/32 × ICONS/32 → –
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` fill: BUTTON/Primary → BACKGROUND/Inverse
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=sm, Style=secondary, Type=text, State=default, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Arrow--down → Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Arrow--down, Label="New messages"
- `Button` stroke: – → 0.5=sm inside BORDER/Strong
- `Button/icon/icon` absent
- `Button/Label` only here: color CONTENT/On Primary

### Mode=Dark, Type=Icon + Text, Background=On secondary

- `(root)` gap: 0 → 10
- `(root)` fill: gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 + gradient_linear(TRANSPARENT/white/0 0%, BACKGROUND/Primary 100%) from 0.5,0 to 0.5,1 → gradient_linear(#19191900 0%, NEUTRAL/Neutral 800 100%) from 0.5,0 to 0.5,1 + gradient_linear(#19191900 0%, NEUTRAL/Neutral 800 100%) from 0.5,0 to 0.5,1
- `Button` size: 32×32 → 85×24
- `Button` sizing: fixed/fixed → hug/fixed
- `Button` size.vars: ICONS/32 × ICONS/32 → –
- `Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `Button` fill: BUTTON/Primary → BACKGROUND/Inverse
- `Button` instance: Button › Size=md, Style=primary, Type=icon-only, State=default, Icon position=none → Button › Size=sm, Style=secondary, Type=text, State=default, Icon position=none
- `Button` props: Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Arrow--down → Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Arrow--down, Label="New messages"
- `Button` stroke: – → 0.5=sm inside BORDER/Strong
- `Button/icon/icon` absent
- `Button/Label` only here: color CONTENT/On Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Inverse | `var(--color-bg-inverse)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BUTTON/Primary | `var(--color-button-primary)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| NEUTRAL/Neutral 800 | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| sm | `var(--stroke-sm)` | ok |
| TRANSPARENT/black/0 | – | no WEB code syntax |
| TRANSPARENT/black/100 | – | no WEB code syntax |
| TRANSPARENT/white/0 | – | no WEB code syntax |

## Styles

- effect: Shadows/elevation2
- fill: Gradient/Scrollfade (Dark)(V1)
- fill: Gradient/Scrollfade (Dark)(V2)
- fill: Gradient/Scrollfade (Light)(V1)
- fill: Gradient/Scrollfade (Light)(V2)
- fills: Gradient/Scrollfade (Dark)(V1)
- fills: Gradient/Scrollfade (Dark)(V2)
- fills: Gradient/Scrollfade (Light)(V1)
- fills: Gradient/Scrollfade (Light)(V2)

## Values without variable

- `(root)` effect background_blur 2  (no style) (8/8 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

none
