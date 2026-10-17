// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-163
// source=app/components/Breadcrumbs/Breadcrumbs.tsx
// component=Breadcrumbs
import figma from 'figma'
const instance = figma.selectedInstance

const count = instance.getEnum('Items', { '2': 2, '3': 3, '4': 4, '5': 5 }) ?? 2
const items = Array.from({ length: count }, (_, i) =>
  i === count - 1 ? `{ label: 'Page ${i + 1}' }` : `{ label: 'Page ${i + 1}', href: '/' }`,
).join(', ')

export default {
  example: figma.tsx`<Breadcrumbs items={[${items}]} />`,
  imports: ['import { Breadcrumbs } from "@/app/components/Breadcrumbs"'],
  id: 'breadcrumbs',
  metadata: { nestable: true },
}
