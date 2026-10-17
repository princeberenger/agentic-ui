// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4028-6848
// Extracted: 2026-10-17
// Demo page: File upload area states, File loading states, simulated upload flow

'use client';

import { useState } from 'react';
import { FileItem, FileUpload, type FileItemStatus } from '@/app/components/FileUpload';
import { Spinner } from '@/app/components/Spinner';
import styles from './page.module.css';

const MAX_SIZE = 5 * 1024 * 1024;

type Upload = { id: number; name: string; status: FileItemStatus };

export default function FileUploadPage() {
  const [uploads, setUploads] = useState<Upload[]>([]);

  const add = (files: File[]) => {
    const added = files.map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      status: (f.size > MAX_SIZE ? 'error' : 'uploading') as FileItemStatus,
    }));
    setUploads((u) => [...u, ...added]);
    // simulated upload: uploading → success
    added.filter((a) => a.status === 'uploading').forEach((a) =>
      setTimeout(() => setUploads((u) => u.map((x) => (x.id === a.id ? { ...x, status: 'success' } : x))), 1500),
    );
  };

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>File upload area</h2>
        <div className={styles.inputs}>
          <FileUpload onFiles={add} />
          <FileUpload disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>File loading</h2>
        <div className={styles.inputs}>
          <FileItem name="Document.png" onRemove={() => {}} />
          <FileItem name="Document.png" status="uploading" onRemove={() => {}} />
          <FileItem name="Document.png" status="success" />
          <FileItem name="Document.png" status="error" error="File exceeds 5mb size limit" onRemove={() => {}} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Uploads ({uploads.length}) — drop or select files above</h2>
        <div className={styles.column}>
          {uploads.map((u) => (
            <FileItem
              key={u.id}
              name={u.name}
              status={u.status}
              error={u.status === 'error' ? 'File exceeds 5mb size limit' : undefined}
              onRemove={() => setUploads((x) => x.filter((y) => y.id !== u.id))}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Spinner (Loading animation)</h2>
        <Spinner label="Loading" />
      </section>
    </div>
  );
}
