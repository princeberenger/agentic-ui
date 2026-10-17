# cell-type-badge — 771:1614

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1614
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableBadgeCell.figma.ts)

## Props

- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)
- **Alignment** variant: Left | Center | Right (default Left)

## Variants (15)

- State=Default, Alignment=Left — 379×64 (base)
- State=Default, Alignment=Center — 379×64
- State=Default, Alignment=Right — 379×64
- State=Hover, Alignment=Left — 379×64
- State=Hover, Alignment=Center — 379×64
- State=Hover, Alignment=Right — 379×64
- State=Focus, Alignment=Left — 379×64
- State=Focus, Alignment=Center — 379×64
- State=Focus, Alignment=Right — 379×64
- State=Disabled, Alignment=Left — 379×64
- State=Disabled, Alignment=Center — 379×64
- State=Disabled, Alignment=Right — 379×64
- State=Loading, Alignment=Left — 379×64
- State=Loading, Alignment=Center — 379×64
- State=Loading, Alignment=Right — 379×64

## Base tree — State=Default, Alignment=Left

- **State=Default, Alignment=Left** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Badge** `instance` size 49×19 · sizing hug/fixed · layout row align min/center · padding 2=PADDING/2 8=PADDING/8 2=PADDING/2 8=PADDING/8 · gap 4=PADDING/4 · fill BADGE/bg/green · stroke 1=default inside BADGE/stroke/default@0.1 · radius 6=6 · instance Badge › Type=rounded, Size=sm, Color=green, Border=true, iconLeft=false, iconRight=false · props Icon=179:14029, Label="Label", hasCloseIcon=false

## Differences vs base

### State=Default, Alignment=Center

- `(root)` layout: row align min/center → row align center/center

### State=Default, Alignment=Right

- `(root)` layout: row align min/center → row align max/center

### State=Hover, Alignment=Left

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=Hover, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=Hover, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=Focus, Alignment=Left

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Focus, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Focus, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Disabled, Alignment=Left

- `Badge` opacity: – → 0.5

### State=Disabled, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `Badge` opacity: – → 0.5

### State=Disabled, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `Badge` opacity: – → 0.5

### State=Loading, Alignment=Left

- `Badge` absent
- `table-skeleton-loading` only here: size 81×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Loading, Alignment=Center

- `(root)` layout: row align min/center → row align center/center
- `Badge` absent
- `table-skeleton-loading` only here: size 81×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Loading, Alignment=Right

- `(root)` layout: row align min/center → row align max/center
- `Badge` absent
- `table-skeleton-loading` only here: size 81×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 2 | – | no WEB code syntax |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BADGE/bg/green | `var(--color-badge-bg-green)` | ok |
| BADGE/stroke/default | `var(--color-badge-stroke-default)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| default | `var(--stroke-default)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| lg | – | no WEB code syntax |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |

## Values without variable

- `(root)` stroke weight 0/0/1/0 (12/15 variants)
- `(root)` fixed width 379 (15/15 variants)
- `Badge` fixed height 19 (12/15 variants)
- `table-skeleton-loading` fixed width 81 (3/15 variants)

## Nested components

- Badge (124:2898) — connected: app/components/Badge/Badge.figma.ts

## Icons

none
