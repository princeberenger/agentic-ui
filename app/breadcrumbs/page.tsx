// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=549-163
// Extracted: 2026-10-17
// Demo page: Breadcrumbs 2 to 5 items, BreadcrumbItem states

'use client';

import { BreadcrumbItem, BreadcrumbOverflow, Breadcrumbs } from '@/app/components/Breadcrumbs';
import { Icon } from '@/app/components/Icon/Icon';
import styles from './page.module.css';

const TRAIL = [
  { label: 'Admin', href: '#admin' },
  { label: 'Settings', href: '#settings' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Projects', href: '#projects' },
  { label: 'Agents', href: '#agents' },
];

export default function BreadcrumbsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Breadcrumbs</h2>
        <div className={styles.column}>
          {[2, 3, 4, 5].map((n) => (
            <Breadcrumbs key={n} items={TRAIL.slice(0, n)} />
          ))}
          <Breadcrumbs items={TRAIL.map((item) => ({ ...item, icon: <Icon name="folder" /> }))} maxItems={3} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Breadcrumb item</h2>
        <div className={styles.column}>
          <BreadcrumbItem label="Label" href="#label" icon={<Icon name="folder" />} />
          <BreadcrumbItem label="Label" icon={<Icon name="folder" />} current />
          <BreadcrumbItem label="Label" href="#label" />
          <BreadcrumbOverflow items={TRAIL.slice(0, 3)} />
        </div>
      </section>
    </div>
  );
}
