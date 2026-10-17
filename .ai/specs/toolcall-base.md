# toolcall-base — 6282:12965

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6282-12965
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ToolCallItem.figma.ts)

## Props

- **Show time** boolean (default true)
- **Show secondary item** boolean (default true)
- **Show icon** boolean (default true)
- **Label primary item** text (default "bash")
- **Label secondary item** text (default "git diff --stat")
- **Label third item** text (default "340ms")
- **State** variant: Complete | Working | Error (default Complete)

## Variants (3)

- State=Complete — 226×16 (base)
- State=Working — 226×16
- State=Error — 226×16

## Base tree — State=Complete

- **State=Complete** `component` size 226×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10
  - **icon-wrapper** `frame` size 16×16 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0
    - **Icons / Checkmark--filled** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Checkmark--filled
      - ↳ icon color CONTENT/Icon
  - **wrapper** `frame` size 164×15 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4=PADDING/4
    - **primary-item** `frame` size 30×15 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 10
      - **progress-label** `text` size 30×15 · sizing hug/hug · text "bash" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
    - **secondary-item** `frame` size 75×15 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 10
      - **progress-label** `text` size 75×15 · sizing hug/hug · text "git diff --stat" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **third-item** `frame` size 51×15 · sizing hug/hug · layout row align max/center · padding 0 0 0 8=PADDING/8 · gap 0
      - **progress-label** `text` size 43×15 · sizing hug/hug · opacity 0.5 · text "340ms" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### State=Working

- `icon-wrapper/Icons / Checkmark--filled` absent
- `icon-wrapper/Icons / Checkmark--filled/icon-color` absent
- `icon-wrapper/Loading animation` only here: size 14×14 · sizing fixed/fixed · layout row align min/min · padding 0 0 0 0 · gap 10 · instance Loading animation › Size=Small, Phase=1

### State=Error

- `icon-wrapper/Icons / Checkmark--filled` absent
- `icon-wrapper/Icons / Checkmark--filled/icon-color` absent
- `icon-wrapper/Icons / Error--filled` only here: size 14×14 · sizing fixed/fixed · instance Icons / Error--filled
- `icon-wrapper/Icons / Error--filled/icon-color` only here: fill BACKGROUND/Attention


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/10 | `var(--space-10)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/xs/regular

## Values without variable

- `icon-wrapper` fixed width 16 (3/3 variants)
- `icon-wrapper/Icons / Checkmark--filled` fixed width 14 (1/3 variants)
- `icon-wrapper/Loading animation` fixed width 14 (1/3 variants)
- `icon-wrapper/Icons / Error--filled` fixed width 14 (1/3 variants)

## Nested components

- Loading animation (4030:7034) — connected: app/components/Spinner/Spinner.figma.ts

## Icons

- Icons / Checkmark--filled (179:17185) → `checkmark-filled.svg` present
- Icons / Error--filled (179:17199) → `error-filled.svg` present
