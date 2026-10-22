// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=771-1444 (cell-type-editable-field)
// Extracted: 2026-10-21
// Tokens: color-content-icon, color-content-disabled, space-8, space-16, icon-16, color-border-strong, stroke-lg, stroke-default

'use client';

import { forwardRef, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import { TextInput } from '../Input';
import { TableCell, type TableCellProps } from './TableCell';
import styles from './Table.module.css';

export interface TableEditableCellProps extends Omit<TableCellProps, 'children' | 'skeleton' | 'onChange'> {
  /** Committed value (Figma `Input text`). */
  value: string;
  /** Called with the new value on confirm (check button or Enter). Escape restores `value`. */
  onCommit?: (value: string) => void;
  placeholder?: string;
  /** Shows the edit icon while not editing (Figma `Show icon`). */
  showIcon?: boolean;
  /** Accessible name of the field. */
  inputLabel: string;
}

/**
 * Text input in a cell. While editing (State=Focus) the edit icon becomes a
 * secondary icon-only button with Icons / Checkmark that confirms the value.
 */
export const TableEditableCell = forwardRef<HTMLTableCellElement, TableEditableCellProps>(function TableEditableCell(
  { value, onCommit, placeholder, showIcon = true, inputLabel, disabled, className, ...rest },
  ref,
) {
  const [draft, setDraft] = useState(value);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commit = () => {
    onCommit?.(draft);
    setEditing(false);
    inputRef.current?.blur();
  };

  const onFocus = () => {
    if (!editing) setDraft(value);
    setEditing(true);
  };

  // leaving the cell (not to the confirm button) cancels the edit
  const onBlur = (e: FocusEvent<HTMLTableCellElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setEditing(false);
    setDraft(value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setDraft(value);
      setEditing(false);
      inputRef.current?.blur();
    }
  };

  return (
    <TableCell
      ref={ref}
      skeleton="text"
      hoverable={false}
      focusRing={false}
      disabled={disabled}
      className={`${styles.editable} ${className ?? ''}`}
      data-editing={editing || undefined}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    >
      <TextInput
        ref={inputRef}
        className={styles.input}
        value={editing ? draft : value}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={inputLabel}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {editing ? (
        <Button variant="secondary" size="lg" icon={<Icon name="checkmark" />} aria-label="Confirm" onClick={commit} />
      ) : (
        showIcon && (
          <span className={styles.icon} aria-hidden="true">
            <Icon name="edit" size={16} />
          </span>
        )
      )}
    </TableCell>
  );
});
