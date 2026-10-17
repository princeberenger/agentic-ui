// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738 (Text input, field)
// Extracted: 2026-10-17
// Tokens: color-button-secondary, color-bg-primary, color-bg-secondary, color-border-subtle, color-border-strong,
//         color-border-attention, color-border-success, color-content-primary, color-content-secondary,
//         color-content-disabled, input-regular, input-small, space-12, radius-10, stroke-default,
//         font-body, text-small, leading-small, text-tiny, leading-tiny, weight-regular, duration-hover

'use client';

import { forwardRef } from 'react';
import styles from './Input.module.css';

/** Figma `Size`. */
export type InputSize = 'sm' | 'md';

/** Validation state (Figma `State` error / success / warning). */
export type InputStatus = 'default' | 'error' | 'success' | 'warning';

export type InputProps = {
  /** Figma `Size`: md 40px, sm 32px. */
  size?: InputSize;
  status?: InputStatus;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', status = 'default', className, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={[styles.input, styles[size], styles[status], className ?? ''].filter(Boolean).join(' ')}
      aria-invalid={status === 'error' || undefined}
      {...rest}
    />
  );
});
