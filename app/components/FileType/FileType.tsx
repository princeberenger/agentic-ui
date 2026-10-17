// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6111-11622 (File type)
// Extracted: 2026-10-17
// Tokens: color-bg-secondary, color-button-secondary, color-border-subtle, color-input-hover-dark, color-content-primary,
//         color-content-secondary, color-content-icon, shadow-components-focus, stroke-default, radius-default,
//         radius-10, space-8, space-12, space-24, space-48, icon-16, icon-24, font-label, text-button, leading-small,
//         tracking-spacious, weight-medium, duration-hover

'use client';

import { Button } from '../Button';
import { Icon } from '../Icon/Icon';
import styles from './FileType.module.css';

export interface FileTypeProps {
  /** File name, e.g. "Document.pdf" (Figma `Type` only changes the sample texts). */
  name: string;
  /** Size, e.g. "2.0 kb" (Figma `Show size`, not shown in Small). */
  fileSize?: string;
  /** Figma `Style`. */
  variant?: 'filled' | 'outline';
  /** Figma `Size`: large card, medium row with a download button, small chip. */
  size?: 'large' | 'medium' | 'small';
  /** Leading icon (Figma `Instance`, default Icons / Document); replaced by Icons / Download on hover. */
  icon?: string;
  /** Download link; the whole file is the link (Figma State=Hover shows the download icon). */
  href?: string;
  /** Download action when there is no `href`. */
  onDownload?: () => void;
  /** Small: remove button (Figma `Show close icon`). */
  onRemove?: () => void;
  className?: string;
}

export function FileType({
  name,
  fileSize,
  variant = 'filled',
  size = 'large',
  icon = 'document',
  href,
  onDownload,
  onRemove,
  className,
}: FileTypeProps) {
  const interactive = Boolean(href || onDownload);
  const label = `Download ${name}`;
  const main = (
    <>
      <span className={styles.icon} aria-hidden="true">
        <span className={styles.fileIcon}>
          <Icon name={icon} size={size === 'large' ? 24 : 16} />
        </span>
        {interactive && size !== 'medium' && (
          <span className={styles.downloadIcon}>
            <Icon name="download" size={size === 'large' ? 24 : 16} />
          </span>
        )}
      </span>
      <span className={styles.texts}>
        <span className={styles.name}>{name}</span>
        {fileSize && size !== 'small' && <span className={styles.size}>{fileSize}</span>}
      </span>
    </>
  );

  return (
    <div
      className={[styles.file, styles[size], styles[variant], interactive ? styles.interactive : '', className ?? ''].join(' ')}
    >
      {href ? (
        <a className={styles.main} href={href} download aria-label={label}>
          {main}
        </a>
      ) : onDownload ? (
        <button type="button" className={styles.main} onClick={onDownload} aria-label={label}>
          {main}
        </button>
      ) : (
        <span className={styles.main}>{main}</span>
      )}
      {size === 'medium' && interactive && (
        <Button
          variant="secondary"
          size="sm"
          className={styles.action}
          icon={<Icon name="download" />}
          aria-label={label}
          tabIndex={-1}
          onClick={onDownload}
          href={href}
        />
      )}
      {size === 'small' && onRemove && (
        <Button
          variant="ghost"
          size="xs"
          className={styles.action}
          icon={<Icon name="close" />}
          aria-label={`Remove ${name}`}
          onClick={onRemove}
        />
      )}
    </div>
  );
}
