// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6231-10080
// source=app/components/Chat/ToolCall.tsx
// component=ChatToolCall
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { 'V1 Expanded': 'v1', 'V1 Collapsed': 'v1-collapsed', 'V2 Expanded': 'v2', 'V2 Collapsed': 'v2-collapsed' })
const v2 = state === 'v2' || state === 'v2-collapsed'
const collapsed = state === 'v1-collapsed' || state === 'v2-collapsed'

export default {
  example: figma.tsx`<ChatToolCall label="${v2 ? '3 Actions' : '3 Tool calls'}" summary="${v2 ? '3 actions' : '3 tools'}"${collapsed ? ' defaultExpanded={false}' : ''} calls={[
  { status: 'complete', name: 'bash', detail: 'git diff --stat', time: '340ms' },
  { status: 'error', name: 'read', detail: 'src/utils/formatDate.ts', time: '45ms' },
  { status: 'working', name: 'edit', detail: 'src/utils/formatDate.ts', time: '3120ms' },
]} />`,
  imports: ['import { ChatToolCall } from "@/app/components/Chat"'],
  id: 'chat-tool-call',
  metadata: { nestable: true },
}
