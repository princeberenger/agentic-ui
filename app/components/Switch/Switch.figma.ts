// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=814-110
// source=app/components/Switch/Switch.tsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const selected = instance.getEnum('Selected', { true: true, false: false })
// hover and focus are css states in code
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, disabled: true })
const size = instance.getEnum('Size', { sm: 'sm', lg: 'lg' })

export default {
  example: figma.tsx`<Switch${size === 'lg' ? ' size="lg"' : ''}${selected ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} aria-label="" />`,
  imports: ['import { Switch } from "@/app/components/Switch"'],
  id: 'switch',
  metadata: { nestable: true },
}
