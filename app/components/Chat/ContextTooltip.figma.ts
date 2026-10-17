// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-42354
// source=app/components/Chat/ContextUsage.tsx
// component=ContextTooltip
import figma from 'figma'
const instance = figma.selectedInstance

const percent = instance.getString('Progress').replace('%', '')
const total = instance.getBoolean('Show total') ? instance.getString('Label 9') : ''

export default {
  example: figma.tsx`<ContextTooltip percent={${percent || '0'}} used="${instance.getString('Label 2')}" limit="${instance.getString('Label 3')}" input={{ tokens: '${instance.getString('Label 4')}', cost: '${instance.getString('Label 5')}' }} output={{ tokens: '${instance.getString('Label 6')}', cost: '${instance.getString('Label 7')}' }}${total ? ` totalCost="${total}"` : ''} />`,
  imports: ['import { ContextTooltip } from "@/app/components/Chat"'],
  id: 'context-tooltip',
  metadata: { nestable: true },
}
