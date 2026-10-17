// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=146-1787
// source=app/components/Logo/Logo.tsx
// component=Logo
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', { Symbol: 'symbol', Logo: 'logo' }) ?? 'symbol'

export default {
  example: figma.tsx`<Logo${variant === 'logo' ? ' variant="logo"' : ''} />`,
  imports: ['import { Logo } from "@/app/components/Logo"'],
  id: 'agentic-ui-logo',
  metadata: { nestable: true },
}
