// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=812-4430
// source=app/components/Radio/Radio.tsx
// component=Radio
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const description = instance.getBoolean('Show description') ? instance.getString('Description') : ''
const selected = instance.getEnum('Selected', { true: true, false: false })
const disabled = instance.getEnum('State', { default: false, disabled: true })

export default {
  example: figma.tsx`<Radio name="" value="" label="${label}"${description ? ` description="${description}"` : ''}${selected ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Radio } from "@/app/components/Radio"'],
  id: 'radio-with-label',
  metadata: { nestable: true },
}
