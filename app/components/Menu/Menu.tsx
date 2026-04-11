import { type ReactNode } from 'react';
import styles from './Menu.module.css';

export type MenuSize = 'regular' | 'sm';

export interface MenuProps {
  children: ReactNode;
  size?: MenuSize;
  width?: number;
  className?: string;
}

const SIZE_CLASSES: Record<MenuSize, string> = {
  regular: styles.menuRegular,
  sm: styles.menuSm,
};

export function Menu({ children, size = 'regular', width, className }: MenuProps) {
  return (
    <div
      className={`${SIZE_CLASSES[size]} ${className ?? ''}`}
      role="menu"
      style={width ? { width } : undefined}
    >
      {children}
    </div>
  );
}
