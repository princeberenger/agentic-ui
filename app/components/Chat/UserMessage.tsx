// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17618 (UserMessage)
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-secondary, color-border-subtle, color-input-hover-dark, color-content-primary,
//         shadow-elevation-1, stroke-sm, radius-lg, radius-xs, space-6, space-8, space-16, font-body, text-regular,
//         leading-regular, duration-hover

import { type ReactNode } from 'react';
import { Badge } from '../Badge';
import styles from './Chat.module.css';

export interface UserMessageProps {
  /** Figma `Text label`. */
  children: ReactNode;
  /** Figma `Style`: outlined (Style 2, white with stroke and elevation 1) or filled (Style 1, BACKGROUND/Secondary). */
  variant?: 'outlined' | 'filled';
  /** Figma `Type=@mention`: purple pill badge before the text, e.g. "@bug_review". */
  mention?: string;
  /** A `<ChatMessageMetadata>` (Figma `Show metadata`). */
  metadata?: ReactNode;
  className?: string;
}

export function UserMessage({ children, variant = 'outlined', mention, metadata, className }: UserMessageProps) {
  return (
    <div className={`${styles.userMessage} ${className ?? ''}`}>
      <div className={styles.userBubble} data-variant={variant} data-mention={mention ? true : undefined}>
        {mention && (
          <Badge color="purple" type="pill" size="lg">
            {mention}
          </Badge>
        )}
        <span className={styles.messageText}>{children}</span>
      </div>
      {metadata}
    </div>
  );
}
