// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1131
// Extracted: 2026-10-17
// Tokens: color-transparent-white-0, color-bg-primary, color-transparent-black-0, color-transparent-black-100,
//         color-content-primary, icon-14, icon-48, space-none, space-8

import styles from './ScrollFade.module.css';
import { Icon } from '../Icon/Icon';

/** Figma `Mode`. */
export type ScrollFadeMode = 'light' | 'dark';

export interface ScrollFadeProps {
  /** Figma `Mode`. */
  mode?: ScrollFadeMode;
  className?: string;
}

/** Fade over the bottom of a scrolling area, hinting there is more below. Decorative. */
export function ScrollFade({ mode = 'light', className }: ScrollFadeProps) {
  return (
    <div className={[styles.fade, mode === 'dark' ? styles.dark : '', className ?? ''].filter(Boolean).join(' ')} aria-hidden="true">
      <Icon name="down-to-bottom" size={14} className={styles.icon} />
    </div>
  );
}
