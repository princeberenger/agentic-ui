// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=4092-1641
// Extracted: 2026-10-17
// Demo page: Modal open / close (button, Escape, overlay)

'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { FileUpload } from '@/app/components/FileUpload';
import { Modal } from '@/app/components/Modal';
import { Textarea } from '@/app/components/Textarea';
import styles from './page.module.css';

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState('none');

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Modal</h2>
        <div className={styles.row}>
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <span className={styles.rowLabel}>last action: {last}</span>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setLast('closed');
        }}
        title="Modal title"
        subtitle="Subtitle label"
        actions={
          <>
            <Button variant="secondary" size="lg" onClick={() => { setOpen(false); setLast('Configure Agent'); }}>Configure Agent</Button>
            <Button size="lg" onClick={() => { setOpen(false); setLast('Start Chat'); }}>Start Chat</Button>
          </>
        }
      >
        <Textarea aria-label="Instructions" defaultValue="A16z VC Startup Advisor is a cutting-edge AI assistant designed to revolutionize the venture capital and startup ecosystem. This advanced system serves as an invaluable resource for both venture capitalists and startup founders, offering deep insights and strategic guidance throughout the investment and company-building journey." />
        <FileUpload
          label="Click to select"
          hints={['No items have been selected.', 'The entire knowledge base will be searched.']}
          buttonLabel={null}
          icon={null}
        />
      </Modal>
    </div>
  );
}
