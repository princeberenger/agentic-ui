// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4124-12068 (CopyButton)
// Extracted: 2026-10-17
// Tokens: color-border-accent, shadow-components-focus, stroke-md, radius-xs

'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip';
import styles from './CodeBlock.module.css';

export interface CopyButtonProps {
  /** Text written to the clipboard. */
  text: string;
  /** Figma `Size`: lg = 32px ghost button, sm = 16px. */
  size?: 'lg' | 'sm';
  disabled?: boolean;
  /** Called after a successful copy. */
  onCopy?: () => void;
  /** Shows the hover look and the tooltip (the parent block is hovered or focused). */
  active?: boolean;
  /** Tooltip before and after copying. */
  label?: string;
  copiedLabel?: string;
  className?: string;
}

/** Ghost icon-only Button with Icons / Copy and a bottom tooltip ("Copy to clipboard", then "Copied"). */
export function CopyButton({
  text,
  size = 'lg',
  disabled,
  onCopy,
  active,
  label = 'Copy to clipboard',
  copiedLabel = 'Copied',
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setOpen(true);
      onCopy?.();
    } catch {
      // clipboard refused (permissions, insecure context): keep the default tooltip
    }
  };

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setCopied(false);
  };

  return (
    <Tooltip
      content={copied ? copiedLabel : label}
      position="bottom"
      open={!disabled && (open || !!active)}
      onOpenChange={onOpenChange}
      className={className}
    >
      <Button
        variant="ghost"
        size={size === 'lg' ? 'md' : 'xs'}
        className={`${styles.copy} ${styles[`copy-${size}`]}`}
        data-active={active || undefined}
        icon={<Icon name="copy" />}
        aria-label={copied ? copiedLabel : label}
        disabled={disabled}
        onClick={copy}
      />
    </Tooltip>
  );
}
