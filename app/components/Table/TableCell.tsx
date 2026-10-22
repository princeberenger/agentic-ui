// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Table)
//         cell-type-text 771:1082, cell-type-numeric 771:1179, cell-type-progress 4096:6790,
//         cell-type-action 771:1556, cell-type-icon 789:1532, cell-type-badge 771:1614, cell-type-avatar 779:314
// Extracted: 2026-10-21
// Tokens: color-bg-primary, color-bg-secondary, color-border-subtle, color-border-strong, color-input-hover-dark,
//         color-content-primary, color-content-secondary, color-content-icon, color-content-disabled,
//         color-content-on-primary, stroke-default, stroke-lg, radius-2, radius-full, space-2, space-8, space-12,
//         space-16, icon-24, icon-32, icon-64, font-body, text-small, text-tiny, leading-small, leading-tiny,
//         font-label, text-button, tracking-spacious, weight-medium, duration-hover

'use client';

import { forwardRef, type ReactNode, type TdHTMLAttributes } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon/Icon';
import { ProgressBars } from '../ProgressBars';
import styles from './Table.module.css';

/** Figma `Alignment`. */
export type TableCellAlign = 'left' | 'center' | 'right';

/** Shape of `table-skeleton-loading` per cell type. */
export type TableCellSkeleton = 'text' | 'numeric' | 'dropdown' | 'progress' | 'badge' | 'square' | 'circle' | 'circles';

export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> {
  align?: TableCellAlign;
  /** Figma `State=Disabled`. */
  disabled?: boolean;
  /** Figma `State=Loading`: replaces the content with a skeleton. */
  loading?: boolean;
  /** Skeleton drawn while loading. */
  skeleton?: TableCellSkeleton;
  /** Hover overlay (INPUT/Hover Dark). Off for cells whose control has its own hover. */
  hoverable?: boolean;
  /** 2px BORDER/Strong stroke when something inside has keyboard focus. */
  focusRing?: boolean;
}

/** Shared cell: 64px row, 12/16 padding, bottom BORDER/Subtle stroke. */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
  { align = 'left', disabled, loading, skeleton = 'text', hoverable = true, focusRing = true, className, children, ...rest },
  ref,
) {
  const classes = [
    styles.cell,
    styles[align],
    hoverable ? styles.hoverable : '',
    focusRing ? styles.focusable : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <td
      ref={ref}
      className={classes}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      aria-disabled={disabled || undefined}
      aria-busy={loading || undefined}
      {...rest}
    >
      <div className={styles.content}>{loading ? <TableSkeleton shape={skeleton} /> : children}</div>
    </td>
  );
});

export function TableSkeleton({ shape }: { shape: TableCellSkeleton }) {
  if (shape === 'circles') {
    return (
      <span className={`${styles.skeleton} ${styles['skeleton-circles']}`} aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => <span key={i} />)}
      </span>
    );
  }
  return <span className={`${styles.skeleton} ${styles[`skeleton-${shape}`]}`} aria-hidden="true" />;
}

type CellBase = Omit<TableCellProps, 'children' | 'skeleton'>;

const trailingIcon = (icon: ReactNode) => icon && <span className={styles.icon} aria-hidden="true">{icon}</span>;

// --- cell-type-text ------------------------------------------------------------

export interface TableTextCellProps extends CellBase {
  /** Figma `Main Text`. */
  text: ReactNode;
  /** Figma `Description Text` (shown when `Description` is on). */
  description?: ReactNode;
  /** Trailing icon (Figma `Show icon`, `Icon`, default Icons / Edit). */
  icon?: ReactNode;
  /** Row selection checkbox (hidden layer `Checkbox` in Figma). */
  selected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  selectLabel?: string;
}

export const TableTextCell = forwardRef<HTMLTableCellElement, TableTextCellProps>(function TableTextCell(
  { text, description, icon, selected, onSelectedChange, selectLabel = 'Select row', disabled, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="text" disabled={disabled} {...rest}>
      <div className={styles.textContainer}>
        {onSelectedChange && (
          <Checkbox checked={selected} onChange={onSelectedChange} disabled={disabled} aria-label={selectLabel} />
        )}
        <div className={styles.texts}>
          <span className={styles.mainText}>{text}</span>
          {description != null && <span className={styles.description}>{description}</span>}
        </div>
      </div>
      {trailingIcon(icon)}
    </TableCell>
  );
});

// --- cell-type-numeric ---------------------------------------------------------

export interface TableNumericCellProps extends Omit<CellBase, 'align'> {
  /** Figma `Cell text`. */
  value: ReactNode;
  /** Badge after the value (Figma `Badge`). */
  badge?: ReactNode;
  /** Trailing icon (Figma `Icon`, Icons / Edit). */
  icon?: ReactNode;
  /** Figma `Alignment` (Left, Right). */
  align?: 'left' | 'right';
}

export const TableNumericCell = forwardRef<HTMLTableCellElement, TableNumericCellProps>(function TableNumericCell(
  { value, badge, icon, align = 'left', ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="numeric" align={align} {...rest}>
      <div className={styles.numeric}>
        <span>{value}</span>
        {badge}
      </div>
      {trailingIcon(icon)}
    </TableCell>
  );
});

// --- cell-type-icon ------------------------------------------------------------

export interface TableIconCellProps extends Omit<CellBase, 'align'> {
  /** Figma `Icon` (default Icons / Checkmark). */
  icon: ReactNode;
  /** Accessible text for the icon. */
  label?: string;
}

export const TableIconCell = forwardRef<HTMLTableCellElement, TableIconCellProps>(function TableIconCell(
  { icon, label, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="square" align="center" {...rest}>
      <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
        {icon}
      </span>
    </TableCell>
  );
});

// --- cell-type-badge -----------------------------------------------------------

export interface TableBadgeCellProps extends CellBase {
  /** A `<Badge>` (Figma: rounded, sm, border). */
  badge: ReactNode;
}

export const TableBadgeCell = forwardRef<HTMLTableCellElement, TableBadgeCellProps>(function TableBadgeCell(
  { badge, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="badge" {...rest}>
      <span className={styles.badge}>{badge}</span>
    </TableCell>
  );
});

// --- cell-type-avatar ----------------------------------------------------------

export interface TableAvatarCellProps extends CellBase {
  /** An `<Avatar size={32}>` or an `<AvatarGroup>` (Figma `People`). */
  avatar: ReactNode;
  /** Figma `People=Multiple`: four circles while loading. */
  multiple?: boolean;
}

export const TableAvatarCell = forwardRef<HTMLTableCellElement, TableAvatarCellProps>(function TableAvatarCell(
  { avatar, multiple = false, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton={multiple ? 'circles' : 'circle'} {...rest}>
      <span className={styles.avatars}>{avatar}</span>
    </TableCell>
  );
});

// --- cell-type-progress --------------------------------------------------------

export interface TableProgressCellProps extends Omit<CellBase, 'align' | 'focusRing'> {
  /** Filled segments out of 10 (Progress - Bars (10)). */
  filled: number;
  /** Figma `Label`, e.g. "10%". */
  label: ReactNode;
}

export const TableProgressCell = forwardRef<HTMLTableCellElement, TableProgressCellProps>(function TableProgressCell(
  { filled, label, className, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="progress" className={`${styles.progress} ${className ?? ''}`} {...rest}>
      <span className={styles.bars}>
        <ProgressBars total={10} filled={filled} aria-label={typeof label === 'string' ? label : undefined} />
      </span>
      <span className={styles.label}>{label}</span>
    </TableCell>
  );
});

// --- cell-type-action ----------------------------------------------------------

export interface TableActionCellProps extends Omit<CellBase, 'align'> {
  /** Text button label (Figma `Primary button`, "Edit"). */
  actionLabel?: string;
  onAction?: () => void;
  /** Overflow button (Figma `Secondary button`, Icons / Overflow-menu--vertical). */
  onMore?: () => void;
  moreLabel?: string;
}

export const TableActionCell = forwardRef<HTMLTableCellElement, TableActionCellProps>(function TableActionCell(
  { actionLabel = 'Edit', onAction, onMore, moreLabel = 'More actions', disabled, ...rest },
  ref,
) {
  return (
    <TableCell ref={ref} skeleton="square" align="right" disabled={disabled} {...rest}>
      <div className={styles.actions}>
        <Button variant="secondary" size="lg" disabled={disabled} onClick={onAction}>
          {actionLabel}
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className={styles.more}
          icon={<Icon name="overflow-menu-vertical" />}
          aria-label={moreLabel}
          disabled={disabled}
          onClick={onMore}
        />
      </div>
    </TableCell>
  );
});
