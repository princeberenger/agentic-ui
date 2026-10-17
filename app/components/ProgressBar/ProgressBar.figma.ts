// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4115-7289
// source=app/components/ProgressBar/ProgressBar.tsx
// component=ProgressBar
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getEnum('Progress', { '0': 0, '10': 10, '50': 50, '70': 70, '90': 90, '100': 100 })
const showCounter = instance.getBoolean('Show counter')

export default {
  example: figma.tsx`<ProgressBar value={${value ?? 0}}${showCounter ? '' : ' showCounter={false}'} aria-label="Progress" />`,
  imports: ['import { ProgressBar } from "@/app/components/ProgressBar"'],
  id: 'progress-bar',
  metadata: { nestable: true },
}
