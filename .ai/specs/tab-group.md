# tab-group — 4056:1461

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4056-1461
- Extracted: 2026-10-17
- Code Connect: yes (app/components/TabGroup/TabGroup.figma.ts)

## Props

- **Size** variant: lg | sm (default lg)
- **Style** variant: pill | rounded | segmented | underline (default segmented)
- **Tabs** variant: 2 | 3 | 4 | 5 (default 2)

## Variants (32)

- Size=lg, Style=segmented, Tabs=3 — 174×48
- Size=lg, Style=pill, Tabs=3 — 166×40
- Size=lg, Style=rounded, Tabs=3 — 222×48
- Size=lg, Style=underline, Tabs=3 — 210×40
- Size=lg, Style=segmented, Tabs=2 — 122×48 (base)
- Size=lg, Style=pill, Tabs=2 — 110×40
- Size=lg, Style=rounded, Tabs=2 — 150×48
- Size=lg, Style=underline, Tabs=2 — 140×40
- Size=sm, Style=segmented, Tabs=3 — 150×38
- Size=sm, Style=pill, Tabs=3 — 142×30
- Size=sm, Style=rounded, Tabs=3 — 150×38
- Size=sm, Style=underline, Tabs=3 — 138×30
- Size=sm, Style=segmented, Tabs=2 — 102×38
- Size=sm, Style=pill, Tabs=2 — 94×30
- Size=sm, Style=rounded, Tabs=2 — 102×38
- Size=sm, Style=underline, Tabs=2 — 92×30
- Size=lg, Style=segmented, Tabs=4 — 230×48
- Size=lg, Style=pill, Tabs=4 — 222×40
- Size=lg, Style=rounded, Tabs=4 — 294×48
- Size=lg, Style=underline, Tabs=4 — 280×40
- Size=sm, Style=segmented, Tabs=4 — 198×38
- Size=sm, Style=pill, Tabs=4 — 190×30
- Size=sm, Style=rounded, Tabs=4 — 198×38
- Size=sm, Style=underline, Tabs=4 — 184×30
- Size=lg, Style=segmented, Tabs=5 — 286×48
- Size=lg, Style=pill, Tabs=5 — 278×40
- Size=lg, Style=rounded, Tabs=5 — 366×48
- Size=lg, Style=underline, Tabs=5 — 350×40
- Size=sm, Style=segmented, Tabs=5 — 246×38
- Size=sm, Style=pill, Tabs=5 — 238×30
- Size=sm, Style=rounded, Tabs=5 — 246×38
- Size=sm, Style=underline, Tabs=5 — 230×30

## Base tree — Size=lg, Style=segmented, Tabs=2

- **Size=lg, Style=segmented, Tabs=2** `component` size 122×48 · sizing hug/hug · layout row align center/center · padding 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 · gap 2=PADDING/2 · fill BACKGROUND/Secondary · radius 9999=full
  - **tab** `instance` size 56×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · fill CONTENT/On Primary · radius 9999=full · effect Shadows/elevation1 · instance tab › State=active, Shape=pill-segmented, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"
  - **tab** `instance` size 56×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

## Differences vs base

### Size=lg, Style=segmented, Tabs=3

- `(root)` size: 122×48 → 174×48
- `tab` size: 56×40 → 54×40
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=pill, Tabs=3

- `(root)` size: 122×48 → 166×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 54×40
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=lg
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=rounded, Tabs=3

- `(root)` size: 122×48 → 222×48
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=lg
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=underline, Tabs=3

- `(root)` size: 122×48 → 210×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=underline, Size=lg
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · instance tab › State=default, Shape=underline, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=pill, Tabs=2

- `(root)` size: 122×48 → 110×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 54×40
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=lg
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` size: 56×40 → 54×40
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=pill, Size=lg

### Size=lg, Style=rounded, Tabs=2

- `(root)` size: 122×48 → 150×48
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=lg
- `tab#2` size: 56×40 → 70×40
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab#2` radius: 9999=full → 10=10
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=rounded, Size=lg

### Size=lg, Style=underline, Tabs=2

- `(root)` size: 122×48 → 140×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=underline, Size=lg
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` size: 56×40 → 70×40
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab#2` radius: 9999=full → –
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=underline, Size=lg

### Size=sm, Style=segmented, Tabs=3

- `(root)` size: 122×48 → 150×38
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill-segmented, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=pill, Tabs=3

- `(root)` size: 122×48 → 142×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=sm
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=rounded, Tabs=3

- `(root)` size: 122×48 → 150×38
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=underline, Tabs=3

- `(root)` size: 122×48 → 138×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=sharp, Size=sm
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · instance tab › State=default, Shape=sharp, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=segmented, Tabs=2

- `(root)` size: 122×48 → 102×38
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill-segmented, Size=sm
- `tab#2` size: 56×40 → 46×30
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=pill-segmented, Size=sm

### Size=sm, Style=pill, Tabs=2

- `(root)` size: 122×48 → 94×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=sm
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` size: 56×40 → 46×30
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=pill, Size=sm

### Size=sm, Style=rounded, Tabs=2

- `(root)` size: 122×48 → 102×38
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=sm
- `tab#2` size: 56×40 → 46×30
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab#2` radius: 9999=full → 10=10
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=rounded, Size=sm

### Size=sm, Style=underline, Tabs=2

- `(root)` size: 122×48 → 92×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=sharp, Size=sm
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` size: 56×40 → 46×30
- `tab#2` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab#2` radius: 9999=full → –
- `tab#2` instance: tab › State=default, Shape=pill-segmented, Size=lg → tab › State=default, Shape=sharp, Size=sm

### Size=lg, Style=segmented, Tabs=4

- `(root)` size: 122×48 → 230×48
- `tab` size: 56×40 → 54×40
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=pill, Tabs=4

- `(root)` size: 122×48 → 222×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 54×40
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=lg
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=rounded, Tabs=4

- `(root)` size: 122×48 → 294×48
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=lg
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=underline, Tabs=4

- `(root)` size: 122×48 → 280×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=underline, Size=lg
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · instance tab › State=default, Shape=underline, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=segmented, Tabs=4

- `(root)` size: 122×48 → 198×38
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill-segmented, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=pill, Tabs=4

- `(root)` size: 122×48 → 190×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=sm
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=rounded, Tabs=4

- `(root)` size: 122×48 → 198×38
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=underline, Tabs=4

- `(root)` size: 122×48 → 184×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=sharp, Size=sm
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · instance tab › State=default, Shape=sharp, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=segmented, Tabs=5

- `(root)` size: 122×48 → 286×48
- `tab` size: 56×40 → 54×40
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=pill, Tabs=5

- `(root)` size: 122×48 → 278×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 54×40
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=lg
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 54×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=rounded, Tabs=5

- `(root)` size: 122×48 → 366×48
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=lg
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=lg, Style=underline, Tabs=5

- `(root)` size: 122×48 → 350×40
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 70×40
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=underline, Size=lg
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 70×40 · sizing hug/hug · layout row align center/center · padding 12=PADDING/12 24=PADDING/24 12=PADDING/12 24=PADDING/24 · gap 8=PADDING/8 · instance tab › State=default, Shape=underline, Size=lg · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=segmented, Tabs=5

- `(root)` size: 122×48 → 246×38
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill-segmented, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill-segmented, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=pill, Tabs=5

- `(root)` size: 122×48 → 238×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` fill: BACKGROUND/Secondary → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=pill, Size=sm
- `tab` stroke: – → 1=default inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 9999=full · instance tab › State=default, Shape=pill, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=rounded, Tabs=5

- `(root)` size: 122×48 → 246×38
- `(root)` radius: 9999=full → 12=12
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` radius: 9999=full → 10=10
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=rounded, Size=sm
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · radius 10=10 · instance tab › State=default, Shape=rounded, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"

### Size=sm, Style=underline, Tabs=5

- `(root)` size: 122×48 → 230×30
- `(root)` padding: 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 → 0 0 0 0
- `(root)` gap: 2=PADDING/2 → 0=PADDING/none
- `(root)` fill: BACKGROUND/Secondary → –
- `(root)` radius: 9999=full → –
- `tab` size: 56×40 → 46×30
- `tab` padding: 12=PADDING/12 16=PADDING/16 12=PADDING/12 16=PADDING/16 → 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12
- `tab` fill: CONTENT/On Primary → BACKGROUND/Primary
- `tab` radius: 9999=full → –
- `tab` effect: Shadows/elevation1 → –
- `tab` instance: tab › State=active, Shape=pill-segmented, Size=lg → tab › State=active, Shape=sharp, Size=sm
- `tab` stroke: – → 0/0/1/0 inside BORDER/Strong
- `tab#2` absent
- `[run 1]` only here: size 46×30 · sizing hug/hug · layout row align center/center · padding 6=PADDING/6 12=PADDING/12 6=PADDING/6 12=PADDING/12 · gap 8=PADDING/8 · instance tab › State=default, Shape=sharp, Size=sm · props ↪ Tail icon =Icons / Close--filled, Lead icon=false, ↪ Lead icon=Icons / Add, Tail icon=false, Label="Tab"


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 12 | `var(--radius-md)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Strong | `var(--color-border-strong)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| none | – | no WEB code syntax |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |

## Styles

- effect: Shadows/elevation1

## Values without variable

- `tab` stroke weight 0/0/1/0 (8/32 variants)

## Nested components

- tab (4052:890) — connected: app/components/TabGroup/Tab.figma.ts

## Icons

none
