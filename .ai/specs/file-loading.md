# File loading — 4028:6912

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6912
- Extracted: 2026-10-17
- Code Connect: yes (app/components/FileUpload/FileItem.figma.ts)

## Props

- **Area label** text (default "Document.png")
- **State** variant: error | success | uploaded | uploading (default uploaded)

## Variants (4)

- State=uploaded — 320×32 (base)
- State=error — 320×63
- State=uploading — 320×32
- State=success — 320×32

## Base tree — State=uploaded

- **State=uploaded** `component` size 320×32 · sizing fixed/fixed · layout row align space_between/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 48 · fill BACKGROUND/Secondary · radius 10=10
  - **Container** `frame` size 88×18 · sizing hug/hug · layout column align center/center · padding 0=none 0=none 0=none 0=none · gap 12=PADDING/12
    - **File name** `text` size 88×18 · sizing hug/hug · text "Document.png" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary
  - **Button** `instance` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Trash-can
    - ↳ icon (override) size 13×13
    - ↳ icon (override) fill CONTENT/Primary

## Differences vs base

### State=error

- `(root)` size: 320×32 → 320×63
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` layout: row align space_between/center → column align min/min
- `(root)` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 0 0 0 0
- `(root)` gap: 48 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `Container` absent
- `Container/File name` absent
- `Button` absent
- `Button/icon` absent
- `Button/icon/icon` absent
- `container` only here: size 320×32 · sizing fill/fixed · layout row align space_between/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 48 · fill BACKGROUND/Primary · stroke 1=default inside BORDER/Attention · radius 10=10
- `container/label-wrapper` only here: size 88×18 · sizing hug/hug · layout column align center/min · padding 0=none 0=none 0=none 0=none · gap 4=PADDING/4
- `container/label-wrapper/File name` only here: size 88×18 · sizing hug/hug · text "Document.png" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary
- `container/Button` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Trash-can
- `container/Button/icon/icon` only here: fill CONTENT/Primary
- `HelperText` only here: size 320×31 · sizing fill/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0 · instance HelperText › Type=error, Size=sm, Style=light · props show Icon=true, Label="File exceeds 5mb size limit"

### State=uploading

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: – → 1=default inside BORDER/Subtle dashed 4/4
- `Container/File name` color: CONTENT/Primary → CONTENT/Secondary
- `Button` absent
- `Button/icon` absent
- `Button/icon/icon` absent
- `wrapper` only here: size 119×24 · sizing fixed/hug · layout row align max/center · padding 0 0 0 0 · gap 12=PADDING/12
- `wrapper/Loading animation` only here: size 14×14 · sizing fixed/fixed · layout row align min/min · padding 0 0 0 0 · gap 10 · instance Loading animation › Size=Small, Phase=1
- `wrapper/Button` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Close
- `wrapper/Button/icon` only here: size 13×13
- `wrapper/Button/icon/icon` only here: fill CONTENT/Primary

### State=success

- `(root)` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 16=PADDING/16 8=PADDING/8 12=PADDING/12
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: – → 1=default inside BORDER/Subtle dashed 4/4
- `Button` absent
- `Button/icon` absent
- `Button/icon/icon` absent
- `Icons / Checkmark--filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark--filled
- `Icons / Checkmark--filled/icon-color` only here: fill CONTENT/Success


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Attention | `var(--color-border-attention)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | external library variable |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 320 (4/4 variants)
- `HelperText` fixed height 31 (1/4 variants)
- `wrapper` fixed width 119 (1/4 variants)
- `wrapper/Loading animation` fixed width 14 (1/4 variants)
- `Icons / Checkmark--filled` fixed width 14 (1/4 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts
- Loading animation (4030:7034) — connected: app/components/Spinner/Spinner.figma.ts

## Icons

- Icons / Checkmark--filled (179:17185) → `checkmark-filled.svg` present
