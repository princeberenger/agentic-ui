// Batch template for Figma icon components (page ICONS, node 179:662).
// One entry per icon in Icon.figma.batch.json; figma.batch.name is the svg
// filename in public/assets/icons/.
import figma from 'figma'

const name: string = figma.batch.name

export default {
  example: figma.tsx`<Icon name="${name}" />`,
  imports: ['import { Icon } from "@/app/components/Icon/Icon"'],
  id: `icon-${name}`,
  metadata: { nestable: true },
}
