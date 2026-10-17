// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3790
// source=app/components/Pagination/Pagination.tsx
// component=Pagination
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { simple: 'simple', numbered: 'numbered' })
const totalItems = instance.getString('Total items')
const currentPage = instance.getString('Current page')
const [page, count] = currentPage.split('/')

export default {
  example:
    type === 'simple'
      ? figma.tsx`<Pagination type="simple" pageCount={${count || '1'}} defaultPage={${page || '1'}} totalItems="${totalItems}" />`
      : figma.tsx`<Pagination type="numbered" pageCount={10} />`,
  imports: ['import { Pagination } from "@/app/components/Pagination"'],
  id: 'pagination',
  metadata: { nestable: true },
}
