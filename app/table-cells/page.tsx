// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Table)
// Extracted: 2026-10-17
// Demo page: every table cell type in its Figma states (default, disabled, loading); hover and focus are live

'use client';

import { useState, type ReactNode } from 'react';
import { Avatar, AvatarGroup } from '@/app/components/Avatar';
import { Badge } from '@/app/components/Badge';
import { Icon } from '@/app/components/Icon/Icon';
import {
  TableActionCell,
  TableAvatarCell,
  TableBadgeCell,
  TableDropdownCell,
  TableEditableCell,
  TableHeaderCell,
  TableIconCell,
  TableNumericCell,
  TableProgressCell,
  TableTextCell,
  type TableSort,
} from '@/app/components/Table';
import styles from './page.module.css';

const STATES = ['Default', 'Disabled', 'Loading'] as const;
type State = (typeof STATES)[number];
const stateProps = (s: State) => ({ disabled: s === 'Disabled', loading: s === 'Loading' });

function Row({ title, render }: { title: string; render: (s: State) => ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {STATES.map((s) => <th key={s} className={styles.stateLabel}>{s}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>{STATES.map((s) => render(s))}</tr>
        </tbody>
      </table>
    </section>
  );
}

const OPTIONS = ['$80.00', '$99.00', '$120.00'].map((v) => ({ value: v, label: v }));

export default function TableCellsPage() {
  const [sort, setSort] = useState<TableSort>('none');
  const [price, setPrice] = useState('$120.00');
  const [amount, setAmount] = useState('$99.00');
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.page}>
      <Row
        title="cell-header"
        render={(s) => (
          <TableHeaderCell
            key={s}
            {...stateProps(s)}
            onSort={() => setSort(sort === 'ascending' ? 'descending' : 'ascending')}
            sort={sort}
            selected={selected}
            onSelectedChange={setSelected}
          >
            Title
          </TableHeaderCell>
        )}
      />
      <Row
        title="cell-type-text"
        render={(s) => (
          <TableTextCell key={s} {...stateProps(s)} text="Table text goes here" description="Description Text" icon={<Icon name="edit" size={16} />} />
        )}
      />
      <Row
        title="cell-type-numeric"
        render={(s) => (
          <TableNumericCell key={s} {...stateProps(s)} value="$120.00" badge={<Badge color="green" size="sm" border>Label</Badge>} icon={<Icon name="edit" size={16} />} />
        )}
      />
      <Row
        title="cell-type-editable-field"
        render={(s) => <TableEditableCell key={s} {...stateProps(s)} value={amount} onCommit={setAmount} inputLabel="Amount" />}
      />
      <Row
        title="cell-type-dropdown"
        render={(s) => <TableDropdownCell key={s} {...stateProps(s)} options={OPTIONS} value={price} onChange={setPrice} triggerLabel="Price" />}
      />
      <Row title="cell-type-progress" render={(s) => <TableProgressCell key={s} {...stateProps(s)} filled={2} label="10%" />} />
      <Row title="cell-type-action" render={(s) => <TableActionCell key={s} {...stateProps(s)} onAction={() => {}} onMore={() => {}} />} />
      <Row title="cell-type-icon" render={(s) => <TableIconCell key={s} {...stateProps(s)} icon={<Icon name="checkmark" size={16} />} label="Done" />} />
      <Row
        title="cell-type-badge"
        render={(s) => <TableBadgeCell key={s} {...stateProps(s)} badge={<Badge color="green" size="sm" border>Label</Badge>} />}
      />
      <Row
        title="cell-type-avatar"
        render={(s) => (
          <TableAvatarCell
            key={s}
            {...stateProps(s)}
            multiple
            avatar={
              <AvatarGroup count={3}>
                <Avatar type="photo" src="/assets/avatars/avatar-04.png" alt="" size={32} />
                <Avatar type="photo" src="/assets/avatars/avatar-05.png" alt="" size={32} />
                <Avatar type="photo" src="/assets/avatars/avatar-11.png" alt="" size={32} />
              </AvatarGroup>
            }
          />
        )}
      />
    </div>
  );
}
