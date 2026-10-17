// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=230-699 (Navigation)
// Extracted: 2026-10-17
// Tokens: space-4, space-16, space-24

'use client';

import { forwardRef, useState, type ReactNode } from 'react';
import { NavLogo } from './NavLogo';
import { NavUserSettings } from './NavUserSettings';
import styles from './Navigation.module.css';

export interface NavigationProps {
  /** NavLink items (classic) or NavSection groups (tree). */
  children: ReactNode;
  /** Figma `Type`. */
  variant?: 'classic' | 'tree';
  /** Figma `State=closed` (controlled): only the logo row stays. */
  collapsed?: boolean;
  /** Initial state when uncontrolled. */
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Footer greeting (Figma `Footer`). Omit to hide the footer. */
  userName?: string;
  onUserMenu?: () => void;
  'aria-label'?: string;
  className?: string;
}

export const Navigation = forwardRef<HTMLElement, NavigationProps>(function Navigation(
  {
    children,
    variant = 'classic',
    collapsed: controlled,
    defaultCollapsed = false,
    onCollapsedChange,
    userName,
    onUserMenu,
    'aria-label': ariaLabel = 'Main',
    className,
  },
  ref,
) {
  const [internal, setInternal] = useState(defaultCollapsed);
  const collapsed = controlled ?? internal;

  const toggle = () => {
    if (controlled === undefined) setInternal(!collapsed);
    onCollapsedChange?.(!collapsed);
  };

  return (
    <nav ref={ref} aria-label={ariaLabel} className={`${styles.navigation} ${className ?? ''}`}>
      <NavLogo collapsed={collapsed} onToggle={toggle} inNav />
      {!collapsed && (
        <>
          <div className={`${styles.body} ${variant === 'tree' ? styles.tree : ''}`}>{children}</div>
          {userName && (
            <div className={styles.footer}>
              <NavUserSettings userName={userName} onMenu={onUserMenu} inNav />
            </div>
          )}
        </>
      )}
    </nav>
  );
});
