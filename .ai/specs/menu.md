# Menu — 558:659

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=558-659
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Menu/Menu.figma.ts)

## Props

- **Size** variant: regular | sm (default regular)
- **Type** variant: account | shortcuts | simple (default account)

## Variants (4)

- Size=regular, Type=account — 160×188 (base)
- Size=regular, Type=simple — 160×260
- Size=sm, Type=simple — 128×120
- Size=regular, Type=shortcuts — 220×154

## Base tree — Size=regular, Type=account

- **Size=regular, Type=account** `component` size 160×188 · sizing fixed/hug · minWidth 132 · layout column align min/min · padding 4=PADDING/4 4=PADDING/4 4=PADDING/4 4=PADDING/4 · gap 0 · fill BACKGROUND/menu/background · stroke 0.5=sm outside BORDER/Medium · radius 10=10 · effect Shadows/elevation2
  - **blur** `rectangle` size 158×128 · sizing fixed/fixed · fill CONTENT/On Primary · effect layer_blur 0  (no style)
  - **_Menu list item** `instance` size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Account", Divider=false
  - **_Menu list item** `instance` size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Preferences", Divider=false
  - **_Menu list item** `instance` size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Upgrade", Divider=false
  - **_Menu list item** `instance` size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Support", Divider=false
  - **_Menu list item** `instance` size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Sign out", Divider=true
    - ↳ Keyboard shortcut (override) instance _Keyboard shortcut › Context=icon · props Show Letter 3=false, Show Letter 2=false, Show Letter 1=true, Show Icon 2=false, Show Icon 4 (Any)=false, Show Icon 3=false, Show Letter 4=true, Icon 1=179:14493, Icon 3=179:14465, Icon 2=179:14487, Icon 4 (Any)=179:14494, Show Icon 1=true, Icon=Icons / Logout
    - ↳ icon (override) fill CONTENT/Icon
  - **internal-border** `rectangle` size 160×188 · sizing fixed/fixed · stroke 1=default inside BACKGROUND/Primary · radius 10=10

## Differences vs base

### Size=regular, Type=simple

- `(root)` size: 160×188 → 160×260
- `(root)` minWidth: 132 → 140
- `_Menu list item` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Account", Divider=false → Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Today", Divider=false
- `_Menu list item#2` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=regular, State=selected
- `_Menu list item#2` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Preferences", Divider=false → Selected=true, Shortcuts / Icon=true, Option text="Last 7 days", Indented=false, Divider=false, Model=false
- `_Menu list item#3` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Upgrade", Divider=false → Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Last 14 days", Divider=false
- `_Menu list item#4` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Support", Divider=false → Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Last 30 days", Divider=false
- `_Menu list item#5` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Sign out", Divider=true → Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Last 3 months", Divider=false
- `_Menu list item#5` radius: – → 6=6
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut` absent
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut/Icon/icon` absent
- `internal-border` size: 160×188 → 160×260
- `_Menu list item#6` only here: size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Last 6 months", Divider=false
- `_Menu list item#7` only here: size 152×36 · sizing fill/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Year to date", Divider=false
- `_Menu list item#8` only here: size 152×36 · sizing fixed/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Menu item", Divider=false · hidden true
- `[run 1]` only here: size 160×36 · sizing fixed/fixed · minWidth 132 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · radius 6=6 · instance _Menu list item › Size=regular, State=default · props Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Menu item", Divider=false · hidden true

### Size=sm, Type=simple

- `(root)` size: 160×188 → 128×120
- `(root)` minWidth: 132 → 128
- `blur` size: 158×128 → 128×48
- `_Menu list item` size: 152×36 → 120×28
- `_Menu list item` sizing: fill/fixed → fill/hug
- `_Menu list item` minWidth: 132 → 120
- `_Menu list item` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=hover
- `_Menu list item` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Account", Divider=false → Model=false, Shortcuts / Icon=true, Selected=false, Option text="Create invoice", Indented=false, Divider=false
- `_Menu list item#2` size: 152×36 → 120×28
- `_Menu list item#2` sizing: fill/fixed → fill/hug
- `_Menu list item#2` minWidth: 132 → 120
- `_Menu list item#2` radius: 6=6 → –
- `_Menu list item#2` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#2` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Preferences", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Send receipt", Divider=false
- `_Menu list item#3` size: 152×36 → 120×28
- `_Menu list item#3` sizing: fill/fixed → fill/hug
- `_Menu list item#3` minWidth: 132 → 120
- `_Menu list item#3` radius: 6=6 → –
- `_Menu list item#3` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#3` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Upgrade", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Refund", Divider=false
- `_Menu list item#4` size: 152×36 → 120×28
- `_Menu list item#4` sizing: fill/fixed → fill/hug
- `_Menu list item#4` minWidth: 132 → 120
- `_Menu list item#4` radius: 6=6 → –
- `_Menu list item#4` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#4` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Support", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Archive", Divider=false
- `_Menu list item#5` absent
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut` absent
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut/Icon/icon` absent
- `internal-border` size: 160×188 → 128×119
- `[run 1]` only here: size 160×24 · sizing fixed/hug · minWidth 160 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · fill #f4f4f4 (no variable) · instance _Menu list item › Size=Extra small, State=Enabled · props Indented=false, Bottom spacer=false, Top spacer=false, Option text="Menu item", Shortcuts or Trigger =false, Selected=false, Divider=false · hidden true
- `[run 2]` only here: size 160×24 · sizing fixed/hug · minWidth 160 · maxWidth 288 · layout column align center/min · padding 0 0 0 0 · gap 0 · fill #f4f4f4 (no variable) · instance _Menu list item › Size=Extra small, State=Enabled · props Indented=false, Bottom spacer=false, Top spacer=false, Option text="Menu item", Shortcuts or Trigger =false, Selected=false, Divider=false · hidden true

### Size=regular, Type=shortcuts

- `(root)` size: 160×188 → 220×154
- `(root)` minWidth: 132 → 160
- `blur` size: 158×128 → 220×96
- `_Menu list item` size: 152×36 → 212×28
- `_Menu list item` sizing: fill/fixed → fill/hug
- `_Menu list item` minWidth: 132 → 120
- `_Menu list item` radius: 6=6 → –
- `_Menu list item` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Account", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Paste here", Divider=false
- `_Menu list item#2` size: 152×36 → 212×31
- `_Menu list item#2` sizing: fill/fixed → fill/hug
- `_Menu list item#2` minWidth: 132 → 120
- `_Menu list item#2` radius: 6=6 → –
- `_Menu list item#2` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#2` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Preferences", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Show/Hide UI", Divider=true
- `_Menu list item#3` size: 152×36 → 212×28
- `_Menu list item#3` sizing: fill/fixed → fill/hug
- `_Menu list item#3` minWidth: 132 → 120
- `_Menu list item#3` radius: 6=6 → –
- `_Menu list item#3` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#3` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Upgrade", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Show/Hide Comments", Divider=false
- `_Menu list item#4` size: 152×36 → 212×31
- `_Menu list item#4` sizing: fill/fixed → fill/hug
- `_Menu list item#4` minWidth: 132 → 120
- `_Menu list item#4` radius: 6=6 → –
- `_Menu list item#4` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#4` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Support", Divider=false → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Menu item", Divider=true
- `_Menu list item#5` size: 152×36 → 212×28
- `_Menu list item#5` sizing: fill/fixed → fill/hug
- `_Menu list item#5` minWidth: 132 → 120
- `_Menu list item#5` instance: _Menu list item › Size=regular, State=default → _Menu list item › Size=sm, State=default
- `_Menu list item#5` props: Indented=false, Shortcuts / Icon=true, Model=false, Selected=false, Option text="Sign out", Divider=true → Model=false, Indented=false, Selected=false, Shortcuts / Icon=true, Option text="Menu item", Divider=false
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut` absent
- `_Menu list item#5/Content/Text overflow + Menu style/Keyboard shortcut/Icon/icon` absent
- `internal-border` size: 160×188 → 220×154
- `_Menu list item#3/Content/Text overflow + Menu style/_Keyboard shortcut` only here: instance _Keyboard shortcut › Context=shortcut · props Icon 3=Mac--shift, Icon 2=Mac--option, Show Letter 4=true, Show Letter 3=false, Icon=179:14020, Icon 4 (Any)=Delete, Show Icon 4 (Any)=false, Show Letter 2=true, Show Letter 1=false, Icon 1=Mac--command, Show Icon 2=true, Show Icon 3=false, Show Icon 1=false


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/menu/background | `var(--color-bg-menu)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BORDER/Medium | `var(--color-border-medium)` | ok |
| CONTENT/On Primary | `var(--color-content-on-primary)` | ok |
| default | `var(--stroke-default)` | ok |
| none | – | no WEB code syntax |
| PADDING/4 | `var(--space-4)` | ok |
| sm | `var(--stroke-sm)` | ok |

## Styles

- effect: Shadows/elevation2

## Values without variable

- `(root)` fixed width 160 (2/4 variants)
- `blur` effect layer_blur 0  (no style) (4/4 variants)
- `blur` fixed width 158, height 128 (2/4 variants)
- `_Menu list item` fixed height 36 (2/4 variants)
- `_Menu list item#2` fixed height 36 (2/4 variants)
- `_Menu list item#3` fixed height 36 (2/4 variants)
- `_Menu list item#4` fixed height 36 (2/4 variants)
- `_Menu list item#5` fixed height 36 (2/4 variants)
- `internal-border` fixed width 160, height 188 (1/4 variants)
- `_Menu list item#6` fixed height 36 (1/4 variants)
- `_Menu list item#7` fixed height 36 (1/4 variants)
- `_Menu list item#8` fixed width 152, height 36 (1/4 variants)
- `[run 1]` fixed width 160, height 36 (1/4 variants)
- `internal-border` fixed width 160, height 260 (1/4 variants)
- `(root)` fixed width 128 (1/4 variants)
- `blur` fixed width 128, height 48 (1/4 variants)
- `[run 1]` color #f4f4f4 (1/4 variants)
- `[run 1]` fixed width 160 (1/4 variants)
- `[run 2]` color #f4f4f4 (1/4 variants)
- `[run 2]` fixed width 160 (1/4 variants)
- `internal-border` fixed width 128, height 119 (1/4 variants)
- `(root)` fixed width 220 (1/4 variants)
- `blur` fixed width 220, height 96 (1/4 variants)
- `internal-border` fixed width 220, height 154 (1/4 variants)

## Nested components

- _Menu list item (554:1372) — connected: app/components/Menu/MenuItem.figma.ts
- _Menu list item (558:342) — not connected

## Icons

none
