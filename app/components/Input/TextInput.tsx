// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-disabled, space-8,
//         font-label, text-button, leading-small, tracking-spacious, weight-regular

'use client';

import { forwardRef, useId, type ReactNode } from 'react';
import { HelperText, type HelperTextType } from '../HelperText';
import { Input, type InputProps, type InputStatus } from './Input';
import styles from './TextInput.module.css';

export type TextInputProps = InputProps & {
  /** Label above the field (Figma `Show label`, `Label text`). */
  label?: ReactNode;
  /** HelperText under the field, typed by `status` (Figma `Show helper`). */
  helperText?: ReactNode;
};

const HELPER_TYPE: Record<InputStatus, HelperTextType> = {
  default: 'default',
  error: 'error',
  success: 'success',
  warning: 'warning',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, helperText, status = 'default', id, className, disabled, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = helperText != null ? `${inputId}-helper` : undefined;

  return (
    <div
      className={[
        styles.field,
        status !== 'default' ? styles.hasStatus : '',
        disabled ? styles.disabled : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {label != null && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <Input ref={ref} id={inputId} status={status} disabled={disabled} aria-describedby={helperId} {...rest} />
      {helperText != null && (
        <HelperText id={helperId} type={HELPER_TYPE[status]}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
});
