// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8082
// source=app/components/Slider/Slider.tsx
// component=Slider
import figma from 'figma'
const instance = figma.selectedInstance

// Volume: Value is the position, a runtime value in code
const value = instance.getEnum('Value', {
  '0': 0, '20': 20, '30': 30, '40': 40, '50': 50, '60': 60, '70': 70, '80': 80, '90': 90, '100': 100,
})

export default {
  example: figma.tsx`<Slider defaultValue={${value ?? 0}} onChange={setVolume} aria-label="Volume" />`,
  imports: ['import { Slider } from "@/app/components/Slider"'],
  id: 'slider-volume',
  metadata: { nestable: true },
}
