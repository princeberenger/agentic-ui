// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6114-855
// Extracted: 2026-10-17
// Tokens: color-switch-bg-inactive, color-switch-bg-active, color-switch-knob-inactive, color-switch-knob-active,
//         color-content-primary, color-content-on-primary, shadow-switch-track, shadow-switch-toggle,
//         shadow-components-focus, icon-14, icon-20, icon-24, stroke-default, radius-full,
//         duration-hover, ease-in-out-quart

'use client';

import { forwardRef, useState } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './ThemeSwitch.module.css';

/** Figma `Mode`. */
export type ThemeMode = 'light' | 'dark';

export interface ThemeSwitchProps {
  /** Controlled mode (Figma `Mode`). */
  mode?: ThemeMode;
  /** Initial mode when uncontrolled. */
  defaultMode?: ThemeMode;
  /** Called with the next mode when the user toggles the switch. */
  onModeChange?: (mode: ThemeMode) => void;
  name?: string;
  id?: string;
  /** Accessible name. The switch is on in dark mode. */
  'aria-label'?: string;
  className?: string;
}

export const ThemeSwitch = forwardRef<HTMLInputElement, ThemeSwitchProps>(function ThemeSwitch(
  { mode, defaultMode = 'light', onModeChange, name, id, 'aria-label': ariaLabel = 'Dark mode', className },
  ref,
) {
  const [internal, setInternal] = useState<ThemeMode>(defaultMode);
  const current = mode ?? internal;
  const dark = current === 'dark';

  return (
    <span
      className={[styles.track, dark ? styles.dark : '', className ?? ''].filter(Boolean).join(' ')}
      data-theme={dark ? 'dark' : undefined}
    >
      <input
        ref={ref}
        id={id}
        className={styles.input}
        type="checkbox"
        role="switch"
        name={name}
        checked={dark}
        aria-label={ariaLabel}
        onChange={(e) => {
          const next: ThemeMode = e.target.checked ? 'dark' : 'light';
          if (mode === undefined) setInternal(next);
          onModeChange?.(next);
        }}
      />
      <span className={styles.mask}>
        <span className={styles.knob} />
        <Icon name="sun" size={14} className={`${styles.icon} ${styles.sun}`} />
        <Icon name="moon-filled" size={14} className={`${styles.icon} ${styles.moon}`} />
      </span>
    </span>
  );
});
