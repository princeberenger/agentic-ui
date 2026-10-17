// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=2001-2681
// Extracted: 2026-10-17
// Tokens: color-bg-inverse, color-content-on-primary, radius-xs, space-4, space-8, space-16,
//         font-body, text-tiny, leading-tiny, weight-regular, tracking-normal, duration-enter, ease-out-expo

'use client';

import { useCallback, useEffect, useId, useRef, useState, type ReactElement, type ReactNode } from 'react';
import styles from './Tooltip.module.css';

/** Figma `Position`: side of the trigger the tooltip appears on. */
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/** Figma `Caret alignment`. Figma only has `center` for `left` and `right`. */
export type TooltipAlign = 'start' | 'center' | 'end';

export interface TooltipProps {
  /** Text (Figma `Tooltip text`). */
  content: ReactNode;
  /** Trigger element; it gets `aria-describedby` pointing at the tooltip. */
  children: ReactElement;
  position?: TooltipPosition;
  align?: TooltipAlign;
  /** Controlled visibility. Leave undefined to show on hover and focus. */
  open?: boolean;
  /** Called when hover, focus or Escape asks to show or hide the tooltip. */
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  align = 'center',
  open,
  onOpenChange,
  className,
}: TooltipProps) {
  const [internal, setInternal] = useState(false);
  const visible = open ?? internal;
  const id = useId();
  const anchorRef = useRef<HTMLSpanElement>(null);

  // the trigger may come from a server component: set aria-describedby on the DOM node
  useEffect(() => {
    const trigger = anchorRef.current?.firstElementChild;
    if (!trigger || trigger.getAttribute('role') === 'tooltip') return;
    trigger.setAttribute('aria-describedby', id);
    return () => trigger.removeAttribute('aria-describedby');
  }, [id]);

  const setOpen = useCallback(
    (next: boolean) => {
      if (open === undefined) setInternal(next);
      onOpenChange?.(next);
    },
    [open, onOpenChange],
  );

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, setOpen]);

  return (
    <span
      ref={anchorRef}
      className={[styles.anchor, className ?? ''].filter(Boolean).join(' ')}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <span
        id={id}
        role="tooltip"
        className={[styles.tooltip, styles[position], styles[align], visible ? styles.visible : ''].filter(Boolean).join(' ')}
      >
        <span className={styles.content}>{content}</span>
        <span className={styles.caret} aria-hidden="true">
          <span className={styles.arrow} />
        </span>
      </span>
    </span>
  );
}
