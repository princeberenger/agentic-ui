// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7377
// source=app/components/ProgressBars/ProgressBars.tsx
// component=ProgressBars
import figma from 'figma'
const instance = figma.selectedInstance

// filled segments drawn in each Figma variant (labels and counts differ, see .ai/figma-debt.md)
const filled = instance.getEnum('Filled', { '10%': 2, '20%': 4, '30%': 6, '40%': 8, '50%': 10, '60%': 12, '70%': 14, '80%': 16, '90%': 18, '100%': 20 })

export default {
  example: figma.tsx`<ProgressBars total={20} filled={${filled ?? 0}} aria-label="Progress" />`,
  imports: ['import { ProgressBars } from "@/app/components/ProgressBars"'],
  id: 'progress-bars-20',
  metadata: { nestable: true },
}
