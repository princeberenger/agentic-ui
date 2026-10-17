# Avatar — 179:17313

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=179-17313
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Avatar/Avatar.figma.ts)

## Props

- **Label (Sm)** text (default "A")
- **Label (Med)** text (default "AG")
- **Type** variant: agent | initials | photo (default agent)
- **Size** variant: 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 (default 16)
- **Color** variant: blue | gray | none | orange | pink | purple | teal (default gray)

## Variants (64)

- Type=agent, Size=16, Color=gray — 16×16 (base)
- Type=agent, Size=20, Color=gray — 20×20
- Type=agent, Size=24, Color=gray — 24×24
- Type=agent, Size=32, Color=gray — 32×32
- Type=agent, Size=40, Color=gray — 40×40
- Type=agent, Size=48, Color=gray — 48×48
- Type=agent, Size=56, Color=gray — 56×56
- Type=agent, Size=64, Color=gray — 64×64
- Type=agent, Size=16, Color=blue — 16×16
- Type=agent, Size=20, Color=blue — 20×20
- Type=agent, Size=24, Color=blue — 24×24
- Type=agent, Size=32, Color=blue — 32×32
- Type=agent, Size=40, Color=blue — 40×40
- Type=agent, Size=48, Color=blue — 48×48
- Type=agent, Size=56, Color=blue — 56×56
- Type=agent, Size=64, Color=blue — 64×64
- Type=agent, Size=16, Color=purple — 16×16
- Type=agent, Size=20, Color=purple — 20×20
- Type=agent, Size=24, Color=purple — 24×24
- Type=agent, Size=32, Color=purple — 32×32
- Type=agent, Size=40, Color=purple — 40×40
- Type=agent, Size=48, Color=purple — 48×48
- Type=agent, Size=56, Color=purple — 56×56
- Type=agent, Size=64, Color=purple — 64×64
- Type=agent, Size=16, Color=orange — 16×16
- Type=agent, Size=20, Color=orange — 20×20
- Type=agent, Size=24, Color=orange — 24×24
- Type=agent, Size=32, Color=orange — 32×32
- Type=agent, Size=40, Color=orange — 40×40
- Type=agent, Size=48, Color=orange — 48×48
- Type=agent, Size=56, Color=orange — 56×56
- Type=agent, Size=64, Color=orange — 64×64
- Type=agent, Size=16, Color=teal — 16×16
- Type=agent, Size=20, Color=teal — 20×20
- Type=agent, Size=24, Color=teal — 24×24
- Type=agent, Size=32, Color=teal — 32×32
- Type=agent, Size=40, Color=teal — 40×40
- Type=agent, Size=48, Color=teal — 48×48
- Type=agent, Size=56, Color=teal — 56×56
- Type=agent, Size=64, Color=teal — 64×64
- Type=agent, Size=16, Color=pink — 16×16
- Type=agent, Size=20, Color=pink — 20×20
- Type=agent, Size=24, Color=pink — 24×24
- Type=agent, Size=32, Color=pink — 32×32
- Type=agent, Size=40, Color=pink — 40×40
- Type=agent, Size=48, Color=pink — 48×48
- Type=agent, Size=56, Color=pink — 56×56
- Type=agent, Size=64, Color=pink — 64×64
- Type=photo, Size=16, Color=none — 16×16
- Type=photo, Size=20, Color=none — 20×20
- Type=photo, Size=24, Color=none — 24×24
- Type=photo, Size=32, Color=none — 32×32
- Type=photo, Size=40, Color=none — 40×40
- Type=photo, Size=48, Color=none — 48×48
- Type=photo, Size=56, Color=none — 56×56
- Type=photo, Size=64, Color=none — 64×64
- Type=initials, Size=16, Color=none — 16×16
- Type=initials, Size=20, Color=none — 20×20
- Type=initials, Size=24, Color=none — 24×24
- Type=initials, Size=32, Color=none — 32×32
- Type=initials, Size=40, Color=none — 40×40
- Type=initials, Size=48, Color=none — 48×48
- Type=initials, Size=56, Color=none — 56×56
- Type=initials, Size=64, Color=none — 64×64

## Base tree — Type=agent, Size=16, Color=gray

- **Type=agent, Size=16, Color=gray** `component` size 16×16 · sizing fixed/fixed · radius 9999=full
  - **Ellipse 325** `vector` size 16×16 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
  - **blurred** `vector` size 16×11 · fill BACKGROUND/Inverse · effect layer_blur 10  (no style) · opacity 0.15
  - **Mask group** `group` size 16×16
    - **Ellipse 326** `vector` size 16×16 · fill gradient_linear(#000000 18%, #000000 49%, #ffffff 100%) from 0.62,0 to 0.17,1
    - **Mask group** `group` size 15×15
      - **user-3-fill 1** `frame` size 15×15
        - **Vector** `vector` size 10×16 · fill #000000 (no variable)
      - **Rectangle 2955** `vector` size 4.5×4.5 · fill CONTENT/Primary
      - **Rectangle 2959** `vector` size 5.27×7.95 · fill CONTENT/Primary · opacity 0.7
      - **Rectangle 2956** `vector` size 4.5×4.5 · fill CONTENT/Primary · opacity 0.5
      - **Rectangle 2960** `vector` size 5.27×7.95 · fill CONTENT/Primary · opacity 0.25
      - **Rectangle 2957** `vector` size 4.5×4.5 · fill CONTENT/Primary · opacity 0.2
      - **Rectangle 2958** `vector` size 4.5×4.5 · fill CONTENT/Primary · opacity 0.5

## Differences vs base

### Type=agent, Size=20, Color=gray

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `blurred` size: 16×11 → 20×15
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63

### Type=agent, Size=24, Color=gray

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `blurred` size: 16×11 → 24×17
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75

### Type=agent, Size=32, Color=gray

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `blurred` size: 16×11 → 32×23
- `blurred` effect: layer_blur 10  (no style) → layer_blur 20  (no style)
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9

### Type=agent, Size=40, Color=gray

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `blurred` size: 16×11 → 40×20
- `blurred` effect: layer_blur 10  (no style) → layer_blur 20  (no style)
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25

### Type=agent, Size=48, Color=gray

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `blurred` size: 16×11 → 48×20
- `blurred` effect: layer_blur 10  (no style) → layer_blur 20  (no style)
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5

### Type=agent, Size=56, Color=gray

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `blurred` size: 16×11 → 56×20
- `blurred` effect: layer_blur 10  (no style) → layer_blur 20  (no style)
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75

### Type=agent, Size=64, Color=gray

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` absent
- `blurred` size: 16×11 → 64×20
- `blurred` effect: layer_blur 10  (no style) → layer_blur 20  (no style)
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `shape` only here: size 64×64 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle

### Type=agent, Size=16, Color=blue

- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=20, Color=blue

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 20×13
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=24, Color=blue

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 24×13
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=32, Color=blue

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 32×19
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=40, Color=blue

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 40×13
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=48, Color=blue

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 48×13
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=56, Color=blue

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 56×13
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=64, Color=blue

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` size: 16×16 → 64×64
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Accent (Light)
- `blurred` size: 16×11 → 64×20
- `blurred` fill: BACKGROUND/Inverse → BACKGROUND/Accent
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → BACKGROUND/Accent
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → BACKGROUND/Accent

### Type=agent, Size=16, Color=purple

- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 16×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=20, Color=purple

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 20×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=24, Color=purple

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 24×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=32, Color=purple

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 32×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=40, Color=purple

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 40×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=48, Color=purple

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 48×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=56, Color=purple

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 56×13
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=64, Color=purple

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` size: 16×16 → 64×64
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Purple (Light)
- `blurred` size: 16×11 → 64×20
- `blurred` fill: BACKGROUND/Inverse → PURPLE/Purple 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PURPLE/Purple 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PURPLE/Purple 500

### Type=agent, Size=16, Color=orange

- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 16×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=20, Color=orange

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 20×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=24, Color=orange

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 24×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=32, Color=orange

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 32×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=40, Color=orange

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 40×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=48, Color=orange

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 48×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=56, Color=orange

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 56×13
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=64, Color=orange

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` size: 16×16 → 64×64
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Orange (Light)
- `blurred` size: 16×11 → 64×20
- `blurred` fill: BACKGROUND/Inverse → ORANGE/Orange 400
- `blurred` opacity: 0.15 → 0.3
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → ORANGE/Orange 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → ORANGE/Orange 500

### Type=agent, Size=16, Color=teal

- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 16×15
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=20, Color=teal

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 20×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=24, Color=teal

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 24×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=32, Color=teal

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 32×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=40, Color=teal

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 40×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=48, Color=teal

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 46×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=56, Color=teal

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 56×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=64, Color=teal

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` size: 16×16 → 64×64
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Teal (Light)
- `blurred` size: 16×11 → 64×20
- `blurred` fill: BACKGROUND/Inverse → TEAL/Teal 400
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → TEAL/Teal 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → TEAL/Teal 500

### Type=agent, Size=16, Color=pink

- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 16×13
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=20, Color=pink

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` size: 16×16 → 20×20
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 19×13
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 20×20
- `Mask group/Ellipse 326` size: 16×16 → 20×20
- `Mask group/Mask group` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 18.75×18.75
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 12.5×20
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 6.59×9.93
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 5.63×5.63
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=24, Color=pink

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` size: 16×16 → 24×24
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 24×13
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 24×24
- `Mask group/Ellipse 326` size: 16×16 → 24×24
- `Mask group/Mask group` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 22.5×22.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 15×24
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 7.91×11.92
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 6.75×6.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=32, Color=pink

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` size: 16×16 → 32×32
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 32×16
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 32×32
- `Mask group/Ellipse 326` size: 16×16 → 32×32
- `Mask group/Mask group` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 30×30
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 20×32
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 10.55×15.89
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 9×9
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=40, Color=pink

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` size: 16×16 → 40×40
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 40×16
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 40×40
- `Mask group/Ellipse 326` size: 16×16 → 40×40
- `Mask group/Mask group` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 37.5×37.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 25×40
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 13.18×19.87
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 11.25×11.25
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=48, Color=pink

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` size: 16×16 → 48×48
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 48×15
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 48×48
- `Mask group/Ellipse 326` size: 16×16 → 48×48
- `Mask group/Mask group` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 45×45
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 30×48
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 15.82×23.84
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 13.5×13.5
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=56, Color=pink

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` size: 16×16 → 56×56
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 56×17
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 56×56
- `Mask group/Ellipse 326` size: 16×16 → 56×56
- `Mask group/Mask group` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 52.5×52.5
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 35×56
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 18.46×27.81
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 15.75×15.75
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=agent, Size=64, Color=pink

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` size: 16×16 → 64×64
- `Ellipse 325` stroke: 0.5=sm inside BORDER/Subtle → 0.5=sm inside BORDER/Pink (Light)
- `blurred` size: 16×11 → 64×20
- `blurred` fill: BACKGROUND/Inverse → PINK/Pink 500
- `blurred` opacity: 0.15 → 0.2
- `Mask group` size: 16×16 → 64×64
- `Mask group/Ellipse 326` size: 16×16 → 64×64
- `Mask group/Mask group` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1` size: 15×15 → 60×60
- `Mask group/Mask group/user-3-fill 1/Vector` size: 10×16 → 40×64
- `Mask group/Mask group/Rectangle 2955` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2955` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2959` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2959` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2956` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2956` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2960` size: 5.27×7.95 → 21.09×31.79
- `Mask group/Mask group/Rectangle 2960` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2957` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2957` fill: CONTENT/Primary → PINK/Pink 500
- `Mask group/Mask group/Rectangle 2958` size: 4.5×4.5 → 18×18
- `Mask group/Mask group/Rectangle 2958` fill: CONTENT/Primary → PINK/Pink 500

### Type=photo, Size=16, Color=none

- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 16×16 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=20, Color=none

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 20×20 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=24, Color=none

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 24×24 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=32, Color=none

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 32×32 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=40, Color=none

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 40×40 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=48, Color=none

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 48×48 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=56, Color=none

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 56×56 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=photo, Size=64, Color=none

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 64×64 · fill image · stroke 0.5=sm inside BORDER/Subtle

### Type=initials, Size=16, Color=none

- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 16×16 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `A` only here: size 14×14 · text "A" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=initials, Size=20, Color=none

- `(root)` size: 16×16 → 20×20
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 20×20 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `A` only here: size 18×18 · text "A" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=initials, Size=24, Color=none

- `(root)` size: 16×16 → 24×24
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 24×24 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 21.6×21.6 · text "AG" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=initials, Size=32, Color=none

- `(root)` size: 16×16 → 32×32
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 32×32 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 28.8×28.8 · text "AG" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=initials, Size=40, Color=none

- `(root)` size: 16×16 → 40×40
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 40×40 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 36×36 · text "AG" · font Departure Mono 400 11/15 ls 0.3 upper align center · font.vars family/Labels, Links, size/Button, weight/Regular, line-height/Tiny Text, letter-spacing/spacious · color CONTENT/Primary

### Type=initials, Size=48, Color=none

- `(root)` size: 16×16 → 48×48
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 48×48 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 43.2×43.2 · text "AG" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Primary

### Type=initials, Size=56, Color=none

- `(root)` size: 16×16 → 56×56
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 56×56 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 50.4×50.4 · text "AG" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Primary

### Type=initials, Size=64, Color=none

- `(root)` size: 16×16 → 64×64
- `Ellipse 325` absent
- `blurred` absent
- `Mask group` absent
- `Mask group/Ellipse 326` absent
- `Mask group/Mask group` absent
- `Mask group/Mask group/user-3-fill 1` absent
- `Mask group/Mask group/user-3-fill 1/Vector` absent
- `Mask group/Mask group/Rectangle 2955` absent
- `Mask group/Mask group/Rectangle 2959` absent
- `Mask group/Mask group/Rectangle 2956` absent
- `Mask group/Mask group/Rectangle 2960` absent
- `Mask group/Mask group/Rectangle 2957` absent
- `Mask group/Mask group/Rectangle 2958` absent
- `image-placeholder` only here: size 64×64 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle
- `AG` only here: size 57.6×57.6 · text "AG" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| BACKGROUND/Accent | – | no WEB code syntax |
| BACKGROUND/Inverse | `var(--color-bg-inverse)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Accent (Light) | – | no WEB code syntax |
| BORDER/Orange (Light) | – | no WEB code syntax |
| BORDER/Pink (Light) | – | no WEB code syntax |
| BORDER/Purple (Light) | – | no WEB code syntax |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BORDER/Teal (Light) | – | no WEB code syntax |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/20 | `var(--icon-20)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| ICONS/40 | `var(--icon-40)` | ok |
| ICONS/48 | `var(--icon-48)` | ok |
| ICONS/56 | `var(--icon-56)` | ok |
| ICONS/64 | `var(--icon-64)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| letter-spacing/tight | `var(--tracking-tight)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| NEUTRAL/Neutral 100 | `var(--color-neutral-100)` | ok |
| NEUTRAL/Neutral 200 | – | no WEB code syntax |
| NEUTRAL/Neutral 400 | – | no WEB code syntax |
| ORANGE/Orange 400 | – | no WEB code syntax |
| ORANGE/Orange 500 | – | no WEB code syntax |
| PINK/Pink 500 | – | no WEB code syntax |
| PURPLE/Purple 500 | – | no WEB code syntax |
| size/Button | `var(--text-button)` | ok |
| size/Small | `var(--text-small)` | ok |
| sm | `var(--stroke-sm)` | ok |
| TEAL/Teal 400 | – | no WEB code syntax |
| TEAL/Teal 500 | – | no WEB code syntax |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- fill: Avatars/01

## Values without variable

- `(root)` fixed width 16 (8/64 variants)
- `blurred` effect layer_blur 10  (no style) (43/64 variants)
- `Mask group/Mask group/user-3-fill 1/Vector` color #000000 (48/64 variants)
- `(root)` fixed width 20 (8/64 variants)
- `(root)` fixed width 24 (8/64 variants)
- `(root)` fixed width 32 (8/64 variants)
- `blurred` effect layer_blur 20  (no style) (5/64 variants)
- `(root)` fixed width 40 (8/64 variants)
- `(root)` fixed width 48 (8/64 variants)
- `(root)` fixed width 56 (8/64 variants)
- `(root)` fixed width 64 (8/64 variants)

## Nested components

none

## Icons

none
