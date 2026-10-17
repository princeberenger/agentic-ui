# _Menu list item — 554:1372

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1372
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Menu/MenuItem.figma.ts)

## Props

- **Model** boolean (default false)
- **Divider** boolean (default false)
- **Option text** text (default "Menu item")
- **Selected** boolean (default false)
- **Shortcuts / Icon** boolean (default true)
- **Indented** boolean (default false)
- **Size** variant: regular | sm (default regular)
- **State** variant: default | hover | selected | focus | disabled (default default)

## Variants (10)

- Size=regular, State=default — 160×36 (base)
- Size=sm, State=default — 160×28
- Size=regular, State=hover — 160×36
- Size=sm, State=hover — 160×28
- Size=regular, State=selected — 160×36
- Size=sm, State=selected — 160×28
- Size=sm, State=focus — 160×28
- Size=sm, State=disabled — 160×28
- Size=regular, State=disabled — 160×36
- Size=regular, State=focus — 160×36

## Base tree — Size=regular, State=default

- **Size=regular, State=default** `component` size 160×36 · sizing fixed/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6
  - **divider** `frame` size 160×3 · sizing fixed/fixed · layout row align min/min · padding 1 8=PADDING/8 1 8=PADDING/8 · gap 0 · hidden true
    - **Divider** `line` size 144×0 · sizing fill/fixed · stroke 1=default center BORDER/Subtle
  - **Content** `frame` size 160×34 · sizing fill/hug · layout row align min/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4
    - **Text overflow + Menu style** `frame` size 136×18 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 12=PADDING/12
      - **Models** `instance` size 20×20 · sizing fixed/fixed · maxWidth 20 · layout column align center/center · padding 11 8 11 8 · gap 8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Models › Provider=anthropic --s · hidden true
      - **Text overflow** `frame` size 101×18 · sizing fill/hug · layout row align min/min · padding 0 0 0 0 · gap 0
        - **Spacer** `rectangle` size 20×16 · sizing fixed/fixed · hidden true
        - **wrapper** `frame` size 101×18 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
          - **Menu item** `text` size 101×18 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
          - **Helper text** `text` size 136×45 · sizing fixed/fixed · text "Power 5/5 •  Context Window: 200k •  Reasoning" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary · hidden true
      - **_Keyboard shortcut** `instance` size 23×15 · sizing hug/hug · layout row align max/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0 · instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=true, Icon 1=Mac--command, Show Icon 2=false, Show Icon 3=false, Show Icon 1=true
    - **Icons / Checkmark** `instance` size 13×13 · sizing fixed/fixed · instance Icons / Checkmark · hidden true
      - ↳ icon color CONTENT/Primary

## Differences vs base

### Size=sm, State=default

- `(root)` size: 160×36 → 160×28
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` minWidth: 132 → 120
- `(root)` radius: 6=6 → –
- `Content` size: 160×34 → 160×28
- `Content` sizing: fill/hug → fill/fixed
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content` minWidth: – → 160
- `Content` maxWidth: – → 288
- `Content/Text overflow + Menu style` size: 136×18 → 144×15
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 105×15
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` size: 20×16 → 24×14
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` absent
- `Content/Icons / Checkmark` size: 13×13 → 14×14
- `Content/Text overflow + Menu style/Text overflow/Menu item` only here: size 105×15 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `background` only here: size 160×28 · sizing fixed/fixed · radius 6=6

### Size=regular, State=hover

- `divider` absent
- `divider/Divider` absent
- `Content` size: 160×34 → 160×36
- `Content` sizing: fill/hug → fill/fill
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 7 12=PADDING/12 7 12=PADDING/12
- `Content` gap: 4=PADDING/4 → 12=PADDING/12
- `Content` fill: – → INPUT/Hover (Dark)@0.04
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` size: 101×18 → 136×18
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` sizing: fill/hug → fixed/hug
- `Content/Icons / Checkmark` absent
- `Content/Icons / Checkmark/icon-color` absent
- `Divider` only here: size 160×0 · sizing fixed/fixed · stroke 1 center BORDER/Subtle · hidden true
- `Content/Checkmark` only here: size 16×16 · sizing fixed/fixed · fill #ffffff00 (no variable) · instance Checkmark · hidden true
- `Content/Checkmark/Vector` only here: fill CONTENT/Primary

### Size=sm, State=hover

- `(root)` size: 160×36 → 160×28
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` minWidth: 132 → 120
- `divider` layout: row align min/min → column align min/min
- `divider` padding: 1 8=PADDING/8 1 8=PADDING/8 → 1 0 1 0
- `divider/Divider` size: 144×0 → 160×0
- `divider/Divider` stroke: 1=default center BORDER/Subtle → 1 center BORDER/Subtle
- `Content` size: 160×34 → 160×28
- `Content` sizing: fill/hug → fill/fixed
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content` minWidth: – → 160
- `Content` maxWidth: – → 288
- `Content/Text overflow + Menu style` size: 136×18 → 144×15
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 105×15
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` size: 20×16 → 24×15
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` absent
- `Content/Icons / Checkmark` size: 13×13 → 14×14
- `background` only here: size 160×28 · sizing fixed/fixed · fill INPUT/Hover (Dark)@0.04 · radius 6=6
- `Content/Text overflow + Menu style/Text overflow/Menu item` only here: size 105×15 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=regular, State=selected

- `Content` size: 160×34 → 160×36
- `Content` sizing: fill/hug → fill/fill
- `Content` gap: 4=PADDING/4 → 12=PADDING/12
- `Content` fill: – → BUTTON/Secondary
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 97×18
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/max
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper` size: 101×18 → 97×18
- `Content/Text overflow + Menu style/Text overflow/wrapper` layout: column align min/min → column align center/min
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` size: 101×18 → 97×18
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` size: 136×45 → 108×60
- `Content/Icons / Checkmark` size: 13×13 → 16×16
- `Content/Models` only here: size 24×24 · sizing fixed/fixed · maxWidth 20 · layout column align center/center · padding 11 8 11 8 · gap 8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Models › Provider=anthropic --s · hidden true

### Size=sm, State=selected

- `(root)` size: 160×36 → 160×28
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` minWidth: 132 → 120
- `(root)` fill: – → BUTTON/Secondary
- `Content` size: 160×34 → 160×28
- `Content` sizing: fill/hug → fill/fixed
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content` minWidth: – → 160
- `Content` maxWidth: – → 288
- `Content/Text overflow + Menu style` size: 136×18 → 144×15
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 105×15
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` size: 20×16 → 24×14
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` absent
- `Content/Icons / Checkmark` size: 13×13 → 14×14
- `Content/Text overflow + Menu style/Text overflow/Menu item` only here: size 105×15 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/xs/bold · Geist 500 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Medium, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=focus

- `(root)` size: 160×36 → 160×28
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` minWidth: 132 → 120
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 1 inside CONTENT/Primary
- `divider` absent
- `divider/Divider` absent
- `Content` size: 160×34 → 160×28
- `Content` sizing: fill/hug → fill/fixed
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content` minWidth: – → 160
- `Content` maxWidth: – → 288
- `Content/Text overflow + Menu style` size: 136×18 → 144×15
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 105×15
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` size: 20×16 → 24×14
- `Content/Text overflow + Menu style/Text overflow/Spacer` fill: – → Transparent
- `Content/Text overflow + Menu style/Text overflow/wrapper` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` absent
- `Content/Icons / Checkmark` size: 13×13 → 14×14
- `Content/Text overflow + Menu style/Text overflow/Menu item` only here: size 105×15 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary

### Size=sm, State=disabled

- `(root)` size: 160×36 → 160×28
- `(root)` sizing: fixed/fixed → fixed/hug
- `(root)` minWidth: 132 → 120
- `(root)` fill: – → BACKGROUND/Primary
- `Content` size: 160×34 → 160×28
- `Content` sizing: fill/hug → fill/fixed
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content` minWidth: – → 160
- `Content` maxWidth: – → 288
- `Content/Text overflow + Menu style` size: 136×18 → 144×15
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 105×15
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/Spacer` size: 20×16 → 24×14
- `Content/Text overflow + Menu style/Text overflow/wrapper` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` absent
- `Content/Text overflow + Menu style/Text overflow/wrapper/Helper text` absent
- `Content/Icons / Checkmark` size: 13×13 → 14×14
- `Content/Icons / Checkmark/icon-color` fill: CONTENT/Primary → CONTENT/Disabled
- `Content/Text overflow + Menu style/Text overflow/Menu item` only here: size 105×15 · sizing fill/hug · text "Menu item" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Disabled

### Size=regular, State=disabled

- `(root)` fill: – → BACKGROUND/Primary
- `Content` size: 160×34 → 160×36
- `Content` sizing: fill/hug → fill/fill
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 7 12=PADDING/12 7 12=PADDING/12
- `Content` gap: 4=PADDING/4 → 8=8px (0_5rem) (spacing-03)
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` size: 101×18 → 136×18
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` sizing: fill/hug → fixed/hug
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` color: CONTENT/Primary → CONTENT/Disabled
- `Content/Icons / Checkmark` size: 13×13 → 16×16
- `Content/Icons / Checkmark/icon-color` fill: CONTENT/Primary → CONTENT/Disabled

### Size=regular, State=focus

- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 1 inside CONTENT/Primary
- `Content` size: 160×34 → 160×36
- `Content` sizing: fill/hug → fill/fill
- `Content` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 7 12=PADDING/12 7 12=PADDING/12
- `Content` gap: 4=PADDING/4 → 12=PADDING/12
- `Content/Text overflow + Menu style` gap: 12=PADDING/12 → 16
- `Content/Text overflow + Menu style/Models` absent
- `Content/Text overflow + Menu style/Text overflow` size: 101×18 → 97×18
- `Content/Text overflow + Menu style/Text overflow` layout: row align min/min → row align min/center
- `Content/Text overflow + Menu style/Text overflow/wrapper` size: 101×18 → 97×18
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` size: 101×18 → 136×18
- `Content/Text overflow + Menu style/Text overflow/wrapper/Menu item` sizing: fill/hug → fixed/hug
- `Content/Icons / Checkmark` size: 13×13 → 16×16
- `Content/Models` only here: size 24×24 · sizing fixed/fixed · maxWidth 20 · layout column align center/center · padding 11 8 11 8 · gap 8 · fill BUTTON/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 6=6 · instance Models › Provider=anthropic --s · hidden true


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 6 | `var(--radius-6)` | ok |
| 8px (0_5rem) (spacing-03) | `spacing-03` | external library variable |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary | `var(--color-button-secondary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| Transparent | – | external library variable |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- fill: Transparent/Transparent
- text: SYSTEM/Body/sm/bold
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Body/xs/bold
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed width 160, height 36 (5/10 variants)
- `divider` paddingTop 1 (8/10 variants)
- `divider` paddingBottom 1 (8/10 variants)
- `divider` fixed width 160, height 3 (8/10 variants)
- `Content/Text overflow + Menu style/Models` paddingTop 11 (3/10 variants)
- `Content/Text overflow + Menu style/Models` paddingRight 8 (3/10 variants)
- `Content/Text overflow + Menu style/Models` paddingBottom 11 (3/10 variants)
- `Content/Text overflow + Menu style/Models` paddingLeft 8 (3/10 variants)
- `Content/Text overflow + Menu style/Models` fixed width 20, height 20 (3/10 variants)
- `Content/Text overflow + Menu style/Text overflow/Spacer` fixed width 20, height 16 (5/10 variants)
- `Content/Icons / Checkmark` fixed width 13 (1/10 variants)
- `(root)` fixed width 160 (5/10 variants)
- `Content` fixed height 28 (5/10 variants)
- `Content/Text overflow + Menu style` gap 16 (7/10 variants)
- `Content/Text overflow + Menu style/Text overflow/Spacer` fixed width 24, height 14 (4/10 variants)
- `Content/Icons / Checkmark` fixed width 14 (5/10 variants)
- `background` fixed width 160, height 28 (2/10 variants)
- `Divider` stroke weight 1 (1/10 variants)
- `Content` paddingTop 7 (3/10 variants)
- `Content` paddingBottom 7 (3/10 variants)
- `Content/Checkmark` color #ffffff00 (1/10 variants)
- `Content/Checkmark` fixed width 16, height 16 (1/10 variants)
- `divider/Divider` stroke weight 1 (1/10 variants)
- `Content/Text overflow + Menu style/Text overflow/Spacer` fixed width 24, height 15 (1/10 variants)
- `Content/Models` paddingTop 11 (2/10 variants)
- `Content/Models` paddingRight 8 (2/10 variants)
- `Content/Models` paddingBottom 11 (2/10 variants)
- `Content/Models` paddingLeft 8 (2/10 variants)
- `Content/Models` fixed width 24, height 24 (2/10 variants)
- `Content/Icons / Checkmark` fixed width 16, height 16 (3/10 variants)
- `(root)` stroke weight 1 (2/10 variants)

## Nested components

- Models (118:15337) — connected: app/components/ModelLogo/ModelLogo.figma.ts
- _Keyboard shortcut (554:1360) — connected: app/components/KeyboardShortcut/KeyboardShortcut.figma.ts
- Checkmark (554:1327) — not connected

## Icons

- Icons / Checkmark (179:17184) → `checkmark.svg` present
