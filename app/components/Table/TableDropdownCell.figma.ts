// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1501
// source=app/components/Table/TableDropdownCell.tsx
// component=TableDropdownCell
import figma from 'figma'
const instance = figma.selectedInstance

// selected (pressed) and focus (open) are runtime states in code
const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const text = instance.getString('Main Text')

export default {
  example: figma.tsx`<TableDropdownCell options={[{ value: '${text}', label: '${text}' }]} value="${text}" onChange={setValue} triggerLabel="Value"${state} />`,
  imports: ['import { TableDropdownCell } from "@/app/components/Table"'],
  id: 'table-dropdown-cell',
  metadata: { nestable: true },
}
