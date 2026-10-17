# nav-sub-link — 226:1312

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=226-1312
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Navigation/NavSubLink.figma.ts)

## Props

- **Sub-link Label** text (default "Link label")
- **State** variant: active | default | hover (default default)

## Variants (3)

- State=default — 99×31 (base)
- State=hover — 99×31
- State=active — 140×31

## Base tree — State=default

- **State=default** `component` size 99×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10
  - **Link label** `text` size 83×15 · sizing hug/hug · text "Link label" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Secondary

## Differences vs base

### State=hover

- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `Link label` color: CONTENT/Secondary → CONTENT/Primary

### State=active

- `(root)` size: 99×31 → 140×31
- `Link label` color: CONTENT/Secondary → CONTENT/Primary
- `../` only here: size 25×15 · sizing hug/hug · text "../" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper · font.vars family/Labels, Links, size/Tiny, weight/Semibold, line-height/Tiny Text, letter-spacing/normal · color CONTENT/Primary
- `nav-link-active-indicator` only here: size 8×12 · sizing fixed/fixed · fill CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/12 | `var(--icon-12)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| weight/Semibold | `var(--weight-semibold)` | ok |

## Styles

- text: BUTTON/Label/md/regular

## Values without variable

- `nav-link-active-indicator` fixed width 8 (1/3 variants)

## Nested components

none

## Icons

none
