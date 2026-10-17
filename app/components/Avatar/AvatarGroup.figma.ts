// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=783-773
// source=app/components/Avatar/AvatarGroup.tsx
// component=AvatarGroup
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  photos: 'photos',
  initials: 'initials',
  compact: 'compact',
  'initials-label': 'initials-label',
})
const label = type === 'initials-label' ? instance.getString('Name label') : ''

// Layer order: 1st, 2nd, 3rd, 4th, then the counter (photos and compact only)
const shows = ['Show 1st', 'Show 2nd', 'Show 3rd', 'Show 4th']
const layers = instance.children.filter((n) => n.type === 'INSTANCE')
const hasCounter = (type === 'photos' || type === 'compact') && instance.getBoolean('Show counter')
const avatars = type === 'initials-label' ? layers.slice(0, 1) : layers.slice(0, type === 'initials' ? 3 : 4)

const visible = avatars.filter((_, i) => type === 'initials-label' || instance.getBoolean(shows[i]))
const render = (i: number) => {
  const item = visible[i]
  return item && item.type === 'INSTANCE' ? figma.tsx`
  ${item.executeTemplate().example}` : ''
}

let count = ''
if (hasCounter) {
  const counter = layers[4]
  const text = counter && counter.type === 'INSTANCE' ? counter.findText('A') : undefined
  count = text && text.type === 'TEXT' ? text.textContent.replace('+', '') : ''
}

export default {
  example: figma.tsx`<AvatarGroup${type === 'compact' ? ' compact' : ''}${count ? ` count={${count}}` : ''}${label ? ` label="${label}"` : ''}>${render(0)}${render(1)}${render(2)}${render(3)}
</AvatarGroup>`,
  imports: ['import { AvatarGroup } from "@/app/components/Avatar"'],
  id: 'avatar-group',
  metadata: { nestable: true },
}
