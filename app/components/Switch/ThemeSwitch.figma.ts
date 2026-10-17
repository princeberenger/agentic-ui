// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6114-855
// source=app/components/Switch/ThemeSwitch.tsx
// component=ThemeSwitch
import figma from 'figma'
const instance = figma.selectedInstance

const mode = instance.getEnum('Mode', { Light: 'light', Dark: 'dark' }) ?? 'light'

export default {
  example: figma.tsx`<ThemeSwitch${mode === 'dark' ? ' defaultMode="dark"' : ''} />`,
  imports: ['import { ThemeSwitch } from "@/app/components/Switch"'],
  id: 'theme-switch',
  metadata: { nestable: true },
}
