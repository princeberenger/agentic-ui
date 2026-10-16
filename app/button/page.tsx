// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=147-2305
// Extracted: 2026-10-16
// Demo page: Button variant / size / state matrix

import { Button, type ButtonSize, type ButtonVariant } from '@/app/components/Button';
import { Icon } from '@/app/components/Icon/Icon';
import styles from './page.module.css';

const VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'secondary-filled',
  'ghost',
  'destructive',
  'destructive-light',
];
const SIZES: ButtonSize[] = ['lg', 'md', 'sm'];

export default function ButtonPage() {
  return (
    <div className={styles.page}>
      {SIZES.map((size) => (
        <section key={size} className={styles.section}>
          <h2 className={styles.title}>Size {size}</h2>
          <div className={styles.grid}>
            <span />
            {['default', 'text-icon', 'icon right', 'icon-only', 'disabled', 'loading'].map((c) => (
              <span key={c} className={styles.colLabel}>{c}</span>
            ))}
            {VARIANTS.map((variant) => (
              <Row key={variant} variant={variant} size={size} />
            ))}
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <h2 className={styles.title}>Badge, xs</h2>
        <div className={styles.row}>
          <Button variant="secondary" size="lg" badge="1" aria-label="1 item" />
          <Button variant="secondary-filled" size="md" badge="1" aria-label="1 item" />
          <Button variant="ghost" size="sm" badge="1" aria-label="1 item" />
          <Button variant="ghost" size="xs" icon={<Icon name="plus" />} aria-label="Add" />
          <Button variant="ghost" size="xs" icon={<Icon name="plus" />} aria-label="Add" disabled />
        </div>
      </section>
    </div>
  );
}

function Row({ variant, size }: { variant: ButtonVariant; size: ButtonSize }) {
  return (
    <>
      <span className={styles.rowLabel}>{variant}</span>
      <Button variant={variant} size={size}>Label</Button>
      <Button variant={variant} size={size} icon={<Icon name="plus" />}>Label</Button>
      <Button variant={variant} size={size} icon={<Icon name="plus" />} iconPosition="right">Label</Button>
      <Button variant={variant} size={size} icon={<Icon name="plus" />} aria-label="Add" />
      <Button variant={variant} size={size} disabled>Label</Button>
      <Button variant={variant} size={size} loading>Label</Button>
    </>
  );
}
