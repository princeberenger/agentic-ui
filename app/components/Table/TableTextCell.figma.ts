// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1082
// source=app/components/Table/TableCell.tsx
// component=TableTextCell
import figma from 'figma'
const instance = figma.selectedInstance

// hover and focus are runtime states in code
const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const text = instance.getString('Main Text')
const description = instance.getBoolean('Description') ? instance.getString('Description Text') : undefined
const icon = instance.getBoolean('Show icon') ? instance.getInstanceSwap('Icon') : undefined
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example: figma.tsx`<TableTextCell text="${text}"${description ? ` description="${description}"` : ''}${iconCode ? figma.tsx` icon={${iconCode}}` : ''}${state} />`,
  imports: ['import { TableTextCell } from "@/app/components/Table"'],
  id: 'table-text-cell',
  metadata: { nestable: true },
}
