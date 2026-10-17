// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6255-14244
// source=app/components/Chat/ChatScrollButton.tsx
// component=ChatScrollButton
import figma from 'figma'
const instance = figma.selectedInstance

// Mode=Dark is not implemented in css yet (see .ai/figma-debt.md)
const withText = instance.getEnum('Type', { Icon: false, 'Icon + Text': true })
const background = instance.getEnum('Background', { 'On primary': 'primary', 'On secondary': 'secondary' })

export default {
  example: figma.tsx`<ChatScrollButton${withText ? ' label="New messages"' : ''}${background === 'secondary' ? ' background="secondary"' : ''} onClick={scrollToBottom} />`,
  imports: ['import { ChatScrollButton } from "@/app/components/Chat"'],
  id: 'chat-scroll-button',
  metadata: { nestable: true },
}
