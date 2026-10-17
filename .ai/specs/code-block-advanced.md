# Code block (Advanced) — 4125:6917

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4125-6917
- Extracted: 2026-10-17
- Code Connect: yes (app/components/CodeBlock/CodeBlockAdvanced.figma.ts)

## Props

- **Code text** text (default "'use strict';\n\n// Increase max listeners for event emitters\nrequire('events').EventEmitter.defaultMaxListeners = 100;\n\nconst gulp = require('gulp');\nconst util = require('./build/lib/util');\nconst path = require('path');\nconst compilation = require('./build/lib/compilation');\n\n// Fast compile for development time\ngulp.task('clean-client', util.rimraf('out'));\ngulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));\ngulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));\n\n// Full compile, including nls and inline sources in sourcemaps, for build\ngulp.task('clean-client-build', util.rimraf('out-build'));\ngulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true));\ngulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true));\n\n// Default\ngulp.task('default', ['compile']);\n\n// All\ngulp.task('clean', ['clean-client', 'clean-extensions']);\ngulp.task('compile', ['monaco-typecheck', 'compile-client', 'compile-extensions']);\ngulp.task('watch', [/* 'monaco-typecheck-watch', */ 'watch-client', 'watch-extensions']);\n\n// All Build\ngulp.task('clean-build', ['clean-client-build', 'clean-extensions-build']);\ngulp.task('compile-build', ['compile-client-build', 'compile-extensions-build']);\ngulp.task('watch-build', ['watch-client-build', 'watch-extensions-build']);\n\nvar ALL_EDITOR_TASKS = [\n\t// Always defined tasks\n\t'clean-client',\n\t'compile-client',\n\t'watch-client',\n\t'clean-client-build',\n\t'compile-client-build',\n\t'watch-client-build',\n\n\t// Editor tasks (defined in gulpfile.editor)\n\t'clean-optimized-editor',\n\t'optimize-editor',\n\t'clean-minified-editor',\n\t'minify-editor',\n\t'clean-editor-distro',\n\t'editor-distro',\n\t'analyze-editor-distro',\n\n\t// hygiene tasks\n\t'tslint',\n\t'hygiene',\n];\n\nvar runningEditorTasks = process.argv.length > 2 && process.argv.slice(2).every(function (arg) { return (ALL_EDITOR_TASKS.indexOf(arg) !== -1); });\n\nprocess.on('unhandledRejection', (reason, p) => {\n\tconsole.log('Unhandled Rejection at: Promise', p, 'reason:', reason);\n\tprocess.exit(1);\n});\n\nif (runningEditorTasks) {\n\trequire(`./build/gulpfile.editor`);\n\trequire(`./build/gulpfile.hygiene`);\n} else {\n\t// Load all the gulpfiles only if running tasks other than the editor tasks\n\tconst build = path.join(__dirname, 'build');\n\trequire('glob').sync('gulpfile.*.js', { cwd: build })\n\t\t.forEach(f => require(`./build/${f}`));\n}\n")
- **Show "Copy" button** boolean (default true)
- **Expand button** boolean (default true)
- **Expanded** variant: false | true (default false)

## Variants (2)

- Expanded=false — 640×160 (base)
- Expanded=true — 640×480

## Base tree — Expanded=false

- **Expanded=false** `component` size 640×160 · sizing fixed/fixed · layout column align min/min · padding 16=PADDING/16 128=PADDING/128 16=PADDING/16 16=PADDING/16 · gap 0 · fill BACKGROUND/Secondary · stroke 0.5=sm inside BORDER/Subtle · radius 12=12
  - **code-wrapper** `frame` size 496×128 · sizing fill/fill · layout row align center/center · padding 0 0 0 0 · gap 10
    - **'use strict'; // Increase max listeners for event emitter…** `text` size 496×128 · sizing fill/fill · text "'use strict';\n\n// Increase max listeners for event emitters\nrequire('events').EventEmitter.defaultMaxListeners = 100;\n\nconst gulp = require('gulp');\nconst util = require('./build/lib/util');\nconst path = require('path');\nconst compilation = require('./build/lib/compilation');\n\n// Fast compile for development time\ngulp.task('clean-client', util.rimraf('out'));\ngulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));\ngulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));\n\n// Full compile, including nls and inline sources in sourcemaps, for build\ngulp.task('clean-client-build', util.rimraf('out-build'));\ngulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true));\ngulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true));\n\n// Default\ngulp.task('default', ['compile']);\n\n// All\ngulp.task('clean', ['clean-client', 'clean-extensions']);\ngulp.task('compile', ['monaco-typecheck', 'compile-client', 'compile-extensions']);\ngulp.task('watch', [/* 'monaco-typecheck-watch', */ 'watch-client', 'watch-extensions']);\n\n// All Build\ngulp.task('clean-build', ['clean-client-build', 'clean-extensions-build']);\ngulp.task('compile-build', ['compile-client-build', 'compile-extensions-build']);\ngulp.task('watch-build', ['watch-client-build', 'watch-extensions-build']);\n\nvar ALL_EDITOR_TASKS = [\n\t// Always defined tasks\n\t'clean-client',\n\t'compile-client',\n\t'watch-client',\n\t'clean-client-build',\n\t'compile-client-build',\n\t'watch-client-build',\n\n\t// Editor tasks (defined in gulpfile.editor)\n\t'clean-optimized-editor',\n\t'optimize-editor',\n\t'clean-minified-editor',\n\t'minify-editor',\n\t'clean-editor-distro',\n\t'editor-distro',\n\t'analyze-editor-distro',\n\n\t// hygiene tasks\n\t'tslint',\n\t'hygiene',\n];\n\nvar runningEditorTasks = process.argv.length > 2 && process.argv.slice(2).every(function (arg) { return (ALL_EDITOR_TASKS.indexOf(arg) !== -1); });\n\nprocess.on('unhandledRejection', (reason, p) => {\n\tconsole.log('Unhandled Rejection at: Promise', p, 'reason:', reason);\n\tprocess.exit(1);\n});\n\nif (runningEditorTasks) {\n\trequire(`./build/gulpfile.editor`);\n\trequire(`./build/gulpfile.hygiene`);\n} else {\n\t// Load all the gulpfiles only if running tasks other than the editor tasks\n\tconst build = path.join(__dirname, 'build');\n\trequire('glob').sync('gulpfile.*.js', { cwd: build })\n\t\t.forEach(f => require(`./build/${f}`));\n}\n" · font SYSTEM/Code/lg · JetBrains Mono 400 16/24 ls 0 · font.vars family/code, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Primary
  - **CopyButton** `instance` size 32×32 · sizing hug/hug · layout row align center/center · padding 0 0 0 0 · gap 0 · radius 4=4 · instance CopyButton › State=default, Size=lg
    - ↳ Vector (Stroke) (override) fill CONTENT/Primary
  - **Button** `instance` size 83×24 · sizing hug/fixed · layout row align center/center · padding 8=PADDING/8 6=PADDING/6 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · radius 6=6 · instance Button › Size=sm, Style=ghost, Type=text-icon, State=default, Icon position=right · props Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Chevron--down, Label="Show more"
    - ↳ icon-arrow (override) fill CONTENT/Primary

## Differences vs base

### Expanded=true

- `(root)` size: 640×160 → 640×480
- `code-wrapper` size: 496×128 → 496×448
- `code-wrapper/'use strict'; // Increase max listeners for event emitters require('events').EventEmitter.defaultMaxListeners = 100; const gulp = require('gulp'); const util = require('./build/lib/util'); const path = require('path'); const compilation = require('./build/lib/compilation'); // Fast compile for development time gulp.task('clean-client', util.rimraf('out')); gulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false)); gulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false)); // Full compile, including nls and inline sources in sourcemaps, for build gulp.task('clean-client-build', util.rimraf('out-build')); gulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true)); gulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true)); // Default gulp.task('default', ['compile']); // All gulp.task('clean', ['clean-client', 'clean-extensions']); gulp.task('compile', ['monaco-typecheck', 'compile-client', 'compile-extensions']); gulp.task('watch', [/* 'monaco-typecheck-watch', */ 'watch-client', 'watch-extensions']); // All Build gulp.task('clean-build', ['clean-client-build', 'clean-extensions-build']); gulp.task('compile-build', ['compile-client-build', 'compile-extensions-build']); gulp.task('watch-build', ['watch-client-build', 'watch-extensions-build']); var ALL_EDITOR_TASKS = [ // Always defined tasks 'clean-client', 'compile-client', 'watch-client', 'clean-client-build', 'compile-client-build', 'watch-client-build', // Editor tasks (defined in gulpfile.editor) 'clean-optimized-editor', 'optimize-editor', 'clean-minified-editor', 'minify-editor', 'clean-editor-distro', 'editor-distro', 'analyze-editor-distro', // hygiene tasks 'tslint', 'hygiene', ]; var runningEditorTasks = process.argv.length > 2 && process.argv.slice(2).every(function (arg) { return (ALL_EDITOR_TASKS.indexOf(arg) !== -1); }); process.on('unhandledRejection', (reason, p) => { console.log('Unhandled Rejection at: Promise', p, 'reason:', reason); process.exit(1); }); if (runningEditorTasks) { require(`./build/gulpfile.editor`); require(`./build/gulpfile.hygiene`); } else { // Load all the gulpfiles only if running tasks other than the editor tasks const build = path.join(__dirname, 'build'); require('glob').sync('gulpfile.*.js', { cwd: build }) .forEach(f => require(`./build/${f}`)); }` size: 496×128 → 496×448
- `CopyButton/Button/icon/Vector (Stroke)` absent
- `Button` props: Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Chevron--down, Label="Show more" → Badge label="1", Keyboard shortcuts=true, Swap icon=Icons / Chevron--up, Label="Show less"
- `Button/icon/icon-arrow` absent


## Tokens

| Figma variable | CSS | status |
|---|---|---|
| 12 | `var(--radius-md)` | ok |
| 4 | `var(--radius-xs)` | ok |
| 6 | `var(--radius-6)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| family/code | `var(--font-code)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| PADDING/128 | `var(--space-128)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/6 | `var(--space-6)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- text: SYSTEM/Code/lg

## Values without variable

- `(root)` fixed width 640, height 160 (1/2 variants)
- `(root)` fixed width 640, height 480 (1/2 variants)

## Nested components

- CopyButton (4124:12068) — connected: app/components/CodeBlock/CopyButton.figma.ts
- Button (147:2305) — connected: app/components/Button/Button.figma.ts

## Icons

none
