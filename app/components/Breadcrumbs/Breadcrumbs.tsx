// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-163 (Breadcrumbs)
// Extracted: 2026-10-17
// Tokens: color-content-disabled, space-2, font-label, text-small, leading-tiny, tracking-tight, weight-regular

import { forwardRef } from 'react';
import { BreadcrumbItem, BreadcrumbOverflow, type BreadcrumbItemProps } from './BreadcrumbItem';
import styles from './Breadcrumbs.module.css';

export type BreadcrumbsItem = Omit<BreadcrumbItemProps, 'current' | 'className'>;

export interface BreadcrumbsProps {
  /** Trail from the root to the active page. The last item is the current page. */
  items: BreadcrumbsItem[];
  /**
   * Items shown before collapsing (Figma `Items`: 2 to 4 are shown in full,
   * 5 collapses the first ones behind the overflow item).
   */
  maxItems?: number;
  className?: string;
}

function Separator({ children = '/' }: { children?: string }) {
  return (
    <span className={styles.separator} aria-hidden="true">
      {children}
    </span>
  );
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(
  { items, maxItems = 4, className },
  ref,
) {
  const collapsed = items.length > maxItems;
  const hidden = collapsed ? items.slice(0, items.length - maxItems) : [];
  const visible = collapsed ? items.slice(-maxItems) : items;

  return (
    <nav ref={ref} aria-label="Breadcrumb" className={`${styles.breadcrumbs} ${className ?? ''}`}>
      <ol className={styles.list}>
        {collapsed && (
          <li className={styles.entry}>
            {/* Figma Items=5 opens with a `<` separator before the overflow item */}
            <Separator>{'<'}</Separator>
            <BreadcrumbOverflow items={hidden} />
          </li>
        )}
        {visible.map((item, i) => (
          <li key={`${item.label}-${i}`} className={styles.entry}>
            {(i > 0 || collapsed) && <Separator />}
            <BreadcrumbItem {...item} current={i === visible.length - 1} />
          </li>
        ))}
      </ol>
    </nav>
  );
});
