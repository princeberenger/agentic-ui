# Menu model selection — 638:6554

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=638-6554
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Menu/MenuModelSelection.figma.ts)

## Props

none

## Variants (1)

- Menu model selection — 531×188 (base)

## Base tree — Menu model selection

- **Menu model selection** `component` size 531×188 · sizing fixed/hug · minWidth 160 · layout column align min/min · padding 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 · gap 0 · fill BACKGROUND/menu/background · stroke 0.5=sm outside BORDER/Medium · radius 10=10 · effect Shadows/elevation2
  - **blur** `rectangle` size 530×180 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
  - **_Menu list item** `instance` size 523×36 · sizing fill/hug · minWidth 132 · maxWidth 540 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=false, Model=true, Selected=false, Option text="Claude 4 Sonnet - High Thinking (May 2025)", Divider=false
    - ↳ Models (override) fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle
  - **_Menu list item** `instance` size 523×36 · sizing fill/hug · minWidth 160 · maxWidth 540 · layout column align min/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=selected · props Selected=true, Shortcuts / Icon=true, Option text="Claude 4.1 Opus (Aug 2025)", Indented=false, Divider=false, Model=true
    - ↳ Models (override) fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle
  - **_Menu list item** `instance` size 523×36 · sizing fill/hug · minWidth 132 · maxWidth 540 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=true, Selected=false, Option text="Claude 4.5 Sonnet - High Thinking (Sep 2025)", Divider=false
    - ↳ Models (override) fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle
  - **_Menu list item** `instance` size 523×36 · sizing fill/hug · minWidth 132 · maxWidth 540 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=true, Selected=false, Option text="Claude 4.5 Haiku (Sep 2025)", Divider=false
    - ↳ Models (override) fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle
  - **_Menu list item** ×4 `instance` size 531×52 · sizing fixed/fixed · minWidth 132 · maxWidth 540 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=true, Selected=false, Option text="Claude 4.5 Haiku (Sep 2025)", Divider=false · hidden true
    - ↳ Models (override) stroke 1=default inside BORDER/Subtle
  - **_Menu list item** `instance` size 523×36 · sizing fill/hug · minWidth 132 · maxWidth 540 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=true, Selected=false, Option text="Claude 4.5 Opus (Nov 2025)", Divider=false
    - ↳ Models (override) fill BUTTON/Secondary · stroke 1=default inside BORDER/Subtle
  - **internal-border** `rectangle` size 531×188 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 10=10

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/menu/background | `var(--color-bg-menu)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Styles

- effect: Shadows/elevation2

## Values without variable

- `(root)` fixed width 531
- `blur` effect layer_blur 0  (no style)
- `blur` fixed width 530, height 180
- `[run 1]` fixed width 531, height 52
- `internal-border` fixed width 531, height 188

## Nested components

- _Menu list item (554:1372) — connected: app/components/Menu/MenuItem.figma.ts

## Icons

none
