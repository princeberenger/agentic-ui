// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=230-699 (Navigation Type=tree, nav-section)
// Extracted: 2026-10-17
// Tokens: color-border-subtle, stroke-default, space-2, space-4, space-16

import { type ReactNode } from 'react';
import { NavLink } from './NavLink';
import styles from './Navigation.module.css';

export interface NavSectionProps {
  /** Section title, a nav-link with icon (e.g. Monitor). */
  label: string;
  icon?: string;
  /** NavSubLink items, indented on a BORDER/Subtle rail. */
  children: ReactNode;
}

export function NavSection({ label, icon, children }: NavSectionProps) {
  return (
    <div className={styles.section} role="group" aria-label={label}>
      <NavLink label={label} icon={icon} />
      <div className={styles.subLinks}>
        <div className={styles.subLinksRail}>{children}</div>
      </div>
    </div>
  );
}
