# stepper-step — 4001:1395

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4001-1395
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Stepper/StepperStep.figma.ts)

## Props

- **Label** text (default "Step")
- **Icon** instance swap (default Icons / Magic-wand--filled)
- **Variant** variant: active | completed | disabled (default completed)
- **State** variant: default | hover (default default)

## Variants (5)

- Variant=completed, State=default — 102×48 (base)
- Variant=completed, State=hover — 102×48
- Variant=active, State=default — 103×48
- Variant=disabled, State=default — 102×48
- Variant=disabled, State=hover — 102×48

## Base tree — Variant=completed, State=default

- **Variant=completed, State=default** `component` size 102×48 · sizing hug/hug · layout row align min/center · padding 8=PADDING/md (8) 24=?3ed398f685b81124befa2c267e3b69f1b9c7811c/388:13 8=PADDING/md (8) 8=PADDING/md (8) · gap 8=PADDING/md (8) · fill BACKGROUND/Secondary · radius 9999=?0cf8c3f628b5541a7a7b456cd3a64a879f851f5d/179:70
  - **icon** `frame` size 32×32 · sizing fixed/fixed · layout column align center/center · padding 0 0 0 0 · gap 0 · fill BACKGROUND/Secondary · radius 9999=?0cf8c3f628b5541a7a7b456cd3a64a879f851f5d/179:70
    - **Icons / Magic-wand--filled** `instance` size 16×16 · sizing fixed/fixed · instance Icons / Magic-wand--filled
      - ↳ icon color CONTENT/Icon
  - **Step** `text` size 30×18 · sizing hug/hug · text "Step" · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 align center · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary

## Differences vs base

### Variant=completed, State=hover

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: – → 0.5=sm inside BORDER/Medium
- `icon/Icons / Magic-wand--filled/icon-color` fill: CONTENT/Icon → CONTENT/Primary

### Variant=active, State=default

- `(root)` size: 102×48 → 103×48
- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: – → 1=?f1a6137e95d229c9573dab4cea316f192617e230/202:131 inside BORDER/Strong
- `icon` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `Step` size: 30×18 → 31×18
- `Step` font: SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 align center → SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0 align center
- `Step` font.vars: family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal → family/Body, size/Small, weight/Medium, line-height/Small Text, letter-spacing/normal

### Variant=disabled, State=default

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary
- `(root)` stroke: – → 0.5=sm inside BORDER/Subtle
- `icon` fill: BACKGROUND/Secondary → –
- `Step` color: CONTENT/Primary → CONTENT/Secondary

### Variant=disabled, State=hover

- `(root)` fill: BACKGROUND/Secondary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: – → 0.5=sm inside BORDER/Medium
- `icon/Icons / Magic-wand--filled/icon-color` fill: CONTENT/Icon → CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?0cf8c3f628b5541a7a7b456cd3a64a879f851f5d/179:70 | – | unresolved id |
| ?3ed398f685b81124befa2c267e3b69f1b9c7811c/388:13 | – | unresolved id |
| ?560dbf567203f0f37b98a51ff65ad4305b8f413a/388:46 | – | unresolved id |
| ?f1a6137e95d229c9573dab4cea316f192617e230/202:131 | – | unresolved id |
| BACKGROUND/Disabled | `var(--color-bg-disabled)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Body | `var(--font-body)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/md (8) | – | external library variable |
| size/Small | `var(--text-small)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/sm/bold
- text: SYSTEM/Body/sm/regular

## Values without variable

- `icon` fixed width 32 (5/5 variants)
- `icon/Icons / Magic-wand--filled` fixed width 16, height 16 (5/5 variants)

## Nested components

none

## Icons

- Icons / Magic-wand--filled (179:13367) → `magic-wand-filled.svg` present
