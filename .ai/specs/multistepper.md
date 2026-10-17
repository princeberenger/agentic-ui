# Multistepper — 6295:15285

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6295-15285
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatStep.figma.ts)

## Props

- **Agent message label** text (default "Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai.")
- **Show agent message** boolean (default true)
- **Type** variant: Step | Step + Message | Step + Sub-steps (default Step)

## Variants (3)

- Type=Step — 130×29 (base)
- Type=Step + Sub-steps — 130×120
- Type=Step + Message — 640×88

## Base tree — Type=Step

- **Type=Step** `component` size 130×29 · sizing hug/hug · layout row align min/min · padding 0 0 0 0 · gap 8=PADDING/8
  - **wrapper** `frame` size 16×29 · sizing hug/hug · layout row align min/min · padding 4=PADDING/4 0 0=PADDING/none 0 · gap 0
    - **Chat status dot** `instance` size 16×25 · sizing fixed/hug · layout column align min/center · padding 0 0 0 0 · gap 4=PADDING/4 · instance Chat status dot › Type=Gray · props Show connection line=true
  - **wrapper** `frame` size 106×16 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
    - **Agent step** `instance` size 106×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Agent step › State=default, Type=Step, Sub-step=Complete · props Icon=Icons / Brain, Label="State label", Expandable=true

## Differences vs base

### Type=Step + Sub-steps

- `(root)` size: 130×29 → 130×120
- `(root)` gap: 8=PADDING/8 → -8
- `wrapper` size: 16×29 → 16×11
- `wrapper/Chat status dot` size: 16×25 → 16×7
- `wrapper/Chat status dot` props: Show connection line=true → Show connection line=false
- `wrapper#2` size: 106×16 → 122×120
- `wrapper#2` layout: column align min/min → column align center/min
- `wrapper#2` gap: 4=PADDING/4 → 0=PADDING/none
- `wrapper#2/Agent step` absent
- `wrapper#2/wrapper` only here: size 122×16 · sizing hug/hug · layout column align min/min · padding 0 0 0 16=PADDING/16 · gap 6=PADDING/6
- `wrapper#2/wrapper/Agent step` only here: size 106×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Agent step › State=default, Type=Step, Sub-step=Complete · props Icon=Icons / Brain, Label="State label", Expandable=true
- `wrapper#2/wrapper/Agent step/label/Icons / Chevron--up/icon-arrow` only here: fill CONTENT/Icon
- `wrapper#2/wrapper#2` only here: size 104×104 · sizing hug/hug · layout column align min/min · padding 0 0 24=PADDING/24 0 · gap -32
- `wrapper#2/wrapper#2/step 1` only here: size 104×28 · sizing hug/hug · layout row align min/max · padding 0 0 0 0 · gap 0=PADDING/none
- `wrapper#2/wrapper#2/step 1/connection` only here: size 16×28 · sizing hug/hug · layout column align min/min · padding 0 0 8 0 · gap 0
- `wrapper#2/wrapper#2/step 1/connection/connection-line` only here: size 16×4 · sizing fixed/fixed · size.vars ICONS/16 · layout row align min/min · padding 0 0 0 0 · gap 0
- `wrapper#2/wrapper#2/step 1/connection/connection-line/connection-line` only here: size 1×14 · sizing fixed/fixed · fill CONTENT/Disabled
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line` only here: size 16×16 · sizing fixed/fixed · layout column align center/min · padding 0 0.5 0 0.5 · gap 0
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line/Vector 1` only here: size 15×16 · sizing fill/fixed · stroke 1 center CONTENT/Disabled
- `wrapper#2/wrapper#2/step 1/Agent step` only here: size 88×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Agent step › State=default, Type=Sub-step, Sub-step=Incoplete · props Expandable=true, Icon=Icons / Brain, Label="State label"
- `wrapper#2/wrapper#2/[run 1]` only here: size 104×54 · sizing hug/hug · layout row align min/max · padding 0 0 0 0 · gap 0=PADDING/none
- `wrapper#2/wrapper#2/[run 1]/connection` only here: size 16×54 · sizing hug/hug · layout column align min/min · padding 0 0 8 0 · gap 0
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line` only here: size 16×16 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/16 · layout row align min/min · padding 0 0 0 0 · gap 0
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line/connection-line` only here: size 1×16 · sizing fixed/fill · fill CONTENT/Disabled
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line#2` only here: size 16×14 · sizing fixed/fixed · size.vars ICONS/16 × ICONS/14 · layout row align min/min · padding 0 0 0 0 · gap 0
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line#2/connection-line` only here: size 1×14 · sizing fixed/fill · fill CONTENT/Disabled
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line` only here: size 16×16 · sizing fixed/fixed · layout column align center/min · padding 0 0.5 0 0.5 · gap 0
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line/Vector 1` only here: size 15×16 · sizing fill/fixed · stroke 1 center CONTENT/Disabled
- `wrapper#2/wrapper#2/[run 1]/Agent step` only here: size 88×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 8=PADDING/8 · instance Agent step › State=default, Type=Sub-step, Sub-step=Incoplete · props Expandable=true, Icon=Icons / Brain, Label="State label"

### Type=Step + Message

- `(root)` size: 130×29 → 640×88
- `(root)` sizing: hug/hug → fill/hug
- `wrapper` size: 16×29 → 16×88
- `wrapper` sizing: hug/hug → hug/fill
- `wrapper/Chat status dot` size: 16×25 → 16×84
- `wrapper/Chat status dot` sizing: fixed/hug → fixed/fill
- `wrapper#2` size: 106×16 → 616×88
- `wrapper#2` gap: 4=PADDING/4 → 8=PADDING/8
- `wrapper#2/agent-message-container` only here: size 616×64 · sizing fixed/hug · layout row align min/center · padding 0 0 16=PADDING/16 0 · gap 0
- `wrapper#2/agent-message-container/Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai.` only here: size 616×48 · sizing fill/hug · text "Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/Body | `var(--font-body)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Body/md/regular

## Values without variable

- `wrapper/Chat status dot` fixed width 16 (3/3 variants)
- `(root)` gap -8 (1/3 variants)
- `wrapper#2/wrapper#2` gap -32 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection` paddingBottom 8 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/connection-line` fixed height 4 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/connection-line/connection-line` fixed width 1, height 14 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line` paddingRight 0.5 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line` paddingLeft 0.5 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line` fixed width 16, height 16 (1/3 variants)
- `wrapper#2/wrapper#2/step 1/connection/sub-step-connection-line/Vector 1` stroke weight 1 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection` paddingBottom 8 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line/connection-line` fixed width 1 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/connection-line#2/connection-line` fixed width 1 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line` paddingRight 0.5 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line` paddingLeft 0.5 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line` fixed width 16, height 16 (1/3 variants)
- `wrapper#2/wrapper#2/[run 1]/connection/sub-step-connection-line/Vector 1` stroke weight 1 (1/3 variants)
- `wrapper#2/agent-message-container` fixed width 616 (1/3 variants)

## Nested components

- Chat status dot (6293:6710) — connected: app/components/Chat/ChatStatusDot.figma.ts
- Agent step (4119:17981) — connected: app/components/Chat/AgentStep.figma.ts

## Icons

none
