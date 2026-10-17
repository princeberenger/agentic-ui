// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6008-14270
// source=app/components/Navigation/NavUserSettings.tsx
// component=NavUserSettings
import figma from 'figma'
const instance = figma.selectedInstance

const greeting = instance.findText('Hi, Alex')
const name = greeting && greeting.type === 'TEXT' ? greeting.textContent.replace(/^Hi,\s*/, '') : 'Alex'

export default {
  example: figma.tsx`<NavUserSettings userName="${name}" onMenu={openUserMenu} />`,
  imports: ['import { NavUserSettings } from "@/app/components/Navigation"'],
  id: 'nav-user-settings',
  metadata: { nestable: true },
}
