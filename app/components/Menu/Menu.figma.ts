// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=558-659
// source=app/components/Menu/Menu.tsx
// component=Menu
import figma from 'figma'
const instance = figma.selectedInstance

// Type (account, shortcuts, simple) has no code prop yet: it only changes
// which menu items are shown, which the children already reflect.
const size = instance.getEnum('Size', { regular: 'regular', sm: 'sm' })

const items = instance.findConnectedInstances((node) => node.codeConnectId() === 'menu-item')
const render = (i: number) => {
  const item = items[i]
  return item && item.type === 'INSTANCE' ? figma.tsx`
  ${item.executeTemplate().example}` : ''
}

export default {
  example: figma.tsx`<Menu${size === 'sm' ? ' size="sm"' : ''}>${render(0)}${render(1)}${render(2)}${render(3)}${render(4)}${render(5)}${render(6)}${render(7)}${render(8)}${render(9)}
</Menu>`,
  imports: ['import { Menu } from "@/app/components/Menu"'],
  id: 'menu',
  metadata: { nestable: false },
}
