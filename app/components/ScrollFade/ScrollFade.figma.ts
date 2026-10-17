// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1131
// source=app/components/ScrollFade/ScrollFade.tsx
// component=ScrollFade
import figma from 'figma'
const instance = figma.selectedInstance

const mode = instance.getEnum('Mode', { Light: 'light', Dark: 'dark' }) ?? 'light'

export default {
  example: figma.tsx`<ScrollFade${mode === 'dark' ? ' mode="dark"' : ''} />`,
  imports: ['import { ScrollFade } from "@/app/components/ScrollFade"'],
  id: 'scroll-fade',
  metadata: { nestable: true },
}
