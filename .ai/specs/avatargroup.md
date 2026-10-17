# AvatarGroup — 783:773

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=783-773
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Avatar/AvatarGroup.figma.ts)

## Props

- **Show 4th** boolean (default true)
- **Show 3rd** boolean (default true)
- **Show 2nd** boolean (default true)
- **Show 1st** boolean (default true)
- **Show counter** boolean (default true)
- **Name label** text (default "Alex Gilev")
- **Type** variant: initials | photos | compact | initials-label (default photos)

## Variants (4)

- Type=photos — 128×32 (base)
- Type=initials — 80×32
- Type=initials-label — 113×32
- Type=compact — 136×32

## Base tree — Type=photos

- **Type=photos** `component` size 128×32 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap -8
  - **Avatar** ×4 `instance` size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=photo, Size=32, Color=none · props Label (Med)="AG", Label (Sm)="A"
  - **Avatar** `instance` size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=initials, Size=32, Color=none · props Label (Sm)="A", Label (Med)="+3"

## Differences vs base

### Type=initials

- `(root)` size: 128×32 → 80×32
- `[run 1]` absent
- `Avatar#2` props: Label (Sm)="A", Label (Med)="+3" → Label (Sm)="A", Label (Med)="JK"
- `Avatar` only here: size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=initials, Size=32, Color=none · props Label (Sm)="A", Label (Med)="MH"
- `Avatar#3` only here: size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=initials, Size=32, Color=none · props Label (Sm)="A", Label (Med)="AG"

### Type=initials-label

- `(root)` size: 128×32 → 113×32
- `(root)` gap: -8 → 8=PADDING/8
- `[run 1]` absent
- `Avatar#2` absent
- `Avatar` only here: size 32×32 · sizing fixed/fixed · radius 9999=full · instance Avatar › Type=initials, Size=32, Color=none · props Label (Sm)="A", Label (Med)="AG"
- `Alex Gilev` only here: size 73×15 · sizing hug/hug · text "Alex Gilev" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=compact

- `(root)` size: 128×32 → 136×32
- `(root)` gap: -8 → -6


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Values without variable

- `(root)` gap -8 (2/4 variants)
- `[run 1]` fixed width 32 (2/4 variants)
- `Avatar#2` fixed width 32 (3/4 variants)
- `Avatar` fixed width 32 (2/4 variants)
- `Avatar#3` fixed width 32 (1/4 variants)
- `(root)` gap -6 (1/4 variants)

## Nested components

- Avatar (179:17313) — connected: app/components/Avatar/Avatar.figma.ts

## Icons

none
