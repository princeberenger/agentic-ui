// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=147-2305
// source=app/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const badgeLabel = instance.getString('Badge label')
const variant = instance.getEnum('Style', {
  primary: 'primary',
  secondary: 'secondary',
  'secondary filled': 'secondary-filled',
  ghost: 'ghost',
  destructive: 'destructive',
  'destructive (Light)': 'destructive-light',
})
const size = instance.getEnum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' })
const type = instance.getEnum('Type', {
  text: 'text',
  'text-icon': 'text-icon',
  'icon-only': 'icon-only',
  'text-shortcut': 'text-shortcut',
  shortcut: 'shortcut',
  badge: 'badge',
})
// default, hover and focus are css states in code
const state = instance.getEnum('State', {
  default: '',
  hover: '',
  focus: '',
  disabled: 'disabled',
  loading: 'loading',
})
const iconPosition = instance.getEnum('Icon position', { left: 'left', none: 'none', right: 'right' })

const hasIcon = type === 'text-icon' || type === 'icon-only'
const hasLabel = type === 'text' || type === 'text-icon' || type === 'text-shortcut'

const icon = hasIcon ? instance.getInstanceSwap('Swap icon') : undefined
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

const shortcut = type === 'text-shortcut' || type === 'shortcut'
  ? instance.findInstance('_Keyboard shortcut')
  : undefined
const shortcutCode = shortcut && shortcut.type === 'INSTANCE' ? shortcut.executeTemplate().example : undefined

const attrs = figma.tsx`${variant !== 'primary' ? ` variant="${variant}"` : ''}${size !== 'md' ? ` size="${size}"` : ''}${iconCode ? figma.tsx` icon={${iconCode}}` : ''}${iconCode && iconPosition === 'right' && hasLabel ? ' iconPosition="right"' : ''}${shortcutCode ? figma.tsx` shortcut={${shortcutCode}}` : ''}${type === 'badge' ? ` badge="${badgeLabel}"` : ''}${hasLabel ? '' : ` aria-label="${label}"`}${state ? ` ${state}` : ''}`

export default {
  example: hasLabel
    ? figma.tsx`<Button${attrs}>${label}</Button>`
    : figma.tsx`<Button${attrs} />`,
  imports: ['import { Button } from "@/app/components/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
