// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6279-11285
// source=app/components/Chat/ChatReadReceipt.tsx
// component=ChatReadReceipt
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('Type', { Sending: 'sending', Sent: 'sent', Delivered: 'delivered', Read: 'read', Failed: 'failed' })

export default {
  example: figma.tsx`<ChatReadReceipt status="${status}" />`,
  imports: ['import { ChatReadReceipt } from "@/app/components/Chat"'],
  id: 'chat-read-receipt',
  metadata: { nestable: true },
}
