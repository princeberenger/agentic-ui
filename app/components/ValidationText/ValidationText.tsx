// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-1245
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-2334 (validation-text-line)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-success-light, color-bg-attention-light, color-content-icon,
//         color-content-secondary, color-content-success, color-content-attention, space-2, space-4, space-8,
//         radius-10, icon-14, font-body, text-tiny, weight-regular, leading-tiny, tracking-normal

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './ValidationText.module.css';

/** validation-text-line `Type`. */
export type ValidationTextType = 'default' | 'success' | 'error';

const ICON: Record<ValidationTextType, string> = {
  default: 'checkmark',
  success: 'checkmark-filled',
  error: 'close-filled',
};

// read by screen readers in place of the colored icons
const ALT: Record<ValidationTextType, string | undefined> = {
  default: undefined,
  success: 'Met:',
  error: 'Not met:',
};

export interface ValidationTextLineProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  /** Figma `Type`: pending, met or failed. */
  type?: ValidationTextType;
  /** Figma `Label`. */
  children: ReactNode;
}

export const ValidationTextLine = forwardRef<HTMLLIElement, ValidationTextLineProps>(function ValidationTextLine(
  { type = 'default', children, className, ...rest },
  ref,
) {
  return (
    <li
      ref={ref}
      className={[styles.line, type !== 'default' ? styles[type] : '', className ?? ''].filter(Boolean).join(' ')}
      {...rest}
    >
      <Icon name={ICON[type]} size={14} className={styles.icon} alt={ALT[type]} />
      <span className={styles.label}>{children}</span>
    </li>
  );
});

export interface ValidationTextProps extends HTMLAttributes<HTMLUListElement> {
  /** ValidationTextLine items (Figma `# of Rules`: 2 to 5). */
  children: ReactNode;
}

export const ValidationText = forwardRef<HTMLUListElement, ValidationTextProps>(function ValidationText(
  { children, className, ...rest },
  ref,
) {
  return (
    <ul ref={ref} className={[styles.list, className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {children}
    </ul>
  );
});
