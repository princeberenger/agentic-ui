// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6912
// source=app/components/FileUpload/FileItem.tsx
// component=FileItem
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('State', { uploaded: 'uploaded', uploading: 'uploading', success: 'success', error: 'error' })
const name = instance.getString('Area label')

export default {
  example: figma.tsx`<FileItem name="${name}"${status !== 'uploaded' ? ` status="${status}"` : ''}${status === 'error' ? ' error="File exceeds 5mb size limit"' : ''}${status !== 'success' ? ' onRemove={() => {}}' : ''} />`,
  imports: ['import { FileItem } from "@/app/components/FileUpload"'],
  id: 'file-item',
  metadata: { nestable: true },
}
