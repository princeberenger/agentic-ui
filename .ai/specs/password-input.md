# Password input — 6133:736

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-736
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Input/PasswordInput.figma.ts)

## Props

- **Show label** boolean (default true)
- **Password match** boolean (default true)
- **Show helper text** boolean (default true)
- **Show validation** boolean (default true)
- **Placeholder text** text (default "••••••••")
- **Input text** text (default "••••••••")
- **Label text** text (default "Password")
- **Size** variant: md | sm (default md)
- **State** variant: default | disabled | error | error-2 | focus | hover | success (default default)
- **Text filled** variant: false | true (default false)

## Variants (18)

- Size=md, State=default, Text filled=false — 288×197 (base)
- Size=sm, State=default, Text filled=false — 288×189
- Size=md, State=focus, Text filled=false — 288×197
- Size=sm, State=focus, Text filled=false — 288×189
- Size=md, State=focus, Text filled=true — 288×197
- Size=sm, State=focus, Text filled=true — 288×189
- Size=md, State=default, Text filled=true — 288×197
- Size=sm, State=default, Text filled=true — 288×189
- Size=md, State=error, Text filled=true — 288×197
- Size=sm, State=success, Text filled=true — 288×189
- Size=md, State=success, Text filled=true — 288×197
- Size=sm, State=error, Text filled=true — 288×189
- Size=md, State=disabled, Text filled=false — 288×97
- Size=sm, State=disabled, Text filled=false — 288×89
- Size=md, State=hover, Text filled=false — 288×197
- Size=sm, State=hover, Text filled=false — 288×189
- Size=md, State=error-2, Text filled=true — 288×97
- Size=sm, State=error-2, Text filled=true — 288×89

## Base tree — Size=md, State=default, Text filled=false

- **Size=md, State=default, Text filled=false** `component` size 288×197 · sizing fixed/hug · minWidth 64=64px (4rem) (spacing-10) · layout column align min/min · padding 0 0 0 0 · gap 0=PADDING/none
  - **Input label** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 0 0 · gap 0
    - **Label margin** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 8 0 · gap 8
      - **Label text** `text` size 59×18 · sizing hug/hug · text "Password" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **Text input** `frame` size 288×40 · sizing fill/fixed · layout row align min/center · padding 0=PADDING/none 12=PADDING/12 0=PADDING/none 12=PADDING/12 · gap 0=PADDING/none · fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle · radius 10=10
    - **••••••••** `text` size 264×18 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary
  - **Validation Text (Password)** `instance` size 288×131 · sizing fill/hug · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 2=PADDING/2 · instance Validation Text (Password) › # of Rules=5

## Differences vs base

### Size=sm, State=default, Text filled=false

- `(root)` size: 288×197 → 288×189
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input/••••••••` size: 264×18 → 264×15
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal

### Size=md, State=focus, Text filled=false

- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/••••••••` size: 264×18 → 263×18
- `Text input/••••••••` sizing: fill/hug → fixed/fixed
- `Text input/••••••••` hidden: – → true
- `Text input/Cursor blink animation` only here: size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Cursor blink animation › State=Visible

### Size=sm, State=focus, Text filled=false

- `(root)` size: 288×197 → 288×189
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/••••••••` size: 264×18 → 263×15
- `Text input/••••••••` sizing: fill/hug → fixed/fixed
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/••••••••` hidden: – → true
- `Text input/Cursor blink animation` only here: size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Cursor blink animation › State=Visible

### Size=md, State=focus, Text filled=true

- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 264×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=focus, Text filled=true

- `(root)` size: 288×197 → 288×189
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 264×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=default, Text filled=true

- `(root)` gap: 0=PADDING/none → 0
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 264×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=default, Text filled=true

- `(root)` size: 288×197 → 288×189
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 264×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=error, Text filled=true

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Primary
- `Validation Text (Password)/validation-text-line` only here: instance validation-text-line › Type=Success · props Label="1 Number"

### Size=sm, State=success, Text filled=true

- `(root)` size: 288×197 → 288×189
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Success
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 250×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `Text input/Icons / Checkmark` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark
- `Text input/Icons / Checkmark/icon-color` only here: fill CONTENT/Success
- `Validation Text (Password)/validation-text-line` only here: instance validation-text-line › Type=Success · props Label="1 Number"

### Size=md, State=success, Text filled=true

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Success
- `Text input/••••••••` absent
- `Text input/text-text` only here: size 250×24 · sizing fill/hug · text "••••••••" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `Text input/Icons / Checkmark` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark
- `Text input/Icons / Checkmark/icon-color` only here: fill CONTENT/Success
- `Validation Text (Password)/validation-text-line` only here: instance validation-text-line › Type=Success · props Label="1 Number"

### Size=sm, State=error, Text filled=true

- `(root)` size: 288×197 → 288×189
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/••••••••` size: 264×18 → 264×15
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Primary
- `Validation Text (Password)/validation-text-line` only here: instance validation-text-line › Type=Success · props Label="1 Number"

### Size=md, State=disabled, Text filled=false

- `(root)` size: 288×197 → 288×97
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Disabled
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Disabled
- `Validation Text (Password)` absent
- `Input label/Resizer` only here: size 0×0 · sizing fixed/hug · layout row align min/min · padding 0 0 0 0 · gap 0 · opacity 0 · instance Resizer
- `HelperText` only here: size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=default, Size=sm, Style=light · props show Icon=true, Label="Helper text"

### Size=sm, State=disabled, Text filled=false

- `(root)` size: 288×197 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Disabled
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/••••••••` size: 264×18 → 264×15
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Disabled
- `Validation Text (Password)` absent
- `HelperText` only here: size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=default, Size=sm, Style=light · props show Icon=true, Label="Helper text"

### Size=md, State=hover, Text filled=false

- `(root)` gap: 0=PADDING/none → 0
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Secondary

### Size=sm, State=hover, Text filled=false

- `(root)` size: 288×197 → 288×189
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Secondary
- `Text input/••••••••` size: 264×18 → 264×15
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal

### Size=md, State=error-2, Text filled=true

- `(root)` size: 288×197 → 288×97
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Primary
- `Validation Text (Password)` absent
- `HelperText` only here: size 170×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=error, Size=sm, Style=light · props show Icon=true, Label="Password is incorrect"

### Size=sm, State=error-2, Text filled=true

- `(root)` size: 288×197 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/••••••••` size: 264×18 → 264×15
- `Text input/••••••••` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/••••••••` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/••••••••` color: CONTENT/Secondary → CONTENT/Primary
- `Validation Text (Password)` absent
- `HelperText` only here: size 127×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=error, Size=sm, Style=light · props show Icon=true, Label="Error message"


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316 | – | unresolved id |
| 10 | `var(--radius-10)` | ok |
| 64px (4rem) (spacing-10) | `spacing-10` | external library variable |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Attention | `var(--color-border-attention)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BORDER/Success | `var(--color-border-success)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/md/regular
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/regular
- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 288 (18/18 variants)
- `Input label/Label margin` paddingBottom 8 (18/18 variants)
- `Text input/Cursor blink animation` fixed width 1, height 17 (2/18 variants)
- `Text input` fixed height 32 (1/18 variants)
- `Text input/Icons / Checkmark` fixed width 14, height 14 (2/18 variants)
- `Input label/Resizer` fixed width 0 (1/18 variants)
- `HelperText` fixed height 31 (4/18 variants)

## Nested components

- Validation Text (Password) (6133:1245) — connected: app/components/ValidationText/ValidationText.figma.ts
- Cursor blink animation (338:6698) — connected: app/components/CursorBlink/CursorBlink.figma.ts
- Resizer (558:651) — not connected
- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
