// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=761-20738
// Extracted: 2026-10-17
// Demo page: Text input size / state matrix, live validation

'use client';

import { useState } from 'react';
import { TextInput, type InputSize, type InputStatus } from '@/app/components/Input';
import styles from './page.module.css';

const SIZES: InputSize[] = ['md', 'sm'];
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
