// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-7708
// source=app/components/ProgressBars/ProgressBars.tsx
// component=ProgressBars
import figma from 'figma'
const instance = figma.selectedInstance

// filled segments drawn in each Figma variant (labels and counts differ, see .ai/figma-debt.md)
const filled = instance.getEnum('Filled', { '10%': 2, '20%': 4, '30%': 6, '40%': 8, '45%': 10, '50%': 12, '55%': 14, '60%': 16, '70%': 18, '80%': 20, '90%': 22, '100%': 24 })

export default {
  example: figma.tsx`<ProgressBars total={24} filled={${filled ?? 0}} aria-label="Progress" />`,
  imports: ['import { ProgressBars } from "@/app/components/ProgressBars"'],
  id: 'progress-bars-24',
  metadata: { nestable: true },
}
