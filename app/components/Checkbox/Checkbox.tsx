// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2639
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=815-75 (Checkbox with label)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-icon, color-content-disabled,
//         color-bg-tertiary, color-bg-disabled, color-bg-secondary, shadow-components-focus,
//         icon-20, icon-24, space-2, space-4, space-8, space-12, space-24, radius-xs, radius-10,
//         font-body, text-small, leading-small, tracking-normal, weight-regular, weight-medium

'use client';

import { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Checkbox.module.css';

/** Figma `Selected`. */
export type CheckboxValue = boolean | 'indeterminate';

/** Figma `Type`. */
export type CheckboxVariant = 'stroke' | 'filled';

export interface CheckboxProps {
  /** Controlled value (Figma `Selected`). */
  checked?: CheckboxValue;
  /** Initial value when uncontrolled. */
  defaultChecked?: CheckboxValue;
  /** Called with the next value when the user toggles the checkbox. */
  onChange?: (checked: boolean) => void;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  /**
   * Box style (Figma `Type`). With a label it follows `background`:
   * `filled` on the background card, `stroke` without.
   */
  variant?: CheckboxVariant;
  /** Label (Checkbox with label, `Label`). Required for an accessible name unless `aria-label` is set. */
  label?: ReactNode;
  /** Secondary line under the label (`Show description`, `Description`). */
  description?: ReactNode;
  /** Card around the checkbox and its label (`Style=has-background`). */
  background?: boolean;
  name?: string;
  value?: string;
  id?: string;
  'aria-label'?: string;
  className?: string;
}

const GLYPHS: Record<CheckboxVariant, Record<'true' | 'indeterminate' | 'false', string | null>> = {
  stroke: { true: 'checkbox-stroke-selected', indeterminate: 'checkbox-stroke-indeterminate', false: 'checkbox-unselected' },
  // filled + unselected is a plain rounded square, drawn in CSS
  filled: { true: 'checkbox-filled-selected', indeterminate: 'checkbox-filled-indeterminate', false: null },
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    variant,
    label,
    description,
    background = false,
    name,
    value: inputValue,
    id,
    'aria-label': ariaLabel,
    className,
  },
  ref,
) {
  const [internal, setInternal] = useState<CheckboxValue>(defaultChecked);
  const value = checked ?? internal;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  // indeterminate is a DOM property only
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = value === 'indeterminate';
  }, [value]);

  const autoId = useId();
  const inputId = id ?? autoId;
  const descriptionId = description != null ? `${inputId}-description` : undefined;
  const boxVariant: CheckboxVariant = label != null ? (background ? 'filled' : 'stroke') : (variant ?? 'stroke');
  const glyph = GLYPHS[boxVariant][String(value) as 'true' | 'indeterminate' | 'false'];

  const box = (
    <span
      className={[
        styles.box,
        boxVariant === 'filled' ? styles.filled : styles.stroke,
        value === false ? '' : styles.on,
        disabled ? styles.disabled : '',
        label == null ? className ?? '' : '',
      ].filter(Boolean).join(' ')}
    >
      <input
        ref={inputRef}
        id={inputId}
        className={styles.input}
        type="checkbox"
        name={name}
        value={inputValue}
        checked={value === true}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={descriptionId}
        onChange={(e) => {
          const next = e.target.checked;
          if (checked === undefined) setInternal(next);
          onChange?.(next);
        }}
      />
      {glyph ? <Icon name={glyph} size={20} className={styles.glyph} /> : <span className={styles.square} />}
    </span>
  );

  if (label == null) return box;

  return (
    <label
      htmlFor={inputId}
      className={[
        styles.field,
        background ? styles.card : '',
        description != null ? styles.withDescription : '',
        value === true ? styles.selected : '',
        disabled ? styles.disabled : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {box}
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description != null && <span id={descriptionId} className={styles.description}>{description}</span>}
      </span>
    </label>
  );
});
