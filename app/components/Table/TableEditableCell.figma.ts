// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1444
// source=app/components/Table/TableEditableCell.tsx
// component=TableEditableCell
import figma from 'figma'
const instance = figma.selectedInstance

// hover and focus (editing) are runtime states in code
const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const showIcon = instance.getBoolean('Show icon')

export default {
  example: figma.tsx`<TableEditableCell value={value} onCommit={setValue} inputLabel="Amount"${showIcon ? '' : ' showIcon={false}'}${state} />`,
  imports: ['import { TableEditableCell } from "@/app/components/Table"'],
  id: 'table-editable-cell',
  metadata: { nestable: true },
}
