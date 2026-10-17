// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2898
// Extracted: 2026-10-17
// Tokens: color-badge-bg-{default,gray,green,red,yellow,orange,blue,purple,teal,pink},
//         color-badge-label-{default,gray,green,red,yellow,orange,blue,purple,teal,pink},
//         color-badge-stroke-default, color-bg-primary, shadow-components-focus,
//         font-body, text-tiny, leading-tiny, text-regular, leading-regular, weight-regular, tracking-normal,
//         space-2, space-4, space-8, space-10, radius-6, radius-full, stroke-default, icon-13, icon-14, icon-16

'use client';

import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Badge.module.css';

/** Figma `Color`. `none` is the white badge (BACKGROUND/Primary). */
export type BadgeColor =
  | 'neutral'
  | 'none'
  | 'green'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'blue'
  | 'purple'
  | 'teal'
  | 'pink';

/** Figma `Type`. */
export type BadgeType = 'rounded' | 'pill';

/** Side of the icon (Figma `iconLeft` / `iconRight`, never both). */
export type BadgeIconPosition = 'left' | 'right';

interface BadgeBaseProps {
  /** Label (Figma `Label`). */
  children: ReactNode;
  /** Color (Figma `Color`). */
  color: BadgeColor;
  /** Adds the BADGE/stroke/default border (Figma `Border`). */
  border?: boolean;
  /** Icon (Figma `Icon` swap). An `<Icon>` without `size` is sized to the badge. */
  icon?: ReactNode;
  /** Side of the icon. */
  iconPosition?: BadgeIconPosition;
  /** Shows the close button (Figma `hasCloseIcon`) and is called when it is clicked. */
  onClose?: () => void;
  /** Accessible name of the close button. */
  closeLabel?: string;
  className?: string;
}

/** Figma has `lg` only with `Type=pill`. */
export type BadgeProps = BadgeBaseProps &
  ({ size?: 'sm'; type?: BadgeType } | { size: 'lg'; type?: 'pill' });

export type BadgeSize = NonNullable<BadgeProps['size']>;

function iconSize(size: BadgeSize, type: BadgeType, border: boolean): 13 | 14 | 16 {
  if (size === 'lg') return 16;
  // Figma: pill sm without border uses a 13px icon, every other sm variant 14px
  return type === 'pill' && !border ? 13 : 14;
}

function renderIcon(icon: ReactNode, size: 13 | 14 | 16) {
  if (isValidElement(icon) && icon.type === Icon) {
    const element = icon as ReactElement<React.ComponentProps<typeof Icon>>;
    if (element.props.size === undefined) return cloneElement(element, { size });
  }
  return icon;
}

export function Badge({
  children,
  color,
  size = 'sm',
  type = 'rounded',
  border = false,
  icon,
  iconPosition = 'left',
  onClose,
  closeLabel = 'Remove',
  className,
}: BadgeProps) {
  const classes = [
    styles.badge,
    styles[color],
    styles[type],
    styles[size],
    border ? styles.border : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const iconNode = icon != null && (
    <span className={styles.icon}>{renderIcon(icon, iconSize(size, type, border))}</span>
  );

  return (
    <span className={classes}>
      {iconPosition === 'left' && iconNode}
      <span className={styles.label}>{children}</span>
      {iconPosition === 'right' && iconNode}
      {onClose && (
        <button type="button" className={styles.close} onClick={onClose} aria-label={closeLabel}>
          <Icon name="close" size={14} />
        </button>
      )}
    </span>
  );
}
