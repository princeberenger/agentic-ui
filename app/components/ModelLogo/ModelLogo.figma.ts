// url=https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=118-15337
// source=app/components/ModelLogo/ModelLogo.tsx
// component=ModelLogo
import figma from 'figma'
const instance = figma.selectedInstance

// Provider10 is xAI at 20px
const provider = instance.getEnum('Provider', {
  anthropic: 'anthropic', 'anthropic --s': 'anthropic', gemini: 'gemini', 'gemini --s': 'gemini',
  openai: 'openai', 'openai --s': 'openai', Mistral: 'mistral', 'mistral --s': 'mistral', xAI: 'xai', Provider10: 'xai',
})
const small = instance.getEnum('Provider', {
  anthropic: false, 'anthropic --s': true, gemini: false, 'gemini --s': true, openai: false, 'openai --s': true,
  Mistral: false, 'mistral --s': true, xAI: false, Provider10: true,
})

export default {
  example: figma.tsx`<ModelLogo provider="${provider}"${small ? ' size="sm"' : ''} />`,
  imports: ['import { ModelLogo } from "@/app/components/ModelLogo"'],
  id: 'model-logo',
  metadata: { nestable: true },
}
