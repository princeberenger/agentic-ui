// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=713-2805 (LOADER SMALL (LIGHT)), node-id=714-2955 (LOADER SMALL (DARK)),
//         node-id=678-1996 (LOADER (LIGHT)), node-id=683-2107 (LOADER (DARK))
// Extracted: 2026-10-16
// Tokens: color-bg-primary, color-content-primary, icon-12, space-4

import styles from './Loader.module.css';

export type LoaderTone = 'light' | 'dark';

/** `small` = LOADER SMALL (12px box), `default` = LOADER (20px box, same grid with 4px inset). */
export type LoaderSize = 'small' | 'default';

export interface LoaderProps {
  /**
   * LIGHT (BACKGROUND/Primary) or DARK (CONTENT/Primary) Figma variant.
   * Omit to inherit the surrounding text color (currentColor).
   */
  tone?: LoaderTone;
  /** Box size, see `LoaderSize`. */
  size?: LoaderSize;
  /** Accessible label. When omitted the loader is decorative (aria-hidden). */
  label?: string;
  className?: string;
}

const TONE_CLASSES: Record<LoaderTone, string> = {
  light: styles.light,
  dark: styles.dark,
};

/** 3×3 grid loader — 8 frames of 200ms from the Figma prototype. */
export function Loader({ tone, size = 'small', label, className }: LoaderProps) {
  return (
    <span
      className={[styles.loader, size === 'default' ? styles.default : '', tone ? TONE_CLASSES[tone] : '', className ?? ''].filter(Boolean).join(' ')}
      role={label ? 'status' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className={styles.square} />
      ))}
    </span>
  );
}
