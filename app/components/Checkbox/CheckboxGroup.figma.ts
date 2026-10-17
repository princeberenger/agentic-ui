// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-5501
// source=app/components/Checkbox/CheckboxGroup.tsx
// component=CheckboxGroup
import figma from 'figma'
const instance = figma.selectedInstance

const orientation = instance.getEnum('Type', { vertical: 'vertical', horizontal: 'horizontal' })
const label = instance.getBoolean('Show label') ? instance.getString('Label text') : ''
const helper = instance.getBoolean('Show helper text') ? instance.findConnectedInstance('helper-text') : null
const helperText = helper && helper.type === 'INSTANCE' ? helper.getString('Label') : ''

const items = instance.findConnectedInstances((node) => node.codeConnectId() === 'checkbox-with-label')
const render = (i: number) => {
  const item = items[i]
  return item && item.type === 'INSTANCE' ? figma.tsx`
  ${item.executeTemplate().example}` : ''
}

export default {
  example: figma.tsx`<CheckboxGroup${orientation === 'horizontal' ? ' orientation="horizontal"' : ''}${label ? ` label="${label}"` : ''}${helperText ? ` helperText="${helperText}"` : ''}>${render(0)}${render(1)}${render(2)}${render(3)}${render(4)}
</CheckboxGroup>`,
  imports: ['import { CheckboxGroup } from "@/app/components/Checkbox"'],
  id: 'checkbox-group',
  metadata: { nestable: false },
}
