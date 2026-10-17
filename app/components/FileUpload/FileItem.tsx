// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6912 (File loading)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-primary, color-border-subtle, color-border-attention, color-content-primary,
//         color-content-secondary, color-content-success, radius-10, stroke-default, space-8, space-12, space-16,
//         icon-14, font-label, text-button, leading-small, tracking-spacious, weight-regular

'use client';

import { type ReactNode } from 'react';
import { Button } from '../Button';
import { HelperText } from '../HelperText';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner';
import { DashedBorder } from './DashedBorder';
import styles from './FileUpload.module.css';

/** Figma `State`. */
export type FileItemStatus = 'uploaded' | 'uploading' | 'success' | 'error';

export interface FileItemProps {
  /** File name (Figma `Area label`). */
  name: string;
  status?: FileItemStatus;
  /** Error message shown under the row when `status="error"`. */
  error?: ReactNode;
  /** Shows the remove button, a cancel button while uploading (not in `success`). */
  onRemove?: () => void;
  className?: string;
}

export function FileItem({ name, status = 'uploaded', error, onRemove, className }: FileItemProps) {
  // Figma overrides the secondary icon-only Button with no fill and no stroke: the ghost style.
  // Uploading shows Icons / Close (cancel), the other states Icons / Trash-can.
  const remove = onRemove && status !== 'success' && (
    <Button
      variant="ghost"
      size="sm"
      icon={<Icon name={status === 'uploading' ? 'close' : 'trash-can'} />}
      aria-label={status === 'uploading' ? `Cancel ${name}` : `Remove ${name}`}
      onClick={onRemove}
    />
  );

  return (
    <div className={[styles.fileItem, className ?? ''].filter(Boolean).join(' ')}>
      <div className={`${styles.file} ${styles[status]}`} aria-busy={status === 'uploading' || undefined}>
        {(status === 'uploading' || status === 'success') && <DashedBorder />}
        <span className={styles.fileName}>{name}</span>
        {status === 'uploading' ? (
          <span className={styles.fileActions}>
            <Spinner label={`Uploading ${name}`} />
            {remove}
          </span>
        ) : status === 'success' ? (
          <Icon name="checkmark-filled" size={14} className={styles.successIcon} alt="Uploaded" />
        ) : (
          remove
        )}
      </div>
      {status === 'error' && error != null && <HelperText type="error">{error}</HelperText>}
    </div>
  );
}
