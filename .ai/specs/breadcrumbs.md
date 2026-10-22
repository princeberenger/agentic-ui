# Breadcrumbs — 549:163

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-163
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Breadcrumbs/Breadcrumbs.figma.ts)

## Props

- **Items** variant: 2 | 3 | 4 | 5 (default 2)

## Variants (4)

- Items=2 — 98×20 (base)
- Items=3 — 168×20
- Items=4 — 232×20
- Items=5 — 294×20

## Base tree — Items=2

- **Items=2** `component` size 98×20 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 2=PADDING/2
  - **BreadcrumbItem** `instance` size 37×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=default · props ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
  - **link-separator** `frame` size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
    - **/** `text` size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
  - **BreadcrumbItem** `instance` size 37×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=current · props ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false

## Differences vs base

### Items=3

- `(root)` size: 98×20 → 168×20
- `BreadcrumbItem` size: 37×18 → 40×18
- `BreadcrumbItem#2` size: 37×18 → 40×18
- `BreadcrumbItem#2` instance: BreadcrumbItem › Type=default, State=current → BreadcrumbItem › Type=default, State=default
- `BreadcrumbItem#2` props: ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false → ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator#2` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#2//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#3` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=current · props ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false

### Items=4

- `(root)` size: 98×20 → 232×20
- `BreadcrumbItem` size: 37×18 → 40×18
- `BreadcrumbItem#2` size: 37×18 → 40×18
- `BreadcrumbItem#2` instance: BreadcrumbItem › Type=default, State=current → BreadcrumbItem › Type=default, State=default
- `BreadcrumbItem#2` props: ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false → ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator#2` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#2//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#3` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=default · props ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator#3` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#3//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#4` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=current · props ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false

### Items=5

- `(root)` size: 98×20 → 294×20
- `BreadcrumbItem` size: 37×18 → 16×16
- `BreadcrumbItem` gap: 8=PADDING/8 → 4=PADDING/4
- `BreadcrumbItem` instance: BreadcrumbItem › Type=default, State=default → BreadcrumbItem › Type=overflow, State=default
- `BreadcrumbItem` props: ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false → ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=true
- `link-separator//` absent
- `BreadcrumbItem#2` size: 37×18 → 40×18
- `BreadcrumbItem#2` instance: BreadcrumbItem › Type=default, State=current → BreadcrumbItem › Type=default, State=default
- `BreadcrumbItem#2` props: ❖ Icon=Icons / Folder, ↩ Text="LABEL", Icon=false → ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator/<` only here: size 9×15 · sizing hug/hug · text "<" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `link-separator#2` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#2//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `link-separator#3` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#3//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#3` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=default · props ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator#4` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#4//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#4` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=default · props ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false
- `link-separator#5` only here: size 20×20 · sizing hug/hug · minWidth 20 · layout column align center/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 0=PADDING/none
- `link-separator#5//` only here: size 9×15 · sizing hug/hug · text "/" · font Departure Mono 400 14/15 ls -0.3 upper align center · font.vars family/Labels, Links, size/Small, weight/Regular, line-height/Tiny Text, letter-spacing/tight · color CONTENT/Disabled
- `BreadcrumbItem#5` only here: size 40×18 · sizing hug/hug · layout row align min/center · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 0=PADDING/none · gap 8=PADDING/8 · instance BreadcrumbItem › Type=default, State=default · props ↩ Text="LABEL", ❖ Icon=Icons / Folder, Icon=false


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| CONTENT/Disabled | `var(--color-content-disabled)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| letter-spacing/tight | `var(--tracking-tight)` | ok |
| line-height/Tiny Text | `var(--leading-tiny)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Small | `var(--text-small)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Values without variable

none

## Nested components

- BreadcrumbItem (549:91) — connected: app/components/Breadcrumbs/BreadcrumbItem.figma.ts

## Icons

none
