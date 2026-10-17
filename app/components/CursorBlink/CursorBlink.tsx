// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6698
// Extracted: 2026-10-17
// Tokens: color-content-primary, stroke-default, icon-16

import styles from './CursorBlink.module.css';

export interface CursorBlinkProps {
  className?: string;
}

/** Blinking text caret, e.g. after streamed text. Decorative. */
export function CursorBlink({ className }: CursorBlinkProps) {
  return <span className={[styles.caret, className ?? ''].filter(Boolean).join(' ')} aria-hidden="true" />;
}
