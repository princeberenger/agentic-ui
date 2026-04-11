# Design System Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add missing foundational components (Button, Input, Textarea, Select, Dialog, Fieldset), retrofit forwardRef and disabled states across existing components, establish error/validation patterns, and create a motion token sync script.

**Architecture:** Each component uses CSS Modules + CSS custom properties (never utility classes). Interactive components are `'use client'` with `motion/react` for animations. Props use discriminated unions where variants are mutually exclusive. All components use `forwardRef`. A `data-slot` attribute pattern enables composable styling in form fields.

**Tech Stack:** React 19, TypeScript strict, CSS Modules, motion/react (Framer Motion v12), Next.js 16

---

## File Structure

```
app/components/
├── Button/
│   ├── Button.tsx           # Discriminated union: solid | outline | plain
│   └── Button.module.css    # All variant + state styles
├── Input/
│   ├── Input.tsx            # forwardRef, data-slot="control"
│   └── Input.module.css     # Focus ring, invalid, disabled
├── Textarea/
│   ├── Textarea.tsx         # forwardRef, data-slot="control"
│   └── Textarea.module.css  # Same state pattern as Input
├── Select/
│   ├── Select.tsx           # forwardRef, data-slot="control", custom chevron
│   └── Select.module.css    # Same state pattern as Input
├── Dialog/
│   ├── Dialog.tsx           # Wraps useFocusTrap, AnimatePresence enter/exit
│   └── Dialog.module.css    # Backdrop, panel, sizing
├── Fieldset/
│   ├── Fieldset.tsx         # Fieldset, Field, Label, Description, ErrorMessage
│   └── Fieldset.module.css  # data-slot spacing rules
├── Slider/
│   └── Slider.tsx           # MODIFY: add forwardRef + disabled
├── TabGroup/
│   └── Tab.tsx              # MODIFY: add forwardRef + disabled
├── Menu/
│   └── Menu.tsx             # MODIFY: add forwardRef
├── Navigation/
│   └── Navigation.tsx       # MODIFY: add forwardRef
scripts/
└── sync-motion-tokens.ts    # CSS ↔ JS token sync checker
```

---

### Task 1: Button Component

**Files:**
- Create: `app/components/Button/Button.tsx`
- Create: `app/components/Button/Button.module.css`

- [ ] **Step 1: Create Button.module.css with all variant + state styles**

```css
/* app/components/Button/Button.module.css */

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  line-height: var(--leading-small);
  letter-spacing: var(--tracking-spacious);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  border: 1px solid transparent;
  transition: var(--duration-hover) ease;
  transition-property: background-color, border-color, color, box-shadow, opacity;
}

/* Sizes */
.sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--text-button);
  line-height: var(--leading-button);
}

.md {
  padding: var(--space-8) var(--space-16);
}

.lg {
  padding: var(--space-12) var(--space-24);
}

/* ── Solid variant ── */
.solid {
  background-color: var(--color-content-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-content-primary);
}

@media (hover: hover) and (pointer: fine) {
  .solid:hover:not(:disabled) {
    background-color: var(--color-content-secondary);
    border-color: var(--color-content-secondary);
  }
}

.solid:active:not(:disabled) {
  transform: scale(0.97);
  transition-duration: var(--duration-press);
}

.solid:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.solid:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Outline variant ── */
.outline {
  background-color: transparent;
  color: var(--color-content-primary);
  border-color: var(--color-border-subtle);
}

@media (hover: hover) and (pointer: fine) {
  .outline:hover:not(:disabled) {
    background-color: var(--color-bg-secondary);
    border-color: var(--color-border-medium);
  }
}

.outline:active:not(:disabled) {
  transform: scale(0.97);
  transition-duration: var(--duration-press);
}

.outline:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.outline:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Plain variant ── */
.plain {
  background-color: transparent;
  color: var(--color-content-primary);
  border-color: transparent;
}

@media (hover: hover) and (pointer: fine) {
  .plain:hover:not(:disabled) {
    background-color: var(--color-bg-secondary);
  }
}

.plain:active:not(:disabled) {
  transform: scale(0.97);
  transition-duration: var(--duration-press);
}

.plain:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.plain:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Danger modifier (works with any variant) ── */
.danger.solid {
  background-color: #dc2626;
  border-color: #dc2626;
  color: #ffffff;
}

@media (hover: hover) and (pointer: fine) {
  .danger.solid:hover:not(:disabled) {
    background-color: #b91c1c;
    border-color: #b91c1c;
  }
}

.danger.outline {
  color: #dc2626;
  border-color: #dc2626;
}

.danger.plain {
  color: #dc2626;
}

/* ── Icon slot ── */
.button [data-slot="icon"] {
  width: var(--icon-16);
  height: var(--icon-16);
  flex-shrink: 0;
}

.sm [data-slot="icon"] {
  width: var(--icon-14);
  height: var(--icon-14);
}

/* ── Full width ── */
.fullWidth {
  width: 100%;
}

/* ── Loading ── */
.loading {
  pointer-events: none;
  opacity: 0.7;
}

.spinner {
  width: var(--icon-16);
  height: var(--icon-16);
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

- [ ] **Step 2: Create Button.tsx with discriminated union props and forwardRef**

```tsx
// app/components/Button/Button.tsx
'use client';

import React, { forwardRef } from 'react';
import styles from './Button.module.css';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonVariantProps =
  | { variant?: 'solid'; outline?: never; plain?: never }
  | { variant?: never; outline: true; plain?: never }
  | { variant?: never; outline?: never; plain: true };

type ButtonBaseProps = {
  size?: ButtonSize;
  danger?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  ButtonVariantProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      outline,
      plain,
      size = 'md',
      danger = false,
      fullWidth = false,
      loading = false,
      className,
      children,
      ...rest
    } = props;

    const variantClass = outline
      ? styles.outline
      : plain
        ? styles.plain
        : styles.solid;

    const classes = [
      styles.button,
      variantClass,
      styles[size],
      danger && styles.danger,
      fullWidth && styles.fullWidth,
      loading && styles.loading,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if ('href' in rest && rest.href) {
      const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorProps}
        >
          {loading && <span className={styles.spinner} aria-hidden="true" />}
          {children}
        </a>
      );
    }

    const { disabled, ...buttonProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type="button"
        disabled={disabled || loading}
        className={classes}
        {...buttonProps}
      >
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        {children}
      </button>
    );
  }
);
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npx tsc --noEmit 2>&1 | grep -c "Button"`
Expected: `0` (zero errors from Button files)

- [ ] **Step 4: Commit**

```bash
git add app/components/Button/
git commit -m "feat: add Button component with solid/outline/plain discriminated union variants"
```

---

### Task 2: Input Component

**Files:**
- Create: `app/components/Input/Input.tsx`
- Create: `app/components/Input/Input.module.css`

- [ ] **Step 1: Create Input.module.css**

```css
/* app/components/Input/Input.module.css */

.wrapper {
  position: relative;
  display: block;
  width: 100%;
}

.input {
  display: block;
  width: 100%;
  appearance: none;
  border-radius: var(--radius-md);
  padding: var(--space-8) var(--space-12);
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: var(--color-content-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-subtle);
  transition: var(--duration-hover) ease;
  transition-property: border-color, box-shadow;
  outline: none;
}

.input::placeholder {
  color: var(--color-content-icon);
}

@media (hover: hover) and (pointer: fine) {
  .input:hover:not(:disabled):not(:focus) {
    border-color: var(--color-border-medium);
  }
}

.input:focus {
  border-color: var(--color-focus-ring);
  box-shadow: var(--shadow-focus-ring);
}

/* Invalid */
.invalid .input {
  border-color: #dc2626;
}

.invalid .input:focus {
  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.3);
}

/* Disabled */
.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-bg-secondary);
}
```

- [ ] **Step 2: Create Input.tsx with forwardRef and data-slot**

```tsx
// app/components/Input/Input.tsx
'use client';

import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /** Visual invalid state. Wire to form validation. */
  invalid?: boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ invalid = false, className, ...props }, ref) {
    return (
      <span
        data-slot="control"
        className={`${styles.wrapper} ${invalid ? styles.invalid : ''} ${className ?? ''}`}
      >
        <input
          ref={ref}
          className={styles.input}
          aria-invalid={invalid || undefined}
          {...props}
        />
      </span>
    );
  }
);
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Input/
git commit -m "feat: add Input component with invalid/disabled states and data-slot"
```

---

### Task 3: Textarea Component

**Files:**
- Create: `app/components/Textarea/Textarea.tsx`
- Create: `app/components/Textarea/Textarea.module.css`

- [ ] **Step 1: Create Textarea.module.css**

```css
/* app/components/Textarea/Textarea.module.css */

.wrapper {
  position: relative;
  display: block;
  width: 100%;
}

.textarea {
  display: block;
  width: 100%;
  appearance: none;
  border-radius: var(--radius-md);
  padding: var(--space-8) var(--space-12);
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: var(--color-content-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-subtle);
  transition: var(--duration-hover) ease;
  transition-property: border-color, box-shadow;
  outline: none;
  resize: vertical;
  min-height: 80px;
}

.textarea::placeholder {
  color: var(--color-content-icon);
}

@media (hover: hover) and (pointer: fine) {
  .textarea:hover:not(:disabled):not(:focus) {
    border-color: var(--color-border-medium);
  }
}

.textarea:focus {
  border-color: var(--color-focus-ring);
  box-shadow: var(--shadow-focus-ring);
}

.invalid .textarea {
  border-color: #dc2626;
}

.invalid .textarea:focus {
  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.3);
}

.textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-bg-secondary);
}
```

- [ ] **Step 2: Create Textarea.tsx**

```tsx
// app/components/Textarea/Textarea.tsx
'use client';

import React, { forwardRef } from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  invalid?: boolean;
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ invalid = false, className, ...props }, ref) {
    return (
      <span
        data-slot="control"
        className={`${styles.wrapper} ${invalid ? styles.invalid : ''} ${className ?? ''}`}
      >
        <textarea
          ref={ref}
          className={styles.textarea}
          aria-invalid={invalid || undefined}
          {...props}
        />
      </span>
    );
  }
);
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Textarea/
git commit -m "feat: add Textarea component with invalid/disabled states"
```

---

### Task 4: Select Component

**Files:**
- Create: `app/components/Select/Select.tsx`
- Create: `app/components/Select/Select.module.css`

- [ ] **Step 1: Create Select.module.css**

```css
/* app/components/Select/Select.module.css */

.wrapper {
  position: relative;
  display: block;
  width: 100%;
}

.select {
  display: block;
  width: 100%;
  appearance: none;
  border-radius: var(--radius-md);
  padding: var(--space-8) var(--space-12);
  padding-right: var(--space-48);
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: var(--color-content-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-subtle);
  transition: var(--duration-hover) ease;
  transition-property: border-color, box-shadow;
  outline: none;
  cursor: pointer;
}

@media (hover: hover) and (pointer: fine) {
  .select:hover:not(:disabled):not(:focus) {
    border-color: var(--color-border-medium);
  }
}

.select:focus {
  border-color: var(--color-focus-ring);
  box-shadow: var(--shadow-focus-ring);
}

.invalid .select {
  border-color: #dc2626;
}

.select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-bg-secondary);
}

.chevron {
  position: absolute;
  top: 50%;
  right: var(--space-12);
  transform: translateY(-50%);
  width: var(--icon-16);
  height: var(--icon-16);
  pointer-events: none;
  color: var(--color-content-icon);
}
```

- [ ] **Step 2: Create Select.tsx**

```tsx
// app/components/Select/Select.tsx
'use client';

import React, { forwardRef } from 'react';
import styles from './Select.module.css';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  invalid?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ invalid = false, className, children, ...props }, ref) {
    return (
      <span
        data-slot="control"
        className={`${styles.wrapper} ${invalid ? styles.invalid : ''} ${className ?? ''}`}
      >
        <select
          ref={ref}
          className={styles.select}
          aria-invalid={invalid || undefined}
          {...props}
        >
          {children}
        </select>
        <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
);
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Select/
git commit -m "feat: add Select component with custom chevron and invalid/disabled states"
```

---

### Task 5: Fieldset / Form Field Architecture

**Files:**
- Create: `app/components/Fieldset/Fieldset.tsx`
- Create: `app/components/Fieldset/Fieldset.module.css`

- [ ] **Step 1: Create Fieldset.module.css with data-slot spacing rules**

```css
/* app/components/Fieldset/Fieldset.module.css */

/* ── Fieldset ── */
.fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

/* ── FieldGroup — vertical stack of fields ── */
.fieldGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

/* ── Field — single label+control+description+error unit ── */
.field {
  display: flex;
  flex-direction: column;
}

/* data-slot spacing: label → control */
.field > [data-slot="label"] + [data-slot="control"] {
  margin-top: var(--space-4);
}

/* data-slot spacing: label → description */
.field > [data-slot="label"] + [data-slot="description"] {
  margin-top: var(--space-2);
}

/* data-slot spacing: description → control */
.field > [data-slot="description"] + [data-slot="control"] {
  margin-top: var(--space-4);
}

/* data-slot spacing: control → error */
.field > [data-slot="control"] + [data-slot="error"] {
  margin-top: var(--space-4);
}

/* data-slot spacing: control → description (helper text below) */
.field > [data-slot="control"] + [data-slot="description"] {
  margin-top: var(--space-4);
}

/* ── Legend ── */
.legend {
  font-family: var(--font-body);
  font-size: var(--text-regular);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-regular);
  color: var(--color-content-primary);
  padding: 0;
}

/* ── Label ── */
.label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  line-height: var(--leading-small);
  color: var(--color-content-primary);
  user-select: none;
  -webkit-user-select: none;
}

.labelDisabled {
  opacity: 0.5;
}

/* ── Description ── */
.description {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: var(--color-content-secondary);
}

/* ── ErrorMessage ── */
.error {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: #dc2626;
}
```

- [ ] **Step 2: Create Fieldset.tsx with all form field primitives**

```tsx
// app/components/Fieldset/Fieldset.tsx
import React, { forwardRef } from 'react';
import styles from './Fieldset.module.css';

/* ── Fieldset ── */
export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  function Fieldset({ className, ...props }, ref) {
    return <fieldset ref={ref} className={`${styles.fieldset} ${className ?? ''}`} {...props} />;
  }
);

/* ── Legend ── */
export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  className?: string;
}

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  function Legend({ className, ...props }, ref) {
    return <legend ref={ref} data-slot="legend" className={`${styles.legend} ${className ?? ''}`} {...props} />;
  }
);

/* ── FieldGroup ── */
export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  function FieldGroup({ className, ...props }, ref) {
    return <div ref={ref} data-slot="control" className={`${styles.fieldGroup} ${className ?? ''}`} {...props} />;
  }
);

/* ── Field ── */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  function Field({ className, ...props }, ref) {
    return <div ref={ref} className={`${styles.field} ${className ?? ''}`} {...props} />;
  }
);

/* ── Label ── */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  className?: string;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  function Label({ disabled, className, ...props }, ref) {
    return (
      <label
        ref={ref}
        data-slot="label"
        className={`${styles.label} ${disabled ? styles.labelDisabled : ''} ${className ?? ''}`}
        {...props}
      />
    );
  }
);

/* ── Description ── */
export interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  function Description({ className, ...props }, ref) {
    return <p ref={ref} data-slot="description" className={`${styles.description} ${className ?? ''}`} {...props} />;
  }
);

/* ── ErrorMessage ── */
export interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  function ErrorMessage({ className, ...props }, ref) {
    return <p ref={ref} data-slot="error" role="alert" className={`${styles.error} ${className ?? ''}`} {...props} />;
  }
);
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Fieldset/
git commit -m "feat: add Fieldset, Field, Label, Description, ErrorMessage with data-slot composition"
```

---

### Task 6: Dialog Component

**Files:**
- Create: `app/components/Dialog/Dialog.tsx`
- Create: `app/components/Dialog/Dialog.module.css`

- [ ] **Step 1: Create Dialog.module.css**

```css
/* app/components/Dialog/Dialog.module.css */

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-16);
}

.panel {
  position: relative;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-elevation-4);
  padding: var(--space-24);
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
}

/* Sizes */
.sm { max-width: 24rem; }   /* 384px */
.md { max-width: 28rem; }   /* 448px */
.lg { max-width: 32rem; }   /* 512px */
.xl { max-width: 36rem; }   /* 576px */
.full { max-width: 48rem; } /* 768px */

/* ── Subcomponents ── */
.title {
  font-family: var(--font-heading);
  font-size: var(--text-large);
  font-weight: var(--weight-medium);
  line-height: var(--leading-regular);
  color: var(--color-content-primary);
  margin: 0;
}

.description {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--leading-small);
  color: var(--color-content-secondary);
  margin-top: var(--space-8);
}

.body {
  margin-top: var(--space-16);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-8);
  margin-top: var(--space-24);
}
```

- [ ] **Step 2: Create Dialog.tsx wrapping useFocusTrap with AnimatePresence**

```tsx
// app/components/Dialog/Dialog.tsx
'use client';

import React, { useEffect, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useFocusTrap } from '@/src/lib';
import { EASE_OUT_EXPO, DURATION_ENTER } from '@/app/components/motion';
import styles from './Dialog.module.css';

type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  size?: DialogSize;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onClose, size = 'md', children, className }: DialogProps) {
  const focusTrap = useFocusTrap({
    onEscape: onClose,
    autoFocus: true,
    returnFocus: true,
  });

  useEffect(() => {
    if (open) {
      focusTrap.activate();
      document.body.style.overflow = 'hidden';
    } else {
      focusTrap.deactivate();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, focusTrap]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION_ENTER * 0.5 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={focusTrap.ref}
            role="dialog"
            aria-modal="true"
            className={`${styles.panel} ${styles[size]} ${className ?? ''}`}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: DURATION_ENTER, ease: EASE_OUT_EXPO }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Subcomponents ── */

export const DialogTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  function DialogTitle({ className, ...props }, ref) {
    return <h2 ref={ref} className={`${styles.title} ${className ?? ''}`} {...props} />;
  }
);

export const DialogDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  function DialogDescription({ className, ...props }, ref) {
    return <p ref={ref} className={`${styles.description} ${className ?? ''}`} {...props} />;
  }
);

export const DialogBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DialogBody({ className, ...props }, ref) {
    return <div ref={ref} className={`${styles.body} ${className ?? ''}`} {...props} />;
  }
);

export const DialogActions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DialogActions({ className, ...props }, ref) {
    return <div ref={ref} className={`${styles.actions} ${className ?? ''}`} {...props} />;
  }
);
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Dialog/
git commit -m "feat: add Dialog component with focus trap, AnimatePresence enter/exit, backdrop click"
```

---

### Task 7: Add forwardRef to Existing Components

**Files:**
- Modify: `app/components/Slider/Slider.tsx`
- Modify: `app/components/TabGroup/Tab.tsx`
- Modify: `app/components/Menu/Menu.tsx`
- Modify: `app/components/Navigation/Navigation.tsx`

- [ ] **Step 1: Retrofit Slider with forwardRef**

Change the Slider export from a function declaration to `forwardRef`. The ref should point to the track `<div>` (the primary interactive element).

In `app/components/Slider/Slider.tsx`, change:
```tsx
export function Slider({ ... }: SliderProps) {
```
to:
```tsx
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  function Slider({ ... }, ref) {
```

Add `forwardRef` to imports:
```tsx
import { useState, useRef, useCallback, forwardRef } from 'react';
```

On the track div, merge the internal `trackRef` with the forwarded `ref` using a callback:
```tsx
const trackRef = useRef<HTMLDivElement>(null);

// Merge refs
const setTrackRef = useCallback((node: HTMLDivElement | null) => {
  (trackRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
  if (typeof ref === 'function') ref(node);
  else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
}, [ref]);
```

Use `setTrackRef` on the track div instead of `trackRef`.

Close the forwardRef wrapper at the end of the component with `);`.

- [ ] **Step 2: Retrofit TabGroup, Menu, Navigation with forwardRef**

Apply the same pattern: wrap each top-level exported component in `forwardRef`, add `ref` to the outermost DOM element. For components that don't need internal refs, simply forward `ref` directly.

- [ ] **Step 3: Verify compilation**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npx tsc --noEmit 2>&1 | grep "error"`
Expected: Only pre-existing errors (from motionPresets.ts and motionHooks.ts), zero new errors

- [ ] **Step 4: Commit**

```bash
git add app/components/Slider/ app/components/TabGroup/ app/components/Menu/ app/components/Navigation/
git commit -m "refactor: add forwardRef to Slider, TabGroup, Menu, Navigation"
```

---

### Task 8: Add Disabled State to Slider and TabGroup

**Files:**
- Modify: `app/components/Slider/Slider.tsx`
- Modify: `app/components/Slider/Slider.module.css`
- Modify: `app/components/TabGroup/Tab.tsx` (or TabGroup.tsx — check actual filename)
- Modify: `app/components/TabGroup/TabGroup.module.css` (check actual filename)

- [ ] **Step 1: Add disabled prop to SliderProps**

In `app/components/Slider/Slider.tsx`, add to the `SliderProps` interface:
```tsx
/** Disable interaction */
disabled?: boolean;
```

Destructure it in the component:
```tsx
const { ..., disabled = false, ... } = props;
```

On the track div, add:
```tsx
aria-disabled={disabled || undefined}
style={disabled ? { pointerEvents: 'none' } : undefined}
```

Add a `disabled` class to the track when disabled:
```tsx
className={`${styles.track} ${SIZE_CLASSES[size]} ${dragging ? styles.trackDragging : ''} ${disabled ? styles.trackDisabled : ''}`}
```

- [ ] **Step 2: Add disabled CSS to Slider.module.css**

Append to `Slider.module.css`:
```css
.trackDisabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

- [ ] **Step 3: Add disabled prop to TabGroup**

In the Tab component (check exact file), add a `disabled?: boolean` prop. When disabled:
- Set `aria-disabled="true"` on the tab button
- Add `pointer-events: none; opacity: 0.5;` via a `.tabDisabled` CSS class
- Prevent `onClick` from firing

- [ ] **Step 4: Add disabled CSS to TabGroup module**

```css
.tabDisabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
```

- [ ] **Step 5: Commit**

```bash
git add app/components/Slider/ app/components/TabGroup/
git commit -m "feat: add disabled state to Slider and TabGroup"
```

---

### Task 9: Motion Token Sync Script

**Files:**
- Create: `scripts/sync-motion-tokens.ts`

- [ ] **Step 1: Create sync script that compares CSS and JS motion tokens**

```ts
// scripts/sync-motion-tokens.ts
// Compares motion tokens in globals.css against src/tokens/motion.ts
// and app/components/motion.ts to detect drift.
// Run: npx tsx scripts/sync-motion-tokens.ts

import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');

// ── Parse CSS tokens ──
const css = readFileSync(join(ROOT, 'app/globals.css'), 'utf-8');

function extractCSSValue(varName: string): string | null {
  const re = new RegExp(`${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*(.+?)\\s*;`);
  const match = css.match(re);
  return match ? match[1].split('/')[0].trim() : null;
}

const cssTokens: Record<string, string | null> = {
  '--ease-out-expo': extractCSSValue('--ease-out-expo'),
  '--ease-in-out-quart': extractCSSValue('--ease-in-out-quart'),
  '--duration-press': extractCSSValue('--duration-press'),
  '--duration-hover': extractCSSValue('--duration-hover'),
  '--duration-enter': extractCSSValue('--duration-enter'),
};

// ── Parse JS tokens ──
const jsMotion = readFileSync(join(ROOT, 'app/components/motion.ts'), 'utf-8');

function extractJSConst(name: string): string | null {
  // Match: export const NAME = [0.19, 1, 0.22, 1] or = 0.15
  const re = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*(.+?)(?:\\s+as\\s|;|$)`, 'm');
  const match = jsMotion.match(re);
  return match ? match[1].trim().replace(/;$/, '') : null;
}

const jsTokens: Record<string, string | null> = {
  'EASE_OUT_EXPO': extractJSConst('EASE_OUT_EXPO'),
  'EASE_IN_OUT_QUART': extractJSConst('EASE_IN_OUT_QUART'),
  'DURATION_PRESS': extractJSConst('DURATION_PRESS'),
  'DURATION_HOVER': extractJSConst('DURATION_HOVER'),
  'DURATION_ENTER': extractJSConst('DURATION_ENTER'),
};

// ── Compare ──
const pairs: [string, string, (css: string, js: string) => boolean][] = [
  ['--ease-out-expo', 'EASE_OUT_EXPO', (c, j) => {
    // CSS: cubic-bezier(0.19, 1, 0.22, 1)  JS: [0.19, 1, 0.22, 1]
    const cssNums = c.match(/[\d.]+/g)?.join(',');
    const jsNums = j.match(/[\d.]+/g)?.join(',');
    return cssNums === jsNums;
  }],
  ['--ease-in-out-quart', 'EASE_IN_OUT_QUART', (c, j) => {
    const cssNums = c.match(/[\d.]+/g)?.join(',');
    const jsNums = j.match(/[\d.]+/g)?.join(',');
    return cssNums === jsNums;
  }],
  ['--duration-press', 'DURATION_PRESS', (c, j) => {
    const cssMs = parseFloat(c);
    const jsSec = parseFloat(j);
    return Math.abs(cssMs - jsSec * 1000) < 1;
  }],
  ['--duration-hover', 'DURATION_HOVER', (c, j) => {
    const cssMs = parseFloat(c);
    const jsSec = parseFloat(j);
    return Math.abs(cssMs - jsSec * 1000) < 1;
  }],
  ['--duration-enter', 'DURATION_ENTER', (c, j) => {
    const cssMs = parseFloat(c);
    const jsSec = parseFloat(j);
    return Math.abs(cssMs - jsSec * 1000) < 1;
  }],
];

let failures = 0;

console.log('Motion Token Sync Check');
console.log('=======================\n');

for (const [cssName, jsName, compare] of pairs) {
  const cssVal = cssTokens[cssName];
  const jsVal = jsTokens[jsName];

  if (!cssVal) {
    console.log(`❌ ${cssName}: NOT FOUND in globals.css`);
    failures++;
    continue;
  }
  if (!jsVal) {
    console.log(`❌ ${jsName}: NOT FOUND in motion.ts`);
    failures++;
    continue;
  }

  if (compare(cssVal, jsVal)) {
    console.log(`✅ ${cssName} ↔ ${jsName}: in sync`);
  } else {
    console.log(`❌ ${cssName} ↔ ${jsName}: DRIFT DETECTED`);
    console.log(`   CSS: ${cssVal}`);
    console.log(`   JS:  ${jsVal}`);
    failures++;
  }
}

console.log(`\n${failures === 0 ? '✅ All tokens in sync.' : `❌ ${failures} token(s) out of sync.`}`);
process.exit(failures > 0 ? 1 : 0);
```

- [ ] **Step 2: Run the sync script**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npx tsx scripts/sync-motion-tokens.ts`
Expected: All tokens show ✅ (in sync)

- [ ] **Step 3: Add to package.json scripts**

In `package.json`, add to `"scripts"`:
```json
"sync:motion": "tsx scripts/sync-motion-tokens.ts"
```

- [ ] **Step 4: Commit**

```bash
git add scripts/sync-motion-tokens.ts package.json
git commit -m "feat: add motion token CSS↔JS sync checker script"
```

---

### Task 10: Verify Full Build

- [ ] **Step 1: Run TypeScript check**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npx tsc --noEmit`
Expected: Only pre-existing errors in motionHooks.ts and motionPresets.ts. Zero new errors.

- [ ] **Step 2: Run Next.js build**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npm run build`
Expected: Build succeeds

- [ ] **Step 3: Run motion sync**

Run: `cd /Users/alexgilev/Cursor/agentic-design-system && npx tsx scripts/sync-motion-tokens.ts`
Expected: All tokens in sync

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: verify full build after design system enhancements"
```
