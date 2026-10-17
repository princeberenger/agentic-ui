// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6111-11622
// source=app/components/FileType/FileType.tsx
// component=FileType
import figma from 'figma'
const instance = figma.selectedInstance

// Type only changes the sample name and size; hover is a css state
const variant = instance.getEnum('Style', { Filled: 'filled', Outline: 'outline' })
const size = instance.getEnum('Size', { Large: 'large', Medium: 'medium', Small: 'small' })
const showSize = size !== 'small' && instance.getBoolean('Show size')
const close = size === 'small' && instance.getBoolean('Show close icon')
const name = instance.findText('File name')
const label = name && name.type === 'TEXT' ? name.textContent : 'Document.pdf'

export default {
  example: figma.tsx`<FileType name="${label}"${showSize ? ' fileSize="2.0 kb"' : ''}${variant === 'outline' ? ' variant="outline"' : ''}${size !== 'large' ? ` size="${size}"` : ''} href={url}${close ? ' onRemove={remove}' : ''} />`,
  imports: ['import { FileType } from "@/app/components/FileType"'],
  id: 'file-type',
  metadata: { nestable: true },
}
