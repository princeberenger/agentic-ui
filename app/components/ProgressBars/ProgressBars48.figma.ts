// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-7514
// source=app/components/ProgressBars/ProgressBars.tsx
// component=ProgressBars
import figma from 'figma'
const instance = figma.selectedInstance

// filled segments drawn in each Figma variant (labels and counts differ, see .ai/figma-debt.md)
const filled = instance.getEnum('Filled', { '0': 0, '50%': 26, '100%': 48 })

export default {
  example: figma.tsx`<ProgressBars total={48} filled={${filled ?? 0}} aria-label="Progress" />`,
  imports: ['import { ProgressBars } from "@/app/components/ProgressBars"'],
  id: 'progress-bars-48',
  metadata: { nestable: true },
}
