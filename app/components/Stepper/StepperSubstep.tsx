// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4004-82
// Extracted: 2026-10-17
// Tokens: color-content-success, color-content-primary, color-content-disabled, color-content-secondary,
//         color-border-medium, stroke-default, icon-14, icon-16, space-4, space-6, space-8, radius-full,
//         font-label, text-button, weight-medium, leading-small, tracking-spacious

import { Icon } from '../Icon/Icon';
import { PulsatingDot } from './PulsatingDot';
import styles from './Stepper.module.css';

/** Figma `State`. */
export type StepperSubstepState = 'completed' | 'active' | 'disabled';

export interface StepperSubstepProps {
  /** Figma `State`. */
  state: StepperSubstepState;
  /** Figma `Label`. */
  label: string;
}

const LABEL_CLASSES: Record<StepperSubstepState, string> = {
  completed: styles.substepLabelCompleted,
  active: styles.substepLabelActive,
  disabled: styles.substepLabelDisabled,
};

export function StepperSubstep({ state, label }: StepperSubstepProps) {
  return (
    <div className={styles.substep} aria-current={state === 'active' ? 'step' : undefined}>
      {state === 'active' ? (
        <PulsatingDot />
      ) : (
        <span className={styles.substepDot} data-state={state}>
          {state === 'completed' && <Icon name="checkmark-filled" size={14} className={styles.substepCheck} alt="Completed" />}
        </span>
      )}
      <span className={LABEL_CLASSES[state]}>{label}</span>
    </div>
  );
}
