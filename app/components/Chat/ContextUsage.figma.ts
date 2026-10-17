// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-11604
// source=app/components/Chat/ContextUsage.tsx
// component=ContextUsage
import figma from 'figma'
const instance = figma.selectedInstance

// hover is a css state; the tooltip opens on hover and focus
const percent = instance.getEnum('Property 1', { '0%': 0, '15%': 15, '50%': 50, '75%': 75, '100%': 100 })

export default {
  example: figma.tsx`<ContextUsage percent={${percent ?? 0}} used="40k" limit="128k" input={{ tokens: '32k', cost: '$0.04' }} output={{ tokens: '8k', cost: '$0.08' }} totalCost="$0.12" />`,
  imports: ['import { ContextUsage } from "@/app/components/Chat"'],
  id: 'context-usage',
  metadata: { nestable: true },
}
