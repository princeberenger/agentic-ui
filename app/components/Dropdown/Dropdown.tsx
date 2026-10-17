// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4084-4742
// Extracted: 2026-10-17
// Tokens: color-button-secondary, color-border-subtle, color-border-medium, color-border-strong, color-border-disabled,
//         color-content-primary, color-content-secondary, color-content-icon, color-content-disabled, color-input-hover-dark,
//         shadow-elevation-1, shadow-inset-bottom, shadow-components-focus, input-regular, space-4, space-12,
//         radius-10, stroke-default, icon-16, font-body, text-small, leading-small, weight-regular, duration-hover

'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '../Icon/Icon';
import { Menu, MenuItem } from '../Menu';
import styles from './Dropdown.module.css';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  /** Controlled value. */
  value?: string;
  /** Initial value when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Text shown while nothing is selected (Figma `Label`). */
  placeholder?: string;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className?: string;
}

export function Dropdown({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = '- Select -',
  disabled = false,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  className,
}: DropdownProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const selected = options.find((o) => o.value === current);
  const [open, setOpen] = useState(false);
  const autoId = useId();
  const triggerId = id ?? autoId;
  const listId = `${triggerId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLElement | null)[]>([]);

  const enabled = options.map((o, i) => (o.disabled ? -1 : i)).filter((i) => i >= 0);
  const focusOption = (index: number) => optionRefs.current[index]?.focus();

  const openMenu = (focus: 'selected' | 'first' | 'last' = 'selected') => {
    setOpen(true);
    const start = selected && focus === 'selected' ? options.indexOf(selected) : focus === 'last' ? enabled[enabled.length - 1] : enabled[0];
    requestAnimationFrame(() => focusOption(start ?? enabled[0]));
  };

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const choose = (option: DropdownOption) => {
    if (value === undefined) setInternal(option.value);
    onChange?.(option.value);
    close();
  };

  // click outside closes the menu
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open]);

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      openMenu(e.key === 'ArrowUp' && !selected ? 'last' : 'selected');
    }
  };

  const onOptionKey = (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    const pos = enabled.indexOf(index);
    if (e.key === 'ArrowDown') { e.preventDefault(); focusOption(enabled[Math.min(pos + 1, enabled.length - 1)]); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focusOption(enabled[Math.max(pos - 1, 0)]); }
    else if (e.key === 'Home') { e.preventDefault(); focusOption(enabled[0]); }
    else if (e.key === 'End') { e.preventDefault(); focusOption(enabled[enabled.length - 1]); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') close(false);
  };

  return (
    <div ref={rootRef} className={[styles.root, className ?? ''].filter(Boolean).join(' ')}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={[styles.trigger, open ? styles.open : ''].filter(Boolean).join(' ')}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={onTriggerKey}
      >
        <span className={selected ? styles.value : styles.placeholder}>{selected ? selected.label : placeholder}</span>
        <Icon name="chevron-sort" size={16} className={styles.icon} />
      </button>
      {open && (
        <Menu role="listbox" id={listId} className={styles.menu}>
          {options.map((option, i) => (
            <MenuItem
              key={option.value}
              ref={(el) => { optionRefs.current[i] = el; }}
              role="option"
              label={option.label}
              selected={option.value === current}
              disabled={option.disabled}
              onClick={() => choose(option)}
              onKeyDown={onOptionKey(i)}
            />
          ))}
        </Menu>
      )}
    </div>
  );
}
