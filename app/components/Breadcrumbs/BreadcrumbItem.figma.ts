// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-91
// source=app/components/Breadcrumbs/BreadcrumbItem.tsx
// component=BreadcrumbItem
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { default: 'default', overflow: 'overflow' })
// hover and selected (menu open) are runtime states in code
const current = instance.getEnum('State', { current: true, default: false, hover: false, selected: false })
const label = instance.getString('↩ Text')
const hasIcon = instance.getBoolean('Icon')
const icon = hasIcon ? instance.getInstanceSwap('❖ Icon') : undefined
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example:
    type === 'overflow'
      ? figma.tsx`<BreadcrumbOverflow items={[{ label: 'Dashboard', href: '/dashboard' }]} />`
      : current
        ? figma.tsx`<BreadcrumbItem label="${label}"${iconCode ? figma.tsx` icon={${iconCode}}` : ''} current />`
        : figma.tsx`<BreadcrumbItem label="${label}" href="/"${iconCode ? figma.tsx` icon={${iconCode}}` : ''} />`,
  imports: ['import { BreadcrumbItem, BreadcrumbOverflow } from "@/app/components/Breadcrumbs"'],
  id: 'breadcrumb-item',
  metadata: { nestable: true },
}
