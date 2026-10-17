# Volume — 4072:8082

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8082
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Slider/Slider.figma.ts)

## Props

- **Value** variant: 0 | 100 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 (default 0)

## Variants (10)

- Value=0 — 240×32 (base)
- Value=20 — 240×32
- Value=30 — 240×32
- Value=40 — 240×32
- Value=50 — 240×32
- Value=60 — 240×32
- Value=70 — 240×32
- Value=80 — 240×32
- Value=90 — 240×32
- Value=100 — 240×32

## Base tree — Value=0

- **Value=0** `component` size 240×32 · sizing fixed/hug · layout column align center/max · padding 0 0 0 0 · gap 8=PADDING/8
  - **slider** `frame` size 240×32 · sizing fill/fixed · layout row align max/center · padding 0 16=PADDING/16 0 0=PADDING/none · gap 0 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10
    - **fill** `frame` size 8×32 · sizing fixed/fixed · layout row align max/center · padding 0 2=PADDING/2 0 0 · gap 107 · fill BACKGROUND/Tertiary · radius 10/0/0/10=10
      - **drag-handle** `frame` size 2×32 · sizing fixed/fill · layout row align min/center · padding 0 0 0 0 · gap 10
        - **dragHandle** `line` size 0×16 · sizing fixed/fixed · stroke 2=lg center CONTENT/Icon
    - **0%** `text` size 216×18 · sizing fill/hug · text "0%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

## Differences vs base

### Value=20

- `(root)` layout: column align center/max → column align min/min
- `slider/fill` size: 8×32 → 34×32
- `slider/fill` sizing: fixed/fixed → fill/fixed
- `slider/0%` absent
- `slider/20%` only here: size 190×18 · sizing fixed/hug · text "20%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=30

- `slider/fill` size: 8×32 → 52×32
- `slider/fill` sizing: fixed/fixed → fill/fill
- `slider/0%` absent
- `slider/30%` only here: size 172×18 · sizing fixed/hug · text "30%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=40

- `(root)` layout: column align center/max → column align center/min
- `slider` layout: row align max/center → row align min/center
- `slider/fill` size: 8×32 → 82×32
- `slider/fill` sizing: fixed/fixed → fill/fill
- `slider/0%` absent
- `slider/40%` only here: size 142×18 · sizing fixed/hug · text "40%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=50

- `slider/fill` size: 8×32 → 112×32
- `slider/fill` sizing: fixed/fixed → fill/fill
- `slider/0%` absent
- `slider/50%` only here: size 112×18 · sizing fill/hug · text "50%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=60

- `slider/fill` size: 8×32 → 142×32
- `slider/fill` sizing: fixed/fixed → fill/fill
- `slider/0%` absent
- `slider/60%` only here: size 82×18 · sizing fixed/hug · text "60%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=70

- `slider/fill` size: 8×32 → 165×32
- `slider/fill` sizing: fixed/fixed → fill/fill
- `slider/0%` absent
- `slider/70%` only here: size 59×18 · sizing fixed/hug · text "70%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=80

- `slider/fill` size: 8×32 → 182×32
- `slider/fill` sizing: fixed/fixed → fill/fixed
- `slider/0%` absent
- `slider/80%` only here: size 42×18 · sizing fixed/hug · text "80%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=90

- `slider/fill` size: 8×32 → 224×32
- `slider/fill` sizing: fixed/fixed → fixed/fill
- `slider/0%` absent
- `slider/90%` only here: size 22×18 · sizing fixed/fixed · text "90%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Value=100

- `slider/fill` absent
- `slider/fill/drag-handle` absent
- `slider/fill/drag-handle/dragHandle` absent
- `slider/0%` absent
- `slider/20%` only here: size 240×32 · sizing fixed/fixed · fill BACKGROUND/Tertiary · radius 10=10
- `slider/dragHandle` only here: size 0×16 · sizing fixed/fixed · stroke 2=lg center CONTENT/Icon
- `slider/100%` only here: size 224×18 · sizing fill/hug · text "100%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Tertiary | `var(--color-bg-tertiary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Icon | `var(--color-content-icon)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| lg | – | no WEB code syntax |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | no WEB code syntax |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 240 (10/10 variants)
- `slider` fixed height 32 (10/10 variants)
- `slider/fill` fixed width 8, height 32 (1/10 variants)
- `slider/fill/drag-handle` fixed width 2 (9/10 variants)
- `slider/fill` fixed height 32 (2/10 variants)
- `slider/fill` fixed width 224 (1/10 variants)
- `slider/20%` fixed width 240, height 32 (1/10 variants)

## Nested components

none

## Icons

none
