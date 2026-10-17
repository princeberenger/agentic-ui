// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4008-623
// Extracted: 2026-10-17
// Demo page: Toast types as in figma, dismissible toasts

'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import { Toast, type ToastType } from '@/app/components/Toast';
import styles from './page.module.css';

const ACTIONS = (
  <>
    <Button variant="secondary">Action 2</Button>
    <Button>Action 1</Button>
  </>
);

export default function ToastPage() {
  const [toasts, setToasts] = useState<{ id: number; type: ToastType }[]>([]);
  const [next, setNext] = useState(1);
  const add = (type: ToastType) => {
    setToasts((t) => [...t, { id: next, type }]);
    setNext((n) => n + 1);
  };
  const remove = (id: number) => setToasts((t) => t.filter((x) => x.id !== id));

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Types (as in figma)</h2>
        <div className={styles.row}>
          <Toast title="Toast label" description="Snackbar text" actions={ACTIONS} onClose={() => {}} />
          <Toast type="destructive" title="Toast label" description="Snackbar text" actions={<Button variant="destructive">Delete</Button>} onClose={() => {}}>
            <Input size="sm" aria-label="Confirmation" />
          </Toast>
          <Toast type="warning" title="Toast label" description="Snackbar text" actions={ACTIONS} onClose={() => {}} />
          <Toast type="success" title="Toast label" description="Snackbar text" actions={ACTIONS} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Interactive</h2>
        <div className={styles.row}>
          {(['info', 'success', 'warning', 'destructive'] as ToastType[]).map((type) => (
            <Button key={type} variant="secondary" onClick={() => add(type)}>Show {type}</Button>
          ))}
        </div>
        <div className={styles.column}>
          {toasts.map(({ id, type }) => (
            <Toast
              key={id}
              type={type}
              title={`${type} #${id}`}
              description="Dismiss me with the close button or an action."
              actions={<Button onClick={() => remove(id)}>Done</Button>}
              onClose={() => remove(id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
