// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2977
// source=app/components/Radio/Radio.tsx
// component=Radio
import figma from 'figma'
const instance = figma.selectedInstance

const selected = instance.getEnum('Selected', { true: true, false: false })
const disabled = instance.getEnum('State', { default: false, disabled: true })

export default {
  example: figma.tsx`<Radio name="" value=""${selected ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} aria-label="" />`,
  imports: ['import { Radio } from "@/app/components/Radio"'],
  id: 'radio',
  metadata: { nestable: true },
}
