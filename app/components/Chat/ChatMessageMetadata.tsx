// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6270-1160 (ChatMessageMetadata)
// Extracted: 2026-10-17
// Tokens: color-content-secondary, color-content-icon, color-badge-label-red, shadow-components-focus, radius-xs,
//         space-2, space-6, space-8, space-12, icon-14, font-body, text-tiny, leading-tiny

'use client';

import { Fragment, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { ChatReadReceipt, type ChatReceiptStatus } from './ChatReadReceipt';
import styles from './Chat.module.css';

export interface ChatMessageMetadataProps {
  /** Read receipt (Figma `Show Read receipt`). */
  receipt?: ChatReceiptStatus;
  /** Time (Figma `Show Time`), e.g. "9:15 AM". */
  time?: ReactNode;
  /** Error text (Figma `Show Error`), e.g. "Not sent". */
  error?: ReactNode;
  /** Actions (Figma `Show actions`): Duplicate (copy), Reset, Thumbs up, Thumbs down. */
  onCopy?: () => void;
  onRetry?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  /** Row alignment: end under a user message, start under an agent message. */
  align?: 'start' | 'end';
  className?: string;
}

function Action({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button type="button" className={styles.metaAction} aria-label={label} onClick={onClick}>
      <Icon name={icon} size={14} />
    </button>
  );
}

/** Metadata row; groups are separated by 2px dots (Figma `Divider 1` to `Divider 3`). */
export function ChatMessageMetadata({
  receipt,
  time,
  error,
  onCopy,
  onRetry,
  onThumbsUp,
  onThumbsDown,
  align = 'end',
  className,
}: ChatMessageMetadataProps) {
  const actions = [
    onCopy && <Action key="copy" icon="copy" label="Copy" onClick={onCopy} />,
    onRetry && <Action key="reset" icon="reset" label="Retry" onClick={onRetry} />,
    onThumbsUp && <Action key="up" icon="thumbs-up" label="Good response" onClick={onThumbsUp} />,
    onThumbsDown && <Action key="down" icon="thumbs-down" label="Bad response" onClick={onThumbsDown} />,
  ].filter(Boolean);

  const groups = [
    receipt && <ChatReadReceipt status={receipt} />,
    time != null && <span className={styles.metaText}>{time}</span>,
    error != null && <span className={styles.metaError}>{error}</span>,
    actions.length > 0 && <span className={styles.metaActions}>{actions}</span>,
  ].filter(Boolean);

  return (
    <div className={`${styles.metadata} ${className ?? ''}`} data-align={align}>
      {groups.map((group, i) => (
        <Fragment key={i}>
          {i > 0 && <span className={styles.metaDivider} aria-hidden="true" />}
          {group}
        </Fragment>
      ))}
    </div>
  );
}
