# CONTEXT — 8017:11604

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-11604
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ContextUsage.figma.ts)

## Props

- **Property 1** variant: 0% | 15% | 50% | 75% | 100% (default 0%)
- **State** variant: Default | Hover (default Default)

## Variants (10)

- Property 1=0%, State=Default — 49×30 (base)
- Property 1=0%, State=Hover — 49×30
- Property 1=15%, State=Default — 56×30
- Property 1=15%, State=Hover — 56×30
- Property 1=50%, State=Default — 56×30
- Property 1=50%, State=Hover — 56×30
- Property 1=75%, State=Default — 56×30
- Property 1=75%, State=Hover — 56×30
- Property 1=100%, State=Default — 63×30
- Property 1=100%, State=Hover — 63×30

## Base tree — Property 1=0%, State=Default

- **Property 1=0%, State=Default** `component` size 49×30 · sizing hug/hug · layout row align max/center · padding 6=PADDING/6 6=PADDING/6 6=PADDING/6 6=PADDING/6 · gap 6=PADDING/6 · radius 9999=full
  - **0%** `text` size 15×18 · sizing hug/hug · text "0%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
  - **progress** `instance` size 16×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 0 · instance progress › Property 1=0%

## Differences vs base

### Property 1=0%, State=Hover

- `(root)` fill: – → INPUT/Hover (Dark)@0.04

### Property 1=15%, State=Default

- `(root)` size: 49×30 → 56×30
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=15%
- `15%` only here: size 22×18 · sizing hug/hug · text "15%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Property 1=15%, State=Hover

- `(root)` size: 49×30 → 56×30
- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=15%
- `15%` only here: size 22×18 · sizing hug/hug · text "15%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Property 1=50%, State=Default

- `(root)` size: 49×30 → 56×30
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=50%
- `50%` only here: size 22×18 · sizing hug/hug · text "50%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Property 1=50%, State=Hover

- `(root)` size: 49×30 → 56×30
- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=50%
- `50%` only here: size 22×18 · sizing hug/hug · text "50%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Primary

### Property 1=75%, State=Default

- `(root)` size: 49×30 → 56×30
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=75%
- `75%` only here: size 22×18 · sizing hug/hug · text "75%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Warning (Text)
- `progress/progress` only here: stroke 2=lg inside BORDER/Warning

### Property 1=75%, State=Hover

- `(root)` size: 49×30 → 56×30
- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=75%
- `75%` only here: size 22×18 · sizing hug/hug · text "75%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Warning (Text)
- `progress/progress` only here: stroke 2=lg inside BORDER/Warning

### Property 1=100%, State=Default

- `(root)` size: 49×30 → 63×30
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=100%
- `100%` only here: size 29×18 · sizing hug/hug · text "100%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color BADGE/label/red
- `progress/progress` only here: stroke 2=lg inside BORDER/Attention

### Property 1=100%, State=Hover

- `(root)` size: 49×30 → 63×30
- `(root)` fill: – → INPUT/Hover (Dark)@0.04
- `0%` absent
- `progress` instance: progress › Property 1=0% → progress › Property 1=100%
- `100%` only here: size 29×18 · sizing hug/hug · text "100%" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper align right · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color BADGE/label/red
- `progress/progress` only here: stroke 2=lg inside BORDER/Attention


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BADGE/label/red | `var(--color-badge-label-red)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| CONTENT/Warning (Text) | `var(--color-content-warning-text)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| size/Button | `var(--text-button)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |

## Styles

- text: SYSTEM/Label/md/regular

## Values without variable

none

## Nested components

- progress (8017:11583) — connected: app/components/Chat/ProgressRing.figma.ts

## Icons

none
