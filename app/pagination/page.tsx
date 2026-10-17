// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=716-3790
// Extracted: 2026-10-17
// Demo page: Pagination simple and numbered, pagination-item states

'use client';

import { useState } from 'react';
import { Pagination, PaginationItem, PaginationOverflow } from '@/app/components/Pagination';
import styles from './page.module.css';

const PAGE_SIZE = 10;
const TOTAL = 35;

export default function PaginationPage() {
  const [page, setPage] = useState(1);
  const shown = Math.min(page * PAGE_SIZE, TOTAL);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Simple</h2>
        <div className={styles.column}>
          <Pagination type="simple" pageCount={22} totalItems="10 of 35 items" />
          <Pagination
            type="simple"
            pageCount={Math.ceil(TOTAL / PAGE_SIZE)}
            page={page}
            onPageChange={setPage}
            totalItems={`${shown} of ${TOTAL} items`}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Numbered</h2>
        <div className={styles.column}>
          <Pagination type="numbered" pageCount={10} />
          <Pagination type="numbered" pageCount={10} defaultPage={5} />
          <Pagination type="numbered" pageCount={10} defaultPage={10} />
          <Pagination type="numbered" pageCount={5} defaultPage={2} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Pagination item</h2>
        <div className={styles.inputs}>
          <PaginationItem page={1} />
          <PaginationItem page={2} selected />
          <PaginationOverflow pages={[5, 6, 7, 8, 9]} onSelect={() => {}} />
        </div>
      </section>
    </div>
  );
}
