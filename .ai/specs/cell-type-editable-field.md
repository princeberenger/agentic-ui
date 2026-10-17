# cell-type-editable-field — 771:1444

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1444
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableEditableCell.figma.ts)

## Props

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
  - **Text input** `instance` size 315×40 · sizing fill/hug · minWidth 64=64px (4rem) (spacing-10) · layout column align min/min · padding 0 0 0 0 · gap 0 · instance Text input › Size=md, State=default, Text filled=true · props Placeholder text="Placeholder", Label text="Label", Input text="$99.00", Show helper=false, Show label=false
  - **Edit Icon** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Edit
    - ↳ icon color CONTENT/Icon

## Differences vs base

### State=Disabled

- `Text input` instance: Text input › Size=md, State=default, Text filled=true → Text input › Size=md, State=disabled, Text filled=false
- `Text input` props: Placeholder text="Placeholder", Label text="Label", Input text="$99.00", Show helper=false, Show label=false → Label text="Label", Placeholder text="$99.00", Show helper=false, Input text="$99.00", Show label=false
- `Edit Icon` size.vars: – → ICONS/16 × ICONS/16
- `Edit Icon/icon-color` fill: CONTENT/Icon → CONTENT/Disabled

### State=Loading

- `Text input` absent
- `Edit Icon` absent
- `Edit Icon/icon-color` absent
- `table-skeleton-loading` only here: size 220×24 · sizing fixed/fixed · fill BACKGROUND/Secondary · radius 2=2

### State=Hover

- `Text input` instance: Text input › Size=md, State=default, Text filled=true → Text input › Size=md, State=hover, Text filled=false
- `Text input` props: Placeholder text="Placeholder", Label text="Label", Input text="$99.00", Show helper=false, Show label=false → Label text="Label", Placeholder text="$99.00", Input text="$99.00", Show helper=false, Show label=false
- `Text input/Text input/Placeholder` only here: color CONTENT/Primary

### State=Focus

- `(root)` gap: 16=PADDING/16 → 8=PADDING/8
- `Text input` size: 315×40 → 299×40
- `Text input` instance: Text input › Size=md, State=default, Text filled=true → Text input › Size=md, State=focus, Text filled=true
- `Text input` props: Placeholder text="Placeholder", Label text="Label", Input text="$99.00", Show helper=false, Show label=false → Placeholder text="Placeholder", Input text="$99.00", Label text="Label", Show helper=false, Show label=false
- `Edit Icon` absent
- `Edit Icon/icon-color` absent
- `Text input/Text input` only here: stroke 1=default inside BORDER/Strong
- `Secondary button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Edit", Swap icon=Icons / Checkmark
- `Secondary button/icon` only here: size 16×20


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 2 | – | no WEB code syntax |
| 64px (4rem) (spacing-10) | `spacing-10` | external library variable |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| default | `var(--stroke-default)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Values without variable

- `(root)` stroke weight 0/0/1/0 (5/5 variants)
- `(root)` fixed width 379 (5/5 variants)
- `Edit Icon` fixed width 16, height 16 (2/5 variants)
- `table-skeleton-loading` fixed width 220 (1/5 variants)

## Nested components

- Text input (761:20738) — connected: app/components/Input/TextInput.figma.ts
- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

- Icons / Edit (179:13389) → `edit.svg` present
