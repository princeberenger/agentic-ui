import styles from './FileUpload.module.css';

/** Figma 1px inside stroke with a 4/4 dash, drawn in SVG so the dash matches; colored by --_border. */
export function DashedBorder() {
  return (
    <svg className={styles.dash} aria-hidden="true">
      <rect className={styles.dashRect} x="0.5" y="0.5" />
    </svg>
  );
}
