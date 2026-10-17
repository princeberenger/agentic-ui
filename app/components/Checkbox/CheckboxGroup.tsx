// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-5501
// Extracted: 2026-10-17
// Tokens: space-4, space-8, space-24, color-content-secondary, font-label, weight-regular,
//         text-button, leading-small, tracking-spacious

import { useId, type ReactNode } from 'react';
import { HelperText } from '../HelperText';
import styles from './CheckboxGroup.module.css';

/** Figma `Type`. */
export type CheckboxGroupOrientation = 'vertical' | 'horizontal';

export interface CheckboxGroupProps {
  /** `<Checkbox label>` items (Figma `Items`). */
  children: ReactNode;
  /** Group label (Figma `Show label`, `Label text`). */
  label?: string;
  /** HelperText (default, sm, light) under the items (Figma `Show helper text`). */
  helperText?: ReactNode;
  orientation?: CheckboxGroupOrientation;
  className?: string;
}

export function CheckboxGroup({ children, label, helperText, orientation = 'vertical', className }: CheckboxGroupProps) {
  const helperId = useId();

  return (
    <fieldset
      className={[styles.group, className ?? ''].filter(Boolean).join(' ')}
      aria-describedby={helperText != null ? helperId : undefined}
    >
      {label != null && <legend className={styles.legend}>{label}</legend>}
      <div className={orientation === 'horizontal' ? styles.row : styles.column}>{children}</div>
      {helperText != null && <HelperText id={helperId}>{helperText}</HelperText>}
    </fieldset>
  );
}
