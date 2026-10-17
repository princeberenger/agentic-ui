// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6282-12965 (toolcall-base)
//         https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6231-10080 (Chat Tool Call)
// Extracted: 2026-10-17
// Tokens: color-content-primary, color-content-secondary, color-content-icon, color-bg-attention, space-4, space-8,
//         space-10, space-12, icon-14, icon-16, font-body, text-tiny, leading-tiny

'use client';

import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner';
import { AgentStep } from './AgentStep';
import styles from './ChatAgent.module.css';

/** Figma toolcall-base `State`. */
export type ToolCallStatus = 'complete' | 'working' | 'error';

export interface ToolCallItemProps {
  status?: ToolCallStatus;
  /** Figma `Label primary item`, e.g. "bash". */
  name: string;
  /** Figma `Label secondary item`, e.g. "git diff --stat". */
  detail?: string;
  /** Figma `Label third item`, e.g. "340ms". */
  time?: string;
  className?: string;
}

/** One tool call: status icon, name, detail, duration at 50% opacity. */
export function ToolCallItem({ status = 'complete', name, detail, time, className }: ToolCallItemProps) {
  return (
    <span className={`${styles.toolCall} ${className ?? ''}`} data-status={status}>
      <span className={styles.toolIcon}>
        {status === 'working' ? (
          <Spinner label="Running" />
        ) : (
          <Icon name={status === 'error' ? 'error-filled' : 'checkmark-filled'} size={14} alt={status === 'error' ? 'Failed' : 'Done'} />
        )}
      </span>
      <span className={styles.toolTexts}>
        <span className={styles.toolName}>{name}</span>
        {detail && <span className={styles.toolDetail}>{detail}</span>}
        {time && <span className={styles.toolTime}>{time}</span>}
      </span>
    </span>
  );
}

export interface ChatToolCallProps {
  /** Step label, e.g. "3 Tool calls" (V1) or "3 Actions" (V2). */
  label: string;
  calls: ToolCallItemProps[];
  /** Collapsed summary: last call with this count instead of its duration, e.g. "3 tools". */
  summary?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
}

/** Figma Chat Tool Call: expanded list under an Agent step, or one summary row with a chevron. */
export function ChatToolCall({
  label,
  calls,
  summary,
  expanded: controlled,
  defaultExpanded = true,
  onExpandedChange,
  className,
}: ChatToolCallProps) {
  const [internal, setInternal] = useState(defaultExpanded);
  const expanded = controlled ?? internal;
  const toggle = () => {
    if (controlled === undefined) setInternal(!expanded);
    onExpandedChange?.(!expanded);
  };
  const last = calls[calls.length - 1];

  if (!expanded && last) {
    return (
      <button type="button" className={`${styles.toolSummary} ${className ?? ''}`} aria-expanded={false} aria-label={`${label}, show`} onClick={toggle}>
        <ToolCallItem {...last} time={summary ?? last.time} />
        <span className={styles.stepChevron} aria-hidden="true">
          <Icon name="chevron-down" size={14} />
        </span>
      </button>
    );
  }

  return (
    <div className={`${styles.toolCallGroup} ${className ?? ''}`}>
      <AgentStep label={label} icon="tools" expanded onToggle={toggle} />
      <ul className={styles.toolList}>
        {calls.map((call, i) => (
          <li key={i}>
            <ToolCallItem {...call} />
          </li>
        ))}
      </ul>
    </div>
  );
}
