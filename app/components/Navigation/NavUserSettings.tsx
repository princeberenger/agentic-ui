// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6008-14270 (nav-user-settings)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-icon, font-body, text-small, weight-medium, leading-small, tracking-normal,
//         icon-16

'use client';

import { Icon } from '../Icon/Icon';
import styles from './Navigation.module.css';

export interface NavUserSettingsProps {
  /** Greeting name ("Hi, Alex"). */
  userName: string;
  /** Overflow button (Icons / Overflow-menu--vertical). */
  onMenu?: () => void;
  /** Set by Navigation (icon color override). */
  inNav?: boolean;
  className?: string;
}

export function NavUserSettings({ userName, onMenu, inNav = false, className }: NavUserSettingsProps) {
  return (
    <div className={[styles.userSettings, inNav ? styles.inNav : '', className ?? ''].filter(Boolean).join(' ')}>
      <span className={styles.userName}>Hi, {userName}</span>
      <button type="button" className={styles.iconButton} onClick={onMenu} aria-label="User menu" aria-haspopup="menu">
        <Icon name="overflow-menu-vertical" size={16} />
      </button>
    </div>
  );
}
