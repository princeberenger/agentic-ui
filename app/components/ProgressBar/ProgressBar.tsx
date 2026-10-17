// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4115-7289
// Extracted: 2026-10-17
// Tokens: color-bg-tertiary, color-content-primary, color-content-secondary, stroke-default, space-12,
//         font-label, text-button, leading-small, tracking-spacious, weight-medium, duration-enter, ease-out-expo

import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  /** Progress from 0 to 100 (Figma `Progress`). */
  value: number;
  /** Shows the percentage after the bar (Figma `Show counter`). */
  showCounter?: boolean;
  /** Accessible name. */
  'aria-label'?: string;
  className?: string;
}

/** Dotted track filled from the left, with an optional percentage counter. */
export function ProgressBar({ value, showCounter = true, 'aria-label': ariaLabel, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <div
      className={`${styles.progress} ${className ?? ''}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={ariaLabel}
    >
      <span className={styles.track}>
        <span className={styles.fill} style={{ transform: `scaleX(${clamped / 100})` }} />
      </span>
      {showCounter && <span className={styles.counter}>{clamped}%</span>}
    </div>
  );
}
