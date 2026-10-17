// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=484-13150
// source=app/components/Navigation/NavLogo.tsx
// component=NavLogo
import figma from 'figma'
const instance = figma.selectedInstance

const collapsed = instance.getEnum('State', { open: false, collapsed: true })
const showLogo = instance.getBoolean('Logo symbol')
const sidebarIcon = instance.getBoolean('Sidebar icon')

export default {
  example: figma.tsx`<NavLogo${collapsed ? ' collapsed' : ''}${showLogo ? '' : ' showLogo={false}'}${sidebarIcon ? ' onToggle={toggle}' : ''} />`,
  imports: ['import { NavLogo } from "@/app/components/Navigation"'],
  id: 'nav-logo',
  metadata: { nestable: true },
}
