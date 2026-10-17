// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1641
// Extracted: 2026-10-17
// Tokens: color-bg-primary, color-bg-secondary, color-border-subtle, color-overlay-bg, color-content-primary,
//         color-content-secondary, shadow-elevation-4, radius-default, radius-full, stroke-sm, space-4, space-10,
//         space-12, space-16, space-24, font-heading, font-body, text-x-large, leading-large, text-regular,
//         leading-regular, weight-regular, tracking-normal, duration-enter, ease-out-expo

'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useFocusTrap } from '@/src/lib/useFocusTrap';
import { DURATION_ENTER, EASE_OUT_EXPO } from '@/app/components/motion';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import styles from './Modal.module.css';

export interface ModalProps {
  open: boolean;
  /** Called by the close button, Escape and a click on the overlay. */
  onClose: () => void;
  /** Figma `Title` (SYSTEM/Heading/h2). */
  title: ReactNode;
  /** Figma `Show subtitle`, `Subtitle`. */
  subtitle?: ReactNode;
  /** Body: text, Textarea, upload area… (Figma `Body text`, `Text area`, `Upload area`). */
  children?: ReactNode;
  /** Footer buttons, sharing the width 10px apart (Figma ButtonGroup Size=lg). */
  actions?: ReactNode;
  /** Accessible name of the close button. */
  closeLabel?: string;
  className?: string;
}

export function Modal({ open, onClose, title, subtitle, children, actions, closeLabel = 'Close', className }: ModalProps) {
  const titleId = useId();
  const subtitleId = useId();
  const trap = useFocusTrap({ onEscape: onClose, autoFocus: true, returnFocus: true });
  const savedOverflow = useRef('');

  // trap the focus and lock the page scroll while open
  useEffect(() => {
    if (!open) {
      trap.deactivate();
      return;
    }
    savedOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => trap.activate());
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = savedOverflow.current;
    };
  }, [open, trap]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION_ENTER, ease: [...EASE_OUT_EXPO] }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={trap.ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={subtitle != null ? subtitleId : undefined}
            className={[styles.modal, className ?? ''].filter(Boolean).join(' ')}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: DURATION_ENTER, ease: [...EASE_OUT_EXPO] }}
          >
            {/* first in the tab order, as it sits at the top right */}
            <Button
              className={styles.close}
              variant="secondary"
              size="sm"
              icon={<Icon name="close" />}
              aria-label={closeLabel}
              onClick={onClose}
            />
            <div className={styles.header}>
              <h2 id={titleId} className={styles.title}>{title}</h2>
              {subtitle != null && <p id={subtitleId} className={styles.subtitle}>{subtitle}</p>}
            </div>
            {children}
            {actions != null && <div className={styles.actions}>{actions}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
