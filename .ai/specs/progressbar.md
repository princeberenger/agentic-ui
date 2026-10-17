# ProgressBar — 4115:7289

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4115-7289
- Extracted: 2026-10-17
- Code Connect: yes (app/components/ProgressBar/ProgressBar.figma.ts)

## Props

- **Show counter** boolean (default true)
- **Progress** variant: 0 | 10 | 50 | 70 | 90 | 100 (default 0)

## Variants (6)

- Progress=0 — 207×18 (base)
- Progress=10 — 214×18
- Progress=50 — 214×18
- Progress=70 — 214×18
- Progress=90 — 214×18
- Progress=100 — 221×18

## Base tree — Progress=0

- **Progress=0** `component` size 207×18 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 12=PADDING/12
  - **progress-bar** `frame` size 180×12 · sizing fixed/fixed · layout row align min/center · padding 0 0 0 0 · gap 1
    - **pattern** ×163 `frame` size 1×11 · sizing fixed/hug · layout column align min/min · padding 0 0 0 0 · gap 1
      - **Rectangle 34624354** ×6 `rectangle` size 1×1 · sizing fill/fixed · fill BACKGROUND/Tertiary
    - **progress-bar** `rectangle` size 0×11 · sizing fixed/fixed · fill CONTENT/Primary
  - **progress-label** `text` size 15×18 · sizing hug/hug · text "0%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary

## Differences vs base

### Progress=10

- `(root)` size: 207×18 → 214×18
- `(root)` sizing: hug/hug → fixed/hug
- `progress-bar` sizing: fixed/fixed → fill/fixed
- `progress-bar/progress-bar` size: 0×11 → 20×11
- `progress-label` size: 15×18 → 22×18
- `progress-label` text: "0%" → "10%"

### Progress=50

- `(root)` size: 207×18 → 214×18
- `progress-bar/progress-bar` size: 0×11 → 90×11
- `progress-label` size: 15×18 → 22×18
- `progress-label` text: "0%" → "50%"

### Progress=70

- `(root)` size: 207×18 → 214×18
- `progress-bar/progress-bar` size: 0×11 → 140×11
- `progress-label` size: 15×18 → 22×18
- `progress-label` text: "0%" → "70%"

### Progress=90

- `(root)` size: 207×18 → 214×18
- `progress-bar/progress-bar` size: 0×11 → 160×11
- `progress-label` size: 15×18 → 22×18
- `progress-label` text: "0%" → "90%"

### Progress=100

- `(root)` size: 207×18 → 221×18
- `progress-bar/progress-bar` size: 0×11 → 180×11
- `progress-label` size: 15×18 → 29×18
- `progress-label` text: "0%" → "100%"


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `progress-bar` gap 1 (6/6 variants)
- `progress-bar` fixed width 180, height 12 (5/6 variants)
- `progress-bar/[run 1]` gap 1 (6/6 variants)
- `progress-bar/[run 1]` fixed width 1 (6/6 variants)
- `progress-bar/[run 1]/[run 1]` fixed height 1 (6/6 variants)
- `progress-bar/progress-bar` fixed width 0, height 11 (1/6 variants)
- `(root)` fixed width 214 (1/6 variants)
- `progress-bar` fixed height 12 (1/6 variants)
- `progress-bar/progress-bar` fixed width 20, height 11 (1/6 variants)
- `progress-bar/progress-bar` fixed width 90, height 11 (1/6 variants)
- `progress-bar/progress-bar` fixed width 140, height 11 (1/6 variants)
- `progress-bar/progress-bar` fixed width 160, height 11 (1/6 variants)
- `progress-bar/progress-bar` fixed width 180, height 11 (1/6 variants)

## Nested components

none

## Icons

none
