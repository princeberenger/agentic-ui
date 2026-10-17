# Pagination — 716:3790

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3790
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Pagination/Pagination.figma.ts)

## Props

- **Total items** text (default "10 of 35 items")
- **Current page** text (default "1/22")
- **Type** variant: numbered | simple (default simple)

## Variants (2)

- Type=simple — 424×48 (base)
- Type=numbered — 332×64

## Base tree — Type=simple

- **Type=simple** `component` size 424×48 · sizing fixed/fixed · layout row align space_between/center · padding 0 16=PADDING/16 0 16=PADDING/16 · gap 24
  - **pagination-results-label-wrapper** `frame` size 280×15 · sizing fixed/hug · layout row align center/center · padding 0 16=PADDING/16 0 0 · gap 8=PADDING/8
    - **Showing:** `text` size 67×15 · sizing hug/hug · text "Showing:" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **10 of 35 items** `text` size 189×15 · sizing fill/hug · text "10 of 35 items" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
  - **button-group** `frame` size 106×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 12=PADDING/12
    - **Button** `instance` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Chevron--left
      - ↳ icon-arrow (override) fill CONTENT/Disabled
    - **1/22** `text` size 34×15 · sizing hug/hug · text "1/22" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper align center · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary
    - **Button** `instance` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Chevron--right
      - ↳ icon-arrow (override) fill CONTENT/Icon

## Differences vs base

### Type=numbered

- `(root)` size: 424×48 → 332×64
- `(root)` sizing: fixed/fixed → hug/fixed
- `(root)` layout: row align space_between/center → row align max/center
- `(root)` gap: 24 → 4=PADDING/4
- `pagination-results-label-wrapper` absent
- `pagination-results-label-wrapper/Showing:` absent
- `pagination-results-label-wrapper/10 of 35 items` absent
- `button-group` absent
- `button-group/Button` absent
- `button-group/Button/icon/icon-arrow` absent
- `button-group/1/22` absent
- `button-group/Button#2` absent
- `button-group/Button#2/icon/icon-arrow` absent
- `Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill CONTENT/On Primary · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=icon-only, State=disabled, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Prev", Swap icon=Icons / Chevron--left
- `Button/icon` only here: size 20×20
- `Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `pagination-item` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=number, Open=false, Selected=false · props Page number="1"
- `pagination-item#2` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=number, Open=false, Selected=false · props Page number="2"
- `pagination-item#3` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=number, Open=false, Selected=false · props Page number="3"
- `pagination-item#4` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=number, Open=false, Selected=false · props Page number="4"
- `pagination-item#5` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=overflow, Open=false, Selected=false · props Page number="1"
- `pagination-item#6` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · layout row align min/center · padding 0 0 0 0 · gap 0 · instance pagination-item › State=default, Type=number, Open=false, Selected=false · props Page number="10"
- `Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=lg, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Prev", Swap icon=Icons / Chevron--right
- `Button#2/icon/icon-arrow` only here: fill CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Semibold | `var(--weight-semibold)` | ok |

## Styles

- text: BUTTON/Label/md/regular

## Values without variable

- `(root)` fixed width 424 (1/2 variants)
- `pagination-results-label-wrapper` fixed width 280 (1/2 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- pagination-item (716:3884) — connected: app/components/Pagination/PaginationItem.figma.ts

## Icons

none
