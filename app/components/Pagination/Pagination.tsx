// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3790 (Pagination)
// Extracted: 2026-10-17
// Tokens: color-content-secondary, icon-48, icon-64, space-4, space-8, space-12, space-16, space-24,
//         font-label, text-tiny, leading-tiny, tracking-normal, weight-regular

'use client';

import { forwardRef, useState, type ReactNode } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import { PaginationItem, PaginationOverflow } from './PaginationItem';
import styles from './Pagination.module.css';

/** Figma `Type`. */
export type PaginationType = 'simple' | 'numbered';

export interface PaginationProps {
  /** Layout (Figma `Type`): `simple` shows the results label and `page/count`, `numbered` the page items. */
  type?: PaginationType;
  /** Number of pages. */
  pageCount: number;
  /** Current page, 1-based (controlled). */
  page?: number;
  /** Initial page when uncontrolled. */
  defaultPage?: number;
  /** Called with the new page. */
  onPageChange?: (page: number) => void;
  /** Results label (Figma `Total items`), `simple` only, e.g. "10 of 35 items". */
  totalItems?: ReactNode;
  /** Text before `totalItems`. */
  label?: ReactNode;
  className?: string;
}

type Slot = number | { hidden: number[] };

function range(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

/**
 * Figma shows 1, 2, 3, 4, overflow, last. Near the end the window mirrors it,
 * in the middle the current page and its neighbours sit between two overflows.
 */
function getSlots(page: number, count: number): Slot[] {
  if (count <= 6) return range(1, count);
  const hide = (from: number, to: number): Slot => ({ hidden: range(from, to) });
  if (page <= 3) return [...range(1, 4), hide(5, count - 1), count];
  if (page >= count - 2) return [1, hide(2, count - 4), ...range(count - 3, count)];
  return [1, hide(2, page - 2), ...range(page - 1, page + 1), hide(page + 2, count - 1), count];
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { type = 'simple', pageCount, page, defaultPage = 1, onPageChange, totalItems, label = 'Showing:', className },
  ref,
) {
  const [internal, setInternal] = useState(defaultPage);
  const count = Math.max(1, pageCount);
  const current = Math.min(Math.max(1, page ?? internal), count);

  const goTo = (next: number) => {
    if (next < 1 || next > count || next === current) return;
    if (page === undefined) setInternal(next);
    onPageChange?.(next);
  };

  const prev = (
    <Button
      variant="secondary"
      size={type === 'simple' ? 'sm' : 'lg'}
      // Figma: chevron-left is 20px in the numbered type, chevron-right 16px (see .ai/figma-debt.md)
      icon={<Icon name="chevron-left" size={type === 'numbered' ? 20 : undefined} />}
      aria-label="Previous page"
      disabled={current === 1}
      onClick={() => goTo(current - 1)}
    />
  );
  const next = (
    <Button
      variant="secondary"
      size={type === 'simple' ? 'sm' : 'lg'}
      icon={<Icon name="chevron-right" />}
      aria-label="Next page"
      disabled={current === count}
      onClick={() => goTo(current + 1)}
    />
  );

  if (type === 'simple') {
    return (
      <nav ref={ref} aria-label="Pagination" className={`${styles.pagination} ${styles.simple} ${className ?? ''}`}>
        <p className={styles.results}>
          <span>{label}</span>
          {totalItems !== undefined && <span>{totalItems}</span>}
        </p>
        <div className={styles.controls}>
          {prev}
          <span className={styles.pageText} aria-live="polite">
            {current}/{count}
          </span>
          {next}
        </div>
      </nav>
    );
  }

  return (
    <nav ref={ref} aria-label="Pagination" className={`${styles.pagination} ${styles.numbered} ${className ?? ''}`}>
      {prev}
      {getSlots(current, count).map((slot) =>
        typeof slot === 'number' ? (
          <PaginationItem key={slot} page={slot} selected={slot === current} onClick={() => goTo(slot)} />
        ) : (
          <PaginationOverflow key={`overflow-${slot.hidden[0]}`} pages={slot.hidden} onSelect={goTo} />
        ),
      )}
      {next}
    </nav>
  );
});
