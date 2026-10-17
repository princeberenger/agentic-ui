// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-2459
// source=app/components/ButtonGroup/ButtonGroup.tsx
// component=ButtonGroup
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { lg: 'lg', md: 'md', sm: 'sm' })

export default {
  example: figma.tsx`<ButtonGroup>
  <Button variant="secondary" size="${size}">Cancel</Button>
  <Button size="${size}">Launch</Button>
</ButtonGroup>`,
  imports: ['import { ButtonGroup } from "@/app/components/ButtonGroup"', 'import { Button } from "@/app/components/Button"'],
  id: 'button-group',
  metadata: { nestable: true },
}
