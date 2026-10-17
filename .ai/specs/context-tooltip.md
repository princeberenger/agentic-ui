# CONTEXT-TOOLTIP — 8017:42354

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-42354
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ContextTooltip.figma.ts)

## Props

- **Progress** text (default "15%")
- **Label 2** text (default "40k")
- **Label 3** text (default "128k")
- **Label 4** text (default "32k")
- **Label 5** text (default "$0.04")
- **Label 6** text (default "8k")
- **Label 7** text (default "$0.08")
- **Label 8** text (default "Total cost")
- **Label 9** text (default "$0.12")
- **Show total** boolean (default true)

## Variants (1)

- CONTEXT-TOOLTIP — 220×139 (base)

## Base tree — CONTEXT-TOOLTIP

- **CONTEXT-TOOLTIP** `component` size 220×139 · sizing fixed/hug · minWidth 132 · layout column align min/min · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0 · fill BACKGROUND/menu/background · stroke 0.5=sm outside BORDER/Medium · radius 10=10 · effect Shadows/elevation2
  - **blur** `rectangle` size 218×128 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
  - **Text overflow + Menu style** `frame` size 220×44 · sizing fill/hug · layout column align center/min · padding 12=PADDING/12 12=PADDING/12 0 12=PADDING/12 · gap 8=PADDING/8
    - **line** `frame` size 196×12 · sizing fill/fixed · layout row align min/center · padding 0 0 0 0 · gap 12
      - **15%** `text` size 92×12 · sizing fill/fill · text "15%" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
      - **Frame 48** `frame` size 92×12 · sizing fill/fill · layout row align max/center · padding 0 0 0 0 · gap 4
        - **40k** `text` size 25×15 · sizing hug/hug · text "40k" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
        - **/** `text` size 7×18 · sizing hug/hug · text "/" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Disabled
        - **128k** `text` size 29×15 · sizing hug/hug · text "128k" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **ProgressBar** `instance` size 196×12 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 12=PADDING/12 · instance ProgressBar › Progress=10 · props Show counter=false
  - **Text overflow + Menu style** `frame` size 220×56 · sizing fill/hug · layout column align center/min · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 2=PADDING/2
    - **line** `frame` size 196×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 12
      - **Input** `text` size 92×15 · sizing fill/fill · text "Input" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
      - **Frame 48** `frame` size 92×15 · sizing fill/fill · layout row align max/center · padding 0 0 0 0 · gap 4
        - **32k** `text` size 24×15 · sizing hug/hug · text "32k" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
        - **/** `text` size 7×15 · sizing hug/hug · text "/" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Disabled
        - **$0.04** `text` size 36×15 · sizing hug/hug · text "$0.04" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **line** `frame` size 196×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 12
      - **Output** `text` size 92×15 · sizing fill/fill · text "Output" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
      - **Frame 48** `frame` size 92×15 · sizing fill/fill · layout row align max/center · padding 0 0 0 0 · gap 4
        - **8k** `text` size 16×15 · sizing hug/hug · text "8k" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
        - **/** `text` size 7×15 · sizing hug/hug · text "/" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Disabled
        - **$0.08** `text` size 36×15 · sizing hug/hug · text "$0.08" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
  - **Text overflow + Menu style** `frame` size 220×39 · sizing fill/hug · layout column align center/min · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 2=PADDING/2 · fill BACKGROUND/Secondary · radius 10=10
    - **line** `frame` size 196×15 · sizing fill/hug · layout row align min/center · padding 0=PADDING/none 0 0 0 · gap 12
      - **Total cost** `text` size 92×15 · sizing fill/fill · text "Total cost" · font SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
      - **Frame 48** `frame` size 92×15 · sizing fill/fill · layout row align max/center · padding 0 0 0 0 · gap 4
        - **$0.12** `text` size 32×15 · sizing hug/hug · text "$0.12" · font SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
  - **internal-border** `rectangle` size 220×139 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 10=10

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/menu/background | – | no WEB code syntax |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation2
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/bold
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed width 220
- `blur` effect layer_blur 0  (no style)
- `blur` fixed width 218, height 128
- `Text overflow + Menu style/line` gap 12
- `Text overflow + Menu style/line` fixed height 12
- `Text overflow + Menu style/line/Frame 48` gap 4
- `Text overflow + Menu style#2/line` gap 12
- `Text overflow + Menu style#2/line/Frame 48` gap 4
- `Text overflow + Menu style#2/line#2` gap 12
- `Text overflow + Menu style#2/line#2/Frame 48` gap 4
- `Text overflow + Menu style#3/line` gap 12
- `internal-border` fixed width 220, height 139

## Nested components

- ProgressBar (4115:7289) — connected: app/components/ProgressBar/ProgressBar.figma.ts

## Icons

none
