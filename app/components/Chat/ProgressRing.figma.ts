// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-11583
// source=app/components/Chat/ContextUsage.tsx
// component=ProgressRing
import figma from 'figma'
const instance = figma.selectedInstance

// 15% draws a quarter in Figma (see .ai/figma-debt.md)
const value = instance.getEnum('Property 1', { '0%': 0, '15%': 15, '50%': 50, '75%': 75, '100%': 100 })

export default {
  example: figma.tsx`<ProgressRing value={${value ?? 0}} />`,
  imports: ['import { ProgressRing } from "@/app/components/Chat"'],
  id: 'progress-ring',
  metadata: { nestable: true },
}
