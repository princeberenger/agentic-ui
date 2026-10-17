// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4126-5641
// source=app/components/CodeBlock/CodeBlock.tsx
// component=CodeBlock
import figma from 'figma'
const instance = figma.selectedInstance

const code = instance.getString('Code text')
const showCopy = instance.getBoolean('Show "Copy" button')
// hover and focus are runtime states
const state = instance.getEnum('State', { default: '', hover: '', focus: '', disabled: ' disabled', loading: ' loading' }) ?? ''

export default {
  example: figma.tsx`<CodeBlock code="${code}"${showCopy ? '' : ' showCopy={false}'}${state} />`,
  imports: ['import { CodeBlock } from "@/app/components/CodeBlock"'],
  id: 'code-block-simple',
  metadata: { nestable: true },
}
