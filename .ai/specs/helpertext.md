# HelperText — 4066:7007

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-7007
- Extracted: 2026-10-17
- Code Connect: yes (app/components/HelperText/HelperText.figma.ts)

## Props

- **Label** text (default "Helper text")
- **show Icon** boolean (default true)
- **Type** variant: default | error | success | warning (default default)
- **Size** variant: lg | sm (default sm)
- **Style** variant: solid | light (default light)

## Variants (15)

- Type=default, Size=sm, Style=light — 106×31 (base)
- Type=default, Size=sm, Style=solid — 106×31
- Type=default, Size=lg, Style=light — 118×30
- Type=default, Size=lg, Style=solid — 122×30
- Type=warning, Size=sm, Style=light — 106×31
- Type=warning, Size=lg, Style=light — 118×30
- Type=warning, Size=lg, Style=solid — 122×30
- Type=success, Size=sm, Style=light — 106×31
- Type=success, Size=sm, Style=solid — 104×31
- Type=success, Size=lg, Style=light — 118×30
- Type=success, Size=lg, Style=solid — 122×30
- Type=error, Size=sm, Style=light — 106×31
- Type=error, Size=sm, Style=solid — 104×31
- Type=error, Size=lg, Style=light — 118×30
- Type=error, Size=lg, Style=solid — 122×30

## Base tree — Type=default, Size=sm, Style=light

- **Type=default, Size=sm, Style=light** `component` size 106×31 · sizing hug/fixed · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 0
  - **helper-text-bg** `frame` size 106×23 · sizing fill/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 0 · fill BACKGROUND/Secondary · radius 10=10
    - **icon** `frame` size 21×13 · sizing hug/hug · layout row align max/center · padding 0 8=PADDING/8 0 0 · gap 0=PADDING/none
      - **Status notification** `instance` size 13×13 · sizing fixed/fixed · size.vars ICONS/13 · instance Icons / Information
        - ↳ icon color CONTENT/Icon
    - **Helper text** `text` size 69×15 · sizing hug/hug · text "Helper text" · font SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

## Differences vs base

### Type=default, Size=sm, Style=solid

- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Tertiary
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Secondary

### Type=default, Size=lg, Style=light

- `(root)` size: 106×31 → 118×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 118×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 10=PADDING/10 6=PADDING/6 10=PADDING/10
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×16
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### Type=default, Size=lg, Style=solid

- `(root)` size: 106×31 → 122×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 122×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Tertiary
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×16
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Secondary
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### Type=warning, Size=sm, Style=light

- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Warning
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon` layout: row align max/center → row align center/center
- `helper-text-bg/icon` padding: 0 8=PADDING/8 0 0 → 0=PADDING/none 8=PADDING/8 0=PADDING/none 0=PADDING/none
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Warning--alt--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Warning (Text)
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Warning (Text)

### Type=warning, Size=lg, Style=light

- `(root)` size: 106×31 → 118×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 118×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 10=PADDING/10 6=PADDING/6 10=PADDING/10
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Warning
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×13
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon` layout: row align max/center → row align center/center
- `helper-text-bg/icon` padding: 0 8=PADDING/8 0 0 → 0=PADDING/none 8=PADDING/8 0=PADDING/none 0=PADDING/none
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Warning--alt--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Warning (Text)
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Warning (Text)

### Type=warning, Size=lg, Style=solid

- `(root)` size: 106×31 → 122×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 122×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `helper-text-bg` fill: BACKGROUND/Secondary → CONTENT/Warning (Text)
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×13
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon` layout: row align max/center → row align center/center
- `helper-text-bg/icon` padding: 0 8=PADDING/8 0 0 → 0=PADDING/none 8=PADDING/8 0=PADDING/none 0=PADDING/none
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Warning--alt--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Warning (Icons)
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Warning (Icons)

### Type=success, Size=sm, Style=light

- `helper-text-bg` sizing: fill/hug → fill/fixed
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Success (Light)
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Checkmark--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → BACKGROUND/Success
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Success

### Type=success, Size=sm, Style=solid

- `(root)` size: 106×31 → 104×31
- `helper-text-bg` size: 106×23 → 104×23
- `helper-text-bg` sizing: fill/hug → fill/fixed
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Success
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Checkmark--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Success (Light)
- `helper-text-bg/Helper text` size: 69×15 → 67×15
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Success (Light)

### Type=success, Size=lg, Style=light

- `(root)` size: 106×31 → 118×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 118×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 10=PADDING/10 6=PADDING/6 10=PADDING/10
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Success (Light)
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×13
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Checkmark--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → BACKGROUND/Success
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Success

### Type=success, Size=lg, Style=solid

- `(root)` size: 106×31 → 122×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0 0 0 0
- `helper-text-bg` size: 106×23 → 122×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Success
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` size: 21×13 → 24×13
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size: 13×13 → 16×16
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/16 × ICONS/16
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Checkmark--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Success (Light)
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Success (Light)

### Type=error, Size=sm, Style=light

- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Attention (Light)
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Error--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → BADGE/label/red
- `helper-text-bg/Helper text` color: CONTENT/Primary → BADGE/label/red

### Type=error, Size=sm, Style=solid

- `(root)` size: 106×31 → 104×31
- `helper-text-bg` size: 106×23 → 104×23
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Attention
- `helper-text-bg/icon` sizing: hug/hug → hug/fixed
- `helper-text-bg/icon/Status notification` size.vars: ICONS/13 → ICONS/13 × ICONS/13
- `helper-text-bg/icon/Status notification` instance: Icons / Information → Icons / Error--filled
- `helper-text-bg/icon/Status notification/icon-color` fill: CONTENT/Icon → CONTENT/Attention (Light)
- `helper-text-bg/Helper text` size: 69×15 → 67×15
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/Attention (Light)

### Type=error, Size=lg, Style=light

- `(root)` size: 106×31 → 118×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0=PADDING/none 0 0 0
- `helper-text-bg` size: 106×23 → 118×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 10=PADDING/10 6=PADDING/6 10=PADDING/10
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Attention (Light)
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` absent
- `helper-text-bg/icon/Status notification` absent
- `helper-text-bg/icon/Status notification/icon-color` absent
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → BADGE/label/red
- `helper-text-bg/Icon` only here: size 24×16 · sizing hug/fixed · layout row align max/center · padding 0 8=PADDING/8 0 0 · gap 0=PADDING/none
- `helper-text-bg/Icon/Status notification` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Error--filled
- `helper-text-bg/Icon/Status notification/icon-color` only here: fill BADGE/label/red

### Type=error, Size=lg, Style=solid

- `(root)` size: 106×31 → 122×30
- `(root)` sizing: hug/fixed → hug/hug
- `(root)` padding: 8=PADDING/8 0 0 0 → 0=PADDING/none 0 0 0
- `helper-text-bg` size: 106×23 → 122×30
- `helper-text-bg` padding: 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `helper-text-bg` fill: BACKGROUND/Secondary → BACKGROUND/Attention
- `helper-text-bg` radius: 10=10 → 9999=full
- `helper-text-bg/icon` absent
- `helper-text-bg/icon/Status notification` absent
- `helper-text-bg/icon/Status notification/icon-color` absent
- `helper-text-bg/Helper text` size: 69×15 → 74×18
- `helper-text-bg/Helper text` font: SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `helper-text-bg/Helper text` font.vars: family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `helper-text-bg/Helper text` color: CONTENT/Primary → CONTENT/On Primary
- `helper-text-bg/Icon` only here: size 24×16 · sizing hug/fixed · layout row align max/center · padding 0 8=PADDING/8 0 0 · gap 0=PADDING/none
- `helper-text-bg/Icon/Status notification` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 · instance Icons / Error--filled
- `helper-text-bg/Icon/Status notification/icon-color` only here: fill CONTENT/On Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Attention | `var(--color-bg-attention)` | ok |
| BACKGROUND/Attention (Light) | `var(--color-bg-attention-light)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BACKGROUND/Success | `var(--color-bg-success)` | ok |
| BACKGROUND/Success (Light) | `var(--color-bg-success-light)` | ok |
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| BACKGROUND/Warning | `var(--color-bg-warning)` | ok |
| BADGE/label/red | `var(--color-badge-label-red)` | ok |
| CONTENT/Attention (Light) | `var(--color-content-attention-light)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Success | `var(--color-content-success)` | ok |
| CONTENT/Success (Light) | `var(--color-content-success-light)` | ok |
| CONTENT/Warning (Icons) | `var(--color-content-warning-icons)` | ok |
| CONTENT/Warning (Text) | `var(--color-content-warning-text)` | ok |
| family/Body | `var(--font-body)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/10 | `var(--space-10)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/bold
- text: SYSTEM/Body/xs/bold
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed height 31 (7/15 variants)
- `helper-text-bg/icon/Status notification` fixed height 13 (2/15 variants)
- `helper-text-bg` fixed height 23 (2/15 variants)
- `helper-text-bg/Icon/Status notification` fixed height 16 (2/15 variants)

## Nested components

none

## Icons

- Icons / Information (179:17238) → `information.svg` present
- Icons / Warning--alt--filled (179:17216) → `warning-alt-filled.svg` present
- Icons / Checkmark--filled (179:17185) → `checkmark-filled.svg` present
- Icons / Error--filled (179:17199) → `error-filled.svg` present
