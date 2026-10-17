# Navigation — 230:699

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=230-699
- Extracted: 2026-10-17
- Code Connect: yes (app/components/Navigation/Navigation.figma.ts)

## Props

- **Monitor** boolean (default true)
- **Orchestrate** boolean (default true)
- **Delegate** boolean (default true)
- **Footer ** boolean (default true)
- **5 Nav links** boolean (default true)
- **Type** variant: classic | tree (default classic)
- **State** variant: closed | open (default open)

## Variants (3)

- Type=classic, State=open — 247×700 (base)
- Type=tree, State=open — 247×700
- Type=tree, State=closed — 247×700

## Base tree — Type=classic, State=open

- **Type=classic, State=open** `component` size 247×700 · sizing fixed/fixed · layout column align min/min · padding 0 0 0 0 · gap 0=PADDING/none
  - **nav-logo** `instance` size 155×60 · sizing hug/hug · layout row align min/center · padding 24=PADDING/24 24=PADDING/24 16=PADDING/16 24=PADDING/24 · gap 12=PADDING/12 · instance nav-logo › State=open · props Sidebar icon=true, Logo symbol=true
    - ↳ icon-wrapper (override) gap 0
  - **nav-links-container-links** `frame` size 247×574 · sizing fill/fill · layout column align min/min · padding 24=PADDING/24 24=PADDING/24 0=PADDING/none 16=PADDING/16 · gap 4=PADDING/4
    - **nav-link** `instance` size 115×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Icon=Icons / Meter, Section Closed=false, Section Open=false, Show icon=true, Label="Dashboard"
    - **nav-link** `instance` size 90×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="Events", Icon=icons / Event--schedule
      - ↳ icon (override) fill CONTENT/Primary
    - **nav-link** `instance` size 90×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="Agents", Icon=Icons / Code
      - ↳ icon (override) fill CONTENT/Primary
    - **nav-link** `instance` size 115×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="Playbooks", Icon=Icons / Play
      - ↳ icon (override) fill CONTENT/Primary
    - **nav-link** `instance` size 115×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="Campaigns", Icon=Icons / Money
      - ↳ icon (override) fill CONTENT/Primary
    - **nav-link** ×9 `instance` size 104×16 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Icon=Icons / Meter, Section Closed=false, Section Open=false, Show icon=true, Label="Link label" · hidden true
  - **nav-footer** `frame` size 247×66 · sizing fill/hug · layout row align space_between/center · padding 24=PADDING/24 24=PADDING/24 24=PADDING/24 24=PADDING/24 · gap 0
    - **nav-user-settings** `instance` size 203×18 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 0 · instance nav-user-settings › Property 1=Default
      - ↳ icon-arrow (override) fill CONTENT/Primary

## Differences vs base

### Type=tree, State=open

- `nav-logo/nav-logo-container/icon-wrapper` absent
- `nav-links-container-links` absent
- `nav-links-container-links/nav-link` absent
- `nav-links-container-links/nav-link#2` absent
- `nav-links-container-links/nav-link#2/icons / Event--schedule/icon` absent
- `nav-links-container-links/nav-link#3` absent
- `nav-links-container-links/nav-link#3/Icons / Code/icon` absent
- `nav-links-container-links/nav-link#4` absent
- `nav-links-container-links/nav-link#4/Icons / Play/icon` absent
- `nav-links-container-links/nav-link#5` absent
- `nav-links-container-links/nav-link#5/Icons / Money/icon` absent
- `nav-links-container-links/[run 1]` absent
- `nav-logo/container/icon-wrapper` only here: gap 0
- `nav-logo/container/icon-wrapper/Icons/ Menu --open/icon` only here: fill CONTENT/Primary
- `nav-container` only here: size 247×574 · sizing fill/fill · layout column align min/min · padding 24=PADDING/24 24=PADDING/24 0=PADDING/none 16=PADDING/16 · gap 16=PADDING/16
- `nav-container/nav-section` only here: size 207×133 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
- `nav-container/nav-section/nav-link` only here: size 98×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Icon=Icons / Meter, Section Closed=false, Section Open=false, Show icon=true, Label="Monitor"
- `nav-container/nav-section/nav-sub-links-wrapper` only here: size 207×97 · sizing fill/hug · layout column align min/min · padding 0 0 0 16=PADDING/16 · gap 0=PADDING/none
- `nav-container/nav-section/nav-sub-links-wrapper/container` only here: size 191×97 · sizing fill/hug · layout column align min/min · padding 0 0 0 16=PADDING/16 · gap 2=PADDING/2 · stroke 0/0/0/1 inside BORDER/Subtle
- `nav-container/nav-section/nav-sub-links-wrapper/container/nav-sub-link` only here: size 91×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Dashboard"
- `nav-container/nav-section/nav-sub-links-wrapper/container/nav-sub-link#2` only here: size 116×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Call history"
- `nav-container/nav-section/nav-sub-links-wrapper/container/nav-sub-link#2/Link label` only here: text "Call history" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper
- `nav-container/nav-section/nav-sub-links-wrapper/container/nav-sub-link#3` only here: size 99×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="live calls"
- `nav-container/nav-section/nav-sub-links-wrapper/container/nav-sub-link#3/Link label` only here: text "live calls" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper
- `nav-container/nav-section/nav-sub-links-wrapper/container/[run 1]` only here: size 119×15 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Sub-link label" · hidden true
- `nav-container/nav-section#2` only here: size 207×133 · sizing fill/hug · layout column align max/min · padding 0 0 0 0 · gap 4=PADDING/4
- `nav-container/nav-section#2/nav-link` only here: size 207×32 · sizing fill/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="orchestrate", Icon=Icons / Load-balancer--classic
- `nav-container/nav-section#2/nav-link/Icons / Load-balancer--classic/icon` only here: fill CONTENT/Primary
- `nav-container/nav-section#2/nav-link/Section label` only here: text "orchestrate" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper
- `nav-container/nav-section#2/nav-links-wrapper` only here: size 199×97 · sizing fixed/hug · layout row align space_between/min · padding 0=PADDING/none 0=PADDING/none 0=PADDING/none 16=PADDING/16 · gap 12
- `nav-container/nav-section#2/nav-links-wrapper/container` only here: size 183×97 · sizing fill/hug · layout column align min/min · padding 0 0 0 16=PADDING/16 · gap 2=PADDING/2 · stroke 0/0/0/1 inside BORDER/Subtle
- `nav-container/nav-section#2/nav-links-wrapper/container/nav-sub-link` only here: size 167×31 · sizing fill/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=active · props Sub-link Label="Agents"
- `nav-container/nav-section#2/nav-links-wrapper/container/nav-sub-link#2` only here: size 91×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Campaigns"
- `nav-container/nav-section#2/nav-links-wrapper/container/nav-sub-link#2/Link label` only here: text "Campaigns" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper
- `nav-container/nav-section#2/nav-links-wrapper/container/nav-sub-link#3` only here: size 91×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="playbooks"
- `nav-container/nav-section#2/nav-links-wrapper/container/nav-sub-link#3/Link label` only here: text "playbooks" · font BUTTON/Label/md/regular · Departure Mono 400 13/15 ls 0 upper
- `nav-container/nav-section#2/nav-links-wrapper/container/[run 1]` only here: size 119×15 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Sub-link label" · hidden true
- `nav-container/nav-section#3` only here: size 207×166 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 4=PADDING/4
- `nav-container/nav-section#3/nav-link` only here: size 107×32 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 8=PADDING/8 · instance nav-link › State=default, Type=link · props Section Closed=false, Section Open=false, Show icon=true, Label="Delegate", Icon=Icons / Deploy
- `nav-container/nav-section#3/nav-link/Icons / Deploy/icon` only here: fill CONTENT/Primary
- `nav-container/nav-section#3/nav-links-wrapper` only here: size 207×130 · sizing fill/hug · layout row align min/min · padding 0 0 0 16=PADDING/16 · gap 8
- `nav-container/nav-section#3/nav-links-wrapper/container` only here: size 191×130 · sizing fill/hug · layout column align min/min · padding 0 0 0 16=PADDING/16 · gap 2=PADDING/2 · stroke 0/0/0/1 inside BORDER/Subtle
- `nav-container/nav-section#3/nav-links-wrapper/container/nav-sub-link` only here: size 124×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Phone numbers"
- `nav-container/nav-section#3/nav-links-wrapper/container/nav-sub-link#2` only here: size 124×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Voice library"
- `nav-container/nav-section#3/nav-links-wrapper/container/nav-sub-link#3` only here: size 116×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Integrations"
- `nav-container/nav-section#3/nav-links-wrapper/container/nav-sub-link#4` only here: size 66×31 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Events"
- `nav-container/nav-section#3/nav-links-wrapper/container/[run 1]` only here: size 119×15 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 10=10 · instance nav-sub-link › State=default · props Sub-link Label="Sub-link label" · hidden true

### Type=tree, State=closed

- `nav-logo` size: 155×60 → 247×56
- `nav-logo` sizing: hug/hug → fill/hug
- `nav-logo` padding: 24=PADDING/24 24=PADDING/24 16=PADDING/16 24=PADDING/24 → 16=PADDING/16 24=PADDING/24 16=PADDING/16 24=PADDING/24
- `nav-logo` gap: 12=PADDING/12 → 16=PADDING/16
- `nav-logo` instance: nav-logo › State=open → –
- `nav-logo` props: Sidebar icon=true, Logo symbol=true → –
- `nav-logo/nav-logo-container/icon-wrapper` absent
- `nav-links-container-links` absent
- `nav-links-container-links/nav-link` absent
- `nav-links-container-links/nav-link#2` absent
- `nav-links-container-links/nav-link#2/icons / Event--schedule/icon` absent
- `nav-links-container-links/nav-link#3` absent
- `nav-links-container-links/nav-link#3/Icons / Code/icon` absent
- `nav-links-container-links/nav-link#4` absent
- `nav-links-container-links/nav-link#4/Icons / Play/icon` absent
- `nav-links-container-links/nav-link#5` absent
- `nav-links-container-links/nav-link#5/Icons / Money/icon` absent
- `nav-links-container-links/[run 1]` absent
- `nav-footer` absent
- `nav-footer/nav-user-settings` absent
- `nav-footer/nav-user-settings/Icons / Overflow-menu--vertical/icon-arrow` absent
- `nav-logo/AGENTIC UI LOGO` only here: size 24×24 · sizing fixed/fixed · size.vars ICONS/24 · layout row align center/center · padding 2=PADDING/2 2=PADDING/2 2=PADDING/2 2=PADDING/2 · gap 0 · instance AGENTIC UI LOGO › Variant=Symbol
- `nav-logo/icon-wrapper` only here: size 16×16 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10
- `nav-logo/icon-wrapper/Icons/ Menu --collapsed` only here: size 16×16 · sizing fixed/fixed · instance Icons/ Menu --collapsed
- `nav-logo/icon-wrapper/Icons/ Menu --collapsed/icon` only here: fill CONTENT/Primary
- `nav-logo/icon-wrapper/Icons/ Menu --collapsed/icon/btn` only here: stroke 1=default inside CONTENT/Primary · radius 2=PADDING/2
- `nav-logo/icon-wrapper/Icons/ Menu --collapsed/btn` only here: fill CONTENT/Primary


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/2 | `var(--space-2)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |

## Values without variable

- `(root)` fixed width 247, height 700 (3/3 variants)
- `nav-container/nav-section/nav-sub-links-wrapper/container` stroke weight 0/0/0/1 (1/3 variants)
- `nav-container/nav-section#2/nav-links-wrapper` fixed width 199 (1/3 variants)
- `nav-container/nav-section#2/nav-links-wrapper/container` stroke weight 0/0/0/1 (1/3 variants)
- `nav-container/nav-section#3/nav-links-wrapper/container` stroke weight 0/0/0/1 (1/3 variants)
- `nav-logo/AGENTIC UI LOGO` fixed height 24 (1/3 variants)
- `nav-logo/icon-wrapper/Icons/ Menu --collapsed` fixed width 16 (1/3 variants)

## Nested components

- nav-logo (484:13150) — connected: app/components/Navigation/NavLogo.figma.ts
- nav-link (750:8765) — connected: app/components/Navigation/NavLink.figma.ts
- nav-user-settings (6008:14270) — connected: app/components/Navigation/NavUserSettings.figma.ts
- nav-sub-link (226:1312) — connected: app/components/Navigation/NavSubLink.figma.ts
- AGENTIC UI LOGO (146:1787) — not connected
- Icons/ Menu --collapsed (230:694) — connected: icon menu-collapsed

## Icons

none
