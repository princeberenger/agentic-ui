// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2977
// Extracted: 2026-10-17
// Demo page: Radio button selected / state matrix, Radio button with label (812:4430)

'use client';

import { useState } from 'react';
import { Radio } from '@/app/components/Radio';
import styles from './page.module.css';

const PLANS = ['Starter', 'Pro', 'Enterprise'];

export default function RadioPage() {
  const [plan, setPlan] = useState('Pro');

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Radio button</h2>
        <div className={styles.grid}>
          <span />
          <span className={styles.colLabel}>false</span>
          <span className={styles.colLabel}>true</span>
          <span className={styles.rowLabel}>default</span>
          <Radio name="m1" aria-label="default false" />
          <Radio name="m2" defaultChecked aria-label="default true" />
          <span className={styles.rowLabel}>disabled</span>
          <Radio name="m3" disabled aria-label="disabled false" />
          <Radio name="m4" defaultChecked disabled aria-label="disabled true" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>With label</h2>
        <div className={styles.grid}>
          <span />
          <span className={styles.colLabel}>false</span>
          <span className={styles.colLabel}>true</span>
          <span className={styles.rowLabel}>default</span>
          <Radio name="l1" label="Label" description="Description" />
          <Radio name="l2" label="Label" description="Description" defaultChecked />
          <span className={styles.rowLabel}>disabled</span>
          <Radio name="l3" label="Label" description="Description" disabled />
          <Radio name="l4" label="Label" description="Description" defaultChecked disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Interactive</h2>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.rowLabel}>controlled: {plan}</span>
            {PLANS.map((p) => (
              <Radio key={p} name="plan" value={p} label={p} checked={plan === p} onChange={() => setPlan(p)} />
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.rowLabel}>uncontrolled</span>
            {PLANS.map((p) => (
              <Radio key={p} name="plan-native" value={p} label={p} defaultChecked={p === 'Starter'} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
