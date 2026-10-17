// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=179-17313
// Extracted: 2026-10-17
// Tokens: icon-16, icon-20, icon-24, icon-32, icon-40, icon-48, icon-56, icon-64, radius-full,
//         color-bg-primary, color-border-subtle, stroke-sm, color-content-primary,
//         font-label, weight-regular, text-button, text-small, leading-tiny, tracking-spacious, tracking-tight
// Assets: public/assets/avatars/agent/agent-{color}-{size}.svg (figma export of every Type=agent variant),
//         agent-{color}-{size}-dark.svg (same with the MODE DARK values)

import styles from './Avatar.module.css';

/** Figma `Size`, in px. */
export type AvatarSize = 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

/** Figma `Color`, only used by `Type=agent`. */
export type AvatarAgentColor = 'gray' | 'blue' | 'purple' | 'orange' | 'teal' | 'pink';

interface AvatarBaseProps {
  /** Size in px (Figma `Size`). */
  size: AvatarSize;
  className?: string;
}

interface AgentAvatarProps extends AvatarBaseProps {
  /** AI / bot avatar (Figma `Type=agent`). */
  type: 'agent';
  /** Illustration color (Figma `Color`). */
  color: AvatarAgentColor;
  /** Accessible name; decorative when omitted. */
  alt?: string;
}

interface PhotoAvatarProps extends AvatarBaseProps {
  /** User image (Figma `Type=photo`). */
  type: 'photo';
  src: string;
  alt: string;
}

interface InitialsAvatarProps extends AvatarBaseProps {
  /** Text fallback (Figma `Type=initials`). Figma shows 1 letter at 16 and 20, 2 letters from 24. */
  type: 'initials';
  initials: string;
  /** Accessible name, e.g. the full name; the initials are read when omitted. */
  alt?: string;
}

export type AvatarProps = AgentAvatarProps | PhotoAvatarProps | InitialsAvatarProps;

export function Avatar(props: AvatarProps) {
  const { size, className } = props;
  const classes = [styles.avatar, styles[`size${size}`], className ?? ''].filter(Boolean).join(' ');

  if (props.type === 'agent') {
    return (
      // the export has the LIGHT colors baked in: a DARK copy (-dark.svg) swaps with the theme
      <>
        {(['light', 'dark'] as const).map((theme) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={theme}
            className={`${classes} ${theme === 'light' ? styles.agentLight : styles.agentDark}`}
            src={`/assets/avatars/agent/agent-${props.color}-${size}${theme === 'dark' ? '-dark' : ''}.svg`}
            alt={props.alt ?? ''}
            aria-hidden={props.alt ? undefined : true}
          />
        ))}
      </>
    );
  }

  if (props.type === 'photo') {
    return (
      <span className={`${classes} ${styles.bordered}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.photo} src={props.src} alt={props.alt} />
      </span>
    );
  }

  return (
    <span
      className={`${classes} ${styles.bordered} ${styles.initials}`}
      role={props.alt ? 'img' : undefined}
      aria-label={props.alt}
    >
      {props.initials}
    </span>
  );
}
