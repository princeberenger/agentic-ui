# Search — 338:6162

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6162
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Search/Search.figma.ts)

## Props

- **Size** variant: large (from expanded) | lg | sm | small (from expanded) (default lg)
- **State** variant: default | disabled | filled | focus | hover | skeleton (default default)
- **Expanded** variant: false | true (default true)

## Variants (18)

- Size=lg, State=default, Expanded=true — 320×40 (base)
- Size=sm, State=default, Expanded=true — 240×32
- Size=lg, State=hover, Expanded=true — 320×40
- Size=sm, State=hover, Expanded=true — 240×32
- Size=lg, State=focus, Expanded=true — 320×40
- Size=sm, State=focus, Expanded=true — 240×32
- Size=lg, State=filled, Expanded=true — 320×40
- Size=sm, State=filled, Expanded=true — 240×32
- Size=sm, State=disabled, Expanded=true — 240×32
- Size=lg, State=disabled, Expanded=true — 320×40
- Size=sm, State=skeleton, Expanded=true — 240×32
- Size=lg, State=skeleton, Expanded=true — 320×40
- Size=lg, State=default, Expanded=false — 40×40
- Size=sm, State=default, Expanded=false — 32×32
- Size=lg, State=hover, Expanded=false — 40×40
- Size=sm, State=hover, Expanded=false — 32×32
- Size=small (from expanded), State=focus, Expanded=true — 240×32
- Size=large (from expanded), State=focus, Expanded=true — 320×40

## Base tree — Size=lg, State=default, Expanded=true

- **Size=lg, State=default, Expanded=true** `component` size 320×40 · sizing fixed/hug · layout row align min/min · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Secondary · stroke 0.5 inside BORDER/Subtle · radius 12=12
  - **_Search base** `instance` size 320×40 · sizing fill/fixed · layout row align min/center · padding 0 0 0 0 · gap 0 · instance _Search base › Size=md, Expanded=true · props Label="Search"

## Differences vs base

### Size=sm, State=default, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 240×32
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base/Search icon/Icons / Search/icon` only here: fill CONTENT/Secondary
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Secondary
- `_Search base/Hide text overflow/Cursor blink animation` only here: hidden true
- `_Search base/shortcut/text-wrapper` only here: fill BACKGROUND/Secondary
- `_Search base/Clear icon` only here: hidden true

### Size=lg, State=hover, Expanded=true

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside BORDER/Subtle
- `_Search base/Search icon/Search/Vector` only here: fill CONTENT/Primary

### Size=sm, State=hover, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside BORDER/Subtle
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 240×32
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Secondary
- `_Search base/Hide text overflow/Cursor blink animation` only here: hidden true
- `_Search base/shortcut/text-wrapper` only here: fill BACKGROUND/Secondary
- `_Search base/Clear icon` only here: hidden true

### Size=lg, State=focus, Expanded=true

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside CONTENT/Primary
- `(root)` effect: – → drop_shadow 0,0 0 2 #0000001f (no style)
- `_Search base` props: Label="Search" → Label="Typing"
- `_Search base/Search icon/Search/Vector` only here: fill CONTENT/Primary
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary
- `_Search base/shortcut` only here: hidden true

### Size=sm, State=focus, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside CONTENT/Primary
- `(root)` radius: 12=12 → 10=10
- `(root)` effect: – → drop_shadow 0,0 0 2 #0000001f (no style)
- `_Search base` size: 320×40 → 240×32
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base` props: Label="Search" → Label="Typing"
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary

### Size=lg, State=filled, Expanded=true

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside BORDER/Subtle
- `_Search base` props: Label="Search" → Label="Filled"
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary
- `_Search base/shortcut` only here: hidden true

### Size=sm, State=filled, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside BORDER/Subtle
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 240×32
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base` props: Label="Search" → Label="Filled"
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary
- `_Search base/Hide text overflow/Cursor blink animation` only here: hidden true

### Size=sm, State=disabled, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` sizing: fixed/hug → fixed/fixed
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 240×30
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base` props: Label="Search" → Label="Disabled"
- `_Search base/Search icon/Icons / Search/icon` only here: fill CONTENT/Disabled
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Disabled
- `_Search base/Hide text overflow/Cursor blink animation` only here: hidden true
- `_Search base/Clear icon` only here: hidden true

### Size=lg, State=disabled, Expanded=true

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` props: Label="Search" → Label="Disabled"
- `_Search base/Search icon/Search/Vector` only here: fill CONTENT/Disabled
- `_Search base/Hide text overflow/Text` only here: font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · color CONTENT/Disabled
- `_Search base/shortcut` only here: hidden true

### Size=sm, State=skeleton, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` sizing: fixed/hug → fixed/fixed
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 240×30
- `_Search base` sizing: fill/fixed → fixed/fixed
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base` hidden: – → true
- `_Search base/Hide text overflow/Text` only here: hidden true
- `_Search base/Hide text overflow/Cursor blink animation` only here: hidden true
- `_Search base/Clear icon` only here: hidden true

### Size=lg, State=skeleton, Expanded=true

- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `_Search base` sizing: fill/fixed → fixed/fixed
- `_Search base` hidden: – → true
- `_Search base/Search icon/Search/Vector` only here: fill CONTENT/Icon
- `_Search base/Hide text overflow/Text` only here: hidden true
- `_Search base/shortcut` only here: hidden true

### Size=lg, State=default, Expanded=false

- `(root)` size: 320×40 → 40×40
- `(root)` sizing: fixed/hug → hug/hug
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 40×40
- `_Search base` sizing: fill/fixed → hug/fixed
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=md, Expanded=false

### Size=sm, State=default, Expanded=false

- `(root)` size: 320×40 → 32×32
- `(root)` sizing: fixed/hug → hug/hug
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 32×32
- `_Search base` sizing: fill/fixed → fixed/fixed
- `_Search base` layout: row align min/center → row align center/center
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=false

### Size=lg, State=hover, Expanded=false

- `(root)` size: 320×40 → 40×40
- `(root)` sizing: fixed/hug → hug/hug
- `(root)` fill: BACKGROUND/Secondary → INPUT/Hover (Dark)@0.04
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 40×40
- `_Search base` sizing: fill/fixed → hug/fixed
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=md, Expanded=false

### Size=sm, State=hover, Expanded=false

- `(root)` size: 320×40 → 32×32
- `(root)` sizing: fixed/hug → hug/hug
- `(root)` fill: BACKGROUND/Secondary → INPUT/Hover (Dark)@0.04
- `(root)` stroke: 0.5 inside BORDER/Subtle → –
- `(root)` radius: 12=12 → 10=10
- `_Search base` size: 320×40 → 32×32
- `_Search base` sizing: fill/fixed → fixed/fixed
- `_Search base` layout: row align min/center → row align center/center
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=false

### Size=small (from expanded), State=focus, Expanded=true

- `(root)` size: 320×40 → 240×32
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside CONTENT/Primary
- `(root)` radius: 12=12 → 10=10
- `(root)` effect: – → drop_shadow 0,0 0 2 #0000001f (no style)
- `_Search base` size: 320×40 → 240×32
- `_Search base` instance: _Search base › Size=md, Expanded=true → _Search base › Size=sm, Expanded=true
- `_Search base` props: Label="Search" → Label="Typing"
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary

### Size=large (from expanded), State=focus, Expanded=true

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: 0.5 inside BORDER/Subtle → 1 inside CONTENT/Primary
- `(root)` effect: – → drop_shadow 0,0 0 2 #0000001f (no style)
- `_Search base` props: Label="Search" → Label="Typing"
- `_Search base/Search icon/Search/Vector` only here: fill CONTENT/Primary
- `_Search base/Hide text overflow/Text` only here: color CONTENT/Primary
- `_Search base/shortcut` only here: hidden true


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?124:3052 | – | unresolved id |
| 10 | `var(--radius-10)` | ok |
| 12 | `var(--radius-md)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |

## Values without variable

- `(root)` stroke weight 0.5 (2/18 variants)
- `(root)` fixed width 320 (7/18 variants)
- `_Search base` fixed height 40 (8/18 variants)
- `(root)` fixed width 240 (5/18 variants)
- `_Search base` fixed height 32 (5/18 variants)
- `(root)` stroke weight 1 (8/18 variants)
- `(root)` effect drop_shadow 0,0 0 2 #0000001f (no style) (4/18 variants)
- `(root)` fixed width 240, height 32 (2/18 variants)
- `_Search base` fixed height 30 (1/18 variants)
- `_Search base` fixed width 240, height 30 (1/18 variants)
- `_Search base` fixed width 320, height 40 (1/18 variants)
- `_Search base` fixed width 32, height 32 (2/18 variants)

## Nested components

- _Search base (338:6250) — not connected

## Icons

none
