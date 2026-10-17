// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6270-1160
// source=app/components/Chat/ChatMessageMetadata.tsx
// component=ChatMessageMetadata
import figma from 'figma'
const instance = figma.selectedInstance

const receiptNode = instance.getBoolean('Show Read receipt') ? instance.findInstance('ChatMetadataRead') : undefined
const receipt =
  receiptNode && receiptNode.type === 'INSTANCE'
    ? receiptNode.getEnum('Type', { Sending: 'sending', Sent: 'sent', Delivered: 'delivered', Read: 'read', Failed: 'failed' })
    : undefined
const time = instance.getBoolean('Show Time')
const error = instance.getBoolean('Show Error')
const actions = instance.getBoolean('Show actions')
const copy = actions && instance.getBoolean('Show Duplicate')
const retry = actions && instance.getBoolean('Show Reset')
const up = actions && instance.getBoolean('Show Thumbs up')
const down = actions && instance.getBoolean('Show Thumbs down')

export default {
  example: figma.tsx`<ChatMessageMetadata${receipt ? ` receipt="${receipt}"` : ''}${time ? ' time="9:15 AM"' : ''}${error ? ' error="Not sent"' : ''}${copy ? ' onCopy={copy}' : ''}${retry ? ' onRetry={retry}' : ''}${up ? ' onThumbsUp={rateUp}' : ''}${down ? ' onThumbsDown={rateDown}' : ''} />`,
  imports: ['import { ChatMessageMetadata } from "@/app/components/Chat"'],
  id: 'chat-message-metadata',
  metadata: { nestable: true },
}
