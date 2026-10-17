// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-12068
// source=app/components/CodeBlock/CopyButton.tsx
// component=CopyButton
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { lg: 'lg', sm: 'sm' })
// hover, focus and pressed (Copied tooltip) are runtime states
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, pressed: false, disabled: true })

export default {
  example: figma.tsx`<CopyButton text={code}${size === 'sm' ? ' size="sm"' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { CopyButton } from "@/app/components/CodeBlock"'],
  id: 'copy-button',
  metadata: { nestable: true },
}
