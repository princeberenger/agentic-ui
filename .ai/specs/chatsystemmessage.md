# ChatSystemMessage — 6227:9774

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6227-9774
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatSystemMessage.figma.ts)

## Props

- **Show label** boolean (default true)
- **Label** text (default "March 15, 2026")
- **Label 2** text (default "Today")
- **Label 3** text (default "Conversation marked as resolved")
- **Label 4** text (default "Restore checkpoint")
- **Icon** instance swap (default Icons / User)
- **Type** variant: Date | Date 2 | Message w/ icon | Message (System) | Checkpoint (default Date 2)

## Variants (5)

- Type=Date 2 — 720×18 (base)
- Type=Date — 720×18
- Type=Message w/ icon — 720×18
- Type=Message (System) — 720×18
- Type=Checkpoint — 720×18

## Base tree — Type=Date 2

- **Type=Date 2** `component` size 720×18 · sizing fill/hug · maxWidth 720 · layout row align center/center · padding 0 0 0 0 · gap 16=PADDING/16
  - **wrapper** `frame` size 128×0 · sizing fill/hug · maxWidth 128 · layout column align min/min · padding 0 0 0 0 · gap 0
    - **divider** `line` size 128×0 · sizing fill/fixed · stroke 1=default center gradient_linear(#e5e5e500 0%, BORDER/Subtle 100%) from 1,0.5 to 0,0.5
  - **label** `frame` size 102×18 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 10
    - **March 15, 2026** `text` size 102×18 · sizing hug/hug · text "March 15, 2026" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **wrapper** `frame` size 128×0 · sizing fill/hug · maxWidth 128 · layout column align min/min · padding 0 0 0 0 · gap 10
    - **divider** `vector` size 128×0 · sizing fill/fixed · stroke 1 center gradient_linear(#e5e5e500 0%, BORDER/Subtle 100%) from 1,-1 to 0,-1

## Differences vs base

### Type=Date

- `(root)` layout: row align center/center → row align min/center
- `wrapper` absent
- `wrapper/divider` absent
- `label` size: 102×18 → 37×18
- `label/March 15, 2026` absent
- `wrapper#2` absent
- `wrapper#2/divider` absent
- `divider` only here: size 325.5×0 · sizing fill/fixed · stroke 1=default center gradient_linear(#e5e5e500 0%, BORDER/Subtle 100%) from 1,0.5 to 0,0.5
- `label/Today` only here: size 37×18 · sizing hug/hug · text "Today" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
- `divider#2` only here: size 325.5×0 · sizing fill/fixed · stroke 1=default center gradient_linear(#e5e5e500 0%, BORDER/Subtle 100%) from 1,0.5 to 0,0.5

### Type=Message w/ icon

- `(root)` absent
- `wrapper` absent
- `wrapper/divider` absent
- `label` absent
- `label/March 15, 2026` absent
- `wrapper#2` absent
- `wrapper#2/divider` absent
- ` icon` only here: size 720×18 · sizing fill/hug · maxWidth 720 · layout row align center/center · padding 0 0 0 0 · gap 8=PADDING/8
- ` icon/Icons / User` only here: size 13×13 · sizing fixed/fixed · instance Icons / User
- ` icon/Icons / User/icon-color` only here: fill CONTENT/Icon
- ` icon/label` only here: size 81×18 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0
- ` icon/label/Alex joined` only here: size 81×18 · sizing hug/hug · text "Alex joined" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary

### Type=Message (System)

- `(root)` layout: row align center/center → row align min/center
- `wrapper` absent
- `wrapper/divider` absent
- `label` size: 102×18 → 720×18
- `label` sizing: hug/hug → fill/hug
- `label` gap: 10 → 0
- `label/March 15, 2026` absent
- `wrapper#2` absent
- `wrapper#2/divider` absent
- `label/Conversation marked as resolved` only here: size 227×18 · sizing hug/hug · text "Conversation marked as resolved" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary

### Type=Checkpoint

- `wrapper` size: 128×0 → 267.5×4.97
- `wrapper` maxWidth: 128 → –
- `wrapper` layout: column align min/min → column align center/max
- `wrapper` gap: 0 → 10
- `wrapper/divider` absent
- `label` absent
- `label/March 15, 2026` absent
- `wrapper#2` size: 128×0 → 267.5×4.97
- `wrapper#2` maxWidth: 128 → –
- `wrapper#2` layout: column align min/min → column align center/min
- `wrapper#2` gap: 10 → 0
- `wrapper#2/divider` absent
- `wrapper/pattern-left` only here: size 33×4.97 · sizing fixed/fixed · stroke 1 center BORDER/Subtle
- `title` only here: size 153×18 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8
- `title/Icons / Reset` only here: size 13×13 · sizing fixed/fixed · instance Icons / Reset
- `title/Icons / Reset/icon-color` only here: fill CONTENT/Icon
- `title/label` only here: size 132×18 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0
- `title/label/Restore checkpoint` only here: size 132×18 · sizing hug/hug · text "Restore checkpoint" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
- `wrapper#2/pattern-right` only here: size 33×4.97 · sizing fixed/fixed · stroke 1 center BORDER/Subtle


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| ICONS/13 | `var(--icon-13)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

- `wrapper#2/divider` stroke weight 1 (1/5 variants)
- ` icon/Icons / User` fixed width 13 (1/5 variants)
- `wrapper/pattern-left` stroke weight 1 (1/5 variants)
- `title/Icons / Reset` fixed width 13 (1/5 variants)
- `wrapper#2/pattern-right` stroke weight 1 (1/5 variants)

## Nested components

none

## Icons

- Icons / User (179:16730) → `user.svg` present
- Icons / Reset (179:14432) → `reset.svg` present
