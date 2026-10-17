// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3884
// source=app/components/Pagination/PaginationItem.tsx
// component=PaginationItem
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { number: 'number', overflow: 'overflow' })
// hover, focus and open are runtime states in code
const selected = instance.getEnum('Selected', { true: true, false: false })
const page = instance.getString('Page number')

export default {
  example:
    type === 'overflow'
      ? figma.tsx`<PaginationOverflow pages={[5, 6, 7, 8, 9]} onSelect={setPage} />`
      : figma.tsx`<PaginationItem page={${page}}${selected ? ' selected' : ''} onClick={() => setPage(${page})} />`,
  imports: ['import { PaginationItem, PaginationOverflow } from "@/app/components/Pagination"'],
  id: 'pagination-item',
  metadata: { nestable: true },
}
