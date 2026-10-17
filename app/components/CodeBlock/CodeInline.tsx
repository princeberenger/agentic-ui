// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-7606 (CodeInline)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-tertiary, color-bg-secondary-on-elevated, color-input-hover-dark,
//         color-content-primary, color-content-disabled, shadow-components-focus, radius-xs, space-2, space-8,
//         font-code, text-regular, leading-regular, weight-regular, tracking-normal, duration-hover

'use client';

import { type ReactNode } from 'react';
import styles from './CodeBlock.module.css';

export interface CodeInlineProps {
  /** Figma `Label`. */
  children: ReactNode;
  /** Makes the snippet a button (Figma states hover, active, focus). */
  onClick?: () => void;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  className?: string;
}

export function CodeInline({ children, onClick, disabled, className }: CodeInlineProps) {
  const classes = `${styles.inline} ${className ?? ''}`;
  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} disabled={disabled}>
        <code>{children}</code>
      </button>
    );
  }
  return (
    <code className={classes} data-disabled={disabled || undefined}>
      {children}
    </code>
  );
}
