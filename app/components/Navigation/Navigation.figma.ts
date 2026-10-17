// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=230-699
// source=app/components/Navigation/Navigation.tsx
// component=Navigation
import figma from 'figma'
const instance = figma.selectedInstance

const tree = instance.getEnum('Type', { classic: false, tree: true })
const collapsed = instance.getEnum('State', { open: false, closed: true })
const footer = instance.getBoolean('Footer ')
const links = tree ? [] : instance.findConnectedInstances((node) => node.codeConnectId() === 'nav-link')
const children = links
  .map((link) => (link.type === 'INSTANCE' ? figma.tsx`
  ${link.executeTemplate().example}` : ''))

export default {
  example: tree
    ? figma.tsx`<Navigation variant="tree"${collapsed ? ' defaultCollapsed' : ''}${footer ? ' userName="Alex"' : ''}>
  <NavSection icon="meter" label="Monitor">
    <NavSubLink label="Dashboard" href="/" />
  </NavSection>
</Navigation>`
    : figma.tsx`<Navigation${footer ? ' userName="Alex"' : ''}>${children}
</Navigation>`,
  imports: ['import { Navigation, NavSection, NavSubLink } from "@/app/components/Navigation"'],
  id: 'navigation',
  metadata: { nestable: false },
}
