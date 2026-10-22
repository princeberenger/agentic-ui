# cell-type-numeric — 771:1179

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1179
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Table/TableNumericCell.figma.ts)

## Props

- **Icon** boolean (default true)
- **Cell text** text (default "$120.00")
- **Badge** boolean (default false)
- **Alignment** variant: Left | Right (default Left)
- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)

## Variants (10)

- Alignment=Left, State=Default — 379×64 (base)
- Alignment=Left, State=Disabled — 379×64
- Alignment=Right, State=Disabled — 379×64
- Alignment=Right, State=Default — 379×64
- Alignment=Left, State=Hover — 379×64
- Alignment=Right, State=Hover — 379×64
- Alignment=Left, State=Focus — 379×64
- Alignment=Right, State=Focus — 379×64
- Alignment=Left, State=Loading — 379×64
- Alignment=Right, State=Loading — 379×64

## Base tree — Alignment=Left, State=Default

- **Alignment=Left, State=Default** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Container** `frame` size 315×18 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 12=PADDING/12
    - **Price Container** `frame` size 53×18 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
      - **Price** `text` size 53×18 · sizing hug/hug · text "$120.00" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
    - **Badge** `instance` size 49×19 · sizing hug/fixed · layout row align min/center · padding 2=PADDING/2 8=PADDING/8 2=PADDING/2 8=PADDING/8 · gap 4=PADDING/4 · fill BADGE/bg/green · stroke 1=default inside BADGE/stroke/default@0.1 · radius 6=6 · instance Badge › Type=rounded, Size=sm, Color=green, Border=true, iconLeft=false, iconRight=false · props Icon=179:14029, Label="Label", hasCloseIcon=false · hidden true
  - **Edit Icon** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Edit
    - ↳ icon color CONTENT/Icon

## Differences vs base

### Alignment=Left, State=Disabled

- `Container/Price Container/Price` color: CONTENT/Primary → CONTENT/Disabled
- `Edit Icon/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### Alignment=Right, State=Disabled

- `Container` layout: row align min/center → row align max/center
- `Container/Price Container/Price` color: CONTENT/Primary → CONTENT/Disabled
- `Edit Icon/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### Alignment=Right, State=Default

- `Container` layout: row align min/center → row align max/center

### Alignment=Left, State=Hover

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### Alignment=Right, State=Hover

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `Container` layout: row align min/center → row align max/center

### Alignment=Left, State=Focus

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### Alignment=Right, State=Focus

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `Container` layout: row align min/center → row align max/center

### Alignment=Left, State=Loading

- `Container` absent
- `Container/Price Container` absent
- `Container/Price Container/Price` absent
- `Container/Badge` absent
- `Edit Icon` absent
- `Edit Icon/icon-color` absent
- `table-skeleton-loading` only here: size 80×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=?12104:1047

### Alignment=Right, State=Loading

- `(root)` layout: row align min/center → row align max/center
- `Container` absent
- `Container/Price Container` absent
- `Container/Price Container/Price` absent
- `Container/Badge` absent
- `Edit Icon` absent
- `Edit Icon/icon-color` absent
- `table-skeleton-loading` only here: size 80×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=?12104:1047


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12104:1047 | – | unresolved id |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BADGE/bg/green | `var(--color-badge-bg-green)` | ok |
| BADGE/stroke/default | `var(--color-badge-stroke-default)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| lg | `var(--stroke-lg)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Small | `var(--text-small)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/regular

## Values without variable

- `(root)` stroke weight 0/0/1/0 (8/10 variants)
- `(root)` fixed width 379 (10/10 variants)
- `Container/Badge` fixed height 19 (8/10 variants)
- `table-skeleton-loading` fixed width 80 (2/10 variants)

## Nested components

- Badge (124:2898) — connected: app/components/Badge/Badge.figma.ts

## Icons

- Icons / Edit (179:13389) → `edit.svg` present
