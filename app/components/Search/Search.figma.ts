// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6162
// source=app/components/Search/Search.tsx
// component=Search
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { lg: 'lg', 'large (from expanded)': 'lg', sm: 'sm', 'small (from expanded)': 'sm' })
// hover, focus and filled are runtime states in code
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'default',
  focus: 'default',
  filled: 'default',
  disabled: 'disabled',
  skeleton: 'skeleton',
})
const expanded = instance.getEnum('Expanded', { true: true, false: false })

export default {
  example: figma.tsx`<Search${size === 'sm' ? ' size="sm"' : ''}${expanded ? '' : ' collapsible'}${state === 'disabled' ? ' disabled' : ''}${state === 'skeleton' ? ' loading' : ''} />`,
  imports: ['import { Search } from "@/app/components/Search"'],
  id: 'search',
  metadata: { nestable: true },
}
