// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=815-75
// source=app/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const description = instance.getBoolean('Show description') ? instance.getString('Description') : ''
const selected = instance.getEnum('Selected', { true: 'true', false: 'false', indeterminate: 'indeterminate' })
const disabled = instance.getEnum('State', { default: false, disabled: true })
const background = instance.getEnum('Style', { 'has-background': true, 'no-background': false })

export default {
  example: figma.tsx`<Checkbox label="${label}"${description ? ` description="${description}"` : ''}${background ? ' background' : ''}${selected === 'true' ? ' checked' : selected === 'indeterminate' ? ' checked="indeterminate"' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@/app/components/Checkbox"'],
  id: 'checkbox-with-label',
  metadata: { nestable: true },
}
