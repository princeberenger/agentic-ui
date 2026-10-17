// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-7514
//         (Progress - Bars 48, 24 4096:7708, 20 4096:7377, 12 4096:7139, 10 4096:6952)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-bg-disabled, space-2, space-4, stroke-default, icon-16,
//         duration-enter, ease-out-expo

import styles from './ProgressBars.module.css';

/** Segment counts drawn in Figma (one component per count). */
export type ProgressBarsTotal = 10 | 12 | 20 | 24 | 48;

export interface ProgressBarsProps {
  /** Number of segments (Figma `Progress - Bars (N)`). */
  total: ProgressBarsTotal;
  /** Number of filled segments, from the left. */
  filled: number;
  /** Accessible name. */
  'aria-label'?: string;
  className?: string;
}

/** Segment width per count: 1px for 48, 4px for 24, 2px otherwise. */
const WIDTH_CLASS: Partial<Record<ProgressBarsTotal, string>> = { 48: styles.thin, 24: styles.wide };

export function ProgressBars({ total, filled, 'aria-label': ariaLabel, className }: ProgressBarsProps) {
  const count = Math.max(0, Math.min(total, Math.round(filled)));

  return (
    <div
      className={[styles.bars, WIDTH_CLASS[total] ?? '', className ?? ''].filter(Boolean).join(' ')}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={count}
      aria-label={ariaLabel}
    >
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={styles.segment} data-filled={i < count || undefined} />
      ))}
    </div>
  );
}
