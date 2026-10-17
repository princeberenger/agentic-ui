// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6246-10120
// source=app/components/Chat/AgentMessage.tsx
// component=AgentMessage
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text label')
// hover is a css state in code
const error = instance.getEnum('State', { default: false, hover: false, error: true })
const type = instance.getEnum('Type', { text: 'text', code: 'code', 'tool call': 'tool call' })
const action = type === 'text' && !error && instance.getBoolean('Action button')
const meta = instance.getBoolean('Metadata') ? instance.findInstance('ChatMessageMetadata') : undefined
const metaCode = meta && meta.type === 'INSTANCE' ? meta.executeTemplate().example : undefined
const code = type === 'code' ? instance.findInstance('Code block (Advanced)') : undefined
const codeCode = code && code.type === 'INSTANCE' ? code.executeTemplate().example : undefined

export default {
  example: codeCode
    ? figma.tsx`<AgentMessage text="${text}"${metaCode ? figma.tsx` metadata={${metaCode}}` : ''}>
  ${codeCode}
</AgentMessage>`
    : figma.tsx`<AgentMessage text="${text}"${error ? ' error' : ''}${action ? ' action={<Button variant="secondary-filled" icon={<Icon name="arrow-up-right" />} iconPosition="right">View copy</Button>}' : ''}${metaCode ? figma.tsx` metadata={${metaCode}}` : ''} />`,
  imports: ['import { AgentMessage } from "@/app/components/Chat"'],
  id: 'agent-message',
  metadata: { nestable: true },
}
