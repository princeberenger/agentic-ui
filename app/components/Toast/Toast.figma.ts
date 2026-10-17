// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4008-623
// source=app/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { info: 'info', success: 'success', warning: 'warning', destructive: 'destructive' })
const title = instance.getString('Title')
const text = instance.getString('Toast text')
const hasClose = instance.getBoolean('Close button')
const hasActions = type !== 'destructive' && instance.getBoolean('Action buttons')
const action1 = hasActions && instance.getBoolean('Action button 1')
const action2 = hasActions && instance.getBoolean('Action button 2')
const hasInput = type === 'destructive' && instance.getBoolean('Show text input')

const actions = type === 'destructive'
  ? figma.tsx` actions={<Button variant="destructive">Delete</Button>}`
  : hasActions
    ? figma.tsx` actions={<>${action2 ? '<Button variant="secondary">Action 2</Button>' : ''}${action1 ? '<Button>Action 1</Button>' : ''}</>}`
    : ''

export default {
  example: hasInput
    ? figma.tsx`<Toast type="${type}" title="${title}" description="${text}"${actions}${hasClose ? ' onClose={() => {}}' : ''}>
  <Input size="sm" />
</Toast>`
    : figma.tsx`<Toast${type !== 'info' ? ` type="${type}"` : ''} title="${title}" description="${text}"${actions}${hasClose ? ' onClose={() => {}}' : ''} />`,
  imports: [
    'import { Toast } from "@/app/components/Toast"',
    'import { Button } from "@/app/components/Button"',
    'import { Input } from "@/app/components/Input"',
  ],
  id: 'toast',
  metadata: { nestable: false },
}
