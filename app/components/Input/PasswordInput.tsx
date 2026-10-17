// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6133-736
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-disabled, color-content-success,
//         space-12, icon-14, font-label, text-button, text-regular, leading-small, leading-regular,
//         tracking-spacious, weight-regular (rules: see ValidationText)

'use client';

import { forwardRef, useId, useState, type ChangeEvent, type ReactNode } from 'react';
import { HelperText } from '../HelperText';
import { Icon } from '../Icon/Icon';
import { ValidationText, ValidationTextLine, type ValidationTextType } from '../ValidationText';
import { Input, type InputProps, type InputStatus } from './Input';
import labelStyles from './TextInput.module.css';
import styles from './PasswordInput.module.css';

/** One line of Validation Text (Password). */
export interface PasswordRule {
  /** Rule text (validation-text-line `Label`). */
  label: string;
  /** Whether the current value satisfies the rule. */
  test: (value: string) => boolean;
}

export type PasswordInputProps = Omit<InputProps, 'type' | 'status'> & {
  /** Label above the field (Figma `Show label`, `Label text`). */
  label?: ReactNode;
  /** Rules listed under the field (Figma `Show validation`, `# of Rules`). Pending while empty, then success or error. */
  rules?: PasswordRule[];
  /**
   * Overrides the status computed from the rules (all met: success, else error).
   * Use `error` with `helperText` for a single message (Figma `State=error-2`).
   */
  status?: InputStatus;
  /** HelperText under the field, in place of the rules (Figma `Show helper text`). */
  helperText?: ReactNode;
};

/** The 5 rules shown in Figma (Validation Text (Password), `# of Rules=5`). */
export const PASSWORD_RULES: PasswordRule[] = [
  { label: '8 Character minimum', test: (v) => v.length >= 8 },
  { label: '1 Lowercase character', test: (v) => /[a-z]/.test(v) },
  { label: '1 Uppercase character', test: (v) => /[A-Z]/.test(v) },
  { label: '1 Special Character', test: (v) => /[^A-Za-z0-9]/.test(v) },
  { label: '1 Number', test: (v) => /[0-9]/.test(v) },
];

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput(
  { label, rules, status, helperText, id, className, disabled, value, defaultValue, onChange, ...rest },
  ref,
) {
  const [internal, setInternal] = useState(String(defaultValue ?? ''));
  const current = value !== undefined ? String(value) : internal;
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = `${inputId}-validation`;

  const ruleStates: ValidationTextType[] = (rules ?? []).map((r) =>
    current === '' ? 'default' : r.test(current) ? 'success' : 'error',
  );
  const computed: InputStatus =
    current === '' || ruleStates.length === 0 ? 'default' : ruleStates.every((s) => s === 'success') ? 'success' : 'error';
  const fieldStatus = status ?? computed;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternal(e.target.value);
    onChange?.(e);
  };

  return (
    <div
      className={[
        labelStyles.field,
        fieldStatus !== 'default' ? labelStyles.hasStatus : '',
        disabled ? labelStyles.disabled : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {label != null && (
        <label htmlFor={inputId} className={labelStyles.label}>
          {label}
        </label>
      )}
      <span className={styles.control}>
        <Input
          ref={ref}
          id={inputId}
          type="password"
          className={[styles.input, fieldStatus === 'success' ? styles.withMatch : ''].filter(Boolean).join(' ')}
          status={fieldStatus}
          disabled={disabled}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={handleChange}
          aria-describedby={helperText != null || rules ? describedBy : undefined}
          {...rest}
        />
        {/* Password match */}
        {fieldStatus === 'success' && <Icon name="checkmark" size={14} className={styles.match} alt="Valid" />}
      </span>
      {helperText != null ? (
        <HelperText id={describedBy} type={fieldStatus === 'error' ? 'error' : 'default'}>
          {helperText}
        </HelperText>
      ) : (
        rules && (
          <ValidationText id={describedBy}>
            {rules.map((rule, i) => (
              <ValidationTextLine key={rule.label} type={ruleStates[i]}>
                {rule.label}
              </ValidationTextLine>
            ))}
          </ValidationText>
        )
      )}
    </div>
  );
});
