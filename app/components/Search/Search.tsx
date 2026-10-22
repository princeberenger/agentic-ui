// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6162
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6250 (_Search base)
// Extracted: 2026-10-22
// Tokens: color-bg-primary, color-bg-secondary, color-bg-tertiary, color-border-subtle, color-input-hover-dark,
//         color-content-primary, color-content-secondary, color-content-icon, color-content-disabled, color-input-selected,
//         input-regular, input-small, radius-md, radius-10, radius-xs, stroke-sm, stroke-default, space-2, space-8,
//         icon-14, icon-16, icon-20, icon-24, font-body, font-label, text-small, leading-small, text-button,
//         text-super-tiny, weight-regular, tracking-spacious, duration-hover

'use client';

import { forwardRef, useImperativeHandle, useRef, useState, type ChangeEvent } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Search.module.css';

/** Figma `Size`: lg 40px, sm 32px. */
export type SearchSize = 'lg' | 'sm';

export type SearchProps = {
  size?: SearchSize;
  /** Starts as the icon-only button and expands on click (Figma `Expanded=false`). */
  collapsible?: boolean;
  /** Placeholder state while results load (Figma `State=skeleton`). */
  loading?: boolean;
  /** Shortcut hint shown while the field is empty and unfocused (Figma `shortcut`, e.g. "⌘S"). Display only: the app binds the key. */
  shortcut?: string;
  /** Called with an empty value when the clear button is pressed. */
  onClear?: () => void;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'size' | 'type'>;

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  {
    size = 'lg',
    collapsible = false,
    loading = false,
    shortcut,
    onClear,
    className,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled,
    placeholder = 'Search',
    'aria-label': ariaLabel = 'Search',
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const [internal, setInternal] = useState(String(defaultValue ?? ''));
  const current = value !== undefined ? String(value) : internal;
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(!collapsible);
  const iconSize = size === 'lg' ? 16 : 14;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternal(e.target.value);
    onChange?.(e);
  };

  const clear = () => {
    if (value === undefined) setInternal('');
    onClear?.();
    inputRef.current?.focus();
  };

  const classes = [styles.search, styles[size], className ?? ''].filter(Boolean).join(' ');

  if (loading) return <span className={`${classes} ${styles.skeleton}`} aria-busy="true" aria-label={ariaLabel} />;

  // Expanded=false: icon-only button
  if (!expanded) {
    return (
      <button
        type="button"
        className={`${classes} ${styles.collapsed}`}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => {
          setExpanded(true);
          requestAnimationFrame(() => inputRef.current?.focus());
        }}
      >
        <Icon name="search" size={iconSize} />
      </button>
    );
  }

  return (
    <span className={[classes, current ? styles.filled : '', disabled ? styles.disabled : ''].filter(Boolean).join(' ')}>
      <span className={styles.searchIcon}>
        <Icon name="search" size={iconSize} />
      </span>
      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        value={current}
        onChange={handleChange}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          if (collapsible && !e.target.value) setExpanded(false);
          onBlur?.(e);
        }}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel}
        {...rest}
      />
      {current && !disabled ? (
        <button
          type="button"
          className={styles.clear}
          aria-label="Clear search"
          // keep the focus in the field
          onMouseDown={(e) => e.preventDefault()}
          onClick={clear}
        >
          <Icon name="close" size={iconSize} />
        </button>
      ) : (
        shortcut && !focused && !disabled && (
          <span className={styles.shortcut} aria-hidden="true">
            <kbd className={styles.kbd}>{shortcut}</kbd>
          </span>
        )
      )}
    </span>
  );
});
