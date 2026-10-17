// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-466
// source=app/components/Stepper/StepperSubsteps.tsx
// component=StepperSubsteps
import figma from 'figma'
const instance = figma.selectedInstance

// visible stepper-substep instances; the divider frame becomes a StepperConnector before the active one
const substeps = instance.findConnectedInstances((node) => node.codeConnectId() === 'stepper-substep')
const render = (i: number) => {
  const item = substeps[i]
  if (!item || item.type !== 'INSTANCE') return ''
  const active = item.getEnum('State', { active: true, completed: false, disabled: false })
  return active
    ? figma.tsx`
  <StepperConnector />
  ${item.executeTemplate().example}`
    : figma.tsx`
  ${item.executeTemplate().example}`
}

export default {
  example: figma.tsx`<StepperSubsteps>${render(0)}${render(1)}${render(2)}${render(3)}${render(4)}${render(5)}${render(6)}${render(7)}${render(8)}
</StepperSubsteps>`,
  imports: ['import { StepperSubsteps, StepperConnector } from "@/app/components/Stepper"'],
  id: 'stepper-substeps-wrapper',
  metadata: { nestable: true },
}
