// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-11583 (progress)
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-11604 (CONTEXT)
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=8017-42354 (CONTEXT-TOOLTIP)
// Extracted: 2026-10-17
// Tokens: color-border-subtle, color-border-strong, color-border-warning, color-bg-attention, color-content-secondary,
//         color-content-primary, color-content-warning-text, color-badge-label-red, color-content-disabled, color-bg-menu,
//         color-bg-secondary, color-bg-primary, color-border-medium, color-input-hover-dark, shadow-elevation-2,
//         shadow-components-focus, stroke-sm, stroke-default, stroke-lg, radius-full, radius-10, space-2, space-4, space-6,
//         space-8, space-12, icon-16, font-label, font-body, text-button, text-tiny, text-small, leading-small, leading-tiny,
//         tracking-spacious, weight-medium, duration-hover

'use client';

import { useId, useState, type ReactNode } from 'react';
import { ProgressBar } from '../ProgressBar';
import styles from './ChatAgent.module.css';

export type ProgressRingTone = 'default' | 'warning' | 'attention';

export interface ProgressRingProps {
  /** 0 to 100 (Figma `Property 1`). */
  value: number;
  /** Arc color: BORDER/Strong, BORDER/Warning (CONTEXT 75%) or BORDER/Attention (CONTEXT 100%). */
  tone?: ProgressRingTone;
  className?: string;
}

/** Figma progress: 16px ring, 2px BORDER/Subtle track, arc clockwise from 3 o'clock. */
export function ProgressRing({ value, tone = 'default', className }: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <svg className={`${styles.ring} ${className ?? ''}`} viewBox="0 0 16 16" data-tone={tone} aria-hidden="true">
      <circle className={styles.ringTrack} cx="8" cy="8" r="7" pathLength="100" />
      {clamped > 0 && (
        <circle className={styles.ringArc} cx="8" cy="8" r="7" pathLength="100" strokeDasharray={`${clamped} 100`} />
      )}
    </svg>
  );
}

export interface ContextUsageProps {
  /** Context window used, 0 to 100. */
  percent: number;
  /** Tooltip figures (Figma CONTEXT-TOOLTIP `Label 2` to `Label 9`). */
  used?: string;
  limit?: string;
  input?: { tokens: string; cost: string };
  output?: { tokens: string; cost: string };
  /** Figma `Show total`. */
  totalCost?: string;
  className?: string;
}

const toneOf = (p: number): ProgressRingTone => (p >= 100 ? 'attention' : p >= 75 ? 'warning' : 'default');

/** Figma CONTEXT: percentage pill with a progress ring; hover or focus shows CONTEXT-TOOLTIP. */
export function ContextUsage({ percent, used, limit, input, output, totalCost, className }: ContextUsageProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const tone = toneOf(percent);
  const value = Math.round(percent);
  const hasDetails = Boolean(used || input || output || totalCost);

  return (
    <span
      className={`${styles.context} ${className ?? ''}`}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.contextButton}
        data-tone={value === 0 ? 'empty' : tone}
        aria-label={`Context window ${value}% used`}
        aria-describedby={hasDetails ? id : undefined}
        aria-expanded={hasDetails ? open : undefined}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      >
        <span className={styles.contextLabel}>{value}%</span>
        <ProgressRing value={value} tone={tone} />
      </button>
      {hasDetails && (
        <ContextTooltip
          id={id}
          hidden={!open}
          percent={value}
          used={used}
          limit={limit}
          input={input}
          output={output}
          totalCost={totalCost}
        />
      )}
    </span>
  );
}

function Figures({ main, rest }: { main: ReactNode; rest: ReactNode }) {
  return (
    <span className={styles.figures}>
      <span className={styles.figureMain}>{main}</span>
      <span className={styles.figureSlash}>/</span>
      <span className={styles.figureRest}>{rest}</span>
    </span>
  );
}

export interface ContextTooltipProps extends Omit<ContextUsageProps, 'className'> {
  id?: string;
  hidden?: boolean;
  className?: string;
}

/** Figma CONTEXT-TOOLTIP: usage, Input and Output rows, Total cost. */
export function ContextTooltip({ id, hidden, percent, used, limit, input, output, totalCost, className }: ContextTooltipProps) {
  return (
    <span id={id} role="tooltip" className={`${styles.contextTooltip} ${className ?? ''}`} data-hidden={hidden || undefined}>
      <span className={styles.ctxTop}>
        <span className={styles.ctxLine}>
          <span className={styles.ctxPercent}>{Math.round(percent)}%</span>
          {used && limit && (
            <span className={styles.ctxUsage}>
              <span>{used}</span>
              <span className={styles.ctxUsageSlash}>/</span>
              <span>{limit}</span>
            </span>
          )}
        </span>
        <ProgressBar value={percent} showCounter={false} aria-label="Context window" />
      </span>
      {(input || output) && (
        <span className={styles.ctxRows}>
          {input && (
            <span className={styles.ctxRow}>
              <span className={styles.ctxKey}>Input</span>
              <Figures main={input.tokens} rest={input.cost} />
            </span>
          )}
          {output && (
            <span className={styles.ctxRow}>
              <span className={styles.ctxKey}>Output</span>
              <Figures main={output.tokens} rest={output.cost} />
            </span>
          )}
        </span>
      )}
      {totalCost && (
        <span className={styles.ctxTotal}>
          <span>Total cost</span>
          <span>{totalCost}</span>
        </span>
      )}
    </span>
  );
}
