// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=587-3511
// Extracted: 2026-10-17
// Tokens: color-content-secondary, color-border-subtle, space-4, space-8, space-12, space-24, space-32,
//         radius-md, stroke-default, icon-20, font-label, text-button, weight-medium, leading-small,
//         tracking-spacious

'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { Button } from '../Button';
import { KeyboardShortcut, type KeyboardModifier } from '../KeyboardShortcut';
import { Logo } from '../Logo';
import styles from './DemoPageHeader.module.css';

export interface DemoPageHeaderProps {
  /** Figma `Label`: the page name. */
  label: ReactNode;
  /** Launch Demo action, run by the key buttons and by ⌥ ⌘ Return. */
  onLaunch?: () => void;
  className?: string;
}

const KEYS: KeyboardModifier[] = ['option', 'command', 'return'];

export function DemoPageHeader({ label, onLaunch, className }: DemoPageHeaderProps) {
  const launchId = useId();
  const launch = useRef(onLaunch);
  launch.current = onLaunch;

  useEffect(() => {
    if (!onLaunch) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.altKey && e.metaKey) {
        e.preventDefault();
        launch.current?.();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onLaunch]);

  return (
    <header className={[styles.header, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
        <span className={styles.divider} aria-hidden="true" />
        <h1 className={styles.label}>{label}</h1>
      </div>
      <div className={styles.right}>
        <span className={styles.label} id={launchId}>Launch Demo</span>
        <div className={styles.keys} role="group" aria-labelledby={launchId}>
          {KEYS.map((key) => (
            <Button
              key={key}
              variant="secondary"
              size="sm"
              className={styles.key}
              shortcut={<KeyboardShortcut keys={[key]} />}
              onClick={onLaunch}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
