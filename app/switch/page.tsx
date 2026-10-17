// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=814-110
// Extracted: 2026-10-17
// Demo page: Switch selected / state / size matrix, Switch with label (816:3579)

'use client';

import { useState } from 'react';
import { Switch, ThemeSwitch, type SwitchSize, type ThemeMode } from '@/app/components/Switch';
import styles from './page.module.css';

const SIZES: SwitchSize[] = ['sm', 'lg'];

export default function SwitchPage() {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState<ThemeMode>('light');

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Switch</h2>
        <div className={styles.grid}>
          <span />
          {['false', 'true', 'disabled false', 'disabled true'].map((c) => <span key={c} className={styles.colLabel}>{c}</span>)}
          {SIZES.map((size) => (
            <Row key={size} label={size}>
              <Switch size={size} aria-label={`${size} false`} />
              <Switch size={size} defaultChecked aria-label={`${size} true`} />
              <Switch size={size} disabled aria-label={`${size} disabled false`} />
              <Switch size={size} defaultChecked disabled aria-label={`${size} disabled true`} />
            </Row>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>With label</h2>
        <div className={styles.grid}>
          <span />
          {['false', 'true', 'disabled false', 'disabled true'].map((c) => <span key={c} className={styles.colLabel}>{c}</span>)}
          {(['left', 'right'] as const).map((position) => (
            <Row key={position} label={position}>
              <Switch switchPosition={position} label="Label" description="Description text goes here" />
              <Switch switchPosition={position} label="Label" description="Description text goes here" defaultChecked />
              <Switch switchPosition={position} label="Label" description="Description text goes here" disabled />
              <Switch switchPosition={position} label="Label" description="Description text goes here" defaultChecked disabled />
            </Row>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Interactive</h2>
        <div className={styles.column}>
          <Switch
            label="Notifications"
            description={notifications ? 'You will receive notifications' : 'Notifications are off'}
            checked={notifications}
            onChange={setNotifications}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Switch (Theme)</h2>
        <div className={styles.row}>
          <ThemeSwitch aria-label="Dark mode (light)" />
          <ThemeSwitch defaultMode="dark" aria-label="Dark mode (dark)" />
          <ThemeSwitch mode={theme} onModeChange={setTheme} />
          <span className={styles.rowLabel}>{theme}</span>
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
