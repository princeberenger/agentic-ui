# Validation Text (Password) — 6133:1245

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-1245
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **** variant: 5 | 4 | 3 | 2 (default 5)

## Variants (4)

- # of Rules=5 — 308×131 (base)
- # of Rules=4 — 308×106
- # of Rules=3 — 308×81
- # of Rules=2 — 308×56

## Base tree — # of Rules=5

- **# of Rules=5** `component` size 308×131 · sizing fill/hug · layout column align min/min · padding 8=PADDING/8 0 0 0 · gap 2=PADDING/2
  - **validation-text-line** `instance` size 308×23 · sizing fixed/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10 · instance validation-text-line › Type=Default · props Label="8 Character minimum"
  - **validation-text-line** `instance` size 308×23 · sizing fixed/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10 · instance validation-text-line › Type=Default · props Label="1 Lowercase character"
  - **validation-text-line** `instance` size 308×23 · sizing fixed/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10 · instance validation-text-line › Type=Default · props Label="1 Uppercase character"
  - **validation-text-line** `instance` size 308×23 · sizing fixed/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10 · instance validation-text-line › Type=Default · props Label="1 Special Character"
  - **validation-text-line** `instance` size 308×23 · sizing fixed/hug · layout row align min/center · padding 4=PADDING/4 8=PADDING/8 4=PADDING/4 8=PADDING/8 · gap 8=PADDING/8 · fill BACKGROUND/Secondary · radius 10=10 · instance validation-text-line › Type=Default · props Label="1 Number"

## Differences vs base

### # of Rules=4

- `(root)` size: 308×131 → 308×106
- `validation-text-line#5` absent

### # of Rules=3

- `(root)` size: 308×131 → 308×81
- `validation-text-line#4` absent
- `validation-text-line#5` absent

### # of Rules=2

- `(root)` size: 308×131 → 308×56
- `validation-text-line#3` absent
- `validation-text-line#4` absent
- `validation-text-line#5` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |

## Values without variable

- `validation-text-line` fixed width 308 (4/4 variants)
- `validation-text-line#2` fixed width 308 (4/4 variants)
- `validation-text-line#3` fixed width 308 (3/4 variants)
- `validation-text-line#4` fixed width 308 (2/4 variants)
- `validation-text-line#5` fixed width 308 (1/4 variants)

## Nested components

- validation-text-line (6133:2334) — not connected

## Icons

none
