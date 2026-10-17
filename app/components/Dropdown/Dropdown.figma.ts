// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4084-4742
// source=app/components/Dropdown/Dropdown.tsx
// component=Dropdown
import figma from 'figma'
const instance = figma.selectedInstance

// hover, active (open) and focus are runtime states in code
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'default',
  active: 'default',
  focus: 'default',
  filled: 'filled',
  disabled: 'disabled',
})
const placeholder = instance.getString('Label')
const filled = state === 'filled' ? instance.getString('Label (Filled)') : ''

export default {
  example: figma.tsx`<Dropdown
  options={[${filled ? `{ value: '${filled}', label: '${filled}' }` : ''}]}${filled ? ` defaultValue="${filled}"` : ''}${placeholder !== '- Select -' ? ` placeholder="${placeholder}"` : ''}${state === 'disabled' ? ' disabled' : ''}
  aria-label=""
/>`,
  imports: ['import { Dropdown } from "@/app/components/Dropdown"'],
  id: 'dropdown',
  metadata: { nestable: true },
}
