// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738
// Extracted: 2026-10-17
// Demo page: Text input size / state matrix, live validation, Password input (6133:736), Text area (2003:3900)

'use client';

import { useState } from 'react';
import { PASSWORD_RULES, PasswordInput, TextInput, type InputSize, type InputStatus } from '@/app/components/Input';
import { Textarea } from '@/app/components/Textarea';
import { ValidationText, ValidationTextLine } from '@/app/components/ValidationText';
import styles from './page.module.css';

const SIZES: InputSize[] = ['md', 'sm'];
const LONG_TEXT =
  'To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance evaluations.';
const STATES: { title: string; status?: InputStatus; disabled?: boolean; value?: string; helper: string }[] = [
  { title: 'default', helper: 'Helper text' },
  { title: 'filled', value: 'Text', helper: 'Helper text' },
  { title: 'error', status: 'error', value: 'Text', helper: 'Error message' },
  { title: 'success', status: 'success', value: 'Text', helper: 'Success message' },
  { title: 'warning', status: 'warning', helper: 'Warning message' },
  { title: 'disabled', disabled: true, helper: 'Helper text' },
];

export default function TextInputPage() {
  const [email, setEmail] = useState('');
  const valid = /^\S+@\S+\.\S+$/.test(email);
  const status: InputStatus = email === '' ? 'default' : valid ? 'success' : 'error';

  return (
    <div className={styles.page}>
      {SIZES.map((size) => (
        <section key={size} className={styles.section}>
          <h2 className={styles.title}>Size {size}</h2>
          <div className={styles.inputs}>
            {STATES.map((s) => (
              <TextInput
                key={s.title}
                size={size}
                label={s.title}
                placeholder="Placeholder"
                defaultValue={s.value}
                status={s.status}
                disabled={s.disabled}
                helperText={s.helper}
              />
            ))}
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <h2 className={styles.title}>Password</h2>
        <div className={styles.inputs}>
          <PasswordInput label="Password" placeholder="••••••••" rules={PASSWORD_RULES} />
          <PasswordInput label="Password" size="sm" placeholder="••••••••" rules={PASSWORD_RULES} defaultValue="Abcdef1!" />
          <PasswordInput label="Password" placeholder="••••••••" rules={PASSWORD_RULES} defaultValue="abc1" />
          <PasswordInput label="Confirm password" placeholder="••••••••" status="error" defaultValue="abc" helperText="Passwords do not match" />
          <PasswordInput label="Password" placeholder="••••••••" disabled helperText="Helper text" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Validation text</h2>
        <div className={styles.inputs}>
          {[5, 4, 3, 2].map((count) => (
            <ValidationText key={count} aria-label={`${count} rules`}>
              {PASSWORD_RULES.slice(0, count).map((rule) => (
                <ValidationTextLine key={rule.label}>{rule.label}</ValidationTextLine>
              ))}
            </ValidationText>
          ))}
          <ValidationText aria-label="Types">
            <ValidationTextLine>8 Character minimum</ValidationTextLine>
            <ValidationTextLine type="success">8 Character minimum</ValidationTextLine>
            <ValidationTextLine type="error">8 Character minimum</ValidationTextLine>
          </ValidationText>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Text area</h2>
        <div className={styles.inputs}>
          <Textarea label="default" placeholder="Placeholder" helperText="Helper text" />
          <Textarea label="filled" placeholder="Placeholder" defaultValue={LONG_TEXT} helperText="Helper text" />
          <Textarea label="readonly" defaultValue={LONG_TEXT} readOnly helperText="Helper text" />
          <Textarea label="error" defaultValue={LONG_TEXT} status="error" helperText="Helper text" />
          <Textarea label="disabled" defaultValue={LONG_TEXT} disabled helperText="Helper text" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Live validation</h2>
        <div className={styles.inputs}>
          <TextInput
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            status={status}
            helperText={status === 'error' ? 'Enter a valid email' : status === 'success' ? 'Looks good' : 'We never share it'}
          />
        </div>
      </section>
    </div>
  );
}
