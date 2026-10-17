# DEMO PAGE HEADER — 587:3511

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=587-3511
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Label** text (default "Page name")

## Variants (1)

- DEMO PAGE HEADER — 1280×56 (base)

## Base tree — DEMO PAGE HEADER

- **DEMO PAGE HEADER** `component` size 1280×56 · sizing fixed/hug · layout row align space_between/center · padding 32=PADDING/32 32=PADDING/32 0 32=PADDING/32 · gap 900 · radius 12=12
  - **LEFT** `frame` size 123×22.59 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 12
    - **AGENTIC UI LOGO** `instance` size 24×22.59 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/20 · layout row align center/center · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance AGENTIC UI LOGO › Variant=Symbol
      - ↳ Union (override) fill CONTENT/Secondary
    - **divider** `frame` size 9×22.59 · sizing hug/fill · layout row align center/center · padding 0 0 0 0 · gap 0
      - **divider** `line` size 9×20 · sizing fixed/fixed · stroke 1 center BORDER/Subtle
    - **Page name** `text` size 66×18 · sizing hug/hug · text "Page name" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **RIGHT** `frame` size 173×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 12
    - **Launch Demo** `text` size 81×18 · sizing hug/hug · text "Launch Demo" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
    - **wrapper** `frame` size 80×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 4=PADDING/4
      - **Button** `instance` size 24×24 · sizing fixed/fixed · layout row align center/center · padding 8=PADDING/8 6=PADDING/6 8=PADDING/8 6=PADDING/6 · gap 8=PADDING/8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=shortcut, State=default, Icon position=none · props Badge label="1", Swap icon=179:14029, Label="Label", Keyboard shortcuts=true
        - ↳ _Keyboard shortcut (override) instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=false, Icon 1=Mac--command, Show Icon 2=true, Show Icon 3=false, Show Icon 1=false
      - **Button** `instance` size 24×24 · sizing fixed/fixed · layout row align center/center · padding 8=PADDING/8 6=PADDING/6 8=PADDING/8 6=PADDING/6 · gap 8=PADDING/8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=shortcut, State=default, Icon position=none · props Badge label="1", Swap icon=179:14029, Label="Label", Keyboard shortcuts=true
        - ↳ _Keyboard shortcut (override) instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=false, Icon 1=Mac--command, Show Icon 2=false, Show Icon 3=false, Show Icon 1=true
      - **Button** `instance` size 24×24 · sizing fixed/fixed · layout row align center/center · padding 8=PADDING/8 6=PADDING/6 8=PADDING/8 6=PADDING/6 · gap 8=PADDING/8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Button › Size=sm, Style=secondary, Type=shortcut, State=default, Icon position=none · props Badge label="1", Swap icon=179:14029, Label="Label", Keyboard shortcuts=true
        - ↳ _Keyboard shortcut (override) instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Icons / Return, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=false, Icon 1=Mac--command, Show Icon 2=true, Show Icon 3=false, Show Icon 1=false
        - ↳ icon (override) fill CONTENT/Icon

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 12 | `var(--radius-md)` | ok |
| 6 | `var(--radius-6)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/20 | `var(--icon-20)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/32 | `var(--space-32)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 1280
- `LEFT` gap 12
- `LEFT/divider/divider` stroke weight 1
- `RIGHT` gap 12
- `RIGHT/wrapper/Button` fixed width 24
- `RIGHT/wrapper/Button#2` fixed width 24
- `RIGHT/wrapper/Button#3` fixed width 24

## Nested components

- AGENTIC UI LOGO (146:1787) — not connected
- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

none
