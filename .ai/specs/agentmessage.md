# AgentMessage — 6246:10120

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6246-10120
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Chat/AgentMessage.figma.ts)

## Props

- **Text label** text (default "Agent message text.")
- **Metadata** boolean (default true)
- **Action button** boolean (default false)
- **State** variant: default | hover | error (default default)
- **Type** variant: text | code | tool call (default text)

## Variants (5)

- State=default, Type=text — 400×63 (base)
- State=error, Type=text — 400×63
- State=default, Type=code — 664×227
- State=default, Type=tool call — 274×163
- State=hover, Type=text — 400×63

## Base tree — State=default, Type=text

- **State=default, Type=text** `component` size 400×63 · sizing hug/hug · minWidth 400 · maxWidth 640 · layout column align center/min · padding 0 0 0 0 · gap 0
  - **message-container** `frame` size 400×40 · sizing fill/hug · layout row align min/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0 · radius 9999/9999/4/9999=full · effect Shadows/elevation1
    - **Agent message text.** `text` size 376×24 · sizing fill/hug · text "Agent message text." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
  - **action-container** `frame` size 101×40 · sizing hug/hug · layout column align min/min · padding 0 0 8=PADDING/8 8=PADDING/8 · gap 10 · hidden true
    - **Button** `instance` size 93×32 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 4=PADDING/4 · fill BUTTON/Secondary Filled · stroke 0.5=sm inside BORDER/Subtle · radius 10=10 · instance Button › Size=md, Style=secondary filled, Type=text-icon, State=default, Icon position=right · props Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Arrow--up-right, Label="View copy"
      - ↳ icon (override) size 13×13
      - ↳ icon (override) fill CONTENT/Icon
  - **ChatMessageMetadata** `instance` size 73×23 · sizing hug/hug · layout row align max/center · padding 8=PADDING/8 12=PADDING/12 0 12=PADDING/12 · gap 6=PADDING/6 · instance ChatMessageMetadata · props Show Thumbs down=true, Show Reset=true, Show Duplicate=true, Divider 3=false, Show Error=false, Divider 2=false, Divider 1=false, Show Thumbs up=true, Show actions=false, Show Read receipt=false, Show Time=true

## Differences vs base

### State=error, Type=text

- `message-container` absent
- `message-container/Agent message text.` absent
- `action-container` absent
- `action-container/Button` absent
- `action-container/Button/icon` absent
- `action-container/Button/icon/icon` absent
- `ChatMessageMetadata` size: 73×23 → 138×23
- `ChatMessageMetadata` props: Show Thumbs down=true, Show Reset=true, Show Duplicate=true, Divider 3=false, Show Error=false, Divider 2=false, Divider 1=false, Show Thumbs up=true, Show actions=false, Show Read receipt=false, Show Time=true → Show Thumbs down=true, Show Reset=true, Show Duplicate=true, Divider 3=false, Show Error=true, Divider 2=true, Divider 1=false, Show Thumbs up=true, Show actions=false, Show Read receipt=false, Show Time=true
- `wrapper` only here: size 201×40 · sizing hug/hug · layout row align min/center · padding 0 0 0 0 · gap 10=PADDING/10
- `wrapper/message-container` only here: size 175×40 · sizing hug/hug · layout row align min/center · padding 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 · gap 0 · fill BACKGROUND/Attention (Light) · radius 9999=full
- `wrapper/message-container/Agent message text.` only here: size 151×24 · sizing hug/hug · maxWidth 400 · text "Agent message text." · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
- `wrapper/Icons / Warning--filled` only here: size 16×16 · sizing fixed/fixed · instance Icons / Warning--filled
- `wrapper/Icons / Warning--filled/icon-color` only here: fill BACKGROUND/Attention

### State=default, Type=code

- `(root)` size: 400×63 → 664×227
- `(root)` minWidth: 400 → –
- `(root)` maxWidth: 640 → 700
- `message-container` size: 400×40 → 664×204
- `message-container` sizing: fill/hug → hug/hug
- `message-container` layout: row align min/center → column align center/min
- `message-container` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 12=PADDING/12 0=PADDING/none 12=PADDING/12
- `message-container` gap: 0 → 12=PADDING/12
- `message-container` effect: Shadows/elevation1 → –
- `message-container/Agent message text.` size: 376×24 → 640×24
- `message-container/Agent message text.` maxWidth: – → 640
- `action-container` absent
- `action-container/Button` absent
- `action-container/Button/icon` absent
- `action-container/Button/icon/icon` absent
- `message-container/Code block (Advanced)` only here: size 640×160 · sizing hug/fixed · layout column align min/min · padding 16=PADDING/16 128=PADDING/128 16=PADDING/16 16=PADDING/16 · gap 0 · fill BACKGROUND/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 12=12 · instance Code block (Advanced) › Expanded=false · props Show "Copy" button=true, Expand button=true, Code text="'use strict';\n\n// Increase max listeners for event emitters\nrequire('events').EventEmitter.defaultMaxListeners = 100;\n\nconst gulp = require('gulp');\nconst util = require('./build/lib/util');\nconst path = require('path');\nconst compilation = require('./build/lib/compilation');\n\n// Fast compile for development time\ngulp.task('clean-client', util.rimraf('out'));\ngulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));\ngulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));\n\n// Full compile, including nls and inline sources in sourcemaps, for build\ngulp.task('clean-client-build', util.rimraf('out-build'));\ngulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true));\ngulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true));\n\n// Default\ngulp.task('default', ['compile']);\n\n// All\ngulp.task('clean', ['clean-client', 'clean-extensions']);\ngulp.task('compile', ['monaco-typecheck', 'compile-client', 'compile-extensions']);\ngulp.task('watch', [/* 'monaco-typecheck-watch', */ 'watch-client', 'watch-extensions']);\n\n// All Build\ngulp.task('clean-build', ['clean-client-build', 'clean-extensions-build']);\ngulp.task('compile-build', ['compile-client-build', 'compile-extensions-build']);\ngulp.task('watch-build', ['watch-client-build', 'watch-extensions-build']);\n\nvar ALL_EDITOR_TASKS = [\n\t// Always defined tasks\n\t'clean-client',\n\t'compile-client',\n\t'watch-client',\n\t'clean-client-build',\n\t'compile-client-build',\n\t'watch-client-build',\n\n\t// Editor tasks (defined in gulpfile.editor)\n\t'clean-optimized-editor',\n\t'optimize-editor',\n\t'clean-minified-editor',\n\t'minify-editor',\n\t'clean-editor-distro',\n\t'editor-distro',\n\t'analyze-editor-distro',\n\n\t// hygiene tasks\n\t'tslint',\n\t'hygiene',\n];\n\nvar runningEditorTasks = process.argv.length > 2 && process.argv.slice(2).every(function (arg) { return (ALL_EDITOR_TASKS.indexOf(arg) !== -1); });\n\nprocess.on('unhandledRejection', (reason, p) => {\n\tconsole.log('Unhandled Rejection at: Promise', p, 'reason:', reason);\n\tprocess.exit(1);\n});\n\nif (runningEditorTasks) {\n\trequire(`./build/gulpfile.editor`);\n\trequire(`./build/gulpfile.hygiene`);\n} else {\n\t// Load all the gulpfiles only if running tasks other than the editor tasks\n\tconst build = path.join(__dirname, 'build');\n\trequire('glob').sync('gulpfile.*.js', { cwd: build })\n\t\t.forEach(f => require(`./build/${f}`));\n}\n"

### State=default, Type=tool call

- `(root)` size: 400×63 → 274×163
- `(root)` minWidth: 400 → –
- `(root)` maxWidth: 640 → 700
- `message-container` size: 400×40 → 274×140
- `message-container` sizing: fill/hug → hug/hug
- `message-container` layout: row align min/center → column align center/min
- `message-container` padding: 8=PADDING/8 12=PADDING/12 8=PADDING/8 12=PADDING/12 → 8=PADDING/8 12=PADDING/12 0=PADDING/none 12=PADDING/12
- `message-container` gap: 0 → 8=PADDING/8
- `message-container` effect: Shadows/elevation1 → –
- `message-container/Agent message text.` size: 376×24 → 250×24
- `message-container/Agent message text.` maxWidth: – → 640
- `action-container` absent
- `action-container/Button` absent
- `action-container/Button/icon` absent
- `action-container/Button/icon/icon` absent
- `message-container/wrapper` only here: size 250×100 · sizing hug/hug · layout column align min/min · padding 8=PADDING/8 0 8=PADDING/8 0 · gap 0
- `message-container/wrapper/Chat Tool Call` only here: size 250×84 · sizing hug/hug · layout column align center/min · padding 0 0 0 0 · gap 12=PADDING/12 · instance Chat Tool Call › State=V1 Expanded

### State=hover, Type=text

- `message-container` size: 400×40 → 175×40
- `message-container` sizing: fill/hug → hug/hug
- `message-container` radius: 9999/9999/4/9999=full → 9999/900/900/9999=full
- `message-container` effect: Shadows/elevation1 → –
- `message-container` fill: – → BACKGROUND/Primary + INPUT/Hover (Dark)@0.04
- `message-container/Agent message text.` size: 376×24 → 151×24
- `message-container/Agent message text.` maxWidth: – → 400
- `action-container` absent
- `action-container/Button` absent
- `action-container/Button/icon` absent
- `action-container/Button/icon/icon` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 10 | `var(--radius-10)` | ok |
| 12 | `var(--radius-md)` | ok |
| 4 | `var(--radius-xs)` | ok |
| BACKGROUND/Attention (Light) | `var(--color-bg-attention-light)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| BUTTON/Secondary Filled | `var(--color-button-secondary-filled)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/Body | `var(--font-body)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/16 | `var(--icon-16)` | ok |
| ICONS/32 | `var(--icon-32)` | ok |
| INPUT/Hover (Dark) | `var(--color-input-hover-dark)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| PADDING/10 | `var(--space-10)` | ok |
| PADDING/12 | `var(--space-12)` | ok |
| PADDING/128 | `var(--space-128)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation1
- text: SYSTEM/Body/md/regular

## Values without variable

- `wrapper/Icons / Warning--filled` fixed width 16 (1/5 variants)
- `message-container/Code block (Advanced)` fixed height 160 (1/5 variants)

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- ChatMessageMetadata (6270:1160) — connected: app/components/Chat/ChatMessageMetadata.figma.ts
- Code block (Advanced) (4125:6917) — connected: app/components/CodeBlock/CodeBlockAdvanced.figma.ts
- Chat Tool Call (6231:10080) — connected: app/components/Chat/ChatToolCall.figma.ts

## Icons

- Icons / Warning--filled (179:17240) → `warning-filled.svg` present
