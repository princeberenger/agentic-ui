// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1641
// source=app/components/Modal/Modal.tsx
// component=Modal
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const subtitle = instance.getBoolean('Show subtitle') ? instance.getString('Subtitle') : ''
const bodyText = instance.getBoolean('Body text')
const textArea = instance.getBoolean('Text area')
const upload = instance.getBoolean('Upload area')

export default {
  example: figma.tsx`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="${title}"${subtitle ? `\n  subtitle="${subtitle}"` : ''}
  actions={<><Button variant="secondary" size="lg">Configure Agent</Button><Button size="lg">Start Chat</Button></>}
>${bodyText ? '\n  <p>{/* body text */}</p>' : ''}${textArea ? '\n  <Textarea />' : ''}${upload ? '\n  {/* File upload area */}' : ''}
</Modal>`,
  imports: [
    'import { Modal } from "@/app/components/Modal"',
    'import { Button } from "@/app/components/Button"',
    'import { Textarea } from "@/app/components/Textarea"',
  ],
  id: 'modal',
  metadata: { nestable: false },
}
