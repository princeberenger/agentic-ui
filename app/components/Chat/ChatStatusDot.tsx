// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6293-6710 (Chat status dot)
// Extracted: 2026-10-17
// Tokens: color-content-disabled, color-content-primary, color-content-warning-icons, color-bg-attention,
//         color-bg-success, stroke-default, space-4, icon-14, icon-16

import styles from './Chat.module.css';

/** Figma `Type`. */
export type ChatStatus = 'gray' | 'black' | 'yellow' | 'red' | 'green';

export interface ChatStatusDotProps {
  status?: ChatStatus;
  /** Figma `Show connection line`: 1px line under the dot, grows with the parent. */
  showLine?: boolean;
  /** Accessible status text (the dot is decorative without it). */
  label?: string;
  className?: string;
}

export function ChatStatusDot({ status = 'gray', showLine = true, label, className }: ChatStatusDotProps) {
  return (
    <span
      className={`${styles.statusDot} ${className ?? ''}`}
      data-status={status}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className={styles.dotBox}>
        <span className={styles.dot} />
      </span>
      {showLine && <span className={styles.line} />}
    </span>
  );
}
