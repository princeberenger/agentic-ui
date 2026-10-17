// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=779-314
// source=app/components/Table/TableCell.tsx
// component=TableAvatarCell
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: '', Hover: '', Focus: '', Selected: '', Disabled: ' disabled', Loading: ' loading' }) ?? ''
const align = instance.getEnum('Alignment', { Left: '', Center: ' align="center"', Right: ' align="right"' }) ?? ''
const multiple = instance.getEnum('People', { Single: false, Multiple: true })
const avatar = instance.findInstance(multiple ? 'AvatarGroup' : 'Avatar')
const avatarCode = avatar && avatar.type === 'INSTANCE' ? avatar.executeTemplate().example : undefined

export default {
  example: figma.tsx`<TableAvatarCell${multiple ? ' multiple' : ''} avatar={${avatarCode}}${align}${state} />`,
  imports: ['import { TableAvatarCell } from "@/app/components/Table"'],
  id: 'table-avatar-cell',
  metadata: { nestable: true },
}
