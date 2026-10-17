// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6848 (File upload area)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-primary, color-input-hover-dark, color-border-subtle, color-border-medium,
//         color-border-disabled, color-content-primary, color-content-secondary, color-content-icon,
//         color-content-disabled, radius-md, stroke-default, space-2, space-16, space-24, space-32, icon-32,
//         font-body, text-small, leading-small, text-tiny, leading-tiny, weight-regular, duration-hover

'use client';

import { useId, useRef, useState, type DragEvent, type ReactNode } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import { DashedBorder } from './DashedBorder';
import styles from './FileUpload.module.css';

export interface FileUploadProps {
  /** Called with the dropped or selected files. */
  onFiles?: (files: File[]) => void;
  /** Main text (Figma `Area label`). */
  label?: ReactNode;
  /** Secondary lines (Figma `Hint label 1`, `Hint label 2`). */
  hints?: ReactNode[];
  /** Button text; set to null to hide it (Figma `Show button`). */
  buttonLabel?: string | null;
  /** Icon (Figma `Upload icon`); set to null to hide it (Figma `Show icon`). */
  icon?: ReactNode | null;
  /** File types for the picker, e.g. ".pdf,image/png". */
  accept?: string;
  multiple?: boolean;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  className?: string;
}

export function FileUpload({
  onFiles,
  label = 'Drag and drop your files here',
  hints = ['Up to 10 files', 'PDF, JPEG or PNG less than 5MB'],
  buttonLabel = 'Or select file',
  icon = <Icon name="upload" size={32} />,
  accept,
  multiple = true,
  disabled = false,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const labelId = useId();

  const send = (list: FileList | null) => {
    if (disabled || !list || list.length === 0) return;
    onFiles?.(Array.from(list));
  };

  const onDrag = (e: DragEvent<HTMLDivElement>, over: boolean) => {
    e.preventDefault();
    if (!disabled) setDragging(over);
  };

  return (
    <div
      className={[styles.area, dragging ? styles.dragging : '', disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}
      role="group"
      aria-labelledby={labelId}
      aria-disabled={disabled || undefined}
      onDragEnter={(e) => onDrag(e, true)}
      onDragOver={(e) => onDrag(e, true)}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onDrag(e, false);
      }}
      onDrop={(e) => {
        onDrag(e, false);
        send(e.dataTransfer.files);
      }}
    >
      <DashedBorder />
      {icon != null && <span className={styles.icon}>{icon}</span>}
      <p id={labelId} className={styles.label}>{label}</p>
      {buttonLabel != null && (
        <Button variant="secondary" size="md" disabled={disabled} onClick={() => inputRef.current?.click()}>
          {buttonLabel}
        </Button>
      )}
      {hints.length > 0 && (
        <div className={styles.hints}>
          {hints.map((hint, i) => (
            <p key={i} className={styles.hint}>{hint}</p>
          ))}
        </div>
      )}
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        onChange={(e) => {
          send(e.target.files);
          e.target.value = '';
        }}
      />
    </div>
  );
}
