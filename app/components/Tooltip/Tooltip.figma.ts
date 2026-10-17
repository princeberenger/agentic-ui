// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2001-2681
// source=app/components/Tooltip/Tooltip.tsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Tooltip text')
const position = instance.getEnum('Position', { Top: 'top', Bottom: 'bottom', Left: 'left', Right: 'right' })
const align = instance.getEnum('Caret alignment', { Start: 'start', Center: 'center', End: 'end' })

export default {
  example: figma.tsx`<Tooltip content="${text}"${position !== 'top' ? ` position="${position}"` : ''}${align !== 'center' ? ` align="${align}"` : ''}>
  {/* trigger */}
</Tooltip>`,
  imports: ['import { Tooltip } from "@/app/components/Tooltip"'],
  id: 'tooltip',
  metadata: { nestable: false },
}
