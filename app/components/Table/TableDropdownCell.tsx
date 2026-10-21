// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1501 (cell-type-dropdown)
// Extracted: 2026-10-21
// Tokens: color-content-primary, color-content-icon, color-content-disabled, color-input-pressed, color-border-strong,
//         stroke-lg, radius-10, space-4, space-8, space-16, icon-16

'use client';

import { forwardRef, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '../Icon/Icon';
import { Menu, MenuItem } from '../Menu';
import { TableCell, type TableCellProps } from './TableCell';
import styles from './Table.module.css';

export interface TableDropdownOption {
  value: string;
  label: string;
}

export interface TableDropdownCellProps extends Omit<TableCellProps, 'children' | 'skeleton' | 'onChange'> {
  options: TableDropdownOption[];
  /** Selected value (Figma `Main Text` shows its label). */
  value: string;
  onChange?: (value: string) => void;
  /** Accessible name of the trigger. */
  triggerLabel: string;
}

/**
 * Value with a chevron that opens a listbox. States: pressed (Figma `Selected`,
 * INPUT/Pressed fill) and open or keyboard focus (Figma `Focus`, 1.5px stroke, chevron up).
 */
export const TableDropdownCell = forwardRef<HTMLTableCellElement, TableDropdownCellProps>(function TableDropdownCell(
  { options, value, onChange, triggerLabel, disabled, ...rest },
  ref,
) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLElement | null)[]>([]);
  const selectedIndex = Math.max(0, options.findIndex((o) => o.value === value));
  const selected = options[selectedIndex];

  const focusOption = (i: number) => optionRefs.current[i]?.focus();

  const openMenu = (index = selectedIndex) => {
    setOpen(true);
    requestAnimationFrame(() => focusOption(index));
  };

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open]);

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      openMenu();
    }
  };

  const onOptionKey = (i: number) => (e: KeyboardEvent<HTMLElement>) => {
    const last = options.length - 1;
    if (e.key === 'ArrowDown') { e.preventDefault(); focusOption(Math.min(i + 1, last)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focusOption(Math.max(i - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); focusOption(0); }
    else if (e.key === 'End') { e.preventDefault(); focusOption(last); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') setOpen(false);
  };

  return (
    <TableCell ref={ref} skeleton="dropdown" hoverable={false} focusRing={false} disabled={disabled} {...rest}>
      <div ref={rootRef} className={styles.dropdownRoot}>
        <button
          ref={triggerRef}
          type="button"
          className={styles.dropdownTrigger}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-label={`${triggerLabel}: ${selected?.label ?? ''}`}
          disabled={disabled}
          onClick={() => (open ? close() : openMenu())}
          onKeyDown={onTriggerKey}
        >
          <span>{selected?.label}</span>
          <span className={styles.icon} aria-hidden="true">
            <Icon name={open ? 'chevron-up' : 'chevron-down'} size={16} />
          </span>
        </button>
        {open && (
          <Menu role="listbox" id={listId} className={styles.dropdownMenu}>
            {options.map((option, i) => (
              <MenuItem
                key={option.value}
                ref={(el) => { optionRefs.current[i] = el; }}
                role="option"
                label={option.label}
                selected={option.value === value}
                onClick={() => {
                  onChange?.(option.value);
                  close();
                }}
                onKeyDown={onOptionKey(i)}
              />
            ))}
          </Menu>
        )}
      </div>
    </TableCell>
  );
});
