// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4001-1395
// source=app/components/Stepper/StepperStep.tsx
// component=StepperStep
import figma from 'figma'
const instance = figma.selectedInstance

// State (default, hover) is a css pseudo-class in code.
const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  active: 'active',
  completed: 'completed',
  disabled: 'disabled',
})
const icon = instance.getInstanceSwap('Icon')
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example: figma.tsx`<StepperStep variant="${variant}" label="${label}"${iconCode ? figma.tsx` icon={${iconCode}}` : ''} />`,
  imports: ['import { StepperStep } from "@/app/components/Stepper"'],
  id: 'stepper-step',
  metadata: { nestable: true },
}
