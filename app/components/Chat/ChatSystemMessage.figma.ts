// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6227-9774
// source=app/components/Chat/ChatSystemMessage.tsx
// component=ChatSystemMessage
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  'Date 2': 'date',
  Date: 'section',
  'Message w/ icon': 'event',
  'Message (System)': 'system',
  Checkpoint: 'checkpoint',
})
const label =
  type === 'date'
    ? instance.getString('Label')
    : type === 'section'
      ? instance.getString('Label 2')
      : type === 'system'
        ? instance.getString('Label 3')
        : type === 'checkpoint'
          ? instance.getString('Label 4')
          : 'Alex joined'

export default {
  example: figma.tsx`<ChatSystemMessage type="${type}"${type === 'checkpoint' ? ' onRestore={restore}' : ''}>${label}</ChatSystemMessage>`,
  imports: ['import { ChatSystemMessage } from "@/app/components/Chat"'],
  id: 'chat-system-message',
  metadata: { nestable: true },
}
