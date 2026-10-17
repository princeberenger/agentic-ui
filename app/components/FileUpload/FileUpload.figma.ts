// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6848
// source=app/components/FileUpload/FileUpload.tsx
// component=FileUpload
import figma from 'figma'
const instance = figma.selectedInstance

// hover is a css state (and the drag-over state) in code
const disabled = instance.getEnum('State', { default: false, hover: false, disabled: true })
const label = instance.getString('Area label')
const hint1 = instance.getBoolean('Show hint 1') ? instance.getString('Hint label 1') : ''
const hint2 = instance.getBoolean('Show hint 2') ? instance.getString('Hint label 2') : ''
const hints = [hint1, hint2].filter(Boolean).map((h) => `'${h}'`).join(', ')
const showButton = instance.getBoolean('Show button')
const showIcon = instance.getBoolean('Show icon')

export default {
  example: figma.tsx`<FileUpload
  onFiles={(files) => {}}
  label="${label}"
  hints={[${hints}]}${showButton ? '' : '\n  buttonLabel={null}'}${showIcon ? '' : '\n  icon={null}'}${disabled ? '\n  disabled' : ''}
/>`,
  imports: ['import { FileUpload } from "@/app/components/FileUpload"'],
  id: 'file-upload-area',
  metadata: { nestable: true },
}
