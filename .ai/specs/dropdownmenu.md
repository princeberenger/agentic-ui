# DropdownMenu — 4084:4742

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4084-4742
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Dropdown/Dropdown.figma.ts)

## Props

- **Label** text (default "- Select -")
- **Label (Filled)** text (default "Item 2")
- **State** variant: active | default | disabled | filled | focus | hover (default default)

## Variants (6)

- State=default — 288×40 (base)
- State=filled — 288×40
- State=hover — 288×40
- State=active — 288×40
- State=focus — 288×40
- State=disabled — 288×40

## Base tree — State=default

- **State=default** `component` size 288×40 · sizing fixed/fixed · layout row align min/center · padding 0=PADDING/none 12=PADDING/12 0=PADDING/none 12=PADDING/12 · gap 0=PADDING/none · fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle · radius 10=10
  - **label** `frame` size 248×18 · sizing fill/hug · layout row align center/center · padding 0 0 0 0 · gap 10
    - **- Select -** `text` size 248×18 · sizing fill/hug · text "- Select -" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Secondary
  - **Icons / Chevron--sort** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Chevron--sort
    - ↳ icon color CONTENT/Icon

## Differences vs base

### State=filled

- `label/- Select -` absent
- `label/Item 2` only here: size 248×18 · sizing fill/hug · text "Item 2" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

### State=hover

- `(root)` fill: BUTTON/Secondary → BUTTON/Secondary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Medium
- `(root)` effect: – → Shadows/elevation1
- `Icons / Chevron--sort/icon-color` fill: CONTENT/Icon → CONTENT/Secondary

### State=active

- `(root)` fill: BUTTON/Secondary → –
- `(root)` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Strong
- `label/- Select -` sizing: fill/hug → fixed/fixed
- `label/- Select -` hidden: – → true
- `Icons / Chevron--sort/icon-color` fill: CONTENT/Icon → CONTENT/Primary

### State=focus

- `(root)` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Medium
- `(root)` effect: – → Components/Focus

### State=disabled

- `(root)` stroke: 1=default inside BORDER/Subtle → 1=default inside BORDER/Disabled
- `label/- Select -` color: CONTENT/Secondary → CONTENT/Disabled
- `Icons / Chevron--sort/icon-color` fill: CONTENT/Icon → CONTENT/Disabled


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Disabled | `var(--color-border-disabled)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Components/Focus
- effect: Shadows/elevation1
- text: SYSTEM/Body/sm/regular

## Values without variable

- `(root)` fixed width 288 (6/6 variants)
- `Icons / Chevron--sort` fixed width 16, height 16 (6/6 variants)

## Nested components

none

## Icons

- Icons / Chevron--sort (179:14521) → `chevron-sort.svg` present
