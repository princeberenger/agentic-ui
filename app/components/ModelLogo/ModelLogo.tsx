// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=118-15337 (Models)
// Extracted: 2026-10-17
// Tokens: color-button-secondary, color-border-subtle, color-content-primary, stroke-sm, radius-10, radius-6,
//         icon-13, icon-16, icon-20, icon-32

import { Icon } from '../Icon/Icon';
import styles from './ModelLogo.module.css';

/** Figma `Provider`. */
export type ModelProvider = 'anthropic' | 'gemini' | 'openai' | 'mistral' | 'xai';

/** Brand marks with their own colors (rendered as images); the others take CONTENT/Primary. */
const COLORED: ModelProvider[] = ['gemini', 'mistral'];

const NAMES: Record<ModelProvider, string> = {
  anthropic: 'Anthropic',
  gemini: 'Gemini',
  openai: 'OpenAI',
  mistral: 'Mistral',
  xai: 'xAI',
};

export interface ModelLogoProps {
  provider: ModelProvider;
  /** md: 32px tile, sm: 20px tile (Figma `--s` variants). */
  size?: 'md' | 'sm';
  /** Accessible name; decorative when omitted. */
  label?: string;
  className?: string;
}

/** Provider mark on a BUTTON/Secondary tile with a 0.5px BORDER/Subtle stroke. */
export function ModelLogo({ provider, size = 'md', label, className }: ModelLogoProps) {
  return (
    <span
      className={`${styles.logo} ${styles[size]} ${className ?? ''}`}
      role={label ? 'img' : undefined}
      aria-label={label === undefined ? undefined : label || NAMES[provider]}
      aria-hidden={label === undefined ? true : undefined}
    >
      <Icon name={provider} size={size === 'md' ? 16 : 13} mode={COLORED.includes(provider) ? 'img' : 'mask'} />
    </span>
  );
}
