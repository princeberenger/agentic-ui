// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=750-8765 (nav-link)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-input-hover-dark, shadow-components-focus, radius-10,
//         space-8, icon-16, font-label, font-body, text-tiny, leading-tiny, tracking-normal, weight-regular, duration-hover

'use client';

import { Icon } from '../Icon/Icon';
import styles from './Navigation.module.css';

export interface NavLinkProps {
  /** Figma `Label`. */
  label: string;
  /** Icon name (Figma `Show icon`, `Icon`). */
  icon?: string;
  href?: string;
  /** Current page (`aria-current`, no visual in Figma). */
  active?: boolean;
  /** Section toggle: chevron down when closed, up when open (Figma `Section Closed`, `Section Open`). */
  expanded?: boolean;
  /** Figma `Type=label`: non-interactive group title. */
  asLabel?: boolean;
  onClick?: () => void;
}

export function NavLink({ label, icon, href, active, expanded, asLabel, onClick }: NavLinkProps) {
  if (asLabel) return <div className={styles.navLabel}>{label}</div>;

  const content = (
    <>
      {icon && (
        <span className={styles.navIcon} aria-hidden="true">
          <Icon name={icon} size={16} />
        </span>
      )}
      <span>{label}</span>
      {expanded !== undefined && (
        <span className={styles.navIcon} aria-hidden="true">
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={16} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a className={styles.navLink} href={href} aria-current={active ? 'page' : undefined} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (onClick || expanded !== undefined) {
    return (
      <button
        type="button"
        className={styles.navLink}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        aria-expanded={expanded}
      >
        {content}
      </button>
    );
  }

  return <div className={styles.navLink}>{content}</div>;
}
