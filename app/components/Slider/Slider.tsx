// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8082 (Volume, size sm)
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4072-8067 (draggable, size lg)
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-tertiary, color-border-subtle, color-border-strong, color-content-icon,
//         color-content-secondary, color-content-primary, color-content-disabled, shadow-components-focus,
//         stroke-sm, stroke-default, radius-10, radius-full, space-2, space-4, space-8, space-16, icon-16,
//         icon-24, icon-32, icon-48, font-label, text-button, leading-small, tracking-spacious,
//         weight-medium, duration-hover

'use client';

import { forwardRef, useState, type ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { SlidingText } from '@/app/components/SlidingText';
import { EASE_OUT_EXPO, DURATION_ENTER, DURATION_HOVER, DURATION_PRESS } from '@/app/components/motion';
import styles from './Slider.module.css';

/** `sm`: Figma Volume (32px, handle and percentage). `lg`: Figma draggable (48px, middle mark). */
export type SliderSize = 'sm' | 'lg';

export interface SliderProps {
  /** Current value as a percentage (0–100). Controlled mode. */
  value?: number;
  /** Initial value for uncontrolled mode (0–100). */
  defaultValue?: number;
  /** Called when the value changes (drag, click or keyboard). */
  onChange?: (value: number) => void;
  /** Snap increment in percentage points (e.g. 10). Omit for continuous. */
  step?: number;
  /** Track size: sm 32px (Volume), lg 48px (draggable). */
  size?: SliderSize;
  /** Shows the percentage inside the track (Volume). Defaults to true in sm. */
  showLabel?: boolean;
  /** Scale labels above the track (draggable `values`, e.g. ['0', '50', '100']). */
  scaleLabels?: string[];
  /** Animates the fill on mount. */
  animated?: boolean;
  /** Delay before the mount animation (seconds). */
  animationDelay?: number;
  disabled?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  {
    value: controlledValue,
    defaultValue = 0,
    onChange,
    step,
    size = 'sm',
    showLabel = size === 'sm',
    scaleLabels,
    animated = false,
    animationDelay = 0,
    disabled = false,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const clamped = Math.max(0, Math.min(100, controlledValue ?? internalValue));
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    setHasInteracted(true);
    if (controlledValue === undefined) setInternalValue(next);
    onChange?.(next);
  };

  // .ai/motion-rules.md 3.2 / 3.3: instant while dragging, magnetic snap with a step,
  // entrance on mount, short ease after interaction
  const fillTransition = dragging
    ? step
      ? { duration: DURATION_PRESS, ease: EASE_OUT_EXPO }
      : { duration: 0 }
    : !hasInteracted && animated
      ? { delay: animationDelay, duration: DURATION_ENTER * 1.5, ease: EASE_OUT_EXPO }
      : { duration: DURATION_HOVER, ease: EASE_OUT_EXPO };

  return (
    <div className={[styles.slider, styles[size], disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
      {scaleLabels && (
        <div className={styles.scaleLabels} aria-hidden="true">
          {scaleLabels.map((label, i) => (
            <span key={i} className={styles.scaleLabel}>{label}</span>
          ))}
        </div>
      )}
      <div className={styles.track} data-dragging={dragging || undefined} data-full={clamped === 100 || undefined}>
        {step && (
          <div className={styles.snapDots} aria-hidden="true">
            {Array.from({ length: Math.floor(100 / step) - 1 }, (_, i) => {
              const pct = (i + 1) * step;
              if (pct === clamped) return null;
              return <span key={pct} className={styles.snapDot} style={{ left: `${pct}%` }} />;
            })}
          </div>
        )}
        {size === 'lg' && <span className={styles.middle} aria-hidden="true" />}
        <motion.div
          className={styles.fill}
          initial={animated ? { width: '0%' } : false}
          animate={{ width: `${clamped}%` }}
          transition={fillTransition}
        >
          {size === 'sm' && <span className={styles.handle} aria-hidden="true" />}
        </motion.div>
        {showLabel && (
          <span className={styles.label} aria-hidden="true">
            <SlidingText>{`${clamped}%`}</SlidingText>
          </span>
        )}
        {/* native range on top of the drawing: pointer drag, click and keyboard */}
        <input
          ref={ref}
          type="range"
          className={styles.input}
          min={0}
          max={100}
          step={step ?? 1}
          value={clamped}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-valuetext={`${clamped}%`}
          onChange={handleChange}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
          onLostPointerCapture={() => setDragging(false)}
        />
      </div>
    </div>
  );
});
