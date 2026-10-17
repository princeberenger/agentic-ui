// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-466
// Extracted: 2026-10-17
// Tokens: space-none, space-8, space-16, color-border-medium, stroke-default, icon-16, icon-24, space-4

import { type ReactNode } from 'react';
import styles from './Stepper.module.css';

export interface StepperSubstepsProps {
  /** StepperSubstep items, with a StepperConnector before the active one. */
  children: ReactNode;
  /** Accessible name of the group, e.g. the parent step label. */
  'aria-label'?: string;
}

/** stepper-substeps-wrapper: the substeps of a step, indented under it. */
export function StepperSubsteps({ children, 'aria-label': ariaLabel }: StepperSubstepsProps) {
  return (
    <div className={styles.substepsWrapper} role="group" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
