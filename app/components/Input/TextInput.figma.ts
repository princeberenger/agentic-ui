// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738
// source=app/components/Input/TextInput.tsx
// component=TextInput
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { md: 'md', sm: 'sm' })
// hover and focus are css states in code
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'default',
  focus: 'default',
  disabled: 'disabled',
  error: 'error',
  success: 'success',
  warning: 'warning',
})
const filled = instance.getEnum('Text filled', { true: true, false: false })
const label = instance.getBoolean('Show label') ? instance.getString('Label text') : ''
const placeholder = instance.getString('Placeholder text')
const value = filled ? instance.getString('Input text') : ''
const helperNode = instance.getBoolean('Show helper') ? instance.findConnectedInstance('helper-text') : null
const helper = helperNode && helperNode.type === 'INSTANCE' ? helperNode.getString('Label') : ''
const status = state === 'error' || state === 'success' || state === 'warning' ? state : ''

export default {
  example: label || helper
    ? figma.tsx`<TextInput${label ? ` label="${label}"` : ''}${size === 'sm' ? ' size="sm"' : ''}${status ? ` status="${status}"` : ''}${state === 'disabled' ? ' disabled' : ''} placeholder="${placeholder}"${value ? ` defaultValue="${value}"` : ''}${helper ? ` helperText="${helper}"` : ''} />`
    : figma.tsx`<Input${size === 'sm' ? ' size="sm"' : ''}${status ? ` status="${status}"` : ''}${state === 'disabled' ? ' disabled' : ''} placeholder="${placeholder}"${value ? ` defaultValue="${value}"` : ''} />`,
  imports: ['import { Input, TextInput } from "@/app/components/Input"'],
  id: 'text-input',
  metadata: { nestable: true },
}
