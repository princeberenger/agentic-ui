// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-7606
// source=app/components/CodeBlock/CodeInline.tsx
// component=CodeInline
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// hover, active and focus are runtime states of the clickable snippet
const state = instance.getEnum('State', { default: 'default', hover: 'button', active: 'button', focus: 'button', disabled: 'disabled' })

export default {
  example: figma.tsx`<CodeInline${state === 'button' ? ' onClick={onSelect}' : ''}${state === 'disabled' ? ' disabled' : ''}>${label}</CodeInline>`,
  imports: ['import { CodeInline } from "@/app/components/CodeBlock"'],
  id: 'code-inline',
  metadata: { nestable: true },
}
