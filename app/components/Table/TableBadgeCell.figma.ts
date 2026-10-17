// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1614
// source=app/components/Table/TableCell.tsx
// component=TableBadgeCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const align = instance.getEnum('Alignment', { Left: '', Center: ' align="center"', Right: ' align="right"' }) ?? ''
const badge = instance.findInstance('Badge')
const badgeCode = badge && badge.type === 'INSTANCE' ? badge.executeTemplate().example : undefined

export default {
  example: figma.tsx`<TableBadgeCell badge={${badgeCode}}${align}${state} />`,
  imports: ['import { TableBadgeCell } from "@/app/components/Table"'],
  id: 'table-badge-cell',
  metadata: { nestable: true },
}
