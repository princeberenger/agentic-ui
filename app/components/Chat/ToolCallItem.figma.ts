// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6282-12965
// source=app/components/Chat/ToolCall.tsx
// component=ToolCallItem
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('State', { Complete: 'complete', Working: 'working', Error: 'error' })
const name = instance.getString('Label primary item')
const detail = instance.getBoolean('Show secondary item') ? instance.getString('Label secondary item') : ''
const time = instance.getBoolean('Show time') ? instance.getString('Label third item') : ''

export default {
  example: figma.tsx`<ToolCallItem status="${status}" name="${name}"${detail ? ` detail="${detail}"` : ''}${time ? ` time="${time}"` : ''} />`,
  imports: ['import { ToolCallItem } from "@/app/components/Chat"'],
  id: 'toolcall-base',
  metadata: { nestable: true },
}
