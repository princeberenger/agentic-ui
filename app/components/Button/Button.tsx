// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=147-2305
// Extracted: 2026-10-16
// Tokens: color-button-primary, color-button-secondary, color-button-secondary-filled, color-button-disabled,
//         color-bg-attention, color-bg-attention-light, color-bg-disabled, color-badge-label-red,
//         color-content-primary, color-content-on-primary, color-content-icon, color-content-disabled,
//         color-border-subtle, color-input-hover-light, color-input-hover-dark, color-input-pressed-light,
//         shadow-components-focus, shadow-components-destructive-focus, stroke-sm, radius-6, radius-10,
//         icon-13, icon-16, icon-24, icon-32, icon-40, space-4, space-8, space-12, space-16,
//         font-label, text-super-tiny, leading-buttons, text-tiny, leading-tiny, duration-hover

'use client';

import { cloneElement, forwardRef, isValidElement, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader';
import styles from './Button.module.css';

/** Figma `Style`. */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondary-filled'
  | 'ghost'
  | 'destructive'
  | 'destructive-light';

/** Figma `Size`. `xs` only exists as an icon-only ghost button in Figma. */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

/** Figma `Icon position` (`none` = no `icon`). */
export type ButtonIconPosition = 'left' | 'right';

type SharedProps = {
  /** Visual style (Figma `Style`). */
  variant?: ButtonVariant;
  /** Height: xs 16, sm 24, md 32, lg 40 (Figma `Size`). */
  size?: ButtonSize;
  /** Icon slot (Figma `Swap icon`). An `<Icon>` without `size` is sized to the button: 13px, 16px in lg. */
  icon?: ReactNode;
  /** Side of the icon when the button also has a label. */
  iconPosition?: ButtonIconPosition;
  /** Keyboard shortcut slot (Figma `_Keyboard shortcut`, types text-shortcut and shortcut). */
  shortcut?: ReactNode;
  /** Square counter button (Figma type `badge`, property `Badge label`). */
  badge?: string;
  /** Replaces the content with the loader, keeps the button size and blocks interaction. */
  loading?: boolean;
  className?: string;
  /**
   * Label (Figma `Label`). Icon-only, badge and shortcut-only buttons have no
   * label: pass an `aria-label`.
   */
  children?: ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & { href?: never };

type ButtonAsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const ICON_SIZE: Record<ButtonSize, 13 | 16> = { xs: 13, sm: 13, md: 13, lg: 16 };

function renderIcon(icon: ReactNode, size: ButtonSize) {
  if (isValidElement(icon) && icon.type === Icon) {
    const element = icon as ReactElement<React.ComponentProps<typeof Icon>>;
    if (element.props.size === undefined) return cloneElement(element, { size: ICON_SIZE[size] });
  }
  return icon;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      shortcut,
      badge,
      loading = false,
      className,
      children,
      ...rest
    } = props;

    const hasLabel = children != null && children !== false;
    const square = !hasLabel && (badge != null || (icon != null && shortcut == null));

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      square ? styles.square : '',
      shortcut != null ? styles.withShortcut : '',
      loading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const iconEl = icon != null ? (
      <span className={styles.icon} data-slot="icon">{renderIcon(icon, size)}</span>
    ) : null;

    const content = (
      <span className={styles.content}>
        {iconPosition === 'left' && iconEl}
        {badge != null && !hasLabel ? (
          <span className={styles.badge}>{badge}</span>
        ) : (
          hasLabel && <span className={styles.label}>{children}</span>
        )}
        {iconPosition === 'right' && iconEl}
        {shortcut != null && <span className={styles.shortcut}>{shortcut}</span>}
      </span>
    );

    // LOADER (20px) in lg, LOADER SMALL (12px) otherwise; color follows the label (LIGHT / DARK)
    const loader = loading ? (
      <Loader size={size === 'lg' ? 'default' : 'small'} className={styles.loader} />
    ) : null;

    if ('href' in rest && rest.href) {
      const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      const disabled = loading || anchorRest['aria-disabled'] === true || anchorRest['aria-disabled'] === 'true';
      return (
        <a
          {...anchorRest}
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          className={classNames}
          aria-disabled={disabled || undefined}
          aria-busy={loading || undefined}
        >
          {loader}
          {content}
        </a>
      );
    }

    const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        {...buttonRest}
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonRest.type ?? 'button'}
        className={classNames}
        disabled={loading || buttonRest.disabled}
        aria-busy={loading || undefined}
      >
        {loader}
        {content}
      </button>
    );
  },
);
