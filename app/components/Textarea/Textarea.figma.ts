// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2003-3900
// source=app/components/Textarea/Textarea.tsx
// component=Textarea
import figma from 'figma'
const instance = figma.selectedInstance

// selected is :focus in code, filled only means the field has text
const state = instance.getEnum('State', {
  default: 'default',
  selected: 'default',
  filled: 'filled',
  readonly: 'readonly',
  error: 'error',
  disabled: 'disabled',
})
const label = instance.getBoolean('Show Label') ? instance.getString('Label') : ''
const placeholder = instance.getString('Placeholder')
const text = state === 'default' ? '' : instance.getString('Text')
const helperNode = instance.getBoolean('Show helper text') ? instance.findConnectedInstance('helper-text') : null
const helper = helperNode && helperNode.type === 'INSTANCE' ? helperNode.getString('Label') : ''

export default {
  example: figma.tsx`<Textarea${label ? ` label="${label}"` : ''} placeholder="${placeholder}"${text ? ` defaultValue="${text}"` : ''}${state === 'error' ? ' status="error"' : ''}${state === 'readonly' ? ' readOnly' : ''}${state === 'disabled' ? ' disabled' : ''}${helper ? ` helperText="${helper}"` : ''} />`,
  imports: ['import { Textarea } from "@/app/components/Textarea"'],
  id: 'text-area',
  metadata: { nestable: true },
}
