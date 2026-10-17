// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4030-7034
// source=app/components/Spinner/Spinner.tsx
// component=Spinner
import figma from 'figma'

// Phase 1 to 4 are the frames of the rotation, played by CSS in code
export default {
  example: figma.tsx`<Spinner label="Loading" />`,
  imports: ['import { Spinner } from "@/app/components/Spinner"'],
  id: 'spinner',
  metadata: { nestable: true },
}
