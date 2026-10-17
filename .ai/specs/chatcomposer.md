# ChatComposer — 4133:11200

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4133-11200
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Chat/ChatComposer.figma.ts)

## Props

- **Show ScrollButton** boolean (default true)
- **Show model** boolean (default true)
- **Show microphone** boolean (default true)
- **Show upload** boolean (default true)
- **State** variant: active | default | disabled | drag-drop | filled | hover | condensed | attachment | attachment (collapsed) | error | warning (default drag-drop)

## Variants (11)

- State=drag-drop — 716×128
- State=disabled — 716×128
- State=default — 716×176 (base)
- State=hover — 716×128
- State=active — 716×128
- State=filled — 716×128
- State=error — 716×182
- State=warning — 716×182
- State=attachment — 716×198
- State=attachment (collapsed) — 716×172
- State=condensed — 716×56

## Base tree — State=default

- **State=default** `component` size 716×176 · sizing fill/hug · layout column align min/min · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
  - **ChatScrollButton** `instance` size 716×48 · sizing fill/hug · layout row align center/max · padding 0=PADDING/none 0=PADDING/none 8=PADDING/8 0=PADDING/none · gap 0 · fill gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1 + gradient_linear(#f7f7f700 0%, BACKGROUND/Secondary 100%) from 0.5,0 to 0.5,1 · effect background_blur 2  (no style) · instance ChatScrollButton › Mode=Light, Type=Icon, Background=On secondary
  - **input-container** `frame` size 716×128 · sizing fill/fixed · layout column align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Secondary · stroke 0.5=sm outside BORDER/Subtle · radius 20=20 · effect Shadows/elevation2
    - **blur** `rectangle` size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
    - **text-input-area** `frame` size 692×112 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
      - **Ask anything...** `text` size 676×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
    - **actions-wrapper** `frame` size 692×40 · sizing fixed/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
      - **actions-left** `frame` size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
        - **Button** `instance` size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
          - ↳ icon-arrow (override) fill CONTENT/Icon
      - **actions-right** `frame` size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
        - **Button** `instance` size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
          - ↳ icon (override) fill CONTENT/Icon
        - **Button** `instance` size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
          - ↳ icon-arrow (override) fill CONTENT/Icon
        - **Button** `instance` size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
          - ↳ icon (override) fill CONTENT/Disabled
    - **internal-border** `rectangle` size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

## Differences vs base

### State=drag-drop

- `(root)` size: 716×176 → 716×128
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8
- `(root)` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `(root)` stroke: – → 1=default inside BORDER/Medium dashed 4/4
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `text-input-area` only here: size 700×112 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-area/Drag & drop your images here` only here: size 684×96 · sizing fill/fill · text "Drag & drop your images here" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 align center · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary

### State=disabled

- `(root)` size: 716×176 → 716×128
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `(root)` stroke: – → 1=default inside BORDER/Subtle
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-area/Ask anything...` only here: size 676×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Disabled
- `actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=disabled, Icon position=right · props Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Disabled
- `actions-wrapper/actions-right` only here: size 124×40 · sizing hug/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Disabled
- `actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=disabled, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Disabled
- `actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/Disabled

### State=hover

- `(root)` size: 716×176 → 716×128
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 0.5=sm outside BORDER/Strong
- `(root)` radius: – → 20=20
- `(root)` effect: – → Shadows/elevation2
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-area/Ask anything...` only here: size 676×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
- `actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/Disabled
- `internal-border` only here: size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

### State=active

- `(root)` size: 716×176 → 716×128
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 1=default outside BORDER/Strong
- `(root)` radius: – → 20=20
- `(root)` effect: – → Shadows/elevation2
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-area/Cursor blink animation` only here: size 1×17 · sizing fixed/fixed · minWidth 1 · maxWidth 1 · layout row align min/center · padding 0 0 0 0 · gap 10 · instance Cursor blink animation › State=Visible
- `actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/Disabled
- `internal-border` only here: size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

### State=filled

- `(root)` size: 716×176 → 716×128
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 0.5=sm outside BORDER/Medium
- `(root)` radius: – → 20=20
- `(root)` effect: – → Shadows/elevation2
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-area/Show me the revenue since the beginning of the year.` only here: size 676×24 · sizing fill/fixed · text "Show me the revenue since the beginning of the year." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Primary · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `actions-wrapper/actions-right/Button#3/icon` only here: size 16×16
- `actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/On Primary
- `internal-border` only here: size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

### State=error

- `(root)` size: 716×176 → 716×182
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 0 0 0 0
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `error-message-container` only here: size 716×54 · sizing fill/hug · layout row align min/min · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 4=PADDING/4
- `error-message-container/HelperText` only here: size 325×30 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 0 · instance HelperText › Type=error, Size=lg, Style=light · props show Icon=true, Label="Couldn’t send a message. Please try again."
- `error-message-container/HelperText/helper-text-bg` only here: fill BACKGROUND/Attention
- `error-message-container/HelperText/helper-text-bg/Icon/Status notification/icon` only here: fill BACKGROUND/Attention (Light)
- `error-message-container/HelperText/helper-text-bg/Helper text` only here: font SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0 · color CONTENT/On Primary
- `text-input-container` only here: size 716×128 · sizing fixed/fixed · layout column align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Secondary · stroke 1=default outside BORDER/Attention · radius 20=20 · effect Shadows/elevation2
- `text-input-container/blur` only here: size 715×80 · sizing fixed/fixed · fill BADGE/bg/red · effect layer_blur 0  (no style)
- `text-input-container/text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-container/text-input-area/Show me the revenue since the beginning of the year.` only here: size 676×24 · sizing fill/fixed · text "Show me the revenue since the beginning of the year." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `text-input-container/actions-wrapper` only here: size 692×40 · sizing fixed/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `text-input-container/actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `text-input-container/actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `text-input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `text-input-container/actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `text-input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `text-input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BACKGROUND/Attention · radius 9999=full · instance Button › Size=lg, Style=destructive, Type=icon-only, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `text-input-container/actions-wrapper/actions-right/Button#3/Icons / Arrow--up/icon` only here: fill CONTENT/On Primary

### State=warning

- `(root)` size: 716×176 → 716×182
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 0 0 0 0
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `error-message-container` only here: size 716×54 · sizing fill/hug · layout row align min/min · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 4=PADDING/4
- `error-message-container/HelperText` only here: size 227×30 · sizing hug/hug · layout column align min/min · padding 0 0 0 0 · gap 0 · instance HelperText › Type=warning, Size=lg, Style=light · props show Icon=true, Label="Context window is 90% full."
- `error-message-container/HelperText/helper-text-bg/Helper text` only here: font SYSTEM/Body/sm/bold · Geist 500 14/18 ls 0
- `text-input-container` only here: size 716×128 · sizing fixed/fixed · layout column align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Secondary · stroke 0.5=sm outside BORDER/Warning · radius 20=20 · effect Shadows/elevation2
- `text-input-container/blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-container/text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-container/text-input-area/Show me the revenue since the beginning of the year.` only here: size 676×24 · sizing fill/fixed · text "Show me the revenue since the beginning of the year." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `text-input-container/actions-wrapper` only here: size 692×40 · sizing fixed/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `text-input-container/actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `text-input-container/actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `text-input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `text-input-container/actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `text-input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `text-input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Primary · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `text-input-container/actions-wrapper/actions-right/Button#3/icon` only here: size 16×16
- `text-input-container/actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/On Primary

### State=attachment

- `(root)` size: 716×176 → 716×198
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `attachment-container` only here: size 716×70 · sizing fill/hug · layout row align min/min · padding 24=PADDING/24 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 4=PADDING/4
- `attachment-container/File type` only here: size 164×34 · sizing hug/hug · layout row align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 12=PADDING/12 · stroke 1=default inside BORDER/Subtle · radius 10=10 · instance File type › Style=Outline, Size=Small, Type=Document, State=Default · props Show button=true, Show size=true, Show close icon=true, Instance=Icons / Document, Show icon=true
- `attachment-container/[run 1]` only here: size 149×34 · sizing hug/hug · layout row align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 12=PADDING/12 · stroke 1=default inside BORDER/Subtle · radius 10=10 · instance File type › Style=Outline, Size=Small, Type=Image, State=Default · props Show size=true, Instance=Icons / Document, Show button=true, Show close icon=true, Show icon=true
- `attachment-container/handle` only here: size 20×4 · sizing fixed/fixed · fill TRANSPARENT/black/20@0.2 · radius 9999=full
- `text-input-container` only here: size 716×128 · sizing fill/fixed · layout column align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Secondary · stroke 0.5=sm outside BORDER/Subtle · radius 20=20 · effect Shadows/elevation2
- `text-input-container/blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-container/text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-container/text-input-area/Ask anything...` only here: size 676×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
- `text-input-container/actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `text-input-container/actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `text-input-container/actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `text-input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `text-input-container/actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `text-input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `text-input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `text-input-container/actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/Disabled
- `text-input-container/internal-border` only here: size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

### State=attachment (collapsed)

- `(root)` size: 716×176 → 716×172
- `(root)` radius: – → 20=20
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `attachment-container` only here: size 716×44 · sizing fill/hug · layout row align min/center · padding 12=PADDING/12 12=PADDING/12 12=PADDING/12 12=PADDING/12 · gap 6=PADDING/6
- `attachment-container/Badge` only here: size 20×20 · sizing fixed/fixed · size.vars ICONS/20 × ICONS/20 · layout row align center/center · padding 2=PADDING/2 8=PADDING/8 2=PADDING/2 8=PADDING/8 · gap 4=PADDING/4 · fill BADGE/bg/gray · radius 9999=full · instance Badge › Type=pill, Size=sm, Color=neutral, Border=false, iconLeft=false, iconRight=false · props Icon=Icons / Add, Label="3", hasCloseIcon=false
- `attachment-container/Items` only here: size 34×15 · sizing hug/hug · text "Items" · font SYSTEM/Body/xs/regular · Geist 400 13/15 ls 0 · font.vars family/Body, size/Tiny, weight/Regular, line-height/Tiny Text, letter-spacing/normal · color BADGE/label/gray
- `attachment-container/Icons / Chevron--up` only here: size 14×14 · sizing fixed/fixed · instance Icons / Chevron--up
- `attachment-container/Icons / Chevron--up/icon-color` only here: fill CONTENT/Icon
- `text-input-container` only here: size 716×128 · sizing fill/fixed · layout column align min/min · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0=PADDING/none · fill BACKGROUND/Secondary · stroke 0.5=sm outside BORDER/Subtle · radius 20=20 · effect Shadows/elevation2
- `text-input-container/blur` only here: size 715×80 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-container/text-input-area` only here: size 692×72 · sizing fill/fill · layout row align min/min · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 0
- `text-input-container/text-input-area/Ask anything...` only here: size 676×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
- `text-input-container/actions-wrapper` only here: size 692×40 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 2
- `text-input-container/actions-wrapper/actions-left` only here: size 114×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `text-input-container/actions-wrapper/actions-left/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `text-input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right` only here: size 578×40 · sizing fill/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `text-input-container/actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `text-input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#2` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `text-input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` only here: fill CONTENT/Icon
- `text-input-container/actions-wrapper/actions-right/Button#3` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · fill BUTTON/Disabled · radius 9999=full · instance Button › Size=lg, Style=primary, Type=icon-only, State=disabled, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Label="Label", Swap icon=Icons / Arrow--up
- `text-input-container/actions-wrapper/actions-right/Button#3/icon/icon` only here: fill CONTENT/Disabled
- `text-input-container/internal-border` only here: size 716×128 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 20=20

### State=condensed

- `(root)` size: 716×176 → 716×56
- `(root)` sizing: fill/hug → fill/fixed
- `(root)` layout: column align min/min → row align min/center
- `(root)` padding: 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none → 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12
- `(root)` fill: – → BACKGROUND/Secondary
- `(root)` stroke: – → 0.5=sm outside BORDER/Subtle
- `(root)` radius: – → 9999=full
- `(root)` effect: – → Shadows/elevation2
- `ChatScrollButton` absent
- `input-container` absent
- `input-container/blur` absent
- `input-container/text-input-area` absent
- `input-container/text-input-area/Ask anything...` absent
- `input-container/actions-wrapper` absent
- `input-container/actions-wrapper/actions-left` absent
- `input-container/actions-wrapper/actions-left/Button` absent
- `input-container/actions-wrapper/actions-left/Button/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right` absent
- `input-container/actions-wrapper/actions-right/Button` absent
- `input-container/actions-wrapper/actions-right/Button/icon/icon-wrapper/icon` absent
- `input-container/actions-wrapper/actions-right/Button#2` absent
- `input-container/actions-wrapper/actions-right/Button#2/icon/icon-arrow` absent
- `input-container/actions-wrapper/actions-right/Button#3` absent
- `input-container/actions-wrapper/actions-right/Button#3/icon/icon` absent
- `input-container/internal-border` absent
- `blur` only here: size 715×32 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
- `text-input-area` only here: size 494×40 · sizing fill/fill · layout row align min/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0
- `text-input-area/Ask anything...` only here: size 470×24 · sizing fill/fixed · text "Ask anything..." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
- `actions-wrapper` only here: size 198×40 · sizing hug/hug · layout row align max/center · padding 0 0 0 0 · gap 2
- `actions-wrapper/Button` only here: size 114×40 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=text-icon, State=default, Icon position=right · props Keyboard shortcuts=true, Badge label="1", Swap icon=Icons / Chevron--down, Label="GPT 5.6"
- `actions-wrapper/Button/icon/icon-arrow` only here: fill CONTENT/Icon
- `actions-wrapper/actions-left` only here: size 40×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `actions-wrapper/actions-left/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Add
- `actions-wrapper/actions-left/Button/icon/icon-wrapper/icon` only here: fill CONTENT/Icon
- `actions-wrapper/actions-right` only here: size 40×40 · sizing hug/hug · layout row align max/center · padding 0 0 0 0 · gap 2=PADDING/2
- `actions-wrapper/actions-right/Button` only here: size 40×40 · sizing fixed/fixed · size.vars ICONS/40 × ICONS/40 · layout row align center/center · padding 8=PADDING/8 16=PADDING/16 8=PADDING/8 16=PADDING/16 · gap 4=PADDING/4 · radius 9999=full · instance Button › Size=lg, Style=ghost, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Badge label="1", Label="Label", Swap icon=Icons / Microphone
- `actions-wrapper/actions-right/Button/icon/icon-arrow` only here: fill CONTENT/Icon


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 20 | `var(--radius-lg)` | ok |
| BACKGROUND/Attention | `var(--color-bg-attention)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BADGE/bg/gray | `var(--color-badge-bg-gray)` | ok |
| BADGE/bg/red | `var(--color-badge-bg-red)` | ok |
| BADGE/label/gray | `var(--color-badge-label-gray)` | ok |
| BORDER/Attention | `var(--color-border-attention)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BORDER/Warning | – | no WEB code syntax |
| BUTTON/Disabled | `var(--color-button-disabled)` | ok |
| BUTTON/Primary | `var(--color-button-primary)` | ok |
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/14 | `var(--icon-14)` | ok |
| ICONS/20 | `var(--icon-20)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| size/Tiny | `var(--text-tiny)` | ok |
| sm | `var(--stroke-sm)` | ok |
| TRANSPARENT/black/20 | – | no WEB code syntax |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation2
- fill: Gradient/Scrollfade (Light)(V2)
- fills: Gradient/Scrollfade (Light)(V2)
- text: SYSTEM/Body/md/regular
- text: SYSTEM/Body/xs/regular

## Values without variable

- `(root)` fixed height 128 (5/11 variants)
- `ChatScrollButton` effect background_blur 2  (no style) (1/11 variants)
- `input-container` fixed height 128 (1/11 variants)
- `input-container/blur` effect layer_blur 0  (no style) (1/11 variants)
- `input-container/blur` fixed width 715, height 80 (1/11 variants)
- `input-container/actions-wrapper` fixed width 692 (1/11 variants)
- `input-container/internal-border` fixed width 716, height 128 (1/11 variants)
- `blur` effect layer_blur 0  (no style) (4/11 variants)
- `blur` fixed width 715, height 80 (3/11 variants)
- `internal-border` fixed width 716, height 128 (3/11 variants)
- `text-input-area/Cursor blink animation` fixed width 1, height 17 (1/11 variants)
- `text-input-container` fixed width 716, height 128 (2/11 variants)
- `text-input-container/blur` effect layer_blur 0  (no style) (4/11 variants)
- `text-input-container/blur` fixed width 715, height 80 (4/11 variants)
- `text-input-container/actions-wrapper` fixed width 692 (2/11 variants)
- `attachment-container/handle` fixed width 20, height 4 (1/11 variants)
- `text-input-container` fixed height 128 (2/11 variants)
- `text-input-container/internal-border` fixed width 716, height 128 (2/11 variants)
- `attachment-container/Icons / Chevron--up` fixed width 14 (1/11 variants)
- `(root)` fixed height 56 (1/11 variants)
- `blur` fixed width 715, height 32 (1/11 variants)
- `actions-wrapper` gap 2 (1/11 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- ChatScrollButton (6255:14244) — connected: app/components/Chat/ChatScrollButton.figma.ts
- Cursor blink animation (338:6698) — not connected
- HelperText (4066:7007) — connected: app/components/HelperText/HelperText.figma.ts
- File type (6111:11622) — connected: app/components/FileType/FileType.figma.ts
- Badge (124:2898) — connected: app/components/Badge/Badge.figma.ts

## Icons

- Icons / Chevron--up (179:14030) → `chevron-up.svg` present
