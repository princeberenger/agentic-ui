// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2639
// Extracted: 2026-10-17
// Demo page: Checkbox type / selected / state matrix, Checkbox with label (815:75)

'use client';

import { useState } from 'react';
import { Checkbox, type CheckboxValue, type CheckboxVariant } from '@/app/components/Checkbox';
import styles from './page.module.css';

const VALUES: CheckboxValue[] = [false, 'indeterminate', true];
const VARIANTS: CheckboxVariant[] = ['stroke', 'filled'];

export default function CheckboxPage() {
  const [items, setItems] = useState([true, false, false]);
  const all: CheckboxValue = items.every(Boolean) ? true : items.some(Boolean) ? 'indeterminate' : false;

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Checkbox</h2>
        <div className={styles.grid}>
          <span />
          {VALUES.map((v) => <span key={String(v)} className={styles.colLabel}>{String(v)}</span>)}
          {VARIANTS.flatMap((variant) =>
            [false, true].map((disabled) => (
              <Row key={`${variant}-${disabled}`} label={`${variant}${disabled ? ' disabled' : ''}`}>
                {VALUES.map((v) => (
                  <Checkbox key={String(v)} variant={variant} checked={v} disabled={disabled} aria-label={`${variant} ${String(v)}`} />
                ))}
              </Row>
            )),
          )}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>With label</h2>
        <div className={styles.grid}>
          <span />
          {VALUES.map((v) => <span key={String(v)} className={styles.colLabel}>{String(v)}</span>)}
          <Row label="no-background">
            {VALUES.map((v) => <Checkbox key={String(v)} label="Label" description="Description text" checked={v} />)}
          </Row>
          <Row label="has-background">
            {VALUES.map((v) => <Checkbox key={String(v)} label="Label" description="Description text" background checked={v} />)}
          </Row>
          <Row label="disabled">
            {VALUES.map((v) => <Checkbox key={String(v)} label="Label" description="Description text" checked={v} disabled />)}
          </Row>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Interactive</h2>
        <div className={styles.column}>
          <Checkbox
            label="All"
            checked={all}
            onChange={(next) => setItems(items.map(() => next))}
          />
          {items.map((on, i) => (
            <Checkbox
              key={i}
              label={`Item ${i + 1}`}
              checked={on}
              onChange={(next) => setItems(items.map((x, j) => (j === i ? next : x)))}
            />
          ))}
          <Checkbox label="Uncontrolled" defaultChecked />
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
