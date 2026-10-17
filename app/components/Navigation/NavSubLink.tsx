// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=226-1312 (nav-sub-link)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-input-hover-dark, shadow-components-focus, radius-10,
//         space-4, space-8, space-12, font-label, text-tiny, leading-tiny, tracking-normal, weight-regular, duration-hover

'use client';

import styles from './Navigation.module.css';

export interface NavSubLinkProps {
  /** Figma `Sub-link Label`. */
  label: string;
  href?: string;
  /** Figma `State=active`: `../` prefix and block indicator. */
  active?: boolean;
  onClick?: () => void;
}

export function NavSubLink({ label, href, active, onClick }: NavSubLinkProps) {
  const content = active ? (
    <>
      <span aria-hidden="true">../</span>
      <span>{label}</span>
      <span className={styles.subLinkIndicator} aria-hidden="true" />
    </>
  ) : (
    <span>{label}</span>
  );

  if (href) {
    return (
      <a className={styles.subLink} href={href} aria-current={active ? 'page' : undefined} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={styles.subLink} onClick={onClick} aria-current={active ? 'page' : undefined}>
      {content}
    </button>
  );
}
