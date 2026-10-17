// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4133-11200
// source=app/components/Chat/ChatComposer.tsx
// component=ChatComposer
import figma from 'figma'
const instance = figma.selectedInstance

// hover, active (focus), filled and drag-drop are runtime states in code
const state = instance.getEnum('State', {
  default: 'default', hover: 'default', active: 'default', filled: 'default', 'drag-drop': 'default',
  disabled: 'disabled', error: 'error', warning: 'warning', attachment: 'attachment',
  'attachment (collapsed)': 'collapsed', condensed: 'condensed',
})
const model = instance.getBoolean('Show model')
const upload = instance.getBoolean('Show upload')
const mic = instance.getBoolean('Show microphone')
const scroll = state === 'default' && instance.getBoolean('Show ScrollButton')
const attrs = [
  model ? ' model="GPT 5.6" onModelClick={openModels}' : '',
  upload ? ' onAttach={attach}' : '',
  mic ? ' onMicrophone={record}' : '',
  scroll ? ' onScrollToBottom={scrollToBottom}' : '',
  state === 'disabled' ? ' disabled' : '',
  state === 'error' ? ' status="error" statusMessage="Couldn’t send a message. Please try again."' : '',
  state === 'warning' ? ' status="warning" statusMessage="Context window is 90% full."' : '',
  state === 'attachment' || state === 'collapsed' ? ' attachments={files}' : '',
  state === 'collapsed' ? ' attachmentsCollapsed' : '',
  state === 'condensed' ? ' condensed' : '',
].join('')

export default {
  example: figma.tsx`<ChatComposer${attrs} onFiles={addFiles} onSubmit={send} />`,
  imports: ['import { ChatComposer } from "@/app/components/Chat"'],
  id: 'chat-composer',
  metadata: { nestable: true },
}
