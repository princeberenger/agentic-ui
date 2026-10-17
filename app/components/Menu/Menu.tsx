// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=558-659 (Menu)
// Extracted: 2026-10-17
// Tokens: color-bg-menu, color-content-on-primary, color-border-medium, color-bg-primary, shadow-elevation-2,
//         stroke-sm, stroke-default, radius-10, space-4

import { type ReactNode, forwardRef } from 'react';
import styles from './Menu.module.css';

export type MenuSize = 'regular' | 'sm';

export interface MenuProps {
  children: ReactNode;
  /** Figma `Size`: min width 160 (regular) or 128 (sm). */
  size?: MenuSize;
  width?: number;
  /** `listbox` when the menu lists the options of a Dropdown. */
  role?: 'menu' | 'listbox';
  id?: string;
  'aria-label'?: string;
  className?: string;
}

const SIZE_CLASSES: Record<MenuSize, string> = {
  regular: styles.menuRegular,
  sm: styles.menuSm,
};

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, size = 'regular', width, role = 'menu', id, 'aria-label': ariaLabel, className },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`${SIZE_CLASSES[size]} ${className ?? ''}`}
      id={id}
      role={role}
      aria-label={ariaLabel}
      style={width ? { width } : undefined}
    >
      {children}
    </div>
  );
});
