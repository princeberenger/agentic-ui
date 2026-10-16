// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1360
// source=app/components/KeyboardShortcut/KeyboardShortcut.tsx
// component=KeyboardShortcut
import figma from 'figma'
const instance = figma.selectedInstance

const context = instance.getEnum('Context', {
  shortcut: 'shortcut',
  icon: 'icon',
  caret: 'caret',
  slash: 'slash',
  Return: 'return',
})

// Layer order in Figma: Icon 1 (command), Icon 2 (option), Icon 3 (shift),
// Icon 4 (Any) (delete), then letters X, Y, Z. Icon swaps on the modifier
// slots are not reflected: the code renders the default modifier icons.
const keys: string[] = []
if (context === 'shortcut') {
  if (instance.getBoolean('Show Icon 1')) keys.push("'command'")
  if (instance.getBoolean('Show Icon 2')) keys.push("'option'")
  if (instance.getBoolean('Show Icon 3')) keys.push("'shift'")
  if (instance.getBoolean('Show Icon 4 (Any)')) keys.push("'delete'")
  const letters: [string, string][] = [['Show Letter 1', 'X'], ['Show Letter 2', 'Y'], ['Show Letter 3', 'Z']]
  for (const [prop, layer] of letters) {
    if (!instance.getBoolean(prop)) continue
    const text = instance.findText(layer)
    if (text.type === 'TEXT') keys.push(`'${text.textContent}'`)
  }
}

const icon = context === 'icon' ? instance.getInstanceSwap('Icon') : undefined
const iconCode = icon && icon.type === 'INSTANCE' ? icon.executeTemplate().example : undefined

export default {
  example:
    context === 'shortcut'
      ? figma.tsx`<KeyboardShortcut keys={[${keys.join(', ')}]} />`
      : context === 'icon'
        ? figma.tsx`<KeyboardShortcut context="icon"${iconCode ? figma.tsx` icon={${iconCode}}` : ''} />`
        : figma.tsx`<KeyboardShortcut context="${context}" />`,
  imports: ['import { KeyboardShortcut } from "@/app/components/KeyboardShortcut"'],
  id: 'keyboard-shortcut',
  metadata: { nestable: true },
}
