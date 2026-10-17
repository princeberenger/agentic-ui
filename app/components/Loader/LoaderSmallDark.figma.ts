// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=714-2955
// source=app/components/Loader/Loader.tsx
// component=Loader
import figma from 'figma'

// Property 1 (Default, Variant2 … Variant8) are the frames of the css animation
export default {
  example: figma.tsx`<Loader tone="dark" />`,
  imports: ['import { Loader } from "@/app/components/Loader"'],
  id: 'loader-small-dark',
  metadata: { nestable: true },
}
