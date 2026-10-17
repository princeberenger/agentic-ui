# ChatMessageMetadata — 6270:1160

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6270-1160
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatMessageMetadata.figma.ts)

## Props

- **Show Error** boolean (default true)
- **Show Time** boolean (default true)
- **Show Read receipt** boolean (default true)
- **Divider 1** boolean (default true)
- **Divider 2** boolean (default true)
- **Show actions** boolean (default true)
- **Divider 3** boolean (default true)
- **Show Duplicate** boolean (default true)
- **Show Reset** boolean (default true)
- **Show Thumbs up** boolean (default true)
- **Show Thumbs down** boolean (default true)

## Variants (1)

- ChatMessageMetadata — 307×23 (base)

## Base tree — ChatMessageMetadata

- **ChatMessageMetadata** `component` size 307×23 · sizing hug/hug · layout row align max/center · padding 8=PADDING/8 12=PADDING/12 0 12=PADDING/12 · gap 6=PADDING/6
  - **ChatMetadataRead** `instance` size 49×15 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4 · instance ChatMetadataRead › Type=Read · props Label 1="Sending", Label 2="Sent", Label 3="Delivered", Label 5="Failed", Label 4="Read"
  - **divider** `frame` size 2×15 · sizing hug/fill · layout row align min/center · padding 0 0 0 0 · gap 0
    - **dot** `ellipse` size 2×2 · sizing fixed/fixed · fill CONTENT/Secondary
  - **time** `frame` size 49×15 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0
    - **9:15 AM** `text` size 49×15 · sizing hug/hug · text "9:15 AM" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
  - **divider** `frame` size 2×15 · sizing hug/fill · layout row align min/center · padding 0 0 0 0 · gap 0
    - **dot** `ellipse` size 2×2 · sizing fixed/fixed · fill CONTENT/Secondary
  - **error** `frame` size 51×15 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4
    - **Not sent** `text` size 51×15 · sizing hug/hug · text "Not sent" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color BADGE/label/red
  - **divider** `frame` size 2×15 · sizing hug/fill · layout row align min/center · padding 0 0 0 0 · gap 0
    - **dot** `ellipse` size 2×2 · sizing fixed/fixed · fill CONTENT/Secondary
  - **actions** `frame` size 92×14 · sizing hug/hug · layout row align min/center · padding 0 0 0 0=PADDING/none · gap 12=PADDING/12
    - **Icons / Copy** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Copy
      - ↳ icon color CONTENT/Icon
    - **Icons / Reset** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Reset
      - ↳ icon color CONTENT/Icon
    - **Icons / Thumbs-up** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Thumbs-up
      - ↳ icon color CONTENT/Icon
    - **Icons / Thumbs-down** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Thumbs-down
      - ↳ icon color CONTENT/Icon

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BADGE/label/red | `var(--color-badge-label-red)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/xs/regular

## Values without variable

- `ChatMetadataRead` gap 4
- `actions/Icons / Copy` fixed width 14
- `actions/Icons / Reset` fixed width 14
- `actions/Icons / Thumbs-up` fixed width 14
- `actions/Icons / Thumbs-down` fixed width 14

## Nested components

- ChatMetadataRead (6279:11285) — connected: app/components/Chat/ChatReadReceipt.figma.ts

## Icons

- Icons / Copy (179:12878) → `copy.svg` present
- Icons / Reset (179:14432) → `reset.svg` present
- Icons / Thumbs-up (179:16021) → `thumbs-up.svg` present
- Icons / Thumbs-down (179:16012) → `thumbs-down.svg` present
