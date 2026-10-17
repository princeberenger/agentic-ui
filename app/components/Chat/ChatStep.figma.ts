// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6295-15285
// source=app/components/Chat/ChatSteps.tsx
// component=ChatStep
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { Step: 'step', 'Step + Message': 'message', 'Step + Sub-steps': 'substeps' })
const message = type === 'message' && instance.getBoolean('Show agent message') ? instance.getString('Agent message label') : ''

export default {
  example:
    type === 'substeps'
      ? figma.tsx`<ChatStep label="State label" subSteps={[{ label: 'State label' }, { label: 'State label' }, { label: 'State label' }]} />`
      : figma.tsx`<ChatStep label="State label"${message ? ` message="${message}"` : ''} />`,
  imports: ['import { ChatStep } from "@/app/components/Chat"'],
  id: 'multistepper',
  metadata: { nestable: true },
}
