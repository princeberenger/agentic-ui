// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-7007
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-tertiary, color-bg-warning, color-bg-success, color-bg-success-light,
//         color-bg-attention, color-bg-attention-light, color-content-primary, color-content-secondary,
//         color-content-icon, color-content-warning-text, color-content-warning-icons, color-content-success,
//         color-content-success-light, color-content-attention-light, color-content-on-primary, color-badge-label-red,
//         space-4, space-6, space-8, space-10, space-12, radius-10, radius-full, icon-13, icon-16,
//         font-body, text-tiny, leading-tiny, text-small, leading-small, weight-regular, weight-medium

import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './HelperText.module.css';

/** Figma `Type`. */
export type HelperTextType = 'default' | 'error' | 'success' | 'warning';

/** Figma `Size`. */
export type HelperTextSize = 'sm' | 'lg';

/** Figma `Style`. Figma has no `warning` + `sm` + `solid` variant. */
export type HelperTextVariant = 'light' | 'solid';

export interface HelperTextProps {
  /** Text (Figma `Label`). */
  children: ReactNode;
  type?: HelperTextType;
  size?: HelperTextSize;
  variant?: HelperTextVariant;
  /** Status icon before the text (Figma `show Icon`). */
  showIcon?: boolean;
  /** Lets a field point at the text with `aria-describedby`. */
  id?: string;
  className?: string;
}

const ICONS: Record<HelperTextType, string> = {
  default: 'information',
  warning: 'warning-alt-filled',
  success: 'checkmark-filled',
  error: 'error-filled',
};

export function HelperText({
  children,
  type = 'default',
  size = 'sm',
  variant = 'light',
  showIcon = true,
  id,
  className,
}: HelperTextProps) {
  return (
    <span id={id} className={[styles.root, styles[size], className ?? ''].filter(Boolean).join(' ')}>
      <span className={`${styles.bubble} ${styles[type]} ${styles[variant]}`}>
        {showIcon && <Icon name={ICONS[type]} size={size === 'lg' ? 16 : 13} className={styles.icon} />}
        <span className={styles.text}>{children}</span>
      </span>
    </span>
  );
}
