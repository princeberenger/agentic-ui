# Text input — 761:20738

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Input/TextInput.figma.ts)

## Props

- **Show label** boolean (default true)
- **Show helper** boolean (default true)
- **Placeholder text** text (default "Placeholder")
- **Input text** text (default "Text")
- **Label text** text (default "Label")
- **Size** variant: md | sm (default md)
- **State** variant: default | disabled | error | focus | hover | success | warning (default default)
- **Text filled** variant: false | true (default false)

## Variants (22)

- Size=md, State=default, Text filled=false — 288×97 (base)
- Size=sm, State=default, Text filled=false — 288×89
- Size=md, State=focus, Text filled=false — 288×97
- Size=sm, State=focus, Text filled=false — 288×89
- Size=md, State=focus, Text filled=true — 288×97
- Size=sm, State=focus, Text filled=true — 288×89
- Size=md, State=default, Text filled=true — 288×97
- Size=sm, State=default, Text filled=true — 288×89
- Size=md, State=error, Text filled=false — 288×97
- Size=sm, State=success, Text filled=true — 288×89
- Size=md, State=success, Text filled=true — 288×97
- Size=sm, State=error, Text filled=false — 288×89
- Size=md, State=error, Text filled=true — 288×97
- Size=sm, State=error, Text filled=true — 288×89
- Size=md, State=warning, Text filled=false — 288×97
- Size=sm, State=warning, Text filled=false — 288×89
- Size=md, State=warning, Text filled=true — 288×97
- Size=sm, State=warning, Text filled=true — 288×89
- Size=md, State=disabled, Text filled=false — 288×97
- Size=sm, State=disabled, Text filled=false — 288×89
- Size=md, State=hover, Text filled=false — 288×97
- Size=sm, State=hover, Text filled=false — 288×89

## Base tree — Size=md, State=default, Text filled=false

- **Size=md, State=default, Text filled=false** `component` size 288×97 · sizing fixed/hug · minWidth 64=64px (4rem) (spacing-10) · layout column align min/min · padding 0 0 0 0 · gap 0=PADDING/none
  - **Input label** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 0 0 · gap 0
    - **Label margin** `frame` size 288×26 · sizing fill/hug · layout row align min/min · padding 0 0 8 0 · gap 8
      - **Label text** `text` size 37×18 · sizing hug/hug · text "Label" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **Text input** `frame` size 288×40 · sizing fill/fixed · layout row align min/center · padding 0=PADDING/none 12=PADDING/12 0=PADDING/none 12=PADDING/12 · gap 0=PADDING/none · fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle · radius 10=10
    - **Placeholder** `text` size 264×18 · sizing fill/hug · text "Placeholder" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary
  - **HelperText** `instance` size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=default, Size=sm, Style=light · props show Icon=true, Label="Helper text"

## Differences vs base

### Size=sm, State=default, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input/Placeholder` size: 264×18 → 264×15
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal

### Size=md, State=focus, Text filled=false

- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/Placeholder` size: 264×18 → 263×18
- `Text input/Placeholder` sizing: fill/hug → fixed/fixed
- `Text input/Placeholder` hidden: – → true
- `Text input/Cursor blink animation` only here: size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Cursor blink animation › State=Visible

### Size=sm, State=focus, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/Placeholder` size: 264×18 → 263×15
- `Text input/Placeholder` sizing: fill/hug → fixed/fixed
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/Placeholder` hidden: – → true
- `Text input/Cursor blink animation` only here: size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Cursor blink animation › State=Visible

### Size=md, State=focus, Text filled=true

- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/Placeholder` absent
- `Text input/text-text` only here: size 264×18 · sizing fill/hug · text "Text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=focus, Text filled=true

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `Text input/Placeholder` absent
- `Text input/text-text` only here: size 264×15 · sizing fill/hug · text "Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=default, Text filled=true

- `(root)` gap: 0=PADDING/none → 0
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` absent
- `Text input/text-text` only here: size 264×18 · sizing fill/hug · text "Text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=default, Text filled=true

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` absent
- `Text input/text-text` only here: size 264×15 · sizing fill/hug · text "Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=error, Text filled=false

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `HelperText` size: 106×31 → 127×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=error, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Error message"

### Size=sm, State=success, Text filled=true

- `(root)` size: 288×97 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Success
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 149×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=success, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Success message"
- `Text input/text-text` only here: size 264×15 · sizing fill/hug · text "Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=success, Text filled=true

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Success
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 149×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=success, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Success message"
- `Text input/text-text` only here: size 264×18 · sizing fill/hug · text "Text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=error, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/Placeholder` size: 264×18 → 264×15
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `HelperText` size: 106×31 → 127×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=error, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Error message"

### Size=md, State=error, Text filled=true

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 127×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=error, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Error message"
- `Text input/text-text` only here: size 264×18 · sizing fill/hug · text "Text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=error, Text filled=true

- `(root)` size: 288×97 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Attention
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 127×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=error, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Error message"
- `Text input/text-text` only here: size 264×15 · sizing fill/hug · text "Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=md, State=warning, Text filled=false

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `HelperText` size: 106×31 → 147×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=warning, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Warning message"
- `HelperText/helper-text-bg/icon/Status notification/icon` only here: fill CONTENT/Warning (Text)

### Size=sm, State=warning, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` size: 264×18 → 264×15
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `HelperText` size: 106×31 → 147×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=warning, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Warning message"
- `HelperText/helper-text-bg/icon/Status notification/icon` only here: fill CONTENT/Warning (Text)

### Size=md, State=warning, Text filled=true

- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 147×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=warning, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Warning message"
- `Text input/text-text` only here: size 264×18 · sizing fill/hug · text "Text" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
- `HelperText/helper-text-bg/icon/Status notification/icon` only here: fill CONTENT/Warning (Text)

### Size=sm, State=warning, Text filled=true

- `(root)` size: 288×97 → 288×89
- `(root)` minWidth: 64=64px (4rem) (spacing-10) → 96=?9fbcc4d61bf754fd864669fc908f1b371bed3d90/34590:316
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Primary
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` absent
- `HelperText` size: 106×31 → 147×31
- `HelperText` instance: HelperText › Type=default, Size=sm, Style=light → HelperText › Type=warning, Size=sm, Style=light
- `HelperText` props: show Icon=true, Label="Helper text" → show Icon=true, Label="Warning message"
- `Text input/text-text` only here: size 264×15 · sizing fill/hug · text "Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `HelperText/helper-text-bg/icon/Status notification/icon` only here: fill CONTENT/Warning (Text)

### Size=md, State=disabled, Text filled=false

- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Disabled
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` color: CONTENT/Secondary → CONTENT/Disabled
- `Input label/Resizer` only here: size 0×0 · sizing fixed/hug · layout row align min/min · padding 0 0 0 0 · gap 0 · opacity 0 · instance Resizer

### Size=sm, State=disabled, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Input label/Label margin/Label text` color: CONTENT/Secondary → CONTENT/Disabled
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Primary
- `Text input/Placeholder` size: 264×18 → 264×15
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Text input/Placeholder` color: CONTENT/Secondary → CONTENT/Disabled

### Size=md, State=hover, Text filled=false

- `(root)` gap: 0=PADDING/none → 0
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Secondary

### Size=sm, State=hover, Text filled=false

- `(root)` size: 288×97 → 288×89
- `(root)` gap: 0=PADDING/none → 0
- `Text input` size: 288×40 → 288×32
- `Text input` fill: BUTTON/Secondary → BACKGROUND/Secondary
- `Text input/Placeholder` size: 264×18 → 264×15
- `Text input/Placeholder` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Text input/Placeholder` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal


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
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/regular
- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 288 (22/22 variants)
- `Input label/Label margin` paddingBottom 8 (22/22 variants)
- `HelperText` fixed height 31 (22/22 variants)
- `Text input/Cursor blink animation` fixed width 1, height 17 (2/22 variants)
- `Text input` fixed height 32 (1/22 variants)
- `Input label/Resizer` fixed width 0 (1/22 variants)

## Nested components

- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts
- Cursor blink animation (338:6698) — connected: app/components/CursorBlink/CursorBlink.figma.ts
- Resizer (558:651) — not connected

## Icons

none
