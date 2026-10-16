// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=554-1360
// Extracted: 2026-10-16
// Tokens: color-content-icon, color-bg-secondary, radius-2, icon-14, icon-16,
//         font-label, text-small, leading-tiny, tracking-tight, text-super-tiny, leading-small

import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './KeyboardShortcut.module.css';

/** Figma `Context`. */
export type KeyboardShortcutContext = 'shortcut' | 'icon' | 'caret' | 'slash' | 'return';

/** Modifier keys rendered with the Figma icons (Icon 1–3, Icon 4 (Any)). */
export type KeyboardModifier = 'command' | 'option' | 'shift' | 'delete';

/** A modifier key or a single character (Figma letters X, Y, Z). */
export type KeyboardKey = KeyboardModifier | (string & {});

export interface KeyboardShortcutProps {
  /** Variant (Figma `Context`). Defaults to `shortcut`. */
  context?: KeyboardShortcutContext;
  /** Keys shown in `shortcut` context, in order. Modifiers render as icons, anything else as text. */
  keys?: KeyboardKey[];
  /** Icon shown in `icon` context (Figma `Icon`). */
  icon?: ReactNode;
  className?: string;
}

const MODIFIERS: Record<KeyboardModifier, { icon: string; label: string }> = {
  command: { icon: 'mac-command', label: 'Command' },
  option: { icon: 'mac-option', label: 'Option' },
  shift: { icon: 'mac-shift', label: 'Shift' },
  delete: { icon: 'delete', label: 'Delete' },
};

function isModifier(key: KeyboardKey): key is KeyboardModifier {
  return key in MODIFIERS;
}

export function KeyboardShortcut({ context = 'shortcut', keys = [], icon, className }: KeyboardShortcutProps) {
  const rootClass = [styles.root, className ?? ''].filter(Boolean).join(' ');

  if (context === 'shortcut') {
    return (
      <kbd className={rootClass}>
        {keys.map((key, i) =>
          isModifier(key) ? (
            <kbd key={i} className={styles.key}>
              <Icon name={MODIFIERS[key].icon} size={14} alt={MODIFIERS[key].label} />
            </kbd>
          ) : (
            <kbd key={i} className={styles.letter}>{key}</kbd>
          ),
        )}
      </kbd>
    );
  }

  if (context === 'slash') {
    return (
      <kbd className={rootClass}>
        <kbd className={styles.slash}>/</kbd>
      </kbd>
    );
  }

  if (context === 'return') {
    return (
      <kbd className={rootClass}>
        <kbd className={`${styles.key} ${styles.return}`}>
          <Icon name="return" size={16} alt="Return" />
        </kbd>
      </kbd>
    );
  }

  return (
    <span className={rootClass} aria-hidden="true">
      <span className={styles.key}>
        {context === 'caret' ? <Icon name="caret-right" size={14} /> : icon}
      </span>
    </span>
  );
}
