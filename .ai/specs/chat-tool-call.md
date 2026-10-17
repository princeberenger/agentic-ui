# Chat Tool Call — 6231:10080

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6231-10080
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatToolCall.figma.ts)

## Props

- **State** variant: V1 Expanded | V1 Collapsed | V2 Expanded | V2 Collapsed (default V1 Expanded)

## Variants (4)

- State=V1 Expanded — 250×84 (base)
- State=V1 Collapsed — 283×16
- State=V2 Expanded — 244×84
- State=V2 Collapsed — 283×16

## Base tree — State=V1 Expanded

- **State=V1 Expanded** `component` size 250×84 · sizing hug/hug · layout column align center/min · padding 0 0 0 0 · gap 12=PADDING/12
  - **Agent step** `instance` size 109×16 · sizing fixed/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Agent step › State=default, Type=Step, Sub-step=Complete · props Label="3 Tool calls", Icon=Icons / Tools, Expandable=true
    - ↳ icon-arrow (override) fill CONTENT/Icon
  - **wrapper** `frame` size 250×56 · sizing hug/hug · layout column align center/min · padding 0 0 0 0 · gap 4=PADDING/4
    - **toolcall-base** `instance` size 250×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="git diff --stat", Label primary item="bash", Label third item="340ms", Show time=true, Show icon=true, Show secondary item=true
    - **toolcall-base** `instance` size 250×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Error · props Label third item="45ms", Label secondary item="src/utils/formatDate.ts", Label primary item="read", Show time=true, Show icon=true, Show secondary item=true
    - **toolcall-base** `instance` size 250×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Working · props Label third item="3120ms", Label primary item="edit", Label secondary item="src/utils/formatDate.ts", Show time=true, Show icon=true, Show secondary item=true

## Differences vs base

### State=V1 Collapsed

- `(root)` size: 250×84 → 283×16
- `(root)` sizing: hug/hug → fill/hug
- `Agent step` absent
- `Agent step/label/Icons / Chevron--up/icon-arrow` absent
- `wrapper` absent
- `wrapper/toolcall-base` absent
- `wrapper/toolcall-base#2` absent
- `wrapper/toolcall-base#3` absent
- `container` only here: size 262×16 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 4=PADDING/4
- `container/toolcall-base` only here: size 244×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="src/utils/formatDate.ts", Label primary item="edit", Label third item="3 tools", Show time=true, Show icon=true, Show secondary item=true
- `container/Icons / Chevron--down` only here: size 14×14 · sizing fixed/fixed · instance Icons / Chevron--down
- `container/Icons / Chevron--down/icon-color` only here: fill CONTENT/Icon

### State=V2 Expanded

- `(root)` size: 250×84 → 244×84
- `Agent step` size: 109×16 → 98×16
- `Agent step` props: Label="3 Tool calls", Icon=Icons / Tools, Expandable=true → Label="3 Actions", Icon=Icons / Tools, Expandable=true
- `wrapper` absent
- `wrapper/toolcall-base` absent
- `wrapper/toolcall-base#2` absent
- `wrapper/toolcall-base#3` absent
- `container` only here: size 244×56 · sizing hug/hug · layout column align center/min · padding 0 0 0 0 · gap 4=PADDING/4
- `container/toolcall-base` only here: size 244×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="git diff --stat", Label primary item="Reviewing upload flow", Label third item="40ms", Show time=true, Show icon=true, Show secondary item=false
- `container/toolcall-base#2` only here: size 244×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="git diff --stat", Label primary item="Checking form validation", Label third item="1.1s", Show time=true, Show icon=true, Show secondary item=false
- `container/toolcall-base#3` only here: size 244×16 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="git diff --stat", Label primary item="Updated error message copy", Label third item="88ms", Show time=true, Show icon=true, Show secondary item=false

### State=V2 Collapsed

- `(root)` size: 250×84 → 283×16
- `(root)` sizing: hug/hug → fill/hug
- `Agent step` absent
- `Agent step/label/Icons / Chevron--up/icon-arrow` absent
- `wrapper` absent
- `wrapper/toolcall-base` absent
- `wrapper/toolcall-base#2` absent
- `wrapper/toolcall-base#3` absent
- `container` only here: size 283×16 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 4=PADDING/4
- `container/toolcall-base` only here: size 265×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10 · instance toolcall-base › State=Complete · props Label secondary item="src/utils/formatDate.ts", Label primary item="Updated error message copy", Label third item="3 actions", Show time=true, Show icon=true, Show secondary item=false
- `container/Icons / Chevron--down` only here: size 14×14 · sizing fixed/fixed · instance Icons / Chevron--down
- `container/Icons / Chevron--down/icon-color` only here: fill CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ICONS/2xs (14) | – | external library variable |
| PADDING/10 | `var(--space-10)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |

## Values without variable

- `Agent step` fixed width 109 (1/4 variants)
- `container/Icons / Chevron--down` fixed width 14 (2/4 variants)
- `Agent step` fixed width 98 (1/4 variants)

## Nested components

- Agent step (4119:17981) — connected: app/components/Chat/AgentStep.figma.ts
- toolcall-base (6282:12965) — connected: app/components/Chat/ToolCallItem.figma.ts

## Icons

- Icons / Chevron--down (179:14036) → `chevron-down.svg` present
