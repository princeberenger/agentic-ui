import { Icon } from '@/app/components/Icon/Icon';
import {
  Stepper,
  StepperStep,
  StepperSubstep,
  StepperConnector,
} from '@/app/components/Stepper';
import styles from './page.module.css';

export default function StepperPage() {
  return (
    <div className={styles.demo}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Stepper</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.headerLabel}>Launch Demo</span>
          <div className={styles.shortcutKeys}>
            <kbd className={styles.kbd}>⌥</kbd>
            <kbd className={styles.kbd}>⌘</kbd>
            <kbd className={styles.kbd}>↩</kbd>
          </div>
        </div>
      </header>

      {/* Centered Stepper */}
      <div className={styles.content}>
        <Stepper>
          <StepperStep
            variant="completed"
            label="Planning"
            icon={<Icon name="checkmark" size={16} />}
          />

          <StepperStep
            variant="active"
            label="Design"
            icon={<Icon name="magic-wand-filled" size={16} />}
          >
            <StepperSubstep state="completed" label="Concept" />
            <StepperSubstep state="completed" label="Simulation" />
            <StepperConnector />
            <StepperSubstep state="active" label="World" />
            <StepperSubstep state="disabled" label="Story" />
            <StepperSubstep state="disabled" label="Script" />
            <StepperSubstep state="disabled" label="Expand IP" />
          </StepperStep>

          <StepperStep
            variant="disabled"
            label="Orchestration"
            icon={<Icon name="model-builder" size={16} />}
          />

          <StepperStep
            variant="disabled"
            label="Quality"
            icon={<Icon name="gem" size={16} />}
          />
        </Stepper>
      </div>
    </div>
  );
}
