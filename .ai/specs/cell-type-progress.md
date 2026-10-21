# cell-type-progress — 4096:6790

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-6790
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Table/TableProgressCell.figma.ts)

## Props

- **Label** text (default "10%")
- **State** variant: Default | Selected | Focus | Disabled | Loading (default Default)

## Variants (5)

- State=Default — 379×64 (base)
- State=Disabled — 379×64
- State=Loading — 379×64
- State=Selected — 379×64
- State=Focus — 379×64

## Base tree — State=Default

- **State=Default** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 12=PADDING/12 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **Progress - Bars (10)** `instance` size 38×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2 · instance Progress - Bars (10) › Filled=10%
  - **10%** `text` size 22×18 · sizing hug/hug · text "10%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

## Differences vs base

### State=Disabled

- `Progress - Bars (10)` opacity: – → 0.3
- `10%` color: CONTENT/Primary → CONTENT/Disabled

### State=Loading

- `(root)` gap: 12=PADDING/12 → 16=PADDING/16
- `Progress - Bars (10)` absent
- `10%` absent
- `table-skeleton-loading` only here: size 56×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=?12104:1047

### State=Selected

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=Focus

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12104:1047 | – | unresolved id |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| lg | `var(--stroke-lg)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` stroke weight 0/0/1/0 (4/5 variants)
- `(root)` fixed width 379 (5/5 variants)
- `table-skeleton-loading` fixed width 56 (1/5 variants)

## Nested components

- Progress - Bars (10) (4096:6952) — connected: app/components/ProgressBars/ProgressBars10.figma.ts

## Icons

none
