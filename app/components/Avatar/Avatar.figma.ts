// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=179-17313
// source=app/components/Avatar/Avatar.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { agent: 'agent', initials: 'initials', photo: 'photo' })
const size = instance.getEnum('Size', {
  '16': '16', '20': '20', '24': '24', '32': '32', '40': '40', '48': '48', '56': '56', '64': '64',
})
const color = instance.getEnum('Color', {
  gray: 'gray', blue: 'blue', purple: 'purple', orange: 'orange', teal: 'teal', pink: 'pink', none: 'none',
})
// Figma uses Label (Sm) at 16 and 20, Label (Med) from 24
const initials = size === '16' || size === '20' ? instance.getString('Label (Sm)') : instance.getString('Label (Med)')

export default {
  example:
    type === 'agent'
      ? figma.tsx`<Avatar type="agent" color="${color}" size={${size}} />`
      : type === 'photo'
        ? figma.tsx`<Avatar type="photo" src="" alt="" size={${size}} />`
        : figma.tsx`<Avatar type="initials" initials="${initials}" size={${size}} />`,
  imports: ['import { Avatar } from "@/app/components/Avatar"'],
  id: 'avatar',
  metadata: { nestable: true },
}
