// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8067
// source=app/components/Slider/Slider.tsx
// component=Slider
import figma from 'figma'

export default {
  example: figma.tsx`<Slider size="lg" defaultValue={17} scaleLabels={['0', '50', '100']} onChange={setValue} aria-label="Value" />`,
  imports: ['import { Slider } from "@/app/components/Slider"'],
  id: 'slider-draggable',
  metadata: { nestable: true },
}
