// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=6111-11622
// Extracted: 2026-10-17
// Demo page: File type sizes and styles (hover shows the download icon)

'use client';

import { FileType } from '@/app/components/FileType';
import styles from './page.module.css';

const FILES = [
  ['Document.pdf', '2.0 kb'],
  ['config.json', '256 b'],
  ['promo-jul.mp4', '14.5 mb'],
  ['image.jpeg', '958 kb'],
  ['track.mp3', '1.1 mb'],
];

export default function FileTypePage() {
  return (
    <div className={styles.page}>
      {(['large', 'medium', 'small'] as const).map((size) =>
        (['filled', 'outline'] as const).map((variant) => (
          <section key={`${size}-${variant}`} className={styles.section}>
            <h2 className={styles.title}>{size} · {variant}</h2>
            <div className={styles.row}>
              {FILES.map(([name, fileSize]) => (
                <FileType key={name} name={name} fileSize={fileSize} size={size} variant={variant} href={`#${name}`} />
              ))}
            </div>
          </section>
        )),
      )}
      <section className={styles.section}>
        <h2 className={styles.title}>small · outline · removable</h2>
        <div className={styles.row}>
          <FileType name="Document.pdf" size="small" variant="outline" onRemove={() => {}} />
        </div>
      </section>
    </div>
  );
}
