// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=816-3579
// source=app/components/Switch/Switch.tsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getBoolean('Show Label') ? instance.getString('Label') : ''
const description = instance.getBoolean('Show Description') ? instance.getString('Description') : ''
const selected = instance.getEnum('Selected', { true: true, false: false })
const disabled = instance.getEnum('State', { default: false, disabled: true })
const position = instance.getEnum('Position', { left: 'left', right: 'right' })

export default {
  example: figma.tsx`<Switch${label ? ` label="${label}"` : ''}${description ? ` description="${description}"` : ''}${position === 'right' ? ' switchPosition="right"' : ''}${selected ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Switch } from "@/app/components/Switch"'],
  id: 'switch-with-label',
  metadata: { nestable: true },
}
