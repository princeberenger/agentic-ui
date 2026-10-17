// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6255-14244 (ChatScrollButton)
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-secondary, shadow-elevation-2, radius-full, space-8, icon-48

'use client';

import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import styles from './Chat.module.css';

export interface ChatScrollButtonProps {
  /** Figma `Type=Icon + Text`: "New messages". Omit for the round arrow button. */
  label?: string;
  /** Figma `Background`: the fade blends into BACKGROUND/Primary or BACKGROUND/Secondary. */
  background?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

/** Bottom fade over the thread with a primary button that scrolls to the latest message. */
export function ChatScrollButton({ label, background = 'primary', onClick, className }: ChatScrollButtonProps) {
  return (
    <div className={`${styles.scroll} ${className ?? ''}`} data-background={background}>
      {label ? (
        <Button variant="primary" size="sm" className={styles.scrollButton} onClick={onClick}>
          {label}
        </Button>
      ) : (
        <Button
          variant="primary"
          size="md"
          className={styles.scrollButton}
          icon={<Icon name="arrow-down" />}
          aria-label="Scroll to latest message"
          onClick={onClick}
        />
      )}
    </div>
  );
}
