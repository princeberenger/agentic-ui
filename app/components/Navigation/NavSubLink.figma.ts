// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=226-1312
// source=app/components/Navigation/NavSubLink.tsx
// component=NavSubLink
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Sub-link Label')
// hover is a css pseudo-class in code, only "active" maps to a prop
const active = instance.getEnum('State', {
  active: true,
  default: false,
  hover: false,
})

export default {
  example: figma.tsx`<NavSubLink label="${label}"${active ? ' active' : ''} />`,
  imports: ['import { NavSubLink } from "@/app/components/Navigation"'],
  id: 'nav-sub-link',
  metadata: { nestable: true },
}
