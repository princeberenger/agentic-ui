// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=750-8765
// source=app/components/Navigation/NavLink.tsx
// component=NavLink
import figma from 'figma'
const instance = figma.selectedInstance

// hover is a css state in code
const type = instance.getEnum('Type', { link: 'link', label: 'label' })
const label = instance.getString('Label')
const icon = type === 'link' && instance.getBoolean('Show icon') ? instance.getInstanceSwap('Icon') : undefined
// icon batch ids are `icon-<svg name>`
const name = icon && icon.type === 'INSTANCE' ? icon.codeConnectId()?.replace(/^icon-/, '') : undefined
const open = instance.getBoolean('Section Open')
const closed = instance.getBoolean('Section Closed')
const expanded = open ? ' expanded' : closed ? ' expanded={false}' : ''

export default {
  example:
    type === 'label'
      ? figma.tsx`<NavLink asLabel label="${label}" />`
      : figma.tsx`<NavLink label="${label}"${name ? ` icon="${name}"` : ''}${expanded} href="/" />`,
  imports: ['import { NavLink } from "@/app/components/Navigation"'],
  id: 'nav-link',
  metadata: { nestable: true },
}
