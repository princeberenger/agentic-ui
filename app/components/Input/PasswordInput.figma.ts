// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-736
// source=app/components/Input/PasswordInput.tsx
// component=PasswordInput
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { md: 'md', sm: 'sm' })
// hover and focus are css states; error and success come from the rules in code
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'default',
  focus: 'default',
  disabled: 'disabled',
  error: 'default',
  success: 'default',
  'error-2': 'error-2',
})
const label = instance.getBoolean('Show label') ? instance.getString('Label text') : ''
const placeholder = instance.getString('Placeholder text')
const helperNode = state === 'error-2' || state === 'disabled' ? instance.findConnectedInstance('helper-text') : null
const helper = helperNode && helperNode.type === 'INSTANCE' ? helperNode.getString('Label') : ''
const rules = instance.getBoolean('Show validation') && !helper

export default {
  example: figma.tsx`<PasswordInput${label ? ` label="${label}"` : ''}${size === 'sm' ? ' size="sm"' : ''}${state === 'disabled' ? ' disabled' : ''} placeholder="${placeholder}"${rules ? ' rules={PASSWORD_RULES}' : ''}${state === 'error-2' ? ' status="error"' : ''}${helper ? ` helperText="${helper}"` : ''} />`,
  imports: ['import { PasswordInput, PASSWORD_RULES } from "@/app/components/Input"'],
  id: 'password-input',
  metadata: { nestable: true },
}
