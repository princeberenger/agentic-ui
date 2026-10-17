// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=675-3982 (SocialButton)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-on-primary, color-neutral-900, color-neutral-100, color-social-discord,
//         color-social-linkedin, color-bg-primary, color-button-disabled, color-content-disabled, color-border-strong,
//         color-border-subtle, color-input-hover-dark, color-input-hover-light, shadow-components-focus, stroke-sm,
//         radius-10, radius-xs, space-4, space-8, space-12, space-16, icon-13, icon-16, icon-24, icon-40, font-body,
//         text-small, text-tiny, leading-small, leading-tiny, duration-hover

'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './SocialButton.module.css';

/** Figma `Brand`. */
export type SocialBrand = 'apple' | 'discord' | 'github' | 'google' | 'linkedin' | 'x';

const NAMES: Record<SocialBrand, string> = {
  apple: 'Apple',
  discord: 'Discord',
  github: 'GitHub',
  google: 'Google',
  linkedin: 'LinkedIn',
  x: 'X',
};

export interface SocialButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  brand: SocialBrand;
  /** Figma `Type`: brand colors (primary) or white (secondary). Google only exists in secondary. */
  variant?: 'primary' | 'secondary';
  /** Figma `Size`: lg 40px, sm 24px. */
  size?: 'lg' | 'sm';
  /** Figma `Label`. Omit for Style=icon (the accessible name becomes "Continue with <brand>"). */
  children?: ReactNode;
}

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(function SocialButton(
  { brand, variant = 'primary', size = 'lg', children, className, 'aria-label': ariaLabel, ...rest },
  ref,
) {
  const type = brand === 'google' ? 'secondary' : variant;
  const iconOnly = children == null;

  return (
    <button
      ref={ref}
      type="button"
      className={[styles.button, styles[size], iconOnly ? styles.iconOnly : '', className ?? ''].join(' ')}
      data-brand={brand}
      data-variant={type}
      aria-label={ariaLabel ?? (iconOnly ? `Continue with ${NAMES[brand]}` : undefined)}
      {...rest}
    >
      <span className={styles.logo} data-brand={brand} aria-hidden="true" />
      {!iconOnly && <span className={styles.label}>{children}</span>}
    </button>
  );
});
