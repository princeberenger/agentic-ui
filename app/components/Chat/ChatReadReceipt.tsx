// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6279-11285 (ChatMetadataRead)
// Extracted: 2026-10-17
// Tokens: color-content-secondary, color-content-icon, color-content-disabled, color-content-primary, color-bg-attention,
//         space-4, icon-14, font-body, text-tiny, leading-tiny

import { Icon } from '../Icon/Icon';
import styles from './Chat.module.css';

/** Figma `Type`. */
export type ChatReceiptStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'failed';

const LABELS: Record<ChatReceiptStatus, string> = {
  sending: 'Sending',
  sent: 'Sent',
  delivered: 'Delivered',
  read: 'Read',
  failed: 'Failed',
};

const ICONS: Partial<Record<ChatReceiptStatus, string>> = {
  sending: 'time',
  sent: 'checkmark',
  delivered: 'checkmark-2',
  read: 'checkmark-2',
};

export interface ChatReadReceiptProps {
  status: ChatReceiptStatus;
  /** Figma `Label 1` to `Label 5`. */
  label?: string;
  className?: string;
}

export function ChatReadReceipt({ status, label = LABELS[status], className }: ChatReadReceiptProps) {
  const icon = ICONS[status];
  return (
    <span className={`${styles.receipt} ${className ?? ''}`} data-status={status}>
      {icon && (
        <span className={styles.receiptIcon} aria-hidden="true">
          <Icon name={icon} size={14} />
        </span>
      )}
      <span className={styles.receiptLabel}>{label}</span>
    </span>
  );
}
