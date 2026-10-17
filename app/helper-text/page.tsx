// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4066-7007
// Extracted: 2026-10-17
// Demo page: HelperText type / size / style matrix

import { HelperText, type HelperTextSize, type HelperTextType, type HelperTextVariant } from '@/app/components/HelperText';
import styles from './page.module.css';

const TYPES: HelperTextType[] = ['default', 'warning', 'success', 'error'];
const COLUMNS: [HelperTextSize, HelperTextVariant][] = [['sm', 'light'], ['sm', 'solid'], ['lg', 'light'], ['lg', 'solid']];

export default function HelperTextPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Matrix</h2>
        <div className={styles.grid}>
          <span />
          {COLUMNS.map(([size, variant]) => <span key={size + variant} className={styles.colLabel}>{size} {variant}</span>)}
          {TYPES.map((type) => (
            <Row key={type} label={type}>
              {COLUMNS.map(([size, variant]) =>
                // Figma has no warning sm solid
                type === 'warning' && size === 'sm' && variant === 'solid'
                  ? <span key={size + variant} />
                  : <HelperText key={size + variant} type={type} size={size} variant={variant}>Helper text</HelperText>,
              )}
            </Row>
          ))}
          <Row label="no icon">
            {COLUMNS.map(([size, variant]) => <HelperText key={size + variant} size={size} variant={variant} showIcon={false}>Helper text</HelperText>)}
          </Row>
        </div>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <span className={styles.rowLabel}>{label}</span>
      {children}
    </>
  );
}
