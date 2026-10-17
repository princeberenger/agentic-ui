// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17981
// source=app/components/Chat/AgentStep.tsx
// component=AgentStep
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const state = instance.getEnum('State', { default: 'default', active: 'active', disabled: 'disabled' })
const sub = instance.getEnum('Type', { Step: false, 'Sub-step': true })
const complete = instance.getEnum('Sub-step', { Complete: 'complete', Incoplete: 'incomplete' })
const expandable = !sub && instance.getBoolean('Expandable')
const icon = sub ? undefined : instance.getInstanceSwap('Icon')
const iconName = icon && icon.type === 'INSTANCE' ? icon.codeConnectId()?.replace(/^icon-/, '') : undefined

export default {
  example: sub
    ? figma.tsx`<AgentStep label="${label}" subStep="${complete}" />`
    : figma.tsx`<AgentStep label="${label}"${iconName && iconName !== 'brain' ? ` icon="${iconName}"` : ''}${state !== 'default' ? ` state="${state}"` : ''}${expandable ? ' expanded={open} onToggle={toggle}' : ''} />`,
  imports: ['import { AgentStep } from "@/app/components/Chat"'],
  id: 'agent-step',
  metadata: { nestable: true },
}
