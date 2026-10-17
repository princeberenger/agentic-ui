// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-2334
// source=app/components/ValidationText/ValidationText.tsx
// component=ValidationTextLine
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { Default: 'default', Success: 'success', Error: 'error' }) ?? 'default'
const label = instance.getString('Label')

export default {
  example: figma.tsx`<ValidationTextLine${type !== 'default' ? ` type="${type}"` : ''}>${label}</ValidationTextLine>`,
  imports: ['import { ValidationTextLine } from "@/app/components/ValidationText"'],
  id: 'validation-text-line',
  metadata: { nestable: true },
}
