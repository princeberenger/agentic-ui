// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=124-2898
// Extracted: 2026-10-17
// Demo page: Badge type / size / color / border / icon matrix, dismissible badges

'use client';

import { useState } from 'react';
import { Badge, type BadgeColor, type BadgeProps } from '@/app/components/Badge';
import { Icon } from '@/app/components/Icon/Icon';
import styles from './page.module.css';

const COLORS: BadgeColor[] = ['neutral', 'none', 'green', 'red', 'yellow', 'orange', 'blue', 'purple', 'teal', 'pink'];

type Column = { title: string; props: Partial<BadgeProps> };

const COLUMNS: Column[] = [
  { title: 'rounded', props: {} },
  { title: 'rounded icon', props: { icon: <Icon name="add" /> } },
  { title: 'rounded border', props: { border: true } },
  { title: 'rounded border icon right', props: { border: true, icon: <Icon name="add" />, iconPosition: 'right' } },
  { title: 'pill', props: { type: 'pill' } },
  { title: 'pill icon', props: { type: 'pill', icon: <Icon name="add" /> } },
  { title: 'pill border', props: { type: 'pill', border: true } },
  { title: 'pill border icon', props: { type: 'pill', border: true, icon: <Icon name="add" /> } },
  { title: 'pill lg', props: { type: 'pill', size: 'lg' } },
  { title: 'pill lg icon', props: { type: 'pill', size: 'lg', icon: <Icon name="add" /> } },
];

export default function BadgePage() {
  const [tags, setTags] = useState<BadgeColor[]>(['blue', 'green', 'purple', 'neutral']);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Matrix</h2>
        <div className={styles.grid}>
          <span />
          {COLUMNS.map((c) => (
            <span key={c.title} className={styles.colLabel}>{c.title}</span>
          ))}
          {COLORS.map((color) => (
            <Row key={color} color={color} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Dismissible</h2>
        <div className={styles.row}>
          {tags.map((color) => (
            <Badge
              key={color}
              color={color}
              border
              onClose={() => setTags((t) => t.filter((c) => c !== color))}
              closeLabel={`Remove ${color}`}
            >
              {color}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}

function Row({ color }: { color: BadgeColor }) {
  return (
    <>
      <span className={styles.rowLabel}>{color}</span>
      {COLUMNS.map((c) => (
        <span key={c.title} className={styles.cell}>
          <Badge {...(c.props as BadgeProps)} color={color}>Label</Badge>
        </span>
      ))}
    </>
  );
}
