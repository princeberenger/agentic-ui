// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1179
// source=app/components/Table/TableCell.tsx
// component=TableNumericCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const align = instance.getEnum('Alignment', { Left: '', Right: ' align="right"' }) ?? ''
const value = instance.getString('Cell text')
const badge = instance.getBoolean('Badge') ? instance.findInstance('Badge') : undefined
const badgeCode = badge && badge.type === 'INSTANCE' ? badge.executeTemplate().example : undefined
const icon = instance.getBoolean('Icon')

export default {
  example: figma.tsx`<TableNumericCell value="${value}"${align}${badgeCode ? figma.tsx` badge={${badgeCode}}` : ''}${icon ? ' icon={<Icon name="edit" size={16} />}' : ''}${state} />`,
  imports: ['import { TableNumericCell } from "@/app/components/Table"', 'import { Icon } from "@/app/components/Icon/Icon"'],
  id: 'table-numeric-cell',
  metadata: { nestable: true },
}
