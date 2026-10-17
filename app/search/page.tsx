// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=338-6162
// Extracted: 2026-10-17
// Demo page: Search size / state matrix, collapsible search, live filtering

'use client';

import { useState } from 'react';
import { Search, type SearchSize } from '@/app/components/Search';
import styles from './page.module.css';

const SIZES: SearchSize[] = ['lg', 'sm'];
const FRUITS = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Lemon', 'Mango', 'Peach'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = FRUITS.filter((f) => f.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.page}>
      {SIZES.map((size) => (
        <section key={size} className={styles.section}>
          <h2 className={styles.title}>Size {size}</h2>
          <div className={styles.searches}>
            <Search size={size} shortcut="⌘S" aria-label={`${size} default`} />
            <Search size={size} defaultValue="Filled" aria-label={`${size} filled`} />
            <Search size={size} disabled placeholder="Disabled" aria-label={`${size} disabled`} />
            <Search size={size} loading aria-label={`${size} loading`} />
            <span className={styles.collapsedCell}>
              <Search size={size} collapsible aria-label={`${size} collapsible`} />
            </span>
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <h2 className={styles.title}>Live filtering</h2>
        <div className={styles.column}>
          <Search value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery('')} aria-label="Filter fruits" />
          <span className={styles.rowLabel}>{results.length ? results.join(', ') : 'No result'}</span>
        </div>
      </section>
    </div>
  );
}
