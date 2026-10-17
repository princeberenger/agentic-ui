// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2639
// source=app/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Type', { stroke: 'stroke', filled: 'filled' })
const selected = instance.getEnum('Selected', { true: 'true', false: 'false', indeterminate: 'indeterminate' })
const disabled = instance.getEnum('State', { default: false, disabled: true })

export default {
  example: figma.tsx`<Checkbox${variant === 'filled' ? ' variant="filled"' : ''}${selected === 'true' ? ' checked' : selected === 'indeterminate' ? ' checked="indeterminate"' : ''}${disabled ? ' disabled' : ''} aria-label="" />`,
  imports: ['import { Checkbox } from "@/app/components/Checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
