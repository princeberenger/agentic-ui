# nav-link — 750:8765

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=750-8765
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Navigation/NavLink.figma.ts)

## Props

- **Icon** instance swap (default Icons / Meter)
- **Label** text (default "Section label")
- **Show icon** boolean (default true)
- **Section Open** boolean (default false)
- **Section Closed** boolean (default false)
- **State** variant: default | hover (default default)
- **Type** variant: label | link (default link)

## Variants (3)

- State=default, Type=link — 148×32 (base)
- State=default, Type=label — 94×31
- State=hover, Type=link — 148×32

## Base tree — State=default, Type=link

- **State=default, Type=link** `component` size 148×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8
  - **Icons / Meter** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Meter
    - ↳ icon color CONTENT/Primary
  - **Section label** `text` size 108×15 · sizing hug/hug · text "Section label" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
  - **chevron-icon-wrapper** `frame` size 1×20 · sizing fixed/hug · layout column align center/max · padding 0 0 0 0 · gap 0 · hidden true
    - **Icons / Chevron--up** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Chevron--up
      - ↳ icon color CONTENT/Primary
  - **chevron-icon-wrapper** `frame` size 1×16 · sizing fixed/hug · layout column align center/max · padding 0 0 0 0 · gap 0 · hidden true
    - **Icons / Chevron--down** `instance` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · instance Icons / Chevron--down
      - ↳ icon color CONTENT/Primary

## Differences vs base

### State=default, Type=label

- `(root)` size: 148×32 → 94×31
- `Icons / Meter` absent
- `Icons / Meter/icon-color` absent
- `Section label` size: 108×15 → 78×15
- `Section label` font: BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper → SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0
- `Section label` font.vars: family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal → family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal
- `Section label` color: CONTENT/Primary → CONTENT/Secondary
- `chevron-icon-wrapper` absent
- `chevron-icon-wrapper/Icons / Chevron--up` absent
- `chevron-icon-wrapper/Icons / Chevron--up/icon-color` absent
- `chevron-icon-wrapper#2` absent
- `chevron-icon-wrapper#2/Icons / Chevron--down` absent
- `chevron-icon-wrapper#2/Icons / Chevron--down/icon-color` absent

### State=hover, Type=link

- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `(root)` radius: – → 10=10


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |
| weight/Semibold | `var(--weight-semibold)` | ok |

## Styles

- text: BUTTON/Label/md/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `chevron-icon-wrapper` fixed width 1 (2/3 variants)
- `chevron-icon-wrapper#2` fixed width 1 (2/3 variants)

## Nested components

none

## Icons

- Icons / Meter (179:13879) → `meter.svg` present
- Icons / Chevron--up (179:14030) → `chevron-up.svg` present
- Icons / Chevron--down (179:14036) → `chevron-down.svg` present
