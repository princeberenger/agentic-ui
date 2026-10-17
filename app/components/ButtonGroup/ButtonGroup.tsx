// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-2459 (ButtonGroup)
// Extracted: 2026-10-17
// Tokens: space-10

import { type ReactNode } from 'react';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps {
  /** Buttons of the same size (Figma `Size`), e.g. a secondary "Cancel" then a primary "Launch". */
  children: ReactNode;
  className?: string;
}

/** Buttons side by side, 10px apart. */
export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={`${styles.group} ${className ?? ''}`} role="group">
      {children}
    </div>
  );
}
