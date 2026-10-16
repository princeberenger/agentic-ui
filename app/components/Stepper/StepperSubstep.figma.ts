// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-82
// source=app/components/Stepper/StepperSubstep.tsx
// component=StepperSubstep
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const state = instance.getEnum('State', {
  active: 'active',
  completed: 'completed',
  disabled: 'disabled',
})

export default {
  example: figma.tsx`<StepperSubstep state="${state}" label="${label}" />`,
  imports: ['import { StepperSubstep } from "@/app/components/Stepper"'],
  id: 'stepper-substep',
  metadata: { nestable: true },
}
