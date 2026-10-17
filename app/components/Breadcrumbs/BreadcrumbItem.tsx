// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-91 (BreadcrumbItem)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-icon, color-bg-secondary, color-border-strong,
//         color-border-subtle, shadow-components-focus, shadow-elevation-2, stroke-default, radius-xs, icon-16,
//         space-4, space-8, font-label, text-button, leading-small, tracking-spacious, weight-medium,
//         weight-regular, duration-hover

'use client';

import { forwardRef, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { Menu, MenuItem } from '../Menu';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItemProps {
  /** Label (Figma `Text`). */
  label: string;
  /** Link target. Without it (and without `onClick`) the item is plain text. */
  href?: string;
  onClick?: () => void;
  /** Leading icon (Figma `Icon` + `❖ Icon`), e.g. `<Icon name="folder" />`. */
  icon?: ReactNode;
  /** Active page (Figma State `current`): not a link, `aria-current="page"`. */
  current?: boolean;
  className?: string;
}

/** Figma BreadcrumbItem, Type `default`. */
export const BreadcrumbItem = forwardRef<HTMLElement, BreadcrumbItemProps>(function BreadcrumbItem(
  { label, href, onClick, icon, current = false, className },
  ref,
) {
  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </>
  );
  const classes = `${styles.item} ${className ?? ''}`;

  if (current) {
    return (
      <span ref={ref} className={`${classes} ${styles.current}`} aria-current="page">
        {content}
      </span>
    );
  }
  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} onClick={onClick} className={`${classes} ${styles.link}`}>
        {content}
      </a>
    );
  }
  if (onClick) {
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} type="button" onClick={onClick} className={`${classes} ${styles.link}`}>
        {content}
      </button>
    );
  }
  return (
    <span ref={ref} className={classes}>
      {content}
    </span>
  );
});

export interface BreadcrumbOverflowProps {
  /** Collapsed items, listed in the menu. */
  items: Pick<BreadcrumbItemProps, 'label' | 'href' | 'onClick'>[];
  className?: string;
}

/** Figma BreadcrumbItem, Type `overflow`: opens a menu of the collapsed items (State `selected`). */
export function BreadcrumbOverflow({ items, className }: BreadcrumbOverflowProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const focusItem = (index: number) => itemRefs.current[index]?.focus();

  const openMenu = (index = 0) => {
    setOpen(true);
    requestAnimationFrame(() => focusItem(index));
  };

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  // click outside closes the menu
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open]);

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      openMenu(e.key === 'ArrowUp' ? items.length - 1 : 0);
    }
  };

  const onItemKey = (index: number) => (e: KeyboardEvent<HTMLElement>) => {
    const last = items.length - 1;
    if (e.key === 'ArrowDown') { e.preventDefault(); focusItem(Math.min(index + 1, last)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focusItem(Math.max(index - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); focusItem(0); }
    else if (e.key === 'End') { e.preventDefault(); focusItem(last); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') setOpen(false);
  };

  return (
    <span ref={rootRef} className={`${styles.overflowRoot} ${className ?? ''}`}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.overflow}
        aria-label="Show hidden breadcrumbs"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={onTriggerKey}
      >
        <Icon name="overflow-menu-horizontal" size={16} />
      </button>
      {open && (
        <Menu size="sm" id={menuId} className={styles.menu}>
          {items.map((item, i) => (
            <MenuItem
              key={`${item.label}-${i}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              size="sm"
              label={item.label}
              href={item.href}
              onClick={() => {
                item.onClick?.();
                close(false);
              }}
              onKeyDown={onItemKey(i)}
            />
          ))}
        </Menu>
      )}
    </span>
  );
}
