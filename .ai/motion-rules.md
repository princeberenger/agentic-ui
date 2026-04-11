# Animation & Interaction Rules

The definitive guide for all motion and interaction in the Agentic Design System.
Every animation decision was tested in-session and refined through user feedback. These are not theoretical — they are battle-tested patterns.

Sources:
- [The Easing Blueprint](https://animations.dev/learn/animation-theory/the-easing-blueprint) — Emil Kowalski
- [CSS Transitions](https://animations.dev/learn/css-animations/transitions) — Emil Kowalski
- Session testing: 2026-04-05 (tabs, sliders, progress bars, text feedback)

---

## 1. Tokens

All motion values are tokenized. CSS tokens in `globals.css`, JS constants in `app/components/motion.ts`.

### Easing

| Token (CSS) | Token (JS) | Value | Use for |
|---|---|---|---|
| `--ease-out-expo` | `EASE_OUT_EXPO` | `cubic-bezier(0.19, 1, 0.22, 1)` | Enter/exit, user-initiated actions, shared element transitions |
| `--ease-in-out-quart` | `EASE_IN_OUT_QUART` | `cubic-bezier(0.76, 0, 0.24, 1)` | On-screen morph/reposition (element stays visible, changes size/position) |
| `ease` (built-in) | — | — | Hover effects only (color, background, opacity) |

**NEVER use `ease-in`** — it starts slow and ends fast, making UIs feel sluggish.
**NEVER use `linear`** — feels robotic. Exception: marquees, progress timers, constant-speed scrolling.

Built-in CSS easings (`ease-out`, `ease-in-out`) are too weak. Always use the custom curves above.

### Duration

| Token (CSS) | Token (JS) | Value | Use for |
|---|---|---|---|
| `--duration-press` | `DURATION_PRESS` | `150ms` / `0.15` | Button press, micro-feedback, magnetic snap |
| `--duration-hover` | `DURATION_HOVER` | `200ms` / `0.2` | Hover effects, small transitions, post-drag programmatic updates |
| `--duration-enter` | `DURATION_ENTER` | `300ms` / `0.3` | Enter/exit animations, shared element transitions |

### Stagger

- **Cards / large items**: 100–150ms between items
- **Small items (segments, list rows)**: 30–50ms between items
- **Inner content**: starts 100ms after parent finishes entering, not at absolute timestamps

---

## 2. CSS Transition Rules

These are non-negotiable. Every CSS transition in the system must follow them.

### 2.1. NEVER use `transition: all`

List specific properties. `all` causes unintended transitions on properties you didn't mean to animate.

```css
/* WRONG */
transition: all 0.2s ease;

/* RIGHT */
transition: var(--duration-hover) ease;
transition-property: color, background-color, border-color;
```

### 2.2. Always write `ease` explicitly

Even though `ease` is the CSS default, most developers think the default is `linear`. Be explicit.

```css
/* WRONG — ambiguous */
transition: color 0.2s;

/* RIGHT — explicit */
transition: color var(--duration-hover) ease;
```

### 2.3. Use the shorthand pattern

Set duration + easing on one line, properties on the next. Less repetition, same values.

```css
transition: var(--duration-hover) ease;
transition-property: color, background-color, border-color;
```

### 2.4. Avoid shorthand for `transition-delay`

`transition: transform 0.2s ease 1s` is confusing. Use the explicit property.

```css
transition: transform var(--duration-enter) var(--ease-out-expo);
transition-delay: 200ms;
```

### 2.5. Only animate compositor-friendly properties

Safe to animate: `transform`, `opacity`, `color`, `background-color`, `border-color`, `box-shadow`, `width` (handles only).

Never continuously animate `height`, `top`, `left`, `margin`, `padding` — these trigger layout recalculation.

### 2.6. Wrap hover styles for touch devices

Hover states stick on touch devices. Always wrap in a media query.

```css
@media (hover: hover) and (pointer: fine) {
  .track:hover .handleLine {
    background: var(--color-content-secondary);
    width: 3px;
  }
}
```

---

## 3. motion/react Rules

For JS-driven animations using `motion/react` (Framer Motion v11+). Import constants from `app/components/motion.ts`.

### 3.1. Entrance animations

Use `EASE_OUT_EXPO` with `DURATION_ENTER`. The strong ease-out gives an immediate sense of responsiveness — fast start, gentle settle.

```tsx
import { EASE_OUT_EXPO, DURATION_ENTER } from '@/app/components/motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: DURATION_ENTER, ease: EASE_OUT_EXPO }}
/>
```

### 3.2. Drag tracking — ZERO lag

During active drag, the handle must follow the cursor exactly. Any animation delay feels broken.

Track two states:
- `dragging` (boolean) — is the pointer currently captured?
- `hasInteracted` (boolean) — has the user ever touched this component?

```tsx
const fillTransition = dragging
  ? { duration: 0 }                    // drag: instant
  : !hasInteracted && animated
    ? { delay, duration, ease }         // mount: entrance animation
    : { duration: DURATION_HOVER, ease: EASE_OUT_EXPO };  // post-interaction
```

**NEVER mix entrance and drag transitions.** Entrance can ease in. Drag must be instant.

### 3.3. Magnetic snapping

When a slider has discrete `step` values, the drag transition changes from `duration: 0` to a short magnetic snap:

```tsx
const fillTransition = dragging
  ? step
    ? { duration: DURATION_PRESS, ease: EASE_OUT_EXPO }  // magnetic snap
    : { duration: 0 }                                      // continuous: instant
  : /* ... mount/post-interaction logic */;
```

The 150ms ease-out creates a magnetic pull — the handle follows loosely but snaps to the nearest notch.

### 3.4. Shared element transitions (layoutId)

For elements that slide between positions (tab indicators, selection highlights):

```tsx
<motion.span
  layoutId={`indicator-${groupId}`}
  transition={{ duration: DURATION_ENTER, ease: EASE_OUT_EXPO }}
/>
```

Use `useId()` + `LayoutGroup` to scope `layoutId` per component instance.

### 3.5. Staggered entrances

Use custom `variants` with a stagger delay per item index:

```tsx
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: DURATION_ENTER, ease: EASE_OUT_EXPO },
  }),
};

<motion.div variants={cardVariants} initial="hidden" animate="visible" custom={0} />
```

---

## 4. Interactive Element Patterns

Patterns learned through iteration. Each was tested and refined.

### 4.1. Drag handles

The handle must communicate "I'm grabbable" before the user clicks.

| State | Visual change | Transition |
|---|---|---|
| Default | `width: 2px`, `background: --color-content-icon`, `border-radius: 9999px` | — |
| Hover | `width: 3px`, `background: --color-content-secondary` | `var(--duration-hover) ease` on `width, background-color` |
| Dragging | `width: 3px`, `background: --color-content-primary` | — |
| Track border (drag) | `border-color: --color-border-strong` | `var(--duration-hover) ease` on `border-color` |

**Rules:**
- Thicken on hover, NEVER increase height — only widen (2px → 3px)
- Fully round at all states: `border-radius: 9999px`
- Handle hover MUST be inside `@media (hover: hover) and (pointer: fine)`
- Track border highlights only during active drag, NOT on hover

### 4.2. Snap dots (for stepped sliders)

Visual indicators showing discrete positions on a stepped slider.

| Rule | Detail |
|---|---|
| Color | `--color-content-disabled` (#e0e0e0) — dimmer than icon, background-level |
| Size | 4px circles, `border-radius: 9999px` |
| Z-index | Below the fill (`z-index: 0`), fill is `z-index: 1` — dots hide as fill passes over them |
| Range | Skip first (0%) and last (100%) positions — only show interior dots |
| Active position | Hide the dot at the current snap value — the handle replaces it |
| Layer | `pointer-events: none` — don't interfere with drag |

### 4.3. Live-updating text (SlidingText)

When a value changes in response to user input (drag, click), the text must acknowledge the change. Static swaps feel broken.

**Pattern: Subtle opacity pulse.** The whole text dips to 60% opacity and returns. No motion, no blur, no per-character effects.

```tsx
// SlidingText uses useSpring for the pulse
const bump = useSpring(0, { stiffness: 600, damping: 50 });
const opacity = useTransform(bump, [0, 1], [1, 0.6]);
```

**Rejected approaches (tested and discarded):**
- ❌ Per-character rolling (iOS alarm style) — too busy, distracting for fast drag
- ❌ Blur + slide — blur disrupts readability during interaction
- ❌ Vertical nudge + opacity — the downward motion was annoying
- ❌ Bounce on return — even subtle spring overshoot felt wrong

**What survived:** Opacity-only pulse. Felt but not seen.

### 4.4. Badge color transitions

When a categorical label changes (e.g., "Medium" → "High"), the background and text color must interpolate — not snap.

```css
.badgeGreen, .badgeYellow, .badgeRed {
  transition: var(--duration-hover) ease;
  transition-property: color, background-color;
}
```

Define shared structural properties once, color values per-class. The transition handles the cross-fade between states.

### 4.5. Percentage / value labels

Labels that display a live numeric value (e.g., "60%") inside a slider:

- Use `SlidingText` component for the opacity pulse
- `z-index: 2` — must sit above the fill (`z-index: 1`) at all times
- `position: absolute; right: var(--space-16)` — anchored to right edge of track

### 4.6. Shared element indicators (tabs)

The active indicator (background, border, underline) slides between tabs using `layoutId`.

| Style | Indicator visual |
|---|---|
| Pill | `background: white`, `box-shadow: inset 0 0 0 1px black` |
| Segmented | `background: white`, `box-shadow: elevation-1` + `inset bottom edge` |
| Underline | `height: 1px`, `background: black`, positioned at bottom |
| Rounded | `background: white`, `box-shadow: elevation-1` + `inset bottom edge` |

**Content elements** (label, icons) need `position: relative; z-index: 1` to stay above the indicator.

**Hover on underline tabs:** Do NOT show bottom border on hover — it merges with the active indicator in `gap: 0` groups, creating a full-width line. Only show overlay background + primary text on hover.

---

## 5. Overflow & Clipping Rules

Learned from slider edge cases.

| Element | `overflow` | Why |
|---|---|---|
| Slider track | `hidden` | Clips fill at rounded corners — prevents sharp edges from leaking at 0% and 100% |
| Slider fill | `visible` | Handle needs to extend slightly beyond fill boundary |
| Slider handle wrapper | `visible` | Handle widens on hover (2px → 3px), must not be clipped |

---

## 6. Component Checklist

Run this before marking ANY interactive component as complete.

### Visual states
- [ ] `:hover` on every interactive selector (wrap in `@media (hover: hover)`)
- [ ] `:focus-visible` with `outline: 2px solid var(--color-focus-ring); outline-offset: 1px`
- [ ] `:active` press feedback where appropriate (`scale(0.97)`, `DURATION_PRESS`, `EASE_OUT_EXPO`)
- [ ] `:disabled` styling if the component supports it
- [ ] All transitions use token durations and explicit `transition-property`

### Interactivity
- [ ] Component is `'use client'` with real state management
- [ ] Controlled (`value` + `onChange`) and uncontrolled (`defaultValue`) patterns supported
- [ ] Drag elements: `duration: 0` during drag, `hasInteracted` tracking
- [ ] Stepped/snapped elements: `DURATION_PRESS` magnetic transition during drag

### Animation
- [ ] Entrance: `EASE_OUT_EXPO`, `DURATION_ENTER`, staggered if multiple items
- [ ] Inner content entrance starts after parent lands (relative delay, not absolute)
- [ ] Live-updating text wrapped in `SlidingText`
- [ ] Badge/category transitions use CSS `transition-property` for color interpolation

### Audit
- [ ] Run `bash scripts/audit-interactive-states.sh` — zero failures
- [ ] No hardcoded easing values — all from tokens
- [ ] No `transition: all` anywhere
- [ ] No `ease-in` or `linear` (unless marquee/timer)
- [ ] Hover wrapped in `@media (hover: hover) and (pointer: fine)`

---

## 7. Anti-Patterns

Patterns that were tested and rejected. Do NOT reintroduce them.

| Pattern | Why it failed |
|---|---|
| Per-character rolling text | Too busy during fast drag. Distracting. |
| Blur on text change | Disrupts readability. User explicitly rejected. |
| Vertical nudge on text change | Downward motion felt wrong, like a glitch. |
| Spring bounce on text return | Even subtle overshoot felt annoying at drag speed. |
| `ease-in` for any UI animation | Makes everything feel sluggish — slow start is the opposite of responsive. |
| `linear` for transitions | Robotic, unnatural. Only for constant-speed utilities. |
| Built-in `ease-out` / `ease-in-out` | Too weak. Custom curves feel more energetic and polished. |
| Track border highlight on hover | Only highlight during drag — hover should only affect the handle. |
| Underline border on hover (in tab groups) | Merges with active indicator in `gap: 0` groups → full-width line. |
| Handle `scaleY` on hover | User wanted thicker width, not taller height. |
| Handle hover `--color-content-primary` | Too dark. Use `--color-content-secondary` for hover, `primary` for drag only. |
| `overflow: visible` on slider track | Fill's sharp edges leak past rounded corners at 0% and 100%. |
| Absolute animation delays for inner content | Should be relative to parent entrance, not page load timestamp. |
