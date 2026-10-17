// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6698
// source=app/components/CursorBlink/CursorBlink.tsx
// component=CursorBlink
import figma from 'figma'

// State (Visible, Invisible) are the two frames of the css blink
export default {
  example: figma.tsx`<CursorBlink />`,
  imports: ['import { CursorBlink } from "@/app/components/CursorBlink"'],
  id: 'cursor-blink',
  metadata: { nestable: true },
}
