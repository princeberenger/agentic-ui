// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6293-6710
// source=app/components/Chat/ChatStatusDot.tsx
// component=ChatStatusDot
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('Type', { Gray: 'gray', Black: 'black', Yellow: 'yellow', Red: 'red', Green: 'green' })
const showLine = instance.getBoolean('Show connection line')

export default {
  example: figma.tsx`<ChatStatusDot status="${status}"${showLine ? '' : ' showLine={false}'} />`,
  imports: ['import { ChatStatusDot } from "@/app/components/Chat"'],
  id: 'chat-status-dot',
  metadata: { nestable: true },
}
