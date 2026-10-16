// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1372
// source=app/components/Menu/MenuItem.tsx
// component=MenuItem
import figma from 'figma'
const instance = figma.selectedInstance

// Not mapped (no code equivalent yet): Model (Models instance), Shortcuts / Icon
// (_Keyboard shortcut instance), Divider, Indented, Top spacer, Bottom spacer.
// hover and focus are css pseudo-classes in code.
const label = instance.getString('Option text')
const helperText = instance.getBoolean('Helper text') ? instance.getString('Helper text') : ''
const size = instance.getEnum('Size', { regular: 'regular', sm: 'sm' })
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'default',
  selected: 'selected',
  focus: 'default',
  disabled: 'disabled',
})
const selected = state === 'selected' || instance.getBoolean('Selected')
const disabled = state === 'disabled'

export default {
  example: figma.tsx`<MenuItem label="${label}"${helperText ? ` helperText="${helperText}"` : ''}${size === 'sm' ? ' size="sm"' : ''}${selected ? ' selected' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { MenuItem } from "@/app/components/Menu"'],
  id: 'menu-item',
  metadata: { nestable: true },
}
