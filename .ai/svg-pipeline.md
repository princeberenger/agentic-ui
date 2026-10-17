# Phase 3 — SVG & Icon Pipeline

## Critical: Figma MCP viewBox Cropping Fix

Figma MCP exports icon SVGs with the `viewBox` cropped to just the vector path bounds. This strips the internal padding between the icon vectors and the Figma frame boundary.

**Example — Chevron Down icon:**
- Figma: 16×16 frame, chevron paths occupy ~10×5.7px centered with padding
- Exported SVG: `viewBox="0 0 10 5.7"` — padding lost
- Rendered at 16×16 via `mask-size: contain`: chevron scales to fill entire box — **60% larger than design**

### Rule 1: viewBox Must Match Figma Frame Size

Every icon SVG must have a `viewBox` that matches the Figma icon component's frame dimensions:
- 16px icons → `viewBox="0 0 16 16"`
- 20px icons → `viewBox="0 0 20 20"`
- 24px icons → `viewBox="0 0 24 24"`

**Never** use a viewBox smaller than the icon's rendering container.

### Rule 2: Preserve Internal Padding via translate()

After extracting an SVG from Figma MCP:
1. Read the MCP output for the icon's inner layer insets (e.g., `inset-[33.13%_18.75%_31.25%_18.75%]`)
2. Calculate pixel offsets: `offsetX = left% × frameSize`, `offsetY = top% × frameSize`
3. Wrap all `<path>` elements in `<g transform="translate(offsetX, offsetY)">`
4. Set `viewBox="0 0 {frameSize} {frameSize}"`

**Fallback** (no MCP inset data): center the paths within the frame:
```
offsetX = (frameSize - currentViewBoxWidth) / 2
offsetY = (frameSize - currentViewBoxHeight) / 2
```

### Rule 3: Normalize Fills to #000000

Figma exports icons with the base component fill color (often gray `#8F8F8F`), not the instance override. Always change all `fill` values to `#000000` for correct `mask-image` rendering.

### How to Read MCP Insets

The MCP `get_design_context` output shows each icon's internal positioning as CSS percentage-based insets on the inner "icon" layer:

```jsx
// MCP output for Chevron Down (16×16 frame)
<div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="icon">
```

Convert to pixel offsets:
- `left: 18.75% × 16 = 3px` → offsetX = 3
- `top: 33.13% × 16 = 5.3px` → offsetY = 5.3

### Before / After Example

**Extracted from Figma (broken):**
```svg
<svg viewBox="0 0 10 5.7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5.7L0 0.7L0.7 0L5 4.3L9.3 0L10 0.7L5 5.7Z" fill="#8F8F8F"/>
</svg>
```

**Fixed (correct):**
```svg
<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(3, 5.3)">
    <path d="M5 5.7L0 0.7L0.7 0L5 4.3L9.3 0L10 0.7L5 5.7Z" fill="#000000"/>
  </g>
</svg>
```

### Common Figma Inset Reference (16px icons)

| Icon | Figma Insets (T R B L %) | Pixel Offset (x, y) |
|------|--------------------------|---------------------|
| Chevron Down | 33.13% 18.75% 31.25% 18.75% | translate(3, 5.3) |
| Chevron Up | 31.25% 18.75% 33.13% 18.75% | translate(3, 5) |
| Close | 18.75% all | translate(3, 3) |
| Close Large | 18.75% all | translate(3, 3) |
| Menu Open | 12.5% all | translate(2, 2) |
| Overflow Menu Vertical | 18.75% 43.75% | translate(7, 3) |
| Arrow Up Right | 18.75% all | translate(3, 3) |
| Home | 6.25% 3.13% 12.5% 3.13% | translate(0.5, 1) |
| Apps | 6.25% all | translate(1, 1) |
| Caret Down | 37.5% 25% 31.25% 25% | translate(4, 6) |
| Caret Up | 31.25% 25% 37.5% 25% | translate(4, 5) |

---

## Export

- `npm run figma:extract -- <node-id> --icons` exports the missing icon svgs of a component to `public/assets/icons/` and adds them to the Code Connect icon batch (`app/components/Icon/Icon.figma.batch.json`).
- Manual export (fallback): select the icon frame (not the parent), SVG, "Include id" off, 1x. Flatten boolean operations and outline strokes before export.
- Then apply rules 1 to 3 above.

## Rendering: `app/components/Icon`

Icons are svg files, not React components.

```tsx
<Icon name="chevron-down" size={16} />            // mask mode (default): monochrome, color = currentColor
<Icon name="checkmark-filled" mode="img" />       // img mode: multi-color svg, rendered as is
<Icon name="chevron-left" alt="Previous" />        // alt → role="img"; without alt the icon is decorative
```

- `name`: file name in `public/assets/icons/` without `.svg` (kebab-case, from the Figma name `Icons / Chevron--down` → `chevron-down`).
- `size`: one of the `--icon-*` tokens (8, 12, 13, 14, 16, 20, 24, 32, 40).
- Mask mode uses `mask-size: contain`: it only renders at the right size when the svg `viewBox` matches the Figma frame (rule 1).

## Color handling

- Monochrome icons: `fill="#000000"` in the file, color from CSS `color` on the parent (mask + `currentColor`).
- Multi-color icons: keep the Figma colors, `mode="img"`.
- NEVER keep a Figma base component fill (like `#8F8F8F`) in a monochrome icon.

## Logos

- Logos have their own components (`app/components/Logo`, `app/components/ModelLogo`), svg files in `public/assets/`.
- Exact Figma dimensions, explicit colors, not `currentColor`.
- Not decorative by default: accessible name via `label`.

## Inventory

- Icons used by a component: section "Icons" of `.ai/specs/<slug>.md` (present or missing in the repo).
- Icons published in Code Connect: `app/components/Icon/Icon.figma.batch.json`.

## Validation checklist

- [ ] Every icon svg has `viewBox="0 0 {frameSize} {frameSize}"`
- [ ] No icon svg has a viewBox smaller than its rendering container
- [ ] All monochrome icon fills are `#000000`
- [ ] Paths are wrapped in `<g transform="translate(x, y)">` when an offset is needed
- [ ] Icon in the browser matches the icon in Figma at 1:1 zoom

## Absolute never-do list

- Replace an svg with a unicode character or an emoji
- Approximate an icon with CSS shapes
- Scale icons disproportionally (if Figma says 16×16, it's 16×16)
- Remove svg attributes that affect rendering (`viewBox`, `fill-rule`)
- Convert stroked icons to filled or vice versa
- Add decorative svgs that don't exist in the Figma source
- Missing icon → `// TODO: Replace with actual SVG from Figma — [icon-name]` with exact dimensions
