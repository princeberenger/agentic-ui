// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4084-4742
// Extracted: 2026-10-17
// Demo page: Dropdown states, controlled selection

'use client';

import { useState } from 'react';
import { Dropdown, type DropdownOption } from '@/app/components/Dropdown';
import styles from './page.module.css';

const OPTIONS: DropdownOption[] = [
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4', disabled: true },
  { value: 'item-5', label: 'Item 5' },
];

export default function DropdownPage() {
  const [model, setModel] = useState<string | undefined>();

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>States</h2>
        <div className={styles.inputs}>
          <div className={styles.column}>
            <span className={styles.colLabel}>default</span>
            <Dropdown options={OPTIONS} aria-label="default" />
          </div>
          <div className={styles.column}>
            <span className={styles.colLabel}>filled</span>
            <Dropdown options={OPTIONS} defaultValue="item-2" aria-label="filled" />
          </div>
          <div className={styles.column}>
            <span className={styles.colLabel}>disabled</span>
            <Dropdown options={OPTIONS} disabled aria-label="disabled" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Controlled</h2>
        <div className={styles.inputs}>
          <div className={styles.column}>
            <span id="model-label" className={styles.colLabel}>Model: {OPTIONS.find((o) => o.value === model)?.label ?? 'none'}</span>
            <Dropdown options={OPTIONS} value={model} onChange={setModel} aria-labelledby="model-label" />
          </div>
        </div>
      </section>
    </div>
  );
}
