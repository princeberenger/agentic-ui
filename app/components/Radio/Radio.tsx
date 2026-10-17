// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2977
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=812-4430 (Radio button with label)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-disabled, shadow-components-focus,
//         icon-16, icon-24, space-4, space-8, space-10, radius-full, stroke-default,
//         font-body, text-small, leading-small, tracking-normal, weight-regular, weight-medium

'use client';

import { forwardRef, useId, type ChangeEvent, type ReactNode } from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
  /** Controlled value (Figma `Selected`). Leave undefined to let the browser manage the group. */
  checked?: boolean;
  /** Initial value when uncontrolled. */
  defaultChecked?: boolean;
  /** Called when the user selects this radio. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  /** Radios with the same name form one group. */
  name?: string;
  value?: string;
  /** Label (Radio button with label, `Label`). Required for an accessible name unless `aria-label` is set. */
  label?: ReactNode;
  /** Secondary line under the label (`Show description`, `Description`). */
  description?: ReactNode;
  id?: string;
  'aria-label'?: string;
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, defaultChecked, onChange, disabled = false, name, value, label, description, id, 'aria-label': ariaLabel, className },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const descriptionId = description != null ? `${inputId}-description` : undefined;

  const control = (
    <span className={[styles.control, disabled ? styles.disabled : '', label == null ? className ?? '' : ''].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        id={inputId}
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={descriptionId}
        onChange={onChange}
      />
      <span className={styles.circle} />
    </span>
  );

  if (label == null) return control;

  return (
    <label
      htmlFor={inputId}
      className={[
        styles.field,
        description != null ? styles.withDescription : '',
        disabled ? styles.disabled : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {control}
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description != null && <span id={descriptionId} className={styles.description}>{description}</span>}
      </span>
    </label>
  );
});
