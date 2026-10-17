// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=783-773
// Extracted: 2026-10-17
// Tokens: space-6, space-8, color-content-primary, font-label, weight-regular, text-button,
//         leading-tiny, tracking-spacious

import { type ReactNode } from 'react';
import { Avatar } from './Avatar';
import styles from './AvatarGroup.module.css';

export interface AvatarGroupProps {
  /** Avatars, in order; each one overlaps the previous (Figma `Show 1st` to `Show 4th`). */
  children: ReactNode;
  /** Tighter overlap: -6px instead of -8px (Figma `Type=compact`). */
  compact?: boolean;
  /** Number of hidden users, shown as a "+N" initials avatar (Figma `Show counter`). */
  count?: number;
  /** Name shown after the avatar, 8px apart (Figma `Type=initials-label`, `Name label`). */
  label?: string;
  className?: string;
}

export function AvatarGroup({ children, compact = false, count, label, className }: AvatarGroupProps) {
  const classes = [
    styles.group,
    label != null ? styles.labelled : compact ? styles.compact : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children}
      {count != null && <Avatar type="initials" initials={`+${count}`} size={32} />}
      {label != null && <span className={styles.label}>{label}</span>}
    </span>
  );
}
