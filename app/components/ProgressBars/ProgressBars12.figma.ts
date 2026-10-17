// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7139
// source=app/components/ProgressBars/ProgressBars.tsx
// component=ProgressBars
import figma from 'figma'
const instance = figma.selectedInstance

// filled segments drawn in each Figma variant (labels and counts differ, see .ai/figma-debt.md)
const filled = instance.getEnum('Filled', { '10%': 2, '20%': 4, '50%': 6, '70%': 8, '80%': 10, '100%': 12 })

export default {
  example: figma.tsx`<ProgressBars total={12} filled={${filled ?? 0}} aria-label="Progress" />`,
  imports: ['import { ProgressBars } from "@/app/components/ProgressBars"'],
  id: 'progress-bars-12',
  metadata: { nestable: true },
}
