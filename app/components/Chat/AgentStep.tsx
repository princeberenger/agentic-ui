// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4119-17981 (Agent step)
// Extracted: 2026-10-17
// Tokens: color-content-secondary, color-content-icon, color-content-primary, color-content-disabled,
//         shadow-components-focus, radius-xs, space-4, space-8, icon-13, icon-14, icon-16, font-body, text-tiny, leading-tiny

'use client';

import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './ChatAgent.module.css';

export interface AgentStepProps {
  /** Figma `Label`. */
  label: ReactNode;
  /** Figma `Icon` (default Icons / Brain). Ignored for sub-steps. */
  icon?: string;
  /** Figma `State`: active (Gradient/Shimmer label), default, disabled. */
  state?: 'default' | 'active' | 'disabled';
  /** Figma `Type=Sub-step`: todo or checkmark outline instead of the icon. */
  subStep?: 'complete' | 'incomplete';
  /** Figma `Expandable`: the step is a button with a chevron. */
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AgentStep({ label, icon = 'brain', state = 'default', subStep, expanded, onToggle, className }: AgentStepProps) {
  const content = (
    <>
      <span className={styles.stepIcon} aria-hidden="true">
        {subStep ? (
          <Icon name={subStep === 'complete' ? 'checkmark-outline' : 'todo'} size={13} />
        ) : (
          <Icon name={icon} size={16} />
        )}
      </span>
      <span className={styles.stepLabelGroup}>
        <span className={styles.stepLabel}>{label}</span>
        {onToggle && (
          <span className={styles.stepChevron} aria-hidden="true">
            <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={14} />
          </span>
        )}
      </span>
    </>
  );

  const classes = `${styles.step} ${className ?? ''}`;
  const data = { 'data-state': state, 'data-substep': subStep };

  if (onToggle) {
    return (
      <button type="button" className={classes} {...data} aria-expanded={expanded} disabled={state === 'disabled'} onClick={onToggle}>
        {content}
      </button>
    );
  }
  return (
    <span className={classes} {...data}>
      {content}
    </span>
  );
}
