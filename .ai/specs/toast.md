# Toast — 4008:623

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4008-623
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Toast/Toast.figma.ts)

## Props

- **Title** text (default "Toast label")
- **Toast text** text (default "Snackbar text")
- **Close button** boolean (default false)
- **Title icon** instance swap (default Icons / Checkmark)
- **Show text input** boolean (default true)
- **Action buttons** boolean (default true)
- **Action button 2** boolean (default true)
- **Action button 1** boolean (default true)
- **Type** variant: destructive | info | success | warning (default info)

## Variants (4)

- Type=info — 320×135 (base)
- Type=success — 320×135
- Type=destructive — 320×179
- Type=warning — 320×135

## Base tree — Type=info

- **Type=info** `component` size 320×135 · sizing fixed/hug · maxWidth 320 · layout column align min/min · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle · radius 12=12 · effect Shadows/elevation 3
  - **toast-header** `frame` size 320×56 · sizing fill/hug · layout row align min/center · padding 16=PADDING/16 16=PADDING/16 16=PADDING/16 16=PADDING/16 · gap 8=PADDING/8
    - **Frame 15** `frame` size 140×24 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 0 · radius 4=4
      - **Frame 13** `frame` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8 · fill CONTENT/Accent
        - **Icons / Checkmark** `instance` size 14×14 · sizing fixed/fixed · instance Icons / Checkmark
          - ↳ icon color BACKGROUND/Accent (Light)
      - **Frame 14** `frame` size 116×24 · sizing hug/fill · layout row align min/center · padding 4=PADDING/4 12=PADDING/12 4=PADDING/4 12=PADDING/12 · gap 8 · fill BACKGROUND/Accent (Light)
        - **Toast label** `text` size 92×15 · sizing hug/hug · text "Toast label" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper align center · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Accent
    - **Button** `instance` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · fill BACKGROUND/Secondary · radius 9999=full · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Close
      - ↳ icon (override) fill CONTENT/Secondary
  - **toast-content** `frame` size 320×31 · sizing fill/hug · layout row align min/center · padding 0=PADDING/none 32=PADDING/32 16=PADDING/16 16=PADDING/16 · gap 10
    - **Snackbar text** `text` size 272×15 · sizing fill/hug · text "Snackbar text" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
  - **toast-footer** `frame` size 320×48 · sizing fill/hug · layout row align min/center · padding 0=PADDING/none 16=PADDING/16 16=PADDING/16 16=PADDING/16 · gap 8=PADDING/8
    - **Button** `instance` size 140×32 · sizing fill/fixed · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=md, Style=secondary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Close, Label="Action 2"
    - **Button** `instance` size 140×32 · sizing fill/fixed · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BUTTON/Primary · radius 10=10 · instance Button › Size=md, Style=primary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Close, Label="Action 1"

## Differences vs base

### Type=success

- `toast-header/Frame 15` radius: 4=4 → –
- `toast-header/Frame 15/Frame 13` size.vars: ICONS/24 × ICONS/24 → ICONS/24
- `toast-header/Frame 15/Frame 13` fill: CONTENT/Accent → CONTENT/Success
- `toast-header/Frame 15/Frame 13/Icons / Checkmark/icon-color` fill: BACKGROUND/Accent (Light) → CONTENT/On Primary
- `toast-header/Frame 15/Frame 14` fill: BACKGROUND/Accent (Light) → BACKGROUND/Success (Light)
- `toast-header/Frame 15/Frame 14/Toast label` color: CONTENT/Accent → CONTENT/Success
- `toast-header/Button` hidden: – → true
- `toast-header/Button/icon/icon` fill: CONTENT/Secondary → CONTENT/Primary

### Type=destructive

- `(root)` size: 320×135 → 320×179
- `toast-header` gap: 8=PADDING/8 → 0
- `toast-header/Frame 15` radius: 4=4 → –
- `toast-header/Frame 15/Frame 13` fill: CONTENT/Accent → BACKGROUND/Attention
- `toast-header/Frame 15/Frame 13/Icons / Checkmark/icon-color` fill: BACKGROUND/Accent (Light) → CONTENT/On Primary
- `toast-header/Frame 15/Frame 14` fill: BACKGROUND/Accent (Light) → BACKGROUND/Attention (Light)
- `toast-header/Frame 15/Frame 14/Toast label` color: CONTENT/Accent → CONTENT/Attention
- `toast-header/Button` absent
- `toast-header/Button/icon/icon` absent
- `toast-content` size: 320×31 → 320×75
- `toast-content` layout: row align min/center → column align center/min
- `toast-content` padding: 0=PADDING/none 32=PADDING/32 16=PADDING/16 16=PADDING/16 → 0=PADDING/none 16=PADDING/16 16=PADDING/16 16=PADDING/16
- `toast-content` gap: 10 → 12=PADDING/12
- `toast-content/Snackbar text` size: 272×15 → 288×15
- `toast-footer` layout: row align min/center → row align space_between/center
- `toast-footer` gap: 8=PADDING/8 → 10
- `toast-footer/Button` size: 140×32 → 288×32
- `toast-footer/Button` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16
- `toast-footer/Button` fill: BUTTON/Secondary → BACKGROUND/Attention
- `toast-footer/Button` stroke: 0.5=sm inside BORDER/Subtle → –
- `toast-footer/Button` instance: Button › Size=md, Style=secondary, Type=text, State=default, Icon position=none → Button › Size=md, Style=destructive, Type=text, State=default, Icon position=none
- `toast-footer/Button` props: Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Close, Label="Action 2" → Badge label="1", Swap icon=Icons / Close, Keyboard shortcuts=true, Label="Delete"
- `toast-footer/Button#2` absent
- `toast-content/Text input` only here: size 288×32 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 0 · instance Text input › Size=sm, State=default, Text filled=false · props Input text="Text", Show helper=false, Label text="Label", Placeholder text="", Show label=false
- `Button` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · fill BACKGROUND/Secondary · radius 9999=full · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Close
- `Button/icon/icon` only here: fill CONTENT/Primary

### Type=warning

- `toast-header` gap: 8=PADDING/8 → 0
- `toast-header/Frame 15` radius: 4=4 → –
- `toast-header/Frame 15/Frame 13` fill: CONTENT/Accent → CONTENT/Warning (Text)
- `toast-header/Frame 15/Frame 13/Icons / Checkmark/icon-color` fill: BACKGROUND/Accent (Light) → CONTENT/Warning (Icons)
- `toast-header/Frame 15/Frame 14` fill: BACKGROUND/Accent (Light) → BACKGROUND/Warning
- `toast-header/Frame 15/Frame 14/Toast label` color: CONTENT/Accent → CONTENT/Warning (Text)
- `toast-header/Button` absent
- `toast-header/Button/icon/icon` absent
- `toast-content` layout: row align min/center → column align center/min
- `toast-content` gap: 10 → 0=PADDING/none
- `toast-footer/Button` props: Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Close, Label="Action 2" → Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Action 2"
- `toast-footer/Button#2` props: Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Close, Label="Action 1" → Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Action 1"
- `Button` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · fill BACKGROUND/Secondary · radius 9999=full · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Close
- `Button/icon/icon` only here: fill CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12112:34 | – | unresolved id |
| 10 | `var(--radius-10)` | ok |
| 12 | `var(--radius-md)` | ok |
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Accent (Light) | `var(--color-bg-accent-light)` | ok |
| BACKGROUND/Attention | `var(--color-bg-attention)` | ok |
| BACKGROUND/Attention (Light) | `var(--color-bg-attention-light)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BACKGROUND/Success (Light) | `var(--color-bg-success-light)` | ok |
| BACKGROUND/Warning | `var(--color-bg-warning)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Primary | `var(--color-button-primary)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Accent | `var(--color-content-accent)` | ok |
| CONTENT/Attention | `var(--color-content-attention)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Success | `var(--color-content-success)` | ok |
| CONTENT/Warning (Text) | `var(--color-content-warning-text)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/32 | `var(--space-32)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |
| weight/Semibold | `var(--weight-semibold)` | ok |

## Styles

- effect: Shadows/elevation 3
- text: BUTTON/Label/md/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed width 320 (4/4 variants)
- `toast-header/Frame 15/Frame 13/Icons / Checkmark` fixed width 14 (4/4 variants)
- `toast-header/Frame 15/Frame 13` fixed height 24 (1/4 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- Text input (761:20738) — connected: app/components/Input/TextInput.figma.ts

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
