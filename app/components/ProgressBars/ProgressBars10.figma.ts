// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-6952
// source=app/components/ProgressBars/ProgressBars.tsx
// component=ProgressBars
import figma from 'figma'
const instance = figma.selectedInstance

// filled segments drawn in each Figma variant (labels and counts differ, see .ai/figma-debt.md)
const filled = instance.getEnum('Filled', { '10%': 2, '20%': 4, '50%': 6, '70%': 8, '100%': 10 })

export default {
  example: figma.tsx`<ProgressBars total={10} filled={${filled ?? 0}} aria-label="Progress" />`,
  imports: ['import { ProgressBars } from "@/app/components/ProgressBars"'],
  id: 'progress-bars-10',
  metadata: { nestable: true },
}
