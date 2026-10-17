# nav-logo — 484:13150

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=484-13150
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Navigation/NavLogo.figma.ts)

## Props

- **Logo symbol** boolean (default true)
- **Sidebar icon** boolean (default true)
- **State** variant: collapsed | open (default open)

## Variants (2)

- State=open — 155×60 (base)
- State=collapsed — 104×56

## Base tree — State=open

- **State=open** `component` size 155×60 · sizing hug/hug · layout row align min/center · padding 24=PADDING/24 24=PADDING/24 16=PADDING/16 24=PADDING/24 · gap 12=PADDING/12
  - **container** `frame` size 107×20 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 16=PADDING/16
    - **logo-wrapper** `frame` size 75×20 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 0
      - **symbol** `instance` size 75×20 · sizing fixed/hug · layout column align min/min · padding 0 0 0 0 · gap 10 · instance AGENTIC UI LOGO › Variant=Logo
    - **icon-wrapper** `frame` size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · layout row align center/center · padding 0 0 0 0 · gap 0
      - **Icons/ Menu --open** `instance` size 16×16 · sizing fixed/fixed · instance Icons/ Menu --open
        - ↳ icon (override) fill CONTENT/Primary

## Differences vs base

### State=collapsed

- `(root)` size: 155×60 → 104×56
- `(root)` padding: 24=PADDING/24 24=PADDING/24 16=PADDING/16 24=PADDING/24 → 16=PADDING/16 24=PADDING/24 16=PADDING/16 24=PADDING/24
- `container` size: 107×20 → 56×24
- `container/logo-wrapper` size: 75×20 → 24×24
- `container/logo-wrapper` sizing: hug/hug → fixed/fixed
- `container/logo-wrapper` layout: column align min/min → column align center/center
- `container/logo-wrapper` size.vars: – → ICONS/24 × ICONS/24
- `container/logo-wrapper/symbol` absent
- `container/icon-wrapper/Icons/ Menu --open` absent
- `container/icon-wrapper/Icons/ Menu --open/icon` absent
- `container/logo-wrapper/AGENTIC UI LOGO` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 · layout row align center/center · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance AGENTIC UI LOGO › Variant=Symbol
- `container/icon-wrapper/Icons/ Menu --collapsed` only here: size 16×16 · sizing fixed/fixed · instance Icons/ Menu --collapsed
- `container/icon-wrapper/Icons/ Menu --collapsed/icon` only here: fill CONTENT/Icon
- `container/icon-wrapper/Icons/ Menu --collapsed/icon/btn` only here: stroke 1=default inside CONTENT/Primary
- `container/icon-wrapper/Icons/ Menu --collapsed/btn` only here: fill CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |

## Values without variable

- `container/logo-wrapper/symbol` fixed width 75 (1/2 variants)
- `container/icon-wrapper/Icons/ Menu --open` fixed width 16 (1/2 variants)
- `container/logo-wrapper/AGENTIC UI LOGO` fixed height 24 (1/2 variants)
- `container/icon-wrapper/Icons/ Menu --collapsed` fixed width 16 (1/2 variants)

## Nested components

- AGENTIC UI LOGO (146:1787) — not connected
- Icons/ Menu --open (226:1269) — connected: icon menu-open
- Icons/ Menu --collapsed (230:694) — connected: icon menu-collapsed

## Icons

none
