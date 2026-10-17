# _Keyboard shortcut — 554:1360

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1360
- Extracted: 2026-10-17
- Code Connect: yes (app/components/KeyboardShortcut/KeyboardShortcut.figma.ts)

## Props

- **Show Letter 4** boolean (default true)
- **Icon** instance swap (default Icons / Arrow--up-right)
- **Icon 1** instance swap (default Mac--command)
- **Icon 2** instance swap (default Mac--option)
- **Icon 3** instance swap (default Mac--shift)
- **Show Icon 1** boolean (default true)
- **Show Icon 2** boolean (default false)
- **Show Icon 3** boolean (default false)
- **Show Icon 4 (Any)** boolean (default false)
- **Show Letter 1** boolean (default true)
- **Show Letter 2** boolean (default false)
- **Show Letter 3** boolean (default false)
- **Icon 4 (Any)** instance swap (default Delete)
- **Context** variant: caret | icon | shortcut | slash | Return (default caret)

## Variants (5)

- Context=caret — 14×14 (base)
- Context=Return — 14×14
- Context=icon — 14×14
- Context=slash — 14×14
- Context=shortcut — 23×15

## Base tree — Context=caret

- **Context=caret** `component` size 14×14 · sizing fixed/fixed · layout row align max/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
  - **Icon** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Caret--right
    - ↳ icon color CONTENT/Icon

## Differences vs base

### Context=Return

- `(root)` layout: row align max/center → row align center/center
- `Icon` absent
- `Icon/icon-color` absent
- `Icons / Return` only here: size 16×16 · sizing fixed/fixed · instance Icons / Return
- `Icons / Return/icon-color` only here: fill CONTENT/Icon

### Context=icon

- `Icon` instance: Icons / Caret--right → Icons / Arrow--up-right

### Context=slash

- `(root)` layout: row align max/center → row align center/center
- `Icon` instance: Icons / Caret--right → –
- `Icon` size.vars: – → ICONS/14
- `Icon` layout: – → column align center/center
- `Icon` padding: – → 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none
- `Icon` gap: – → 0
- `Icon` fill: – → BACKGROUND/Secondary
- `Icon` radius: – → 2=2
- `Icon/icon-color` absent
- `Icon//` only here: size 6×18 · sizing hug/hug · text "/" · font SYSTEM/Label/sm/regular · Departure Mono 400 9/18 ls 0 upper · font.vars family/Labels, Links, size/Super Tiny, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Icon

### Context=shortcut

- `(root)` size: 14×14 → 23×15
- `(root)` sizing: fixed/fixed → hug/hug
- `(root)` gap: 0=PADDING/none → 0
- `Icon` instance: Icons / Caret--right → Mac--command
- `Icon/icon-color` absent
- `Icon/Vector` only here: fill CONTENT/Icon
- `Icon#2` only here: size 14×14 · sizing fixed/fixed · instance Mac--option · hidden true
- `Icon#2/Vector` only here: fill CONTENT/Icon
- `Icon#3` only here: size 14×14 · sizing fixed/fixed · instance Mac--shift · hidden true
- `Icon#3/Vector` only here: fill CONTENT/Icon
- `Icon#4` only here: size 14×14 · sizing fixed/fixed · instance Delete · hidden true
- `Icon#4/Vector` only here: fill CONTENT/Icon
- `X` only here: size 9×15 · sizing hug/hug · text "X" · font Departure Mono 400 14/15 ls -0.3 upper · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Icon
- `Y` only here: size 9×15 · sizing fixed/fixed · text "Y" · font Departure Mono 400 14/15 ls -0.3 upper · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Icon · hidden true
- `Z` only here: size 9×15 · sizing fixed/fixed · text "Z" · font Departure Mono 400 14/15 ls -0.3 upper · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Icon · hidden true


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 2 | – | no WEB code syntax |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| CONTENT/Icon | `var(--color-content-icon)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| letter-spacing/tight | `var(--tracking-tight)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Super Tiny | `var(--text-super-tiny)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Label/sm/regular

## Values without variable

- `(root)` fixed width 14 (4/5 variants)
- `Icon` fixed width 14 (3/5 variants)
- `Icons / Return` fixed width 16, height 16 (1/5 variants)
- `Icon` fixed height 14 (1/5 variants)
- `Icon#2` fixed width 14 (1/5 variants)
- `Icon#3` fixed width 14 (1/5 variants)
- `Icon#4` fixed width 14 (1/5 variants)

## Nested components

- Mac--command (554:1273) — not connected
- Mac--option (554:1275) — not connected
- Mac--shift (554:1277) — not connected
- Delete (554:1279) — not connected

## Icons

- Icons / Caret--right (179:14018) → `caret-right.svg` present
- Icons / Return (179:14428) → `return.svg` present
- Icons / Arrow--up-right (179:14020) → `arrow-up-right.svg` present
