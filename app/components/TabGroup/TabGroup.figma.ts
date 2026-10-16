// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4056-1461
// source=app/components/TabGroup/TabGroup.tsx
// component=TabGroup
import figma from 'figma'
const instance = figma.selectedInstance

// Size has no code prop yet. Tabs (2..5) is the number of tab children.
const style = instance.getEnum('Style', {
  pill: 'pill',
  rounded: 'rounded',
  segmented: 'segmented',
  underline: 'underline',
})

const tabs = instance.findConnectedInstances((node) => node.codeConnectId() === 'tab')
const render = (i: number) => {
  const tab = tabs[i]
  return tab && tab.type === 'INSTANCE' ? figma.tsx`
  ${tab.executeTemplate().example}` : ''
}
const activeIndex = tabs.findIndex(
  (tab) => tab.type === 'INSTANCE' && tab.getPropertyValue('State') === 'active',
)

export default {
  example: figma.tsx`<TabGroup style="${style}"${activeIndex > 0 ? ` defaultIndex={${activeIndex}}` : ''}>${render(0)}${render(1)}${render(2)}${render(3)}${render(4)}
</TabGroup>`,
  imports: ['import { TabGroup } from "@/app/components/TabGroup"'],
  id: 'tab-group',
  metadata: { nestable: false },
}
