// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17618
// source=app/components/Chat/UserMessage.tsx
// component=UserMessage
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text label')
// hover is a css state in code
const variant = instance.getEnum('Style', { 'Style 1': 'filled', 'Style 2': 'outlined' })
const mention = instance.getEnum('Type', { '@mention': true, text: false })
const badge = mention ? instance.findInstance('Badge') : undefined
const mentionLabel = badge && badge.type === 'INSTANCE' ? badge.getString('Label') : ''
const meta = instance.getBoolean('Show metadata') ? instance.findInstance('ChatMessageMetadata') : undefined
const metaCode = meta && meta.type === 'INSTANCE' ? meta.executeTemplate().example : undefined

export default {
  example: figma.tsx`<UserMessage${variant === 'filled' ? ' variant="filled"' : ''}${mentionLabel ? ` mention="${mentionLabel}"` : ''}${metaCode ? figma.tsx` metadata={${metaCode}}` : ''}>${text}</UserMessage>`,
  imports: ['import { UserMessage } from "@/app/components/Chat"'],
  id: 'user-message',
  metadata: { nestable: true },
}
