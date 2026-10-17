// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4008-623
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-secondary, color-border-subtle, shadow-elevation-3, radius-md, radius-xs, stroke-sm,
//         color-content-accent, color-bg-accent-light, color-content-success, color-bg-success-light,
//         color-bg-attention, color-bg-attention-light, color-content-attention, color-content-warning-text,
//         color-bg-warning, color-content-warning-icons, color-content-on-primary, color-content-primary,
//         icon-14, icon-24, space-4, space-8, space-12, space-16, space-32,
//         font-label, font-body, text-tiny, leading-tiny, weight-regular, tracking-normal

'use client';

import { type ReactNode } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import styles from './Toast.module.css';

/** Figma `Type`. */
export type ToastType = 'info' | 'success' | 'warning' | 'destructive';

export interface ToastProps {
  type?: ToastType;
  /** Label in the title badge (Figma `Title`). */
  title: string;
  /** Body text (Figma `Toast text`). */
  description: ReactNode;
  /** Icon in the title badge (Figma `Title icon`, Icons / Checkmark by default). */
  icon?: ReactNode;
  /** Extra content under the text, e.g. the destructive text input (Figma `Show text input`). */
  children?: ReactNode;
  /** Footer buttons, each one fills an equal share (Figma `Action buttons`). */
  actions?: ReactNode;
  /** Shows the close button (Figma `Close button`) and is called when it is clicked. */
  onClose?: () => void;
  /** Accessible name of the close button. */
  closeLabel?: string;
  className?: string;
}

export function Toast({
  type = 'info',
  title,
  description,
  icon = <Icon name="checkmark" size={14} />,
  children,
  actions,
  onClose,
  closeLabel = 'Close',
  className,
}: ToastProps) {
  return (
    <div
      role={type === 'destructive' ? 'alert' : 'status'}
      className={[styles.toast, styles[type], className ?? ''].filter(Boolean).join(' ')}
    >
      <div className={styles.header}>
        <span className={styles.badge}>
          <span className={styles.badgeIcon}>{icon}</span>
          <span className={styles.badgeLabel}>{title}</span>
        </span>
      </div>
      <div className={[styles.content, children != null ? styles.withExtra : ''].filter(Boolean).join(' ')}>
        <p className={styles.text}>{description}</p>
        {children}
      </div>
      {actions != null && <div className={styles.footer}>{actions}</div>}
      {onClose && (
        <Button
          className={styles.close}
          variant="secondary"
          size="sm"
          icon={<Icon name="close" />}
          aria-label={closeLabel}
          onClick={onClose}
        />
      )}
    </div>
  );
}
