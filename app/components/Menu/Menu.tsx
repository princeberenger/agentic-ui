import { type ReactNode, forwardRef } from 'react';
import styles from './Menu.module.css';

export type MenuSize = 'regular' | 'sm';

export interface MenuProps {
  children: ReactNode;
  size?: MenuSize;
  width?: number;
  /** `listbox` when the menu lists the options of a Dropdown. */
  role?: 'menu' | 'listbox';
  id?: string;
  className?: string;
}

const SIZE_CLASSES: Record<MenuSize, string> = {
  regular: styles.menuRegular,
  sm: styles.menuSm,
};

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  function Menu({ children, size = 'regular', width, role = 'menu', id, className }, ref) {
    return (
      <div
        ref={ref}
        className={`${SIZE_CLASSES[size]} ${className ?? ''}`}
        id={id}
        role={role}
        style={width ? { width } : undefined}
      >
        {children}
      </div>
    );
  }
);
