// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-1245
// source=app/components/ValidationText/ValidationText.tsx
// component=ValidationText
import figma from 'figma'
const instance = figma.selectedInstance

// # of Rules: 2 to 5 validation-text-line instances
const lines = instance.findConnectedInstances((node) => node.codeConnectId() === 'validation-text-line')
const render = (i: number) => {
  const line = lines[i]
  return line && line.type === 'INSTANCE' ? figma.tsx`
  ${line.executeTemplate().example}` : ''
}

export default {
  example: figma.tsx`<ValidationText>${render(0)}${render(1)}${render(2)}${render(3)}${render(4)}
</ValidationText>`,
  imports: ['import { ValidationText } from "@/app/components/ValidationText"'],
  id: 'validation-text',
  metadata: { nestable: true },
}
