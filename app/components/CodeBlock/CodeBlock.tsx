// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4126-5641 (Code block (Simple))
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4125-6917 (Code block (Advanced))
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-border-subtle, color-input-hover-dark, color-content-primary, color-content-disabled,
//         shadow-components-focus, stroke-sm, stroke-default, radius-10, radius-md, space-4, space-12, space-16,
//         space-64, space-128, font-code, text-regular, leading-regular, weight-regular, tracking-normal, duration-hover

'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton';
import { CopyButton } from './CopyButton';
import styles from './CodeBlock.module.css';

export interface CodeBlockProps {
  /** Figma `Code text`. */
  code: string;
  /** `simple`: one line, copy on the right. `advanced`: multi-line, clipped with Show more / Show less. */
  variant?: 'simple' | 'advanced';
  /** Figma `Show "Copy" button`. */
  showCopy?: boolean;
  /** Advanced: Figma `Expand button`. */
  expandable?: boolean;
  /** Advanced: Figma `Expanded` (controlled). */
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Simple: Figma `State=disabled`. */
  disabled?: boolean;
  /** Simple: Figma `State=loading` (skeleton). */
  loading?: boolean;
  'aria-label'?: string;
  className?: string;
}

export function CodeBlock({
  code,
  variant = 'simple',
  showCopy = true,
  expandable = true,
  expanded: controlled,
  defaultExpanded = false,
  onExpandedChange,
  disabled,
  loading,
  'aria-label': ariaLabel,
  className,
}: CodeBlockProps) {
  const [internal, setInternal] = useState(defaultExpanded);
  const [hovered, setHovered] = useState(false);
  const expanded = controlled ?? internal;

  const toggle = () => {
    if (controlled === undefined) setInternal(!expanded);
    onExpandedChange?.(!expanded);
  };

  if (variant === 'simple' && loading) {
    return (
      <div className={[styles.block, styles.simple, className ?? ''].join(' ')} data-loading aria-busy="true" aria-label={ariaLabel}>
        <Skeleton className={styles.skeleton} />
      </div>
    );
  }

  return (
    <div
      className={[styles.block, styles[variant], className ?? ''].join(' ')}
      data-disabled={disabled || undefined}
      data-expanded={variant === 'advanced' ? expanded : undefined}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <pre className={styles.code} aria-label={ariaLabel}>
        <code>{code}</code>
      </pre>
      {showCopy && (
        <CopyButton
          text={code}
          disabled={disabled}
          active={variant === 'simple' && hovered && !disabled}
          className={styles.copyPosition}
        />
      )}
      {variant === 'advanced' && expandable && (
        <span className={styles.expandPosition}>
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon name={expanded ? 'chevron-up' : 'chevron-down'} />}
            iconPosition="right"
            aria-expanded={expanded}
            onClick={toggle}
            className={styles.expand}
          >
            {expanded ? 'Show less' : 'Show more'}
          </Button>
        </span>
      )}
    </div>
  );
}
