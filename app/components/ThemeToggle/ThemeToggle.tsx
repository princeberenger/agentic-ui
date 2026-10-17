// Demo shell: drives the page theme with the Switch (Theme) component.
// The theme is the Figma MODE collection (LIGHT / DARK), applied as data-theme on <html>.

'use client';

import { useEffect, useState } from 'react';
import { ThemeSwitch, type ThemeMode } from '../Switch';
import { THEME_STORAGE_KEY } from './themeScript';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('light');

  // the init script already set the attribute: read it after hydration
  useEffect(() => {
    setMode(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const change = (next: ThemeMode) => {
    setMode(next);
    if (next === 'dark') document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // storage blocked: the theme still applies to this page
    }
  };

  return (
    <div className={styles.toggle}>
      <ThemeSwitch mode={mode} onModeChange={change} />
    </div>
  );
}
