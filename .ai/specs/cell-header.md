# cell-header — 789:320

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=789-320
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableHeaderCell.figma.ts)

## Props

- **Main Text** text (default "Title")
- **Sort icon** boolean (default true)
- **Checkbox** boolean (default false)
- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)
- **Alignment** variant: Left | Center | Right (default Left)

## Variants (15)

- State=Default, Alignment=Left — 379×40 (base)
- State=Default, Alignment=Center — 379×40
- State=Default, Alignment=Right — 379×40
- State=Disabled, Alignment=Left — 379×40
- State=Disabled, Alignment=Center — 379×40
- State=Disabled, Alignment=Right — 379×40
- State=Loading, Alignment=Left — 379×40
- State=Loading, Alignment=Center — 379×40
- State=Loading, Alignment=Right — 379×40
- State=Hover, Alignment=Left — 379×40
- State=Hover, Alignment=Center — 379×40
- State=Hover, Alignment=Right — 379×40
- State=Focus, Alignment=Left — 379×40
- State=Focus, Alignment=Center — 379×40
- State=Focus, Alignment=Right — 379×40

## Base tree — State=Default, Alignment=Left

- **State=Default, Alignment=Left** `component` size 379×40 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 16=PADDING/16 · fill BACKGROUND/Secondary
  - **Container** `frame` size 61×18 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8
    - **Checkbox** `instance` size 24×24 · sizing hug/hug · size.vars ICONS/24 × ICONS/24 · layout row align min/min · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance Checkbox › Type=stroke, State=default, Selected=false · hidden true
    - **Text Container** `frame` size 37×18 · sizing hug/fill · layout column align center/min · padding 0 0 0 0 · gap 2=Core/25
      - **Main Text** `text` size 37×18 · sizing hug/hug · text "Title" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
    - **sort-icon** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Arrows--vertical
      - ↳ icon color CONTENT/Secondary

## Differences vs base

### State=Default, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `Container/Checkbox` absent

### State=Default, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `Container/Checkbox` absent

### State=Disabled, Alignment=Left

- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Disabled
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Disabled

### State=Disabled, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Disabled
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Disabled

### State=Disabled, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Disabled
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Disabled

### State=Loading, Alignment=Left

- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container` size: 61×18 → 347×24
- `Container` sizing: hug/hug → fill/hug
- `Container` gap: 8=PADDING/8 → 12=Core/150
- `Container/Checkbox` absent
- `Container/Text Container` absent
- `Container/Text Container/Main Text` absent
- `Container/sort-icon` absent
- `Container/sort-icon/icon-color` absent
- `Container/table-skeleton-loading` only here: size 220×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Loading, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container` size: 61×18 → 347×24
- `Container` sizing: hug/hug → fill/hug
- `Container` layout: row align min/center → row align center/center
- `Container` gap: 8=PADDING/8 → 12=Core/150
- `Container/Checkbox` absent
- `Container/Text Container` absent
- `Container/Text Container/Main Text` absent
- `Container/sort-icon` absent
- `Container/sort-icon/icon-color` absent
- `Container/table-skeleton-loading` only here: size 220×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Loading, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Container` size: 61×18 → 347×24
- `Container` sizing: hug/hug → fill/hug
- `Container` layout: row align min/center → row align max/center
- `Container` gap: 8=PADDING/8 → 12=Core/150
- `Container/Checkbox` absent
- `Container/Text Container` absent
- `Container/Text Container/Main Text` absent
- `Container/sort-icon` absent
- `Container/sort-icon/icon-color` absent
- `Container/table-skeleton-loading` only here: size 220×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Hover, Alignment=Left

- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon

### State=Hover, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon

### State=Hover, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon

### State=Focus, Alignment=Left

- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` stroke: – → 2=lg inside BORDER/Strong
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon

### State=Focus, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` stroke: – → 2=lg inside BORDER/Strong
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon

### State=Focus, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` padding: 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` stroke: – → 2=lg inside BORDER/Strong
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Secondary → CONTENT/Primary
- `Container/sort-icon/icon-color` fill: CONTENT/Secondary → CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 2 | – | no WEB code syntax |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| Core/150 | – | external library variable |
| Core/25 | – | external library variable |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| lg | – | no WEB code syntax |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 379 (15/15 variants)
- `Container/table-skeleton-loading` fixed width 220 (3/15 variants)

## Nested components

- Checkbox (124:2639) — connected: app/components/Checkbox/Checkbox.figma.ts

## Icons

- Icons / Arrows--vertical (179:14549) → `arrows-vertical.svg` present
