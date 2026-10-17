# tab — 4052:890

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4052-890
- Extracted: 2026-10-17
- Code Connect: yes (app/components/TabGroup/Tab.figma.ts)

## Props

- **Label** text (default "Tab")
- **Lead icon** boolean (default false)
- **Tail icon** boolean (default false)
- **↪ Lead icon** instance swap (default Icons / Add)
- **↪ Tail icon ** instance swap (default Icons / Close--filled)
- **State** variant: active | default | focus | hover (default default)
- **Shape** variant: pill | pill-segmented | rounded | sharp | underline (default pill)
- **Size** variant: lg | sm (default sm)

## Variants (32)

- State=default, Shape=pill, Size=sm — 46×30 (base)
- State=default, Shape=pill-segmented, Size=sm — 46×30
- State=default, Shape=pill, Size=lg — 54×40
- State=default, Shape=pill-segmented, Size=lg — 54×40
- State=default, Shape=rounded, Size=sm — 46×30
- State=default, Shape=rounded, Size=lg — 70×40
- State=default, Shape=sharp, Size=sm — 46×30
- State=default, Shape=underline, Size=lg — 70×40
- State=hover, Shape=pill, Size=sm — 46×30
- State=hover, Shape=pill-segmented, Size=sm — 46×30
- State=hover, Shape=pill, Size=lg — 54×40
- State=hover, Shape=pill-segmented, Size=lg — 54×40
- State=hover, Shape=rounded, Size=sm — 46×30
- State=hover, Shape=rounded, Size=lg — 70×40
- State=hover, Shape=sharp, Size=sm — 46×30
- State=hover, Shape=underline, Size=lg — 70×40
- State=active, Shape=pill, Size=sm — 46×30
- State=active, Shape=pill-segmented, Size=sm — 46×30
- State=active, Shape=pill, Size=lg — 54×40
- State=active, Shape=pill-segmented, Size=lg — 54×40
- State=active, Shape=rounded, Size=sm — 46×30
- State=active, Shape=rounded, Size=lg — 70×40
- State=active, Shape=sharp, Size=sm — 46×30
- State=active, Shape=underline, Size=lg — 70×40
- State=focus, Shape=pill, Size=sm — 46×30
- State=focus, Shape=pill-segmented, Size=sm — 46×30
- State=focus, Shape=pill, Size=lg — 54×40
- State=focus, Shape=pill-segmented, Size=lg — 54×40
- State=focus, Shape=rounded, Size=sm — 46×30
- State=focus, Shape=rounded, Size=lg — 70×40
- State=focus, Shape=sharp, Size=sm — 46×30
- State=focus, Shape=underline, Size=lg — 70×40

## Base tree — State=default, Shape=pill, Size=sm

- **State=default, Shape=pill, Size=sm** `component` size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full
  - **lead-icon** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Add · hidden true
    - ↳ icon color CONTENT/Icon
  - **label** `frame` size 22×18 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 10
    - **Tab** `text` size 22×18 · sizing hug/hug · text "Tab" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **tail-icon** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Close--filled · hidden true
    - ↳ icon color CONTENT/Icon

## Differences vs base

### State=default, Shape=pill-segmented, Size=sm

- identical

### State=default, Shape=pill, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16

### State=default, Shape=pill-segmented, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16

### State=default, Shape=rounded, Size=sm

- `(root)` radius: 9999=full → 10=10

### State=default, Shape=rounded, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → 10=10

### State=default, Shape=sharp, Size=sm

- `(root)` radius: 9999=full → –

### State=default, Shape=underline, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → –

### State=hover, Shape=pill, Size=sm

- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=pill-segmented, Size=sm

- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=pill, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=pill-segmented, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=rounded, Size=sm

- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=rounded, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=sharp, Size=sm

- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: – → 0/0/1/0 inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=hover, Shape=underline, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: – → 0/0/1/0 inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=pill, Size=sm

- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 1=default inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=pill-segmented, Size=sm

- `(root)` fill: – → BACKGROUND/Primary
- `(root)` effect: – → Shadows/elevation1
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=pill, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 1=default inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=pill-segmented, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` effect: – → Shadows/elevation1
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=rounded, Size=sm

- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` effect: – → Shadows/elevation1
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=rounded, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` effect: – → Shadows/elevation1
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=sharp, Size=sm

- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0/0/1/0 inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=active, Shape=underline, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0/0/1/0 inside BORDER/Strong
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=pill, Size=sm

- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=pill-segmented, Size=sm

- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=pill, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=pill-segmented, Size=lg

- `(root)` size: 46×30 → 54×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=rounded, Size=sm

- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=rounded, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → 10=10
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=sharp, Size=sm

- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary

### State=focus, Shape=underline, Size=lg

- `(root)` size: 46×30 → 70×40
- `(root)` padding: 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `(root)` radius: 9999=full → –
- `(root)` fill: – → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `(root)` effect: – → Components/Focus
- `label/Tab` color: CONTENT/Secondary → CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| (deleted variable) | – | no WEB code syntax |
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| sm | `var(--stroke-sm)` | ok |
| Transparent 4% | – | no WEB code syntax |
| TRANSPARENT/blue/50 | `var(--color-transparent-blue-50)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- effect: Components/Focus
- effect: Shadows/elevation1
- text: SYSTEM/Label/md/regular

## Values without variable

- `lead-icon` fixed width 16, height 16 (32/32 variants)
- `tail-icon` fixed width 16, height 16 (32/32 variants)
- `(root)` stroke weight 0/0/1/0 (4/32 variants)

## Nested components

none

## Icons

- Icons / Add (179:14029) → `add.svg` present
- Icons / Close--filled (179:14027) → `close-filled.svg` present
