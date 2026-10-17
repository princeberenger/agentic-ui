// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4030-7034 (Loading animation)
// Extracted: 2026-10-17
// Tokens: color-border-subtle, color-content-primary, icon-14

import styles from './Spinner.module.css';

export interface SpinnerProps {
  /** Accessible label; decorative when omitted. */
  label?: string;
  className?: string;
}

/** 14px ring with a 144° CONTENT/Primary arc turning clockwise (4 phases x 180ms, linear). */
export function Spinner({ label, className }: SpinnerProps) {
  return (
    <svg
      className={[styles.spinner, className ?? ''].filter(Boolean).join(' ')}
      viewBox="0 0 14 14"
      fill="none"
      role={label ? 'status' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <circle className={styles.track} cx="7" cy="7" r="6" strokeWidth="2" />
      <path
        className={styles.arc}
        d="M1 7C1 5.73292 1.40113 4.49837 2.1459 3.47329C2.89067 2.4482 3.94084 1.68521 5.1459 1.29366C6.35096 0.902113 7.64904 0.902113 8.8541 1.29366C10.0592 1.68521 11.1093 2.4482 11.8541 3.47329"
        strokeWidth="2"
      />
    </svg>
  );
}
