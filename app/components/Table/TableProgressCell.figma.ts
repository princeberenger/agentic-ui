// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4096-6790
// source=app/components/Table/TableCell.tsx
// component=TableProgressCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const label = instance.getString('Label')
const bars = instance.findInstance('Progress - Bars (10)')
// segments drawn in Progress - Bars (10) per variant
const filled =
  bars && bars.type === 'INSTANCE'
    ? bars.getEnum('Filled', { '10%': 2, '20%': 4, '50%': 6, '70%': 8, '100%': 10 }) ?? 2
    : 2

export default {
  example: figma.tsx`<TableProgressCell filled={${filled}} label="${label}"${state} />`,
  imports: ['import { TableProgressCell } from "@/app/components/Table"'],
  id: 'table-progress-cell',
  metadata: { nestable: true },
}
