// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2898
// source=app/components/Badge/Badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const type = instance.getEnum('Type', { rounded: 'rounded', pill: 'pill' })
const size = instance.getEnum('Size', { sm: 'sm', lg: 'lg' })
const color = instance.getEnum('Color', {
  neutral: 'neutral',
  none: 'none',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
  orange: 'orange',
  blue: 'blue',
  purple: 'purple',
  teal: 'teal',
  pink: 'pink',
})
const border = instance.getEnum('Border', { true: true, false: false })
const iconLeft = instance.getEnum('iconLeft', { true: true, false: false })
const iconRight = instance.getEnum('iconRight', { true: true, false: false })
const hasClose = instance.getBoolean('hasCloseIcon')

const icon = iconLeft || iconRight ? instance.getInstanceSwap('Icon') : undefined
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example: figma.tsx`<Badge color="${color}"${type === 'pill' ? ' type="pill"' : ''}${size === 'lg' ? ' size="lg"' : ''}${border ? ' border' : ''}${iconCode ? figma.tsx` icon={${iconCode}}` : ''}${iconCode && iconRight ? ' iconPosition="right"' : ''}${hasClose ? ' onClose={() => {}}' : ''}>${label}</Badge>`,
  imports: ['import { Badge } from "@/app/components/Badge"'],
  id: 'badge',
  metadata: { nestable: true },
}
