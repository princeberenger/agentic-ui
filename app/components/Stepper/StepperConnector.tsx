import styles from './Stepper.module.css';

/** Line between the last completed substep and the active one (stepper-substeps-wrapper `divider`). */
export function StepperConnector() {
  return <div className={styles.connector} aria-hidden="true" />;
}
