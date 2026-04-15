# Agentic Design System

A production-grade design system built with Next.js, React, and CSS Modules. Components are extracted from Figma via MCP and implemented with full token fidelity, interactive states, and motion.

## Setup

### Prerequisites

- Node.js 20+
- npm
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code)
- Figma MCP server (for design extraction)

### Install and run

```bash
git clone <repo-url>
cd agentic-design-system
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Connect Claude Code

1. Open the project directory in your terminal
2. Run `claude` to start a Claude Code session
3. Claude reads `CLAUDE.md` automatically and operates as a design system agent
4. Connect the Figma MCP server for design extraction

## Commands

Use these commands inside a Claude Code session to work with components:

### `implement [figma-link]`

Extracts a component from Figma and generates production-ready code: `.tsx`, `.module.css`, `.types.ts`, `.tokens.css`, `.stories.tsx`, `.test.tsx`, and icons. Includes all interactive states, token mapping, and a self-review pass.

```
implement https://www.figma.com/design/FLribG.../node-id=123-456
```

### `animate [ComponentName]`

Adds `motion/react` (Framer Motion v11+) animations to an existing component. Follows strict easing and duration tokens defined in `.ai/motion-rules.md`.

```
animate Button
```

### `refactor [ComponentName]`

Runs 6 refactoring passes on an existing component: token audit, structure cleanup, motion compliance, accessibility, naming, and final QC. One commit per pass.

```
refactor TabGroup
```

### `audit [ComponentName]`

Runs quality gates 0-5 on an existing component. Checks token fidelity, pixel accuracy, accessibility, state coverage, and motion compliance.

```
audit Slider
```

### `showcase [figma-link]`

Generates an HTML documentation page with variant gallery, state matrix, dark mode preview, and token table.

```
showcase https://www.figma.com/design/FLribG.../node-id=123-456
```

### `full [figma-link]`

Runs both `implement` and `showcase` in sequence -- production files plus documentation page.

```
full https://www.figma.com/design/FLribG.../node-id=123-456
```

## Project structure

```
app/
  components/       # Reusable UI components (Button, Input, TabGroup, etc.)
  fonts/            # Self-hosted font files
  globals.css       # Design tokens (colors, spacing, typography, shadows, radii)
  layout.tsx        # Root layout with SubNav
  page.tsx          # Token showcase / style guide

.ai/                # Agent instruction files
  extraction.md     # Figma MCP extraction protocol
  generation.md     # Component generation rules
  motion-rules.md   # Animation tokens and patterns
  refactoring.md    # 6-pass refactoring checklist
  quality-gates.md  # QC levels 0-5
  svg-pipeline.md   # Icon extraction and SVGR conversion
  diagnostics.md    # Troubleshooting guide

public/
  assets/icons/     # Extracted SVG icons
```

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | CSS Modules + CSS Custom Properties |
| Animation | motion/react (Framer Motion v11+) |
| Icons | Figma export via SVGR |
| Language | TypeScript (strict mode) |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run sync:motion` | Sync motion tokens between CSS and JS |
