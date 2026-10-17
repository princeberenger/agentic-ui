# cell-type-avatar — 779:314

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=779-314
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Table/TableAvatarCell.figma.ts)

## Props

- **State** variant: Default | Hover | Focus | Disabled | Loading (default Default)
- **Alignment** variant: Left | Right | Center (default Left)
- **People** variant: Single | Multiple (default Single)

## Variants (30)

- State=Default, Alignment=Left, People=Single — 379×64 (base)
- State=Default, Alignment=Right, People=Single — 379×64
- State=Default, Alignment=Center, People=Single — 379×64
- State=Hover, Alignment=Left, People=Single — 379×64
- State=Hover, Alignment=Right, People=Single — 379×64
- State=Hover, Alignment=Center, People=Single — 379×64
- State=Focus, Alignment=Left, People=Single — 379×64
- State=Focus, Alignment=Right, People=Single — 379×64
- State=Focus, Alignment=Center, People=Single — 379×64
- State=Disabled, Alignment=Left, People=Single — 379×64
- State=Disabled, Alignment=Right, People=Single — 379×64
- State=Disabled, Alignment=Center, People=Single — 379×64
- State=Loading, Alignment=Left, People=Single — 379×64
- State=Loading, Alignment=Left, People=Multiple — 379×64
- State=Loading, Alignment=Right, People=Single — 379×64
- State=Loading, Alignment=Right, People=Multiple — 379×64
- State=Loading, Alignment=Center, People=Single — 379×64
- State=Loading, Alignment=Center, People=Multiple — 379×64
- State=Default, Alignment=Left, People=Multiple — 379×64
- State=Hover, Alignment=Left, People=Multiple — 379×64
- State=Focus, Alignment=Left, People=Multiple — 379×64
- State=Disabled, Alignment=Left, People=Multiple — 379×64
- State=Default, Alignment=Center, People=Multiple — 379×64
- State=Hover, Alignment=Center, People=Multiple — 379×64
- State=Focus, Alignment=Center, People=Multiple — 379×64
- State=Disabled, Alignment=Center, People=Multiple — 379×64
- State=Default, Alignment=Right, People=Multiple — 379×64
- State=Hover, Alignment=Right, People=Multiple — 379×64
- State=Focus, Alignment=Right, People=Multiple — 379×64
- State=Disabled, Alignment=Right, People=Multiple — 379×64

## Base tree — State=Default, Alignment=Left, People=Single

- **State=Default, Alignment=Left, People=Single** `component` size 379×64 · sizing fixed/fixed · minWidth 124 · maxWidth 400 · layout row align min/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 16=PADDING/16 · fill BACKGROUND/Primary · stroke 0/0/1/0 inside BORDER/Subtle
  - **avatar-container** `frame` size 347×32 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10
    - **Avatar** `instance` size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=photo, Size=32, Color=none · props Label (Med)="AG", Label (Sm)="A"

## Differences vs base

### State=Default, Alignment=Right, People=Single

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0

### State=Default, Alignment=Center, People=Single

- `(root)` layout: row align min/center → row align center/center
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0

### State=Hover, Alignment=Left, People=Single

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container` gap: 10 → 0

### State=Hover, Alignment=Right, People=Single

- `(root)` layout: row align min/center → row align max/center
- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0

### State=Hover, Alignment=Center, People=Single

- `(root)` layout: row align min/center → row align center/center
- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0

### State=Focus, Alignment=Left, People=Single

- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong

### State=Focus, Alignment=Right, People=Single

- `(root)` layout: row align min/center → row align max/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0

### State=Focus, Alignment=Center, People=Single

- `(root)` layout: row align min/center → row align center/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0

### State=Disabled, Alignment=Left, People=Single

- `avatar-container` opacity: – → 0.3

### State=Disabled, Alignment=Right, People=Single

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0
- `avatar-container` opacity: – → 0.3

### State=Disabled, Alignment=Center, People=Single

- `(root)` layout: row align min/center → row align center/center
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0
- `avatar-container` opacity: – → 0.3

### State=Loading, Alignment=Left, People=Single

- `avatar-container` absent
- `avatar-container/Avatar` absent
- `table-skeleton-loading` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · radius 9999=full

### State=Loading, Alignment=Left, People=Multiple

- `avatar-container` absent
- `avatar-container/Avatar` absent
- `container` only here: size 104×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8
- `container/[run 1]` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · stroke 1 inside CONTENT/On Primary · radius 9999=full

### State=Loading, Alignment=Right, People=Single

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` absent
- `avatar-container/Avatar` absent
- `table-skeleton-loading` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · radius 9999=full

### State=Loading, Alignment=Right, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` absent
- `avatar-container/Avatar` absent
- `container` only here: size 104×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8
- `container/[run 1]` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · stroke 1 inside CONTENT/On Primary · radius 9999=full

### State=Loading, Alignment=Center, People=Single

- `(root)` layout: row align min/center → row align center/center
- `avatar-container` absent
- `avatar-container/Avatar` absent
- `table-skeleton-loading` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · radius 9999=full

### State=Loading, Alignment=Center, People=Multiple

- `(root)` layout: row align min/center → row align center/center
- `avatar-container` absent
- `avatar-container/Avatar` absent
- `container` only here: size 104×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8
- `container/[run 1]` only here: size 32×32 · sizing fixed/fixed · size.vars ICONS/32 × ICONS/32 · fill BACKGROUND/Secondary · stroke 1 inside CONTENT/On Primary · radius 9999=full

### State=Default, Alignment=Left, People=Multiple

- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Hover, Alignment=Left, People=Multiple

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Focus, Alignment=Left, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Disabled, Alignment=Left, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` opacity: – → 0.3
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Default, Alignment=Center, People=Multiple

- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Hover, Alignment=Center, People=Multiple

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Focus, Alignment=Center, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Disabled, Alignment=Center, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` layout: row align min/center → row align center/center
- `avatar-container` gap: 10 → 0
- `avatar-container` opacity: – → 0.3
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Default, Alignment=Right, People=Multiple

- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Hover, Alignment=Right, People=Multiple

- `(root)` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Focus, Alignment=Right, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `(root)` stroke: 0/0/1/0 inside BORDER/Subtle → 2=lg inside BORDER/Strong
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true

### State=Disabled, Alignment=Right, People=Multiple

- `(root)` layout: row align min/center → row align max/center
- `avatar-container` layout: row align min/center → row align max/center
- `avatar-container` gap: 10 → 0
- `avatar-container` opacity: – → 0.3
- `avatar-container/Avatar` absent
- `avatar-container/AvatarGroup` only here: size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8 · instance AvatarGroup › Type=photos · props Name label="Alex Gilev", Show 2nd=true, Show counter=true, Show 1st=true, Show 3rd=true, Show 4th=true


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| lg | – | no WEB code syntax |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |

## Values without variable

- `(root)` stroke weight 0/0/1/0 (24/30 variants)
- `(root)` fixed width 379 (30/30 variants)
- `avatar-container/Avatar` fixed width 32 (12/30 variants)
- `container` gap -8 (3/30 variants)
- `container/[run 1]` stroke weight 1 (3/30 variants)
- `avatar-container/AvatarGroup` gap -8 (12/30 variants)

## Nested components

- Avatar (179:17313) — connected: app/components/Avatar/Avatar.figma.ts
- AvatarGroup (783:773) — connected: app/components/Avatar/AvatarGroup.figma.ts

## Icons

none
