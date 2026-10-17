// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=484-13150 (nav-logo)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-icon, shadow-components-focus, radius-xs, space-2, space-12, space-16,
//         space-24, icon-16, icon-20, icon-24, duration-hover

'use client';

import { Icon } from '../Icon/Icon';
import { Logo } from '../Logo';
import styles from './Navigation.module.css';

export interface NavLogoProps {
  /** Figma `State=collapsed`: symbol instead of the wordmark, Menu --collapsed icon. */
  collapsed?: boolean;
  /** Sidebar toggle (Figma `Sidebar icon`). Omit to hide the button. */
  onToggle?: () => void;
  /** Figma `Logo symbol`. */
  showLogo?: boolean;
  /** Set by Navigation (icon color override). */
  inNav?: boolean;
  className?: string;
}

export function NavLogo({ collapsed = false, onToggle, showLogo = true, inNav = false, className }: NavLogoProps) {
  return (
    <div className={[styles.logo, inNav ? styles.inNav : '', className ?? ''].filter(Boolean).join(' ')} data-collapsed={collapsed || undefined}>
      <div className={styles.logoContainer}>
        {showLogo && <Logo variant={collapsed ? 'symbol' : 'logo'} />}
        {onToggle && (
          <button
            type="button"
            className={styles.iconButton}
            onClick={onToggle}
            aria-label={collapsed ? 'Open navigation' : 'Collapse navigation'}
            aria-expanded={!collapsed}
          >
            <Icon name={collapsed ? 'menu-collapsed' : 'menu-open'} size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
