// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3884 (pagination-item)
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-input-hover-dark, color-border-strong, color-content-primary, color-content-icon,
//         stroke-default, radius-xs, icon-16, icon-32, space-4, space-8, space-12,
//         font-label, text-tiny, leading-tiny, tracking-normal, weight-regular, duration-hover

'use client';

import { forwardRef, type ButtonHTMLAttributes, type ChangeEvent } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Pagination.module.css';

export interface PaginationItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Page number (Figma `Page number`). */
  page: number;
  /** Current page (Figma `Selected`, State `active`). */
  selected?: boolean;
}

/** Figma pagination-item, Type `number`. */
export const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(function PaginationItem(
  { page, selected = false, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.item} ${className ?? ''}`}
      aria-current={selected ? 'page' : undefined}
      aria-label={`Page ${page}`}
      {...rest}
    >
      {page}
    </button>
  );
});

export interface PaginationOverflowProps {
  /** Pages hidden behind the overflow item, listed in its select menu. */
  pages: number[];
  /** Called with the page picked in the menu. */
  onSelect: (page: number) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Figma pagination-item, Type `overflow`. Its Open state draws the browser's
 * native select menu (`_Select menu chrome menu`): a native `<select>` covers the item.
 */
export function PaginationOverflow({ pages, onSelect, disabled, className }: PaginationOverflowProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onSelect(Number(event.target.value));

  return (
    <span className={`${styles.item} ${styles.overflow} ${className ?? ''}`}>
      <Icon name="overflow-menu-horizontal" size={16} className={styles.overflowIcon} />
      <select
        className={styles.select}
        value=""
        onChange={handleChange}
        disabled={disabled}
        aria-label={`More pages, ${pages[0]} to ${pages[pages.length - 1]}`}
      >
        <option value="" disabled hidden />
        {pages.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </span>
  );
}
