// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=789-320 (cell-header)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-primary, color-content-secondary, color-content-primary, color-content-icon,
//         color-content-disabled, color-input-hover-dark, color-border-strong, stroke-lg, space-8, space-12, space-16,
//         icon-16, icon-40, font-label, text-button, leading-small, tracking-spacious, weight-medium, duration-hover

'use client';

import { forwardRef, type ReactNode, type ThHTMLAttributes } from 'react';
import { Checkbox, type CheckboxValue } from '../Checkbox';
import { Icon } from '../Icon/Icon';
import { TableSkeleton, type TableCellAlign } from './TableCell';
import styles from './Table.module.css';

export type TableSort = 'ascending' | 'descending' | 'none';

export interface TableHeaderCellProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  /** Figma `Main Text`. */
  children: ReactNode;
  /** Figma `Alignment`. */
  align?: TableCellAlign;
  /** Makes the header a sort button (Figma `Sort icon`, Icons / Arrows--vertical). */
  onSort?: () => void;
  /** Current sort of the column, exposed as `aria-sort`. */
  sort?: TableSort;
  /** Select-all checkbox (Figma `Checkbox`). */
  selected?: CheckboxValue;
  onSelectedChange?: (selected: boolean) => void;
  selectLabel?: string;
  /** Figma `State=Disabled`. */
  disabled?: boolean;
  /** Figma `State=Loading`. */
  loading?: boolean;
}

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(function TableHeaderCell(
  {
    children,
    align = 'left',
    onSort,
    sort,
    selected,
    onSelectedChange,
    selectLabel = 'Select all rows',
    disabled,
    loading,
    className,
    ...rest
  },
  ref,
) {
  const label = <span className={styles.headerLabel}>{children}</span>;

  return (
    <th
      ref={ref}
      scope="col"
      className={[styles.cell, styles.header, styles[align], onSort ? `${styles.hoverable} ${styles.focusable}` : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      aria-sort={onSort ? sort ?? 'none' : undefined}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      {...rest}
    >
      <div className={styles.headerContent}>
        {loading ? (
          <TableSkeleton shape="text" />
        ) : (
          <>
            {onSelectedChange && (
              <Checkbox checked={selected} onChange={onSelectedChange} disabled={disabled} aria-label={selectLabel} />
            )}
            {onSort ? (
              <button type="button" className={styles.sortButton} onClick={onSort} disabled={disabled}>
                {label}
                <span className={styles.sortIcon} aria-hidden="true">
                  <Icon name="arrows-vertical" size={16} />
                </span>
              </button>
            ) : (
              label
            )}
          </>
        )}
      </div>
    </th>
  );
});
