// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=675-3982
// source=app/components/SocialButton/SocialButton.tsx
// component=SocialButton
import figma from 'figma'
const instance = figma.selectedInstance

const brand = instance.getEnum('Brand', { apple: 'apple', discord: 'discord', github: 'github', google: 'google', linkedin: 'linkedin', x: 'x' })
const variant = instance.getEnum('Type', { primary: 'primary', secondary: 'secondary' })
const size = instance.getEnum('Size', { lg: 'lg', sm: 'sm' })
// hover and focus are css states
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, disabled: true })
const iconOnly = instance.getEnum('Style', { icon: true, 'icon-label': false })
const label = iconOnly ? '' : instance.getString('Label')
const attrs = `brand="${brand}"${variant === 'secondary' ? ' variant="secondary"' : ''}${size === 'sm' ? ' size="sm"' : ''}${disabled ? ' disabled' : ''}`

export default {
  example: iconOnly ? figma.tsx`<SocialButton ${attrs} />` : figma.tsx`<SocialButton ${attrs}>${label}</SocialButton>`,
  imports: ['import { SocialButton } from "@/app/components/SocialButton"'],
  id: 'social-button',
  metadata: { nestable: true },
}
