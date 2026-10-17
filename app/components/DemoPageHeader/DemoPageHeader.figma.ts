// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=587-3511
// source=app/components/DemoPageHeader/DemoPageHeader.tsx
// component=DemoPageHeader
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.tsx`<DemoPageHeader label="${label}" onLaunch={launchDemo} />`,
  imports: ['import { DemoPageHeader } from "@/app/components/DemoPageHeader"'],
  id: 'demo-page-header',
  metadata: { nestable: false },
}
