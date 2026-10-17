// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6227-9774 (ChatSystemMessage)
// Extracted: 2026-10-17
// Tokens: color-content-secondary, color-content-icon, color-border-subtle, shadow-components-focus, stroke-default,
//         radius-xs, space-8, space-16, icon-13, font-label, text-button, leading-small, tracking-spacious, weight-medium

'use client';

import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Chat.module.css';

/**
 * Figma `Type`: `date` (Date 2, short dividers), `section` (Date, full-width dividers),
 * `event` (Message w/ icon), `system` (Message (System)), `checkpoint`.
 */
export type ChatSystemMessageType = 'date' | 'section' | 'event' | 'system' | 'checkpoint';

export interface ChatSystemMessageProps {
  type?: ChatSystemMessageType;
  /** Figma `Label` to `Label 4`. */
  children: ReactNode;
  /** `event` icon name (Figma `Icon`, default Icons / User). */
  icon?: string;
  /** `checkpoint`: makes "Restore checkpoint" a button. */
  onRestore?: () => void;
  className?: string;
}

export function ChatSystemMessage({ type = 'date', children, icon = 'user', onRestore, className }: ChatSystemMessageProps) {
  const label = <span className={styles.systemLabel}>{children}</span>;
  const classes = `${styles.system} ${className ?? ''}`;

  if (type === 'event' || type === 'system') {
    return (
      <div className={classes} data-type={type} role="status">
        {type === 'event' && (
          <span className={styles.systemIcon} aria-hidden="true">
            <Icon name={icon} size={13} />
          </span>
        )}
        {label}
      </div>
    );
  }

  if (type === 'checkpoint') {
    const content = (
      <>
        <span className={styles.systemIcon} aria-hidden="true">
          <Icon name="reset" size={13} />
        </span>
        {label}
      </>
    );
    return (
      <div className={classes} data-type={type}>
        <span className={styles.waveSide} data-side="left">
          <span className={styles.wave} aria-hidden="true" />
        </span>
        {onRestore ? (
          <button type="button" className={styles.checkpointButton} onClick={onRestore}>
            {content}
          </button>
        ) : (
          <span className={styles.checkpointTitle}>{content}</span>
        )}
        <span className={styles.waveSide} data-side="right">
          <span className={styles.wave} aria-hidden="true" />
        </span>
      </div>
    );
  }

  return (
    <div className={classes} data-type={type} role="separator" aria-label={typeof children === 'string' ? children : undefined}>
      <span className={styles.divider} data-side="left" />
      {label}
      <span className={styles.divider} data-side="right" />
    </div>
  );
}
