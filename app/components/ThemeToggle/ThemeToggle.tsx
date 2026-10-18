// Demo shell: drives the page theme with the Switch (Theme) component.
// The theme is the Figma MODE collection (LIGHT / DARK), applied as data-theme on <html>.

'use client';

import { useSyncExternalStore } from 'react';
import { ThemeSwitch, type ThemeMode } from '../Switch';
import { THEME_STORAGE_KEY } from './themeScript';
import styles from './ThemeToggle.module.css';

// the init script sets data-theme before hydration: the attribute is the source of truth
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

const readMode = (): ThemeMode => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
const serverMode = (): ThemeMode => 'light';

export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, readMode, serverMode);

  const change = (next: ThemeMode) => {
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
