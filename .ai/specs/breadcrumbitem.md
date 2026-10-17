# BreadcrumbItem — 549:91

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-91
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Breadcrumbs/BreadcrumbItem.figma.ts)

## Props

- **Icon** boolean (default true)
- **❖ Icon** instance swap (default Icons / Folder)
- **↩ Text** text (default "LABEL")
- **Type** variant: default | overflow (default default)
- **State** variant: current | default | hover | selected (default default)

## Variants (6)

- Type=default, State=default — 61×18 (base)
- Type=default, State=hover — 61×18
- Type=default, State=current — 61×18
- Type=overflow, State=default — 16×16
- Type=overflow, State=selected — 16×16
- Type=overflow, State=hover — 16×16

## Base tree — Type=default, State=default

- **Type=default, State=default** `component` size 61×18 · sizing hug/hug · layout row align min/center · padding 0=none 0=none 0=none 0=none · gap 8=PADDING/8
  - **icon** `instance` size 16×16 · sizing fixed/fixed · size.vars sm × sm · instance Icons / Folder
    - ↳ icon color CONTENT/Icon
  - **LABEL** `text` size 37×18 · sizing hug/hug · text "LABEL" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

## Differences vs base

### Type=default, State=hover

- `LABEL` font: SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center → SYSTEM/Label/md/underline · Departure Mono 400 11/18 ls 0.3 upper underline align center
- `LABEL` font.vars: family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious → family/Labels, Links, size/Button, weight/Regular, line-height/Small Text, letter-spacing/spacious
- `LABEL` color: CONTENT/Primary → CONTENT/Secondary

### Type=default, State=current

- `LABEL` color: CONTENT/Primary → CONTENT/Secondary

### Type=overflow, State=default

- `(root)` size: 61×18 → 16×16
- `(root)` gap: 8=PADDING/8 → 4=4
- `icon` absent
- `icon/icon-color` absent
- `LABEL` absent
- `overflow-icon` only here: size 16×16 · sizing fixed/fixed · size.vars sm × sm · instance Icons / Overflow-menu--horizontal
- `overflow-icon/icon-color` only here: fill CONTENT/Primary

### Type=overflow, State=selected

- `(root)` size: 61×18 → 16×16
- `(root)` gap: 8=PADDING/8 → 4=4
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 1 outside BORDER/Strong
- `(root)` radius: – → 4=4
- `icon` absent
- `icon/icon-color` absent
- `LABEL` absent
- `overflow-icon` only here: size 16×16 · sizing fixed/fixed · size.vars sm × sm · instance Icons / Overflow-menu--horizontal
- `overflow-icon/icon-color` only here: fill CONTENT/Primary
- `Menu` only here: size 128×78 · sizing fixed/hug · minWidth 128 · layout column align min/min · padding 0 0 0 0 · gap 0 · stroke 1=default outside BORDER/Subtle · radius 4=4 · effect Shadows/elevation2
- `Menu/_Menu list item` only here: size 160×27 · sizing fill/hug · minWidth 160=160px (10rem) (spacing-13) · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Primary
- `Menu/_Menu list item/Spacer --top` only here: size 160×4 · sizing fill/fixed
- `Menu/_Menu list item/Content` only here: size 160×23 · sizing fill/hug · minWidth 160 · maxWidth 288 · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=8px (0_5rem) (spacing-03)
- `Menu/_Menu list item/Content/Text overflow + Menu style` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 16
- `Menu/_Menu list item/Content/Text overflow + Menu style/Text overflow` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 0
- `Menu/_Menu list item/Content/Text overflow + Menu style/Text overflow/Dashboard` only here: size 144×15 · sizing fill/hug · text "Dashboard" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `Menu/_Menu list item#2` only here: size 160×24 · sizing fill/hug · minWidth 160=160px (10rem) (spacing-13) · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Primary
- `Menu/_Menu list item#2/Content` only here: size 160×23 · sizing fill/hug · minWidth 160 · maxWidth 288 · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=8px (0_5rem) (spacing-03)
- `Menu/_Menu list item#2/Content/Text overflow + Menu style` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 16
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Text overflow` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 0
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Text overflow/Spacer` only here: size 24×14 · sizing fixed/fixed · fill Transparent · hidden true
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Text overflow/Settings` only here: size 144×15 · sizing fill/hug · text "Settings" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Keyboard shortcut` only here: size 23×15 · sizing hug/hug · layout row align max/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=0px (0rem) (spacing-00) · gap 0 · instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=true, Icon 1=Mac--command, Show Icon 2=false, Show Icon 3=false, Show Icon 1=true · hidden true
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Keyboard shortcut/Icon/Vector` only here: fill ?f99f584cf029342264de040ee9b4d2cbcba080f4/143002:256
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Keyboard shortcut/X` only here: color ?88eec31471f1e5f49e6e418dd01e0ba5c39b3bdf/143002:263
- `Menu/_Menu list item#2/Content/Icons / Checkmark` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark · hidden true
- `Menu/_Menu list item#2/Content/Icons / Checkmark/icon-color` only here: fill CONTENT/Primary
- `Menu/_Menu list item#3` only here: size 160×27 · sizing fill/hug · minWidth 160=160px (10rem) (spacing-13) · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Primary
- `Menu/_Menu list item#3/Content` only here: size 160×23 · sizing fill/hug · minWidth 160 · maxWidth 288 · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=8px (0_5rem) (spacing-03)
- `Menu/_Menu list item#3/Content/Text overflow + Menu style` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 16
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Text overflow` only here: size 144×15 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 0
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Text overflow/Spacer` only here: size 24×14 · sizing fixed/fixed · fill Transparent · hidden true
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Text overflow/Admin` only here: size 144×15 · sizing fill/hug · text "Admin" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Keyboard shortcut` only here: size 23×15 · sizing hug/hug · layout row align max/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=0px (0rem) (spacing-00) · gap 0 · instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=false, Show Letter 1=true, Icon 1=Mac--command, Show Icon 2=false, Show Icon 3=false, Show Icon 1=true · hidden true
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Keyboard shortcut/Icon/Vector` only here: fill ?f99f584cf029342264de040ee9b4d2cbcba080f4/143002:256
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Keyboard shortcut/X` only here: color ?88eec31471f1e5f49e6e418dd01e0ba5c39b3bdf/143002:263
- `Menu/_Menu list item#3/Content/Icons / Checkmark` only here: size 14×14 · sizing fixed/fixed · instance Icons / Checkmark · hidden true
- `Menu/_Menu list item#3/Content/Icons / Checkmark/icon-color` only here: fill CONTENT/Primary
- `Menu/_Menu list item#3/Spacer --bottom` only here: size 160×4 · sizing fill/fixed

### Type=overflow, State=hover

- `(root)` size: 61×18 → 16×16
- `(root)` gap: 8=PADDING/8 → 4=4
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` radius: – → 4=4
- `icon` absent
- `icon/icon-color` absent
- `LABEL` absent
- `overflow-icon` only here: size 16×16 · sizing fixed/fixed · size.vars sm × sm · instance Icons / Overflow-menu--horizontal
- `overflow-icon/icon-color` only here: fill CONTENT/Secondary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 0px (0rem) (spacing-00) | `Not a Carbon token` | external library variable |
| 160px (10rem) (spacing-13) | `spacing-13` | external library variable |
| 4 | – | external library variable |
| 4 | `var(--radius-xs)` | ok |
| 4px (0_25rem) (spacing-02) | `spacing-02` | external library variable |
| 8px (0_5rem) (spacing-03) | `spacing-03` | external library variable |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | external library variable |
| none | – | no WEB code syntax |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | – | external library variable |
| Transparent | – | external library variable |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation2
- fill: Transparent/Transparent
- text: SYSTEM/Body/xs/regular
- text: SYSTEM/Label/md/regular
- text: SYSTEM/Label/md/underline

## Values without variable

- `(root)` stroke weight 1 (1/6 variants)
- `Menu` fixed width 128 (1/6 variants)
- `Menu/_Menu list item#2/Content/Text overflow + Menu style/Text overflow/Spacer` fixed width 24, height 14 (1/6 variants)
- `Menu/_Menu list item#2/Content/Icons / Checkmark` fixed width 14 (1/6 variants)
- `Menu/_Menu list item#3/Content/Text overflow + Menu style/Text overflow/Spacer` fixed width 24, height 14 (1/6 variants)
- `Menu/_Menu list item#3/Content/Icons / Checkmark` fixed width 14 (1/6 variants)

## Nested components

- _Keyboard shortcut (554:1360) — connected: app/components/KeyboardShortcut/KeyboardShortcut.figma.ts

## Icons

- Icons / Folder (179:12822) → `folder.svg` present
- Icons / Overflow-menu--horizontal (179:14008) → `overflow-menu-horizontal.svg` present
- Icons / Checkmark (179:17184) → `checkmark.svg` present
