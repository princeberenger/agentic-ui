// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=814-110
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=816-3579 (Switch with label)
// Extracted: 2026-10-17
// Tokens: color-switch-bg-active, color-switch-bg-inactive, color-switch-knob-active, color-switch-knob-inactive,
//         color-switch-knob-icon, color-switch-knob-disabled, color-border-disabled, color-border-subtle,
//         color-content-icon, color-content-primary, color-content-secondary,
//         shadow-switch-toggle, shadow-switch-track, shadow-components-focus,
//         icon-12, icon-13, icon-16, icon-20, icon-24, stroke-default, radius-full, space-4, space-12,
//         font-body, text-small, leading-small, text-tiny, leading-tiny, weight-regular, tracking-normal,
//         duration-hover, ease-in-out-quart

'use client';

import { forwardRef, useId, useState, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Switch.module.css';

/** Figma `Size`. */
export type SwitchSize = 'sm' | 'lg';

/** Side of the switch next to its label (Switch with label, `Position`). */
export type SwitchPosition = 'left' | 'right';

export interface SwitchProps {
  /** Controlled value (Figma `Selected`). */
  checked?: boolean;
  /** Initial value when uncontrolled. */
  defaultChecked?: boolean;
  /** Called with the next value when the user toggles the switch. */
  onChange?: (checked: boolean) => void;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  /** Figma `Size`. Switch with label always uses `sm`. */
  size?: SwitchSize;
  /** Label (`Show Label`, `Label`). Required for an accessible name unless `aria-label` is set. */
  label?: ReactNode;
  /** Secondary line under the label (`Show Description`, `Description`). */
  description?: ReactNode;
  /** Side of the switch (`Position`): `left` puts it before the label, `right` pushes it to the end. */
  switchPosition?: SwitchPosition;
  name?: string;
  value?: string;
  id?: string;
  'aria-label'?: string;
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    size = 'sm',
    label,
    description,
    switchPosition = 'left',
    name,
    value,
    id,
    'aria-label': ariaLabel,
    className,
  },
  ref,
) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked ?? internal;
  const autoId = useId();
  const inputId = id ?? autoId;
  const descriptionId = description != null ? `${inputId}-description` : undefined;
  const hasText = label != null || description != null;

  const track = (
    <span
      className={[
        styles.track,
        styles[size],
        on ? styles.on : '',
        disabled ? styles.disabled : '',
        hasText ? '' : className ?? '',
      ].filter(Boolean).join(' ')}
    >
      <input
        ref={ref}
        id={inputId}
        className={styles.input}
        type="checkbox"
        role="switch"
        name={name}
        value={value}
        checked={on}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={descriptionId}
        onChange={(e) => {
          if (checked === undefined) setInternal(e.target.checked);
          onChange?.(e.target.checked);
        }}
      />
      <span className={styles.mask}>
        <span className={styles.knob}>
          <Icon
            name={size === 'lg' ? 'switch-check-lg' : 'switch-check-sm'}
            size={size === 'lg' ? 20 : 12}
            className={styles.check}
          />
        </span>
      </span>
    </span>
  );

  if (!hasText) return track;

  return (
    <label
      htmlFor={inputId}
      className={[
        styles.field,
        switchPosition === 'right' ? styles.right : '',
        disabled ? styles.fieldDisabled : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {switchPosition === 'left' && track}
      <span className={styles.text}>
        {label != null && <span className={styles.label}>{label}</span>}
        {description != null && <span id={descriptionId} className={styles.description}>{description}</span>}
      </span>
      {switchPosition === 'right' && track}
    </label>
  );
});
