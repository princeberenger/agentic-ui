// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-7007
// source=app/components/HelperText/HelperText.tsx
// component=HelperText
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const type = instance.getEnum('Type', { default: 'default', error: 'error', success: 'success', warning: 'warning' })
const size = instance.getEnum('Size', { sm: 'sm', lg: 'lg' })
const variant = instance.getEnum('Style', { light: 'light', solid: 'solid' })
const showIcon = instance.getBoolean('show Icon')

export default {
  example: figma.tsx`<HelperText${type !== 'default' ? ` type="${type}"` : ''}${size === 'lg' ? ' size="lg"' : ''}${variant === 'solid' ? ' variant="solid"' : ''}${showIcon ? '' : ' showIcon={false}'}>${label}</HelperText>`,
  imports: ['import { HelperText } from "@/app/components/HelperText"'],
  id: 'helper-text',
  metadata: { nestable: true },
}
