# ChatMetadataRead — 6279:11285

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6279-11285
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatReadReceipt.figma.ts)

## Props

- **Label 5** text (default "Failed")
- **Label 4** text (default "Read")
- **Label 3** text (default "Delivered")
- **Label 2** text (default "Sent")
- **Label 1** text (default "Sending")
- **Type** variant: Sending | Sent | Delivered | Read | Failed (default Sending)

## Variants (5)

- Type=Sending — 67×15 (base)
- Type=Sent — 46×15
- Type=Delivered — 74×15
- Type=Read — 49×15
- Type=Failed — 36×15

## Base tree — Type=Sending

- **Type=Sending** `component` size 67×15 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4
  - **icons / Time** `instance` size 14×14 · sizing fixed/fixed · instance icons / Time
    - ↳ icon (override) fill CONTENT/Icon
  - **Sending** `text` size 49×15 · sizing hug/hug · text "Sending" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color gradient_linear(CONTENT/Primary 19%, CONTENT/Disabled 100%) from 0,0.5 to 1,0.5

## Differences vs base

### Type=Sent

- `(root)` size: 67×15 → 46×15
- `icons / Time` absent
- `icons / Time/icon` absent
- `Sending` absent
- `Icons / Checkmark` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark
- `Icons / Checkmark/icon-color` only here: fill CONTENT/Icon
- `Sent` only here: size 28×15 · sizing hug/hug · text "Sent" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

### Type=Delivered

- `(root)` size: 67×15 → 74×15
- `icons / Time` absent
- `icons / Time/icon` absent
- `Sending` absent
- `Icons / Checkmark-2` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark-2
- `Icons / Checkmark-2/icon-color` only here: fill CONTENT/Disabled
- `Delivered` only here: size 56×15 · sizing hug/hug · text "Delivered" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

### Type=Read

- `(root)` size: 67×15 → 49×15
- `icons / Time` absent
- `icons / Time/icon` absent
- `Sending` absent
- `Icons / Checkmark-2` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark-2
- `Icons / Checkmark-2/icon-color` only here: fill CONTENT/Primary
- `Read` only here: size 31×15 · sizing hug/hug · text "Read" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

### Type=Failed

- `(root)` size: 67×15 → 36×15
- `icons / Time` absent
- `icons / Time/icon` absent
- `Sending` absent
- `Failed` only here: size 36×15 · sizing hug/hug · text "Failed" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color BACKGROUND/Attention


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Attention | `var(--color-bg-attention)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- fill: Gradient/Shimmer
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` gap 4 (4/5 variants)
- `icons / Time` fixed width 14 (1/5 variants)
- `Icons / Checkmark` fixed width 14 (1/5 variants)
- `Icons / Checkmark-2` fixed width 14 (2/5 variants)

## Nested components

- icons / Time (179:15826) — connected: icon time

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
- Icons / Checkmark-2 (6246:10374) → `checkmark-2.svg` present
