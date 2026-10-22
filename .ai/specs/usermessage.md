# UserMessage — 4119:17618

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17618
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Chat/UserMessage.figma.ts)

## Props

- **Text label** text (default "Text message goes here.")
- **Show metadata** boolean (default true)
- **State** variant: default | hover (default default)
- **Style** variant: Style 1 | Style 2 (default Style 2)
- **Type** variant: @mention | text (default text)

## Variants (5)

- State=default, Style=Style 2, Type=text — 322×63 (base)
- State=hover, Style=Style 2, Type=text — 322×63
- State=default, Style=Style 1, Type=text — 322×63
- State=default, Style=Style 1, Type=@mention — 322×63
- State=hover, Style=Style 1, Type=text — 212×63

## Base tree — State=default, Style=Style 2, Type=text

- **State=default, Style=Style 2, Type=text** `component` size 322×63 · sizing fill/hug · maxWidth 400 · layout column align center/max · padding 0 0 0 0 · gap 0=PADDING/none
  - **message-container** `frame` size 212×40 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 0 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle · radius 20/20/4/20=20 · effect Shadows/elevation1
    - **Text message goes here.** `text` size 180×24 · sizing hug/hug · text "Text message goes here." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
  - **ChatMessageMetadata** `instance` size 322×23 · sizing fill/hug · layout row align max/center · padding 8=PADDING/8 12=PADDING/12 0 12=PADDING/12 · gap 6=PADDING/6 · instance ChatMessageMetadata · props Show Thumbs down=true, Show Reset=true, Show Duplicate=true, Divider 3=false, Show Error=false, Divider 2=false, Divider 1=true, Show Thumbs up=true, Show actions=false, Show Read receipt=true, Show Time=true

## Differences vs base

### State=hover, Style=Style 2, Type=text

- `message-container` fill: BACKGROUND/Primary → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04

### State=default, Style=Style 1, Type=text

- `message-container` fill: BACKGROUND/Primary → BACKGROUND/Secondary
- `message-container` stroke: 0.5=sm inside BORDER/Subtle → –
- `message-container` effect: Shadows/elevation1 → –
- `message-container/Text message goes here.` maxWidth: – → 400

### State=default, Style=Style 1, Type=@mention

- `message-container` size: 212×40 → 322×40
- `message-container` sizing: hug/hug → hug/fixed
- `message-container` padding: 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 → 8=PADDING/8 16=PADDING/16 8=PADDING/8 8=PADDING/8
- `message-container` gap: 0 → 6=PADDING/6
- `message-container` fill: BACKGROUND/Primary → BACKGROUND/Secondary
- `message-container` stroke: 0.5=sm inside BORDER/Subtle → –
- `message-container` effect: Shadows/elevation1 → –
- `message-container/Badge` only here: size 112×28 · sizing hug/fixed · layout row align min/center · padding 2=PADDING/2 6=PADDING/6 2=PADDING/2 6=PADDING/6 · gap 4=PADDING/4 · fill BADGE/bg/purple · radius 9999=full · instance Badge › Type=pill, Size=lg, Color=purple, Border=false, iconLeft=false, iconRight=false · props Icon=179:14029, Label="@bug_review", hasCloseIcon=false

### State=hover, Style=Style 1, Type=text

- `(root)` size: 322×63 → 212×63
- `(root)` sizing: fill/hug → hug/hug
- `(root)` gap: 0=PADDING/none → 0
- `message-container` fill: BACKGROUND/Primary → BACKGROUND/Secondary + INPUT/Hover (Dark)@0.04
- `message-container` effect: Shadows/elevation1 → –
- `ChatMessageMetadata` size: 322×23 → 212×23


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 20 | `var(--radius-lg)` | ok |
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BADGE/bg/purple | `var(--color-badge-bg-purple)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| full | `var(--radius-full)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation1
- text: SYSTEM/Body/md/regular

## Values without variable

- `message-container` fixed height 40 (1/5 variants)
- `message-container/Badge` fixed height 28 (1/5 variants)

## Nested components

- ChatMessageMetadata (6270:1160) — connected: app/components/Chat/ChatMessageMetadata.figma.ts
- Badge (124:2898) — connected: app/components/Badge/Badge.figma.ts

## Icons

none
