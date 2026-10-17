// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4125-6917
// source=app/components/CodeBlock/CodeBlock.tsx
// component=CodeBlock
import figma from 'figma'
const instance = figma.selectedInstance

const showCopy = instance.getBoolean('Show "Copy" button')
const expandable = instance.getBoolean('Expand button')
const expanded = instance.getEnum('Expanded', { false: false, true: true })

export default {
  example: figma.tsx`<CodeBlock variant="advanced" code={source}${showCopy ? '' : ' showCopy={false}'}${expandable ? '' : ' expandable={false}'}${expanded ? ' defaultExpanded' : ''} />`,
  imports: ['import { CodeBlock } from "@/app/components/CodeBlock"'],
  id: 'code-block-advanced',
  metadata: { nestable: true },
}
