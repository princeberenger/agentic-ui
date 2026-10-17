// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1556
// source=app/components/Table/TableCell.tsx
// component=TableActionCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''

export default {
  example: figma.tsx`<TableActionCell actionLabel="Edit" onAction={edit} onMore={openMenu}${state} />`,
  imports: ['import { TableActionCell } from "@/app/components/Table"'],
  id: 'table-action-cell',
  metadata: { nestable: true },
}
