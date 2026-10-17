// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=789-1532
// source=app/components/Table/TableCell.tsx
// component=TableIconCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const icon = instance.getInstanceSwap('Icon')
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example: figma.tsx`<TableIconCell icon={${iconCode ?? '<Icon name="checkmark" />'}}${state} />`,
  imports: ['import { TableIconCell } from "@/app/components/Table"'],
  id: 'table-icon-cell',
  metadata: { nestable: true },
}
