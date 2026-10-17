// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-93
// Extracted: 2026-10-17
// Tokens: color-content-primary, icon-16, space-6, space-8, radius-full

import styles from './Stepper.module.css';

export interface PulsatingDotProps {
  className?: string;
}

/** PULSATING-DOT: a dot with two halos looping between the Low and High variants. Decorative. */
export function PulsatingDot({ className }: PulsatingDotProps) {
  return (
    <span className={[styles.pulsatingDot, className ?? ''].filter(Boolean).join(' ')} aria-hidden="true">
      <span className={styles.dot3} />
      <span className={styles.dot2} />
      <span className={styles.dot1} />
    </span>
  );
}
