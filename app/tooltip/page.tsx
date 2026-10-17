// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2001-2681
// Extracted: 2026-10-17
// Demo page: Tooltip position / caret alignment matrix, hover and focus behavior

import { Button } from '@/app/components/Button';
import { Tooltip, type TooltipAlign, type TooltipPosition } from '@/app/components/Tooltip';
import styles from './page.module.css';

const VARIANTS: [TooltipPosition, TooltipAlign][] = [
  ['top', 'start'], ['top', 'center'], ['top', 'end'],
  ['bottom', 'start'], ['bottom', 'center'], ['bottom', 'end'],
  ['left', 'center'], ['right', 'center'],
];

export default function TooltipPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Matrix (always open)</h2>
        <div className={styles.matrix}>
          {VARIANTS.map(([position, align]) => (
            <div key={position + align} className={styles.cell}>
              <span className={styles.colLabel}>{position} {align}</span>
              <Tooltip content="Tooltip text" position={position} align={align} open>
                <span className={styles.target} />
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Hover / focus</h2>
        <div className={styles.row}>
          {(['top', 'bottom', 'left', 'right'] as TooltipPosition[]).map((position) => (
            <Tooltip key={position} content={`Tooltip ${position}`} position={position}>
              <Button variant="secondary" size="md">{position}</Button>
            </Tooltip>
          ))}
        </div>
      </section>
    </div>
  );
}
