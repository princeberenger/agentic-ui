// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=789-320
// source=app/components/Table/TableHeaderCell.tsx
// component=TableHeaderCell
import figma from 'figma'
const instance = figma.selectedInstance

// hover and focus are runtime states in code
const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const align = instance.getEnum('Alignment', { Left: '', Center: ' align="center"', Right: ' align="right"' }) ?? ''
const text = instance.getString('Main Text')
const sortable = instance.getBoolean('Sort icon')
const checkbox = instance.getBoolean('Checkbox')

export default {
  example: figma.tsx`<TableHeaderCell${align}${sortable ? ' onSort={toggleSort} sort={sort}' : ''}${checkbox ? ' selected={allSelected} onSelectedChange={selectAll}' : ''}${state}>${text}</TableHeaderCell>`,
  imports: ['import { TableHeaderCell } from "@/app/components/Table"'],
  id: 'table-header-cell',
  metadata: { nestable: true },
}
