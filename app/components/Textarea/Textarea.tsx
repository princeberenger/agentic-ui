// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2003-3900
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-secondary, color-border-subtle, color-border-strong, color-border-attention,
//         color-content-primary, color-content-secondary, color-content-disabled, space-8, space-12,
//         radius-10, stroke-default, icon-14, font-label, font-body, text-button, text-small, leading-small,
//         tracking-spacious, weight-regular, duration-hover

'use client';

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { HelperText } from '../HelperText';
import { Icon } from '../Icon/Icon';
import styles from './Textarea.module.css';

/** Validation state (Figma `State=error`). */
export type TextareaStatus = 'default' | 'error';

export type TextareaProps = {
  /** Label above the field (Figma `Show Label`, `Label`). */
  label?: ReactNode;
  /** HelperText under the field, error type when `status="error"` (Figma `Show helper text`). */
  helperText?: ReactNode;
  status?: TextareaStatus;
  className?: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, helperText, status = 'default', id, className, disabled, readOnly, onScroll, onFocus, onBlur, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = helperText != null ? `${inputId}-helper` : undefined;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

  // SCROLL FADE: shown while text hides below the fold and the field is not focused
  const [moreBelow, setMoreBelow] = useState(false);
  const [focused, setFocused] = useState(false);
  const measure = useCallback(() => {
    const el = textareaRef.current;
    if (el) setMoreBelow(el.scrollHeight - el.scrollTop - el.clientHeight > 1);
  }, []);

  useEffect(() => {
    measure();
    const el = textareaRef.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener('input', measure);
    return () => {
      observer.disconnect();
      el.removeEventListener('input', measure);
    };
  }, [measure, rest.value]);

  const fade = moreBelow && !focused && status === 'default' && !disabled && !readOnly;

  return (
    <div className={[styles.field, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
      {label != null && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <span className={styles.control}>
        <textarea
          ref={textareaRef}
          id={inputId}
          className={[styles.textarea, styles[status] ?? ''].filter(Boolean).join(' ')}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={status === 'error' || undefined}
          aria-describedby={helperId}
          onScroll={(e) => {
            measure();
            onScroll?.(e);
          }}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
        {fade && (
          <span className={styles.fade} aria-hidden="true">
            <Icon name="down-to-bottom" size={14} className={styles.fadeIcon} />
          </span>
        )}
      </span>
      {helperText != null && (
        <HelperText id={helperId} type={status === 'error' ? 'error' : 'default'}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
});
