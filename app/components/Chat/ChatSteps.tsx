// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6295-15285 (Multistepper)
// Extracted: 2026-10-17
// Tokens: color-content-disabled, color-content-primary, stroke-default, space-4, space-8, space-10, space-12, space-16,
//         space-24, icon-16, font-body, text-regular, leading-regular

'use client';

import { useState, type ReactNode } from 'react';
import { AgentStep, type AgentStepProps } from './AgentStep';
import { ChatStatusDot, type ChatStatus } from './ChatStatusDot';
import styles from './ChatAgent.module.css';

export interface ChatStepProps {
  /** The step (Figma Agent step). */
  label: ReactNode;
  icon?: string;
  state?: AgentStepProps['state'];
  /** Status dot color. */
  status?: ChatStatus;
  /** Figma `Type=Step + Message`: agent text under the step (Figma `Agent message label`). */
  message?: ReactNode;
  /** Figma `Type=Step + Sub-steps`. */
  subSteps?: { label: ReactNode; complete?: boolean }[];
  /** Expanded sub-steps or message (the step chevron toggles them). */
  defaultExpanded?: boolean;
  className?: string;
}

/** Figma Multistepper: status dot with its line, Agent step, then a message or sub-steps on a curved rail. */
export function ChatStep({ label, icon, state, status = 'gray', message, subSteps, defaultExpanded = true, className }: ChatStepProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasBody = Boolean(message || subSteps?.length);
  const open = hasBody && expanded;

  return (
    <div className={`${styles.chatStep} ${className ?? ''}`} data-kind={subSteps ? 'substeps' : message ? 'message' : 'step'}>
      <span className={styles.chatStepDot}>
        <ChatStatusDot status={status} showLine={!subSteps || !open} />
      </span>
      <div className={styles.chatStepBody}>
        <AgentStep
          label={label}
          icon={icon}
          state={state}
          expanded={open}
          onToggle={hasBody ? () => setExpanded(!expanded) : undefined}
        />
        {open && message && <div className={styles.chatStepMessage}>{message}</div>}
        {open && subSteps && (
          <ul className={styles.subSteps}>
            {subSteps.map((sub, i) => (
              <li key={i} className={styles.subStep}>
                <AgentStep label={sub.label} subStep={sub.complete ? 'complete' : 'incomplete'} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
