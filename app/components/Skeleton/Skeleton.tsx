// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-23192 (Skeleton loading animation)
// Extracted: 2026-10-17
// Tokens: color-skeleton-bg, color-skeleton-highlight

import styles from './Skeleton.module.css';

export interface SkeletonProps {
  className?: string;
}

/**
 * Loading placeholder: a highlight sweeps across the bar (Figma Phase 1 → 5
 * prototype, 3.4s loop). Size it with `className` or the parent.
 */
export function Skeleton({ className }: SkeletonProps) {
  return <span className={`${styles.skeleton} ${className ?? ''}`} aria-hidden="true" />;
}
