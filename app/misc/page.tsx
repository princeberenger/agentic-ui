// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page MISC)
// Extracted: 2026-10-17
// Demo page: AGENTIC UI LOGO, PULSATING-DOT, Cursor blink, LOADER, SCROLL FADE, DEMO PAGE HEADER

'use client';

import { CursorBlink } from '@/app/components/CursorBlink';
import { DemoPageHeader } from '@/app/components/DemoPageHeader';
import { Loader } from '@/app/components/Loader';
import { Logo } from '@/app/components/Logo';
import { ScrollFade } from '@/app/components/ScrollFade';
import { PulsatingDot } from '@/app/components/Stepper';
import styles from './page.module.css';

const LOREM =
  'Agents plan, call tools and report back. Long answers scroll inside the thread, and the fade at the bottom shows there is more to read below.';

export default function MiscPage() {
  return (
    <div className={styles.page}>
      <DemoPageHeader label="Misc" onLaunch={() => window.alert('Launch demo')} />
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.title}>Agentic UI logo</h2>
          <div className={styles.row}>
            <Logo />
            <Logo variant="logo" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Pulsating dot · Cursor blink</h2>
          <div className={styles.row}>
            <PulsatingDot />
            <span className={styles.text}>
              Streaming answer
              <CursorBlink />
            </span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Loader</h2>
          <div className={styles.row}>
            <span className={styles.inverse}><Loader tone="light" size="default" label="Loading" /></span>
            <span className={styles.inverse}><Loader tone="light" label="Loading" /></span>
            <Loader tone="dark" size="default" label="Loading" />
            <Loader tone="dark" label="Loading" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Scroll fade</h2>
          <div className={styles.row}>
            {(['light', 'dark'] as const).map((mode) => (
              <div key={mode} className={styles.fadeFrame}>
                <p className={`${styles.text} ${styles.fadeText}`}>{LOREM}</p>
                <ScrollFade mode={mode} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
