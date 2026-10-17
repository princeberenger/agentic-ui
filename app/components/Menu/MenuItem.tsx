// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1372 (_Menu list item)
// Extracted: 2026-10-17
// Tokens: color-input-hover-dark, color-button-secondary, color-bg-secondary, color-bg-primary, color-content-primary,
//         color-content-secondary, color-content-disabled, color-border-subtle, stroke-default, radius-6, space-4,
//         space-8, space-12, space-16, icon-14, icon-16, icon-20, icon-24, icon-32, font-body, text-small, text-tiny,
//         leading-small, leading-tiny, weight-regular, weight-medium, duration-hover

'use client';

import { type ReactNode, forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Menu.module.css';

export type MenuItemSize = 'regular' | 'sm';

export interface MenuItemProps {
  /** Figma `Option text`. */
  label: string;
  /** Second line (Figma `Helper text`). */
  helperText?: string;
  /** Figma `Selected`: BUTTON/Secondary background, medium label, checkmark. */
  selected?: boolean;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  /** Keyboard shortcut (Figma `Shortcuts / Icon`), e.g. a `<KeyboardShortcut>`. */
  shortcut?: ReactNode;
  /** Leading element: a `<ModelLogo size="sm">` (Figma `Model`) or an icon. */
  icon?: ReactNode;
  /** Figma `Indented`: 20px spacer before the label (24 in sm). */
  indented?: boolean;
  /** Chevron for a submenu (not in Figma). */
  hasSubmenu?: boolean;
  size?: MenuItemSize;
  onClick?: () => void;
  /** `option` inside a Dropdown listbox: exposes `selected` as aria-selected. */
  role?: 'menuitem' | 'option';
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  /** Renders a link instead of a button. */
  href?: string;
}

export const MenuItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, MenuItemProps>(function MenuItem(
  {
    label,
    helperText,
    selected = false,
    disabled = false,
    shortcut,
    icon,
    indented = false,
    hasSubmenu = false,
    size = 'regular',
    onClick,
    role = 'menuitem',
    onKeyDown,
    href,
  },
  ref,
) {
  const className = `${styles.item} ${size === 'sm' ? styles.itemSm : styles.itemRegular}`;

  const content = (
    <>
      <span className={styles.itemContent}>
        {indented && <span className={styles.spacer} aria-hidden="true" />}
        {icon && <span className={styles.leading}>{icon}</span>}
        <span className={styles.labelGroup}>
          <span className={styles.label}>{label}</span>
          {helperText != null && <span className={styles.helperText}>{helperText}</span>}
        </span>
        {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
      </span>
      {selected && (
        <span className={styles.trailing} aria-hidden="true">
          <Icon name="checkmark" size={size === 'sm' ? 14 : 16} />
        </span>
      )}
      {hasSubmenu && (
        <span className={styles.trailing} aria-hidden="true">
          <Icon name="chevron-right" size={14} />
        </span>
      )}
    </>
  );

  const shared = {
    className,
    role,
    'data-selected': selected || undefined,
    'aria-disabled': disabled || undefined,
    'aria-checked': role === 'menuitem' && selected ? true : undefined,
    'aria-selected': role === 'option' ? selected : undefined,
    onKeyDown,
  };

  if (href && !disabled) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} onClick={onClick} {...shared}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      {...shared}
    >
      {content}
    </button>
  );
});
