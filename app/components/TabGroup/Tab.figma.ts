// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4052-890
// source=app/components/TabGroup/Tab.tsx
// component=Tab
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// focus and hover are css pseudo-classes in code, only "active" maps to a prop.
// Shape is driven by the parent TabGroup style, Size has no code prop yet.
const active = instance.getEnum('State', {
  active: true,
  default: false,
  focus: false,
  hover: false,
})

const lead = instance.getBoolean('Lead icon') ? instance.getInstanceSwap('↪ Lead icon') : undefined
const tail = instance.getBoolean('Tail icon') ? instance.getInstanceSwap('↪ Tail icon') : undefined
const leadCode = lead && lead.type === 'INSTANCE' ? lead.executeTemplate().example : undefined
const tailCode = tail && tail.type === 'INSTANCE' ? tail.executeTemplate().example : undefined

export default {
  example: figma.tsx`<Tab${active ? ' active' : ''}${leadCode ? figma.tsx` leadIcon={${leadCode}}` : ''}${tailCode ? figma.tsx` tailIcon={${tailCode}}` : ''}>${label}</Tab>`,
  imports: ['import { Tab } from "@/app/components/TabGroup"'],
  id: 'tab',
  metadata: { nestable: true },
}
