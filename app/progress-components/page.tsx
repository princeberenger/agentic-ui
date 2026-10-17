// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Progress)
// Extracted: 2026-10-17
// Demo page: Progress - Bars, ProgressBar, Volume and draggable sliders

'use client';

import { useState } from 'react';
import { ProgressBar } from '@/app/components/ProgressBar';
import { ProgressBars, type ProgressBarsTotal } from '@/app/components/ProgressBars';
import { Slider } from '@/app/components/Slider';
import styles from './page.module.css';

const BARS: [ProgressBarsTotal, number[]][] = [
  [10, [2, 6, 10]],
  [12, [2, 6, 12]],
  [20, [2, 10, 20]],
  [24, [2, 12, 24]],
  [48, [0, 26, 48]],
];

export default function ProgressComponentsPage() {
  const [value, setValue] = useState(40);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Progress - Bars</h2>
        <div className={styles.column}>
          {BARS.map(([total, fills]) =>
            fills.map((filled) => <ProgressBars key={`${total}-${filled}`} total={total} filled={filled} aria-label={`${filled} of ${total}`} />),
          )}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>ProgressBar</h2>
        <div className={styles.column}>
          {[0, 10, 50, 70, 90, 100].map((v) => (
            <ProgressBar key={v} value={v} aria-label="Upload" />
          ))}
          <ProgressBar value={value} showCounter={false} aria-label="Linked to the slider" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Volume (sm)</h2>
        <div className={styles.column}>
          <Slider value={value} onChange={setValue} aria-label="Volume" />
          <Slider defaultValue={0} aria-label="Volume at 0" />
          <Slider defaultValue={100} aria-label="Volume at 100" />
          <Slider defaultValue={30} step={10} aria-label="Stepped volume" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Draggable (lg)</h2>
        <div className={styles.column}>
          <Slider size="lg" defaultValue={17} scaleLabels={['0', '50', '100']} aria-label="Draggable" />
          <Slider size="lg" defaultValue={50} step={25} scaleLabels={['0', '50', '100']} aria-label="Stepped draggable" />
        </div>
      </section>
    </div>
  );
}
