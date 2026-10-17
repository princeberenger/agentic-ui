// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=146-1787
// Extracted: 2026-10-17
// Tokens: color-content-primary, icon-20, icon-24, space-2

import styles from './Logo.module.css';

/** Figma `Variant`: `symbol` (mark only) or `logo` (wordmark). */
export type LogoVariant = 'symbol' | 'logo';

export interface LogoProps {
  /** Figma `Variant`. */
  variant?: LogoVariant;
  /** Accessible name. Pass an empty string when the logo is decorative. */
  label?: string;
  className?: string;
}

export function Logo({ variant = 'symbol', label = 'Agentic UI', className }: LogoProps) {
  return (
    <span
      className={[styles.logo, variant === 'logo' ? styles.wordmark : styles.symbol, className ?? ''].filter(Boolean).join(' ')}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    />
  );
}
