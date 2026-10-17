# cell-type-dropdown — 771:1501

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1501
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableDropdownCell.figma.ts)

## Props

- **Main Text** text (default "$120.00")
- **State** variant: Default | Selected | Focus | Disabled | Loading (default Default)

## Variants (5)

- State=Default — 379×64 (base)
- State=Disabled — 379×64
- State=Loading — 379×64
- State=Selected — 379×64
- State=Focus — 379×64

## Base tree — State=Default

- **State=Default** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Price Container** `frame` size 81×34 · sizing hug/hug · layout row align min/center · padding 8=Core/100 8=Core/100 8=Core/100 0=Core/0 · gap 4=Core/50 · radius 8=radius/formInput
    - **Price** `text` size 53×18 · sizing hug/hug · text "$120.00" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
    - **Dropdown Icon** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Chevron--down
      - ↳ icon color CONTENT/Icon

## Differences vs base

### State=Disabled

- `Price Container/Price` color: CONTENT/Primary → CONTENT/Disabled
- `Price Container/Dropdown Icon/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### State=Loading

- `Price Container` absent
- `Price Container/Price` absent
- `Price Container/Dropdown Icon` absent
- `Price Container/Dropdown Icon/icon-color` absent
- `table-skeleton-loading` only here: size 133×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Selected

- `(root)` gap: 16=PADDING/16 → 12=PADDING/12
- `Price Container` size: 81×34 → 97×34
- `Price Container` padding: 8=Core/100 8=Core/100 8=Core/100 0=Core/0 → 8=PADDING/8 8=PADDING/8 8=PADDING/8 16=PADDING/16
- `Price Container` gap: 4=Core/50 → 4=PADDING/4
- `Price Container` radius: 8=radius/formInput → 10=10
- `Price Container` fill: – → BACKGROUND/Primary + INPUT/Pressed@0.08

### State=Focus

- `Price Container` size: 81×34 → 97×34
- `Price Container` padding: 8=Core/100 8=Core/100 8=Core/100 0=Core/0 → 8=Core/100 8=Core/100 8=Core/100 16=Core/200
- `Price Container` radius: 8=radius/formInput → 10=10
- `Price Container` stroke: – → 1.5=md inside BORDER/Strong
- `Price Container/Dropdown Icon` instance: Icons / Chevron--down → Icons / Chevron--up


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 2 | – | no WEB code syntax |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| Core/0 | – | external library variable |
| Core/100 | – | external library variable |
| Core/200 | – | external library variable |
| Core/50 | – | external library variable |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Pressed | – | no WEB code syntax |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| md | – | no WEB code syntax |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| radius/formInput | – | external library variable |
| size/Small | `var(--text-small)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/regular

## Values without variable

- `(root)` stroke weight 0/0/1/0 (5/5 variants)
- `(root)` fixed width 379 (5/5 variants)
- `Price Container/Dropdown Icon` fixed width 16, height 16 (4/5 variants)
- `table-skeleton-loading` fixed width 133 (1/5 variants)

## Nested components

none

## Icons

- Icons / Chevron--down (179:14036) → `chevron-down.svg` present
- Icons / Chevron--up (179:14030) → `chevron-up.svg` present
