# Screen — 2003:4190

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2003-4190
- Extracted: 2026-10-17
- Code Connect: no

## Props

- **Breakpoint** variant: laptop (large) | laptop (small) | mobile | monitor (large) | tablet (landscape) | tablet (portrait) (default monitor (large))

## Variants (6)

- Breakpoint=monitor (large) — 1920×1080 (base)
- Breakpoint=laptop (large) — 1440×900
- Breakpoint=laptop (small) — 1280×800
- Breakpoint=tablet (landscape) — 1210×834
- Breakpoint=tablet (portrait) — 834×1194
- Breakpoint=mobile — 375×812

## Base tree — Breakpoint=monitor (large)

- **Breakpoint=monitor (large)** `component` size 1920×1080 · sizing fixed/fixed · fill BACKGROUND/Secondary
  - **Screen label (Hide it)** `text` size 186×56 · text "Monitor (Large)\n1920 x 1080" · font Departure Mono 400 20/28 ls -0.4 align center · font.vars family/Labels, Links, weight/Regular · color CONTENT/Secondary

## Differences vs base

### Breakpoint=laptop (large)

- `(root)` size: 1920×1080 → 1440×900
- `(root)` layout: – → row align center/center
- `(root)` padding: – → 422 658 422 658
- `(root)` gap: – → 10
- `Screen label (Hide it)` size: 186×56 → 174×56
- `Screen label (Hide it)` text: "Monitor (Large)\n1920 x 1080" → "Laptop (Large)\n1440 x 900"
- `Screen label (Hide it)` sizing: – → hug/hug

### Breakpoint=laptop (small)

- `(root)` size: 1920×1080 → 1280×800
- `(root)` layout: – → row align center/center
- `(root)` padding: – → 372 577 372 577
- `(root)` gap: – → 10
- `Screen label (Hide it)` size: 186×56 → 174×56
- `Screen label (Hide it)` text: "Monitor (Large)\n1920 x 1080" → "Laptop (Small)\n1280 x 800"
- `Screen label (Hide it)` sizing: – → hug/hug

### Breakpoint=tablet (landscape)

- `(root)` size: 1920×1080 → 1210×834
- `Screen label (Hide it)` size: 186×56 → 223×56
- `Screen label (Hide it)` text: "Monitor (Large)\n1920 x 1080" → "Tablet (Landscape)\n1210 x 834"
- `Home Indicator` only here: size 1210×20 · instance Home Indicator › Device=iPad, Orientation=Landscape · props Show Home Indicator=true
- `Home Indicator/Home Indicator` only here: fill CONTENT/Primary
- `Status Bar` only here: size 1210×32 · sizing fixed/hug · layout row align min/center · padding 4 26 4 26 · gap 966 · instance Status bar and Menu bar- iPad › Type=Status bar only · props Date="Mon Jun 9", Time="9:41"
- `Status Bar/Left/Time` only here: color CONTENT/Primary
- `Status Bar/Left/Date` only here: color CONTENT/Primary
- `Status Bar/Right/Combined Shape` only here: fill CONTENT/Primary
- `Status Bar/Right/100%` only here: color CONTENT/Primary
- `Status Bar/Right/Battery Icon/Combined Shape` only here: stroke 1 inside CONTENT/Primary
- `Status Bar/Right/Battery Icon/Capacity` only here: fill CONTENT/Primary

### Breakpoint=tablet (portrait)

- `(root)` size: 1920×1080 → 834×1194
- `Screen label (Hide it)` size: 186×56 → 211×56
- `Screen label (Hide it)` text: "Monitor (Large)\n1920 x 1080" → "Tablet (Portrait)\n834 x 1194"
- `Home Indicator` only here: size 834×20 · instance Home Indicator › Device=iPad, Orientation=Portrait · props Show Home Indicator=true
- `Home Indicator/Home Indicator` only here: fill CONTENT/Primary
- `Status Bar` only here: size 834×32 · sizing fixed/hug · layout row align space_between/center · padding 4 26 4 26 · gap 966 · instance Status bar and Menu bar- iPad › Type=Status bar only · props Date="Mon Jun 9", Time="9:41"
- `Status Bar/Left/Time` only here: color CONTENT/Primary
- `Status Bar/Left/Date` only here: color CONTENT/Primary
- `Status Bar/Right/Combined Shape` only here: fill CONTENT/Primary
- `Status Bar/Right/100%` only here: color CONTENT/Primary
- `Status Bar/Right/Battery Icon/Combined Shape` only here: stroke 1 inside CONTENT/Primary
- `Status Bar/Right/Battery Icon/Capacity` only here: fill CONTENT/Primary

### Breakpoint=mobile

- `(root)` size: 1920×1080 → 375×812
- `Screen label (Hide it)` size: 186×56 → 112×56
- `Screen label (Hide it)` text: "Monitor (Large)\n1920 x 1080" → "Mobile\n375 x 812"
- `Home Indicator` only here: size 375×34
- `Home Indicator/Home Indicator` only here: size 144×5 · fill CONTENT/Primary · radius 100
- `Status Bar - iPhone` only here: size 375×44 · sizing fixed/fixed · layout column align min/min · padding 21 0 0 0 · gap 0
- `Status Bar - iPhone/Frame` only here: size 375×22 · sizing fill/hug · layout row align space_between/center · padding 0 0 0 0 · gap 134
- `Status Bar - iPhone/Frame/Time` only here: size 125.5×22 · sizing fill/hug · layout row align center/center · padding 0 6 0 16 · gap 10
- `Status Bar - iPhone/Frame/Time/Time` only here: size 37×22 · sizing hug/hug · text "9:41" · font SF Pro 590 17/22 ls 0 align center · color CONTENT/Primary
- `Status Bar - iPhone/Frame/Dynamic Island spacer` only here: size 124×10 · sizing fixed/fixed · layout row align center/center · padding 0 0 0 0 · gap 0
- `Status Bar - iPhone/Frame/Levels` only here: size 125.5×13 · sizing fill/hug · layout row align center/center · padding 0 16 0 6 · gap 7
- `Status Bar - iPhone/Frame/Levels/Cellular Connection` only here: size 19.2×12.23 · sizing fixed/fixed · fill CONTENT/Primary
- `Status Bar - iPhone/Frame/Levels/Wifi` only here: size 17.14×12.33 · sizing fixed/fixed · fill CONTENT/Primary
- `Status Bar - iPhone/Frame/Levels/Battery` only here: size 27.33×13 · sizing fixed/fixed
- `Status Bar - iPhone/Frame/Levels/Battery/Border` only here: size 25×13 · stroke 1 inside CONTENT/Primary · radius 4.300000190734863 · opacity 0.35
- `Status Bar - iPhone/Frame/Levels/Battery/Cap` only here: size 1.33×4.08 · fill CONTENT/Primary · opacity 0.4
- `Status Bar - iPhone/Frame/Levels/Battery/Capacity` only here: size 21×9 · fill CONTENT/Primary · radius 2.5


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- grid: Laptop (Large)
- grid: Laptop (Small)
- grid: Mobile
- grid: Monitor (Large)
- grid: Tablet (Landscape)
- grid: Tablet (Portrait)

## Values without variable

- `(root)` fixed width 1920, height 1080 (1/6 variants)
- `Screen label (Hide it)` font size (no style, no variable) (6/6 variants)
- `Screen label (Hide it)` line height (no style, no variable) (6/6 variants)
- `Screen label (Hide it)` letter spacing (no style, no variable) (6/6 variants)
- `(root)` paddingTop 422 (1/6 variants)
- `(root)` paddingRight 658 (1/6 variants)
- `(root)` paddingBottom 422 (1/6 variants)
- `(root)` paddingLeft 658 (1/6 variants)
- `(root)` fixed width 1440, height 900 (1/6 variants)
- `(root)` paddingTop 372 (1/6 variants)
- `(root)` paddingRight 577 (1/6 variants)
- `(root)` paddingBottom 372 (1/6 variants)
- `(root)` paddingLeft 577 (1/6 variants)
- `(root)` fixed width 1280, height 800 (1/6 variants)
- `(root)` fixed width 1210, height 834 (1/6 variants)
- `Status Bar` paddingTop 4 (2/6 variants)
- `Status Bar` paddingRight 26 (2/6 variants)
- `Status Bar` paddingBottom 4 (2/6 variants)
- `Status Bar` paddingLeft 26 (2/6 variants)
- `Status Bar` gap 966 (1/6 variants)
- `Status Bar` fixed width 1210 (1/6 variants)
- `(root)` fixed width 834, height 1194 (1/6 variants)
- `Status Bar` fixed width 834 (1/6 variants)
- `(root)` fixed width 375, height 812 (1/6 variants)
- `Home Indicator/Home Indicator` radius 100 (1/6 variants)
- `Status Bar - iPhone` paddingTop 21 (1/6 variants)
- `Status Bar - iPhone` fixed width 375, height 44 (1/6 variants)
- `Status Bar - iPhone/Frame/Time` paddingRight 6 (1/6 variants)
- `Status Bar - iPhone/Frame/Time` paddingLeft 16 (1/6 variants)
- `Status Bar - iPhone/Frame/Time/Time` font size (no style, no variable) (1/6 variants)
- `Status Bar - iPhone/Frame/Time/Time` line height (no style, no variable) (1/6 variants)
- `Status Bar - iPhone/Frame/Time/Time` letter spacing (no style, no variable) (1/6 variants)
- `Status Bar - iPhone/Frame/Time/Time` font family (no style, no variable) (1/6 variants)
- `Status Bar - iPhone/Frame/Dynamic Island spacer` fixed width 124, height 10 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels` paddingRight 16 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels` paddingLeft 6 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels` gap 7 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels/Battery/Border` radius 4.300000190734863 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels/Battery/Border` stroke weight 1 (1/6 variants)
- `Status Bar - iPhone/Frame/Levels/Battery/Capacity` radius 2.5 (1/6 variants)

## Nested components

- Home Indicator (331:5089) — not connected
- Status bar and Menu bar- iPad (331:5032) — not connected

## Icons

none
