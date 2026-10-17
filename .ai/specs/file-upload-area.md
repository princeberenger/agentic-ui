# File upload area — 4028:6848

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6848
- Extracted: 2026-10-17
- Code Connect: yes (app/components/FileUpload/FileUpload.figma.ts)

## Props

- **Hint label 1** text (default "Up to 10 files")
- **Hint label 2** text (default "PDF, JPEG or PNG less than 5MB")
- **Area label** text (default "Drag and drop your files here")
- **Upload icon** instance swap (default Icons / Upload)
- **Show hint 1** boolean (default true)
- **Show hint 2** boolean (default true)
- **Show button** boolean (default true)
- **Show icon** boolean (default true)
- **State** variant: default | disabled | hover (default default)

## Variants (3)

- State=default — 320×226 (base)
- State=hover — 320×226
- State=disabled — 320×226

## Base tree — State=default

- **State=default** `component` size 320×226 · sizing fixed/hug · layout column align center/center · padding 32=PADDING/32 24=PADDING/24 32=PADDING/32 24=PADDING/24 · gap 16=PADDING/16 · fill BACKGROUND/Secondary · stroke 1=default inside BORDER/Subtle dashed 4/4 · radius 12=12
  - **Icons / Upload** `instance` size 32×32 · sizing fixed/fixed · instance Icons / Upload
    - ↳ icon color CONTENT/Icon
  - **Container** `frame` size 272×18 · sizing fill/hug · layout column align center/center · padding 0=none 0=none 0=none 0=none · gap 12=PADDING/12
    - **File name** `text` size 272×18 · sizing fill/hug · text "Drag and drop your files here" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 align center · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
  - **Button** `instance` size 105×32 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=md, Style=secondary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Or select file"
  - **Frame 1** `frame` size 272×32 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 2=PADDING/2
    - **Up to 10 files** `text` size 272×15 · sizing fill/hug · text "Up to 10 files" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 align center · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **PDF, JPEG or PNG less than 5MB** `text` size 272×15 · sizing fill/hug · text "PDF, JPEG or PNG less than 5MB" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 align center · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### State=hover

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: 1=default inside BORDER/Subtle dashed 4/4 → 1=default inside BORDER/Medium dashed 4/4
- `Icons / Upload/icon-color` fill: CONTENT/Icon → CONTENT/Primary
- `Button` effect: – → Shadows/elevation1

### State=disabled

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 1=default inside BORDER/Subtle dashed 4/4 → 1=default inside BORDER/Disabled dashed 4/4
- `Icons / Upload/icon-color` fill: CONTENT/Icon → CONTENT/Disabled
- `Container/File name` color: CONTENT/Primary → CONTENT/Disabled
- `Button` fill: BUTTON/Secondary → BUTTON/Disabled
- `Button` stroke: 0.5=sm inside BORDER/Subtle → –
- `Button` instance: Button › Size=md, Style=secondary, Type=text, State=default, Icon position=none → Button › Size=md, Style=primary, Type=text, State=disabled, Icon position=none
- `Frame 1/Up to 10 files` color: CONTENT/Secondary → CONTENT/Disabled
- `Frame 1/PDF, JPEG or PNG less than 5MB` color: CONTENT/Secondary → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 12 | `var(--radius-md)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Disabled | `var(--color-border-disabled)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Disabled | `var(--color-button-disabled)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | external library variable |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/32 | `var(--space-32)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation1
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed width 320 (3/3 variants)
- `Icons / Upload` fixed width 32 (3/3 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

- Icons / Upload (179:12744) → `upload.svg` present
