# MODAL — 4092:1641

- Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1641
- Extracted: 2026-10-21
- Code Connect: yes (app/components/Modal/Modal.figma.ts)

## Props

- **Title** text (default "Modal title")
- **Subtitle** text (default "Subtitle label")
- **Text area** boolean (default true)
- **Body text** boolean (default false)
- **Text** text (default "A16z VC Startup Advisor is a cutting-edge AI assistant designed to revolutionize the venture capital and startup ecosystem. This advanced system serves as an invaluable resource for both venture capitalists and startup founders, offering deep insights and strategic guidance throughout the investment and company-building journey.  \n\nStartup Evaluation: A16z employs sophisticated algorithms to analyze startup pitches, business models, and market potential, providing data-driven assessments to inform investment decisions. \n\nStrategic Advisory: Leveraging its vast knowledge base, A16z offers tailored advice on fundraising strategies, growth tactics, and market positioning, helping startups navigate critical stages of development. \n\nMarket Intelligence: Stay ahead of the curve with A16z's real-time insights on industry trends, emerging technologies, and competitive landscapes across various high-growth sectors. ")
- **Upload area** boolean (default true)
- **Show subtitle** boolean (default true)

## Variants (1)

- MODAL — 480×580 (base)

## Base tree — MODAL

- **MODAL** `component` size 480×580 · sizing fixed/hug · layout column align min/min · padding 24=PADDING/24 24=PADDING/24 24=PADDING/24 24=PADDING/24 · gap 24=PADDING/24 · fill BACKGROUND/Primary · stroke 0.5=sm inside BORDER/Subtle · radius 16=16 · effect Shadows/elevation 4
  - **Button** `instance` size 24×24 · sizing fixed/fixed · size.vars ICONS/24 × ICONS/24 · layout row align center/center · padding 8=PADDING/8 8=PADDING/8 8=PADDING/8 8=PADDING/8 · gap 4=PADDING/4 · fill BACKGROUND/Secondary · radius 9999=full · instance Button › Size=sm, Style=secondary, Type=icon-only, State=default, Icon position=none · props Keyboard shortcuts=true, Label="Label", Badge label="1", Swap icon=Icons / Close
    - ↳ icon (override) fill CONTENT/Primary
  - **modal-header** `frame` size 432×56 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 4
    - **Modal title** `text` size 432×28 · sizing fill/hug · text "Modal title" · font SYSTEM/Heading/h2 · Google Sans Flex 400 24/28 ls 0 · font.vars family/Headings, size/X-Large, weight/Regular, line-height/Large Text, letter-spacing/normal · color CONTENT/Primary
    - **Subtitle label** `text` size 432×24 · sizing fill/hug · text "Subtitle label" · font SYSTEM/Body/md/regular · Geist 400 16/24 ls 0 · font.vars family/Body, size/Regular, weight/Regular, line-height/Regular Text, letter-spacing/normal · color CONTENT/Secondary
  - **Modal body text** `frame` size 432×342 · sizing fixed/hug · layout row align min/center · padding 0 0 0 0 · gap 0 · hidden true
    - **A16z VC Startup Advisor is a cutting-edge AI assistant de…** `text` size 432×342 · sizing fill/hug · text "A16z VC Startup Advisor is a cutting-edge AI assistant designed to revolutionize the venture capital and startup ecosystem. This advanced system serves as an invaluable resource for both venture capitalists and startup founders, offering deep insights and strategic guidance throughout the investment and company-building journey.  \n\nStartup Evaluation: A16z employs sophisticated algorithms to analyze startup pitches, business models, and market potential, providing data-driven assessments to inform investment decisions. \n\nStrategic Advisory: Leveraging its vast knowledge base, A16z offers tailored advice on fundraising strategies, growth tactics, and market positioning, helping startups navigate critical stages of development. \n\nMarket Intelligence: Stay ahead of the curve with A16z's real-time insights on industry trends, emerging technologies, and competitive landscapes across various high-growth sectors. " · font SYSTEM/Body/sm/regular · Geist 400 14/18 ls 0 · font.vars family/Body, size/Small, weight/Regular, line-height/Small Text, letter-spacing/normal · color CONTENT/Primary
  - **Text area** `instance` size 432×200 · sizing fill/fixed · layout column align min/min · padding 0 0 0 0 · gap 0=PADDING/none · instance Text area › State=filled · props Scrolfade=true, Show helper text=false, Text="A16z VC Startup Advisor is a cutting-edge AI assistant designed to revolutionize the venture capital and startup ecosystem. This advanced system serves as an invaluable resource for both venture capitalists and startup founders, offering deep insights and strategic guidance throughout the investment and company-building journey.  Startup Evaluation: A16z employs sophisticated algorithms to analyze startup pitches, business models, and market potential, providing data-driven assessments to inform investment decisions. \n\nStrategic Advisory: Leveraging its vast knowledge base, A16z offers tailored advice on fundraising strategies, growth tactics, and market positioning, helping startups navigate critical stages of development. \n\nMarket Intelligence: Stay ahead of the curve with A16z's real-time insights on industry trends, emerging technologies, and competitive landscapes across various high-growth sectors. \n\nDue Diligence Support: Streamline the investment process with A16z's assistance in comprehensive due diligence, including financial modeling and risk assessment. \n\nFounder Guidance: A16z acts as a virtual mentor, guiding entrepreneurs through common startup challenges, from product-market fit to scaling operations. Ethical Framework: Built with a strong ethical foundation, A16z ensures fair and impartial advice, promoting responsible innovation and sustainable business practices. Continuous Learning: A16z constantly updates its knowledge base, incorporating the latest VC trends, startup methodologies, and technological advancements to provide cutting-edge advice. Ecosystem Connector: Facilitate meaningful connections between investors and founders, fostering a collaborative environment for innovation and growth. A16z VC Startup Advisor is more than just an AI – it's your strategic partner in navigating the complex world of venture capital and startup development. Whether you're a seasoned investor looking to optimize your portfolio or a visionary founder seeking to build the next unicorn, A16z provides the insights, analysis, and guidance you need to succeed in today's competitive landscape.", Label="Text area label", Placeholder="Placeholder", Show Label=false
    - ↳ Text input (override) fill BACKGROUND/Primary
  - **upload** `frame` size 432×164 · sizing fill/hug · layout column align min/min · padding 0 0 0 0 · gap 16=PADDING/16
    - **Agent can access:** `text` size 432×18 · sizing fill/hug · text "Agent can access:" · font SYSTEM/Label/md/regular · Departure Mono 400 11/18 ls 0.3 upper · font.vars family/Labels, Links, size/Button, weight/Medium, line-height/Small Text, letter-spacing/spacious · color CONTENT/Secondary
    - **File upload area** `instance` size 432×130 · sizing fill/hug · layout column align center/center · padding 32=PADDING/32 24=PADDING/24 32=PADDING/32 24=PADDING/24 · gap 16=PADDING/16 · fill BACKGROUND/Secondary · stroke 1=default inside BORDER/Subtle dashed 4/4 · radius 12=12 · instance File upload area › State=default · props Upload icon=Icons / Upload, Show icon=false, Show hint 1=true, Show hint 2=false, Area label="Click to select", Show button=false, Hint label 2="PDF, JPEG or PNG less than 5MB", Hint label 1="No items have been selected. \nThe entire knowledge base will be searched."
  - **ButtonGroup** `instance` size 432×40 · sizing fill/hug · layout row align min/center · padding 0 0 0 0 · gap 10 · instance ButtonGroup › Size=lg
    - ↳ Button (override) instance Button › Size=lg, Style=secondary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Configure Agent"
    - ↳ Button (override) instance Button › Size=lg, Style=primary, Type=text, State=default, Icon position=none · props Badge label="1", Keyboard shortcuts=true, Swap icon=179:14029, Label="Start Chat"

## Tokens

| Figma variable | CSS | status |
|---|---|---|
| ?12112:34 | – | unresolved id |
| 12 | `var(--radius-md)` | ok |
| 16 | `var(--radius-default)` | ok |
| BACKGROUND/Primary | `var(--color-bg-primary)` | ok |
| BACKGROUND/Secondary | `var(--color-bg-secondary)` | ok |
| BORDER/Subtle | `var(--color-border-subtle)` | ok |
| CONTENT/Primary | `var(--color-content-primary)` | ok |
| CONTENT/Secondary | `var(--color-content-secondary)` | ok |
| default | `var(--stroke-default)` | ok |
| family/Body | `var(--font-body)` | ok |
| family/Headings | `var(--font-heading)` | ok |
| family/Labels, Links | `var(--font-label)` | ok |
| full | `var(--radius-full)` | ok |
| ICONS/24 | `var(--icon-24)` | ok |
| letter-spacing/normal | `var(--tracking-normal)` | ok |
| letter-spacing/spacious | `var(--tracking-spacious)` | ok |
| line-height/Large Text | `var(--leading-large)` | ok |
| line-height/Regular Text | `var(--leading-regular)` | ok |
| line-height/Small Text | `var(--leading-small)` | ok |
| PADDING/16 | `var(--space-16)` | ok |
| PADDING/24 | `var(--space-24)` | ok |
| PADDING/32 | `var(--space-32)` | ok |
| PADDING/4 | `var(--space-4)` | ok |
| PADDING/8 | `var(--space-8)` | ok |
| PADDING/none | `var(--space-none)` | ok |
| size/Button | `var(--text-button)` | ok |
| size/Regular | `var(--text-regular)` | ok |
| size/Small | `var(--text-small)` | ok |
| size/X-Large | `var(--text-x-large)` | ok |
| sm | `var(--stroke-sm)` | ok |
| weight/Medium | `var(--weight-medium)` | ok |
| weight/Regular | `var(--weight-regular)` | ok |

## Styles

- effect: Shadows/elevation 4
- text: SYSTEM/Body/md/regular
- text: SYSTEM/Body/sm/regular
- text: SYSTEM/Heading/h2
- text: SYSTEM/Label/md/regular

## Values without variable

- `(root)` fixed width 480
- `modal-header` gap 4
- `Modal body text` fixed width 432
- `Text area` fixed height 200
- `ButtonGroup` gap 10

## Nested components

- Button (147:2305) — connected: app/components/Button/Button.figma.ts
- Text area (2003:3900) — connected: app/components/Textarea/Textarea.figma.ts
- File upload area (4028:6848) — connected: app/components/FileUpload/FileUpload.figma.ts
- ButtonGroup (4092:2459) — connected: app/components/ButtonGroup/ButtonGroup.figma.ts

## Icons

none
