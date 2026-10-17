// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4133-11200 (ChatComposer)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-bg-primary, color-content-on-primary, color-badge-bg-red, color-border-subtle,
//         color-border-strong, color-border-medium, color-border-warning, color-border-attention, color-content-primary,
//         color-content-secondary, color-content-disabled, color-input-hover-dark, color-transparent-black-20,
//         shadow-elevation-2, stroke-sm, stroke-default, radius-lg, radius-full, space-2, space-4, space-6, space-8,
//         space-12, space-24, icon-40, font-body, text-regular, leading-regular, text-tiny, leading-tiny, duration-hover

'use client';

import { useRef, useState, type DragEvent, type KeyboardEvent, type ReactNode } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { DashedBorder } from '../FileUpload/DashedBorder';
import { HelperText } from '../HelperText';
import { Icon } from '../Icon/Icon';
import { ChatScrollButton } from './ChatScrollButton';
import styles from './ChatComposer.module.css';

export interface ChatComposerProps {
  /** Controlled text. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Send button and Enter (Shift+Enter adds a line). */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Figma `State=disabled`. */
  disabled?: boolean;
  /** Figma `State=error` / `warning`: message above the composer, colored stroke. */
  status?: 'error' | 'warning';
  statusMessage?: ReactNode;
  /** Model picker label (Figma `Show model`), e.g. "GPT 5.6". */
  model?: string;
  onModelClick?: () => void;
  /** Upload button (Figma `Show upload`). */
  onAttach?: () => void;
  /** Microphone button (Figma `Show microphone`). */
  onMicrophone?: () => void;
  /** Files dropped on the composer (Figma `State=drag-drop`). */
  onFiles?: (files: File[]) => void;
  /** Attached files, usually small outline `<FileType onRemove>` chips (Figma `State=attachment`). */
  attachments?: ReactNode[];
  /** Figma `State=attachment (collapsed)`: "N Items" instead of the chips. */
  attachmentsCollapsed?: boolean;
  onAttachmentsCollapsedChange?: (collapsed: boolean) => void;
  /** Figma `State=condensed`: one-line pill. */
  condensed?: boolean;
  /** Figma `Show ScrollButton`: scroll-to-latest button above the composer. */
  onScrollToBottom?: () => void;
  'aria-label'?: string;
  className?: string;
}

export function ChatComposer({
  value: controlled,
  defaultValue = '',
  onChange,
  onSubmit,
  placeholder = 'Ask anything...',
  disabled = false,
  status,
  statusMessage,
  model,
  onModelClick,
  onAttach,
  onMicrophone,
  onFiles,
  attachments,
  attachmentsCollapsed,
  onAttachmentsCollapsedChange,
  condensed = false,
  onScrollToBottom,
  'aria-label': ariaLabel = 'Message',
  className,
}: ChatComposerProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [collapsedInternal, setCollapsedInternal] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragDepth = useRef(0);
  const value = controlled ?? internal;
  const filled = value.trim().length > 0;
  const collapsed = attachmentsCollapsed ?? collapsedInternal;

  const setValue = (next: string) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const submit = () => {
    if (!filled || disabled) return;
    onSubmit?.(value);
    if (controlled === undefined) setInternal('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
    }
  };

  const setCollapsed = (next: boolean) => {
    if (attachmentsCollapsed === undefined) setCollapsedInternal(next);
    onAttachmentsCollapsedChange?.(next);
  };

  // drag-drop: only when files are dragged over the composer
  const hasFiles = (e: DragEvent) => Array.from(e.dataTransfer.types).includes('Files');
  const dropHandlers = onFiles && !disabled
    ? {
        onDragEnter: (e: DragEvent) => {
          if (!hasFiles(e)) return;
          dragDepth.current += 1;
          setDragging(true);
        },
        onDragOver: (e: DragEvent) => {
          if (hasFiles(e)) e.preventDefault();
        },
        onDragLeave: () => {
          dragDepth.current -= 1;
          if (dragDepth.current <= 0) setDragging(false);
        },
        onDrop: (e: DragEvent) => {
          if (!hasFiles(e)) return;
          e.preventDefault();
          dragDepth.current = 0;
          setDragging(false);
          onFiles(Array.from(e.dataTransfer.files));
        },
      }
    : {};

  const sendButton = (
    <Button
      variant={status === 'error' ? 'destructive' : 'primary'}
      size="lg"
      className={styles.round}
      icon={<Icon name="arrow-up" />}
      aria-label="Send message"
      disabled={disabled || !filled}
      onClick={submit}
    />
  );
  const modelButton = model && (
    <Button
      variant="ghost"
      size="lg"
      className={styles.round}
      icon={<Icon name="chevron-down" />}
      iconPosition="right"
      disabled={disabled}
      onClick={onModelClick}
      aria-haspopup="menu"
    >
      {model}
    </Button>
  );
  const attachButton = onAttach && (
    <Button variant="ghost" size="lg" className={styles.round} icon={<Icon name="add" />} aria-label="Attach files" disabled={disabled} onClick={onAttach} />
  );
  const micButton = onMicrophone && (
    <Button variant="ghost" size="lg" className={styles.round} icon={<Icon name="microphone" />} aria-label="Voice input" disabled={disabled} onClick={onMicrophone} />
  );

  const box = dragging ? (
    <div className={styles.dropZone}>
      <DashedBorder />
      <span className={styles.dropText}>Drag &amp; drop your images here</span>
    </div>
  ) : condensed ? (
    <div className={styles.box} data-condensed data-status={status} data-filled={filled || undefined} data-disabled={disabled || undefined}>
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <div className={styles.actionsInline}>
        {modelButton}
        {attachButton}
        {micButton}
      </div>
    </div>
  ) : (
    <div className={styles.box} data-status={status} data-filled={filled || undefined} data-disabled={disabled || undefined}>
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        rows={2}
        aria-label={ariaLabel}
        aria-invalid={status === 'error' || undefined}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <div className={styles.actions}>
        <div className={styles.actionsLeft}>{modelButton}</div>
        <div className={styles.actionsRight}>
          {attachButton}
          {micButton}
          {sendButton}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${styles.composer} ${className ?? ''}`} {...dropHandlers}>
      {onScrollToBottom && <ChatScrollButton background="secondary" onClick={onScrollToBottom} />}
      {status && statusMessage && !dragging && (
        <div className={styles.message}>
          <HelperText type={status} size="lg" variant={status === 'error' ? 'solid' : 'light'}>
            {statusMessage}
          </HelperText>
        </div>
      )}
      {attachments && attachments.length > 0 && !dragging && (
        collapsed ? (
          <div className={styles.attachmentsCollapsed}>
            <button type="button" className={styles.attachmentsToggle} aria-expanded={false} onClick={() => setCollapsed(false)}>
              <Badge color="neutral" type="pill" size="sm">{attachments.length}</Badge>
              <span className={styles.itemsLabel}>Items</span>
              <span className={styles.toggleIcon} aria-hidden="true">
                <Icon name="chevron-up" size={14} />
              </span>
            </button>
          </div>
        ) : (
          <div className={styles.attachments}>
            <button type="button" className={styles.handle} aria-label="Collapse attachments" aria-expanded onClick={() => setCollapsed(true)} />
            {attachments}
          </div>
        )
      )}
      {box}
    </div>
  );
}
