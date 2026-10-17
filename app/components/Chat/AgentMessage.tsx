// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6246-10120 (AgentMessage)
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-attention-light, color-bg-attention, color-input-hover-dark, color-content-primary,
//         radius-full, space-8, space-10, space-12, icon-16, font-body, text-regular, leading-regular, duration-hover

import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Chat.module.css';

export interface AgentMessageProps {
  /** Figma `Text label`. */
  text: ReactNode;
  /** Content under the text (Figma `Type=code` Code block, `Type=tool call` Chat Tool Call). */
  children?: ReactNode;
  /** Figma `State=error`: red pill and warning icon. */
  error?: boolean;
  /** Figma `Action button`, e.g. a secondary filled Button "View copy". */
  action?: ReactNode;
  /** A `<ChatMessageMetadata align="start">` (Figma `Metadata`). */
  metadata?: ReactNode;
  className?: string;
}

export function AgentMessage({ text, children, error, action, metadata, className }: AgentMessageProps) {
  return (
    <div className={`${styles.agentMessage} ${className ?? ''}`}>
      {error ? (
        <div className={styles.agentError}>
          <span className={styles.agentBubble} data-error>
            <span className={styles.messageText}>{text}</span>
          </span>
          <span className={styles.errorIcon}>
            <Icon name="warning-filled" size={16} alt="Error" />
          </span>
        </div>
      ) : children ? (
        <div className={styles.agentRich}>
          <span className={styles.messageText}>{text}</span>
          {children}
        </div>
      ) : (
        <span className={styles.agentBubble}>
          <span className={styles.messageText}>{text}</span>
        </span>
      )}
      {action && <div className={styles.agentAction}>{action}</div>}
      {metadata}
    </div>
  );
}
