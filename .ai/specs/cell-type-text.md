# cell-type-text — 771:1082

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1082
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableTextCell.figma.ts)

## Props

- **Description** boolean (default true)
- **Description Text** text (default "Description Text")
- **Main Text** text (default "Table text goes here")
- **Icon** instance swap (default Icons / Edit)
- **Show icon** boolean (default true)
- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)

## Variants (5)

- State=Default — 379×64 (base)
- State=Disabled — 379×64
- State=Loading — 379×64
- State=Hover — 379×64
- State=Focus — 379×64

## Base tree — State=Default

- **State=Default** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Container** `frame` size 315×35 · sizing fill/hug · layout row align min/min · padding 0 0 0 0 · gap 12=Core/150
    - **Checkbox** `instance` size 24×24 · sizing hug/hug · size.vars ICONS/24 × ICONS/24 · layout row align min/min · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance Checkbox › Type=stroke, State=default, Selected=false · hidden true
    - **Text Container** `frame` size 315×35 · sizing fill/fill · layout column align center/min · padding 0 0 0 0 · gap 2=Core/25
      - **Main Text** `text` size 315×18 · sizing fill/hug · text "Table text goes here" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
      - **Description Text** `text` size 315×15 · sizing fill/hug · text "Description Text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
  - **Edit Icon** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Edit
    - ↳ icon color CONTENT/Icon

## Differences vs base

### State=Disabled

- `Container` layout: row align min/min → row align min/center
- `Container/Checkbox` absent
- `Container/Text Container/Main Text` color: CONTENT/Primary → CONTENT/Disabled
- `Container/Text Container/Description Text` color: CONTENT/Secondary → CONTENT/Disabled
- `Edit Icon/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### State=Loading

- `Container` size: 315×35 → 347×24
- `Container` layout: row align min/min → row align min/center
- `Container/Checkbox` absent
- `Container/Text Container` absent
- `Container/Text Container/Main Text` absent
- `Container/Text Container/Description Text` absent
- `Edit Icon` absent
- `Edit Icon/icon-color` absent
- `Container/table-skeleton-loading` only here: size 220×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Hover

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `Container` layout: row align min/min → row align min/center
- `Container/Checkbox` absent

### State=Focus

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `Container` layout: row align min/min → row align min/center
- `Container/Checkbox` absent


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
| family/Body | `var(--font-body)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| lg | – | no WEB code syntax |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` stroke weight 0/0/1/0 (4/5 variants)
- `(root)` fixed width 379 (5/5 variants)
- `Container/table-skeleton-loading` fixed width 220 (1/5 variants)

## Nested components

- Checkbox (124:2639) — connected: app/components/Checkbox/Checkbox.figma.ts

## Icons

- Icons / Edit (179:13389) → `edit.svg` present
