// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Table)
// Extracted: 2026-10-17
// Demo page: agent table built from the Table cell components

'use client';

import { useState } from 'react';
import { Avatar, AvatarGroup } from '@/app/components/Avatar';
import { Badge, type BadgeColor } from '@/app/components/Badge';
import { Pagination } from '@/app/components/Pagination';
import {
  TableAvatarCell,
  TableBadgeCell,
  TableDropdownCell,
  TableHeaderCell,
  TableNumericCell,
  TableProgressCell,
  TableTextCell,
  type TableSort,
} from '@/app/components/Table';
import styles from './page.module.css';

interface Row {
  agent: string;
  status: { label: string; color: BadgeColor };
  confidence: number;
  cost: number;
  tasks: string;
  assignees: string[];
  extra?: number;
}

const ROWS: Row[] = [
  { agent: 'Researcher', status: { label: 'Running', color: 'green' }, confidence: 94, cost: 0.034, tasks: '12', assignees: ['/assets/avatars/avatar-photo-32.png'] },
  { agent: 'Proposal Drafter', status: { label: 'Idle', color: 'yellow' }, confidence: 87, cost: 0.018, tasks: '3', assignees: ['/assets/avatars/avatar-04.png', '/assets/avatars/avatar-05.png'], extra: 3 },
  { agent: 'Data Extractor', status: { label: 'Error', color: 'red' }, confidence: 61, cost: 0.052, tasks: '2', assignees: ['/assets/avatars/avatar-06.png'] },
  { agent: 'UX Reviewer', status: { label: 'Running', color: 'green' }, confidence: 91, cost: 0.027, tasks: '7', assignees: ['/assets/avatars/avatar-11.png', '/assets/avatars/avatar-20.png', '/assets/avatars/avatar-06.png'] },
  { agent: 'Composer', status: { label: 'Running', color: 'green' }, confidence: 88, cost: 0.011, tasks: '5', assignees: ['/assets/avatars/avatar-07.png', '/assets/avatars/avatar-20.png'], extra: 2 },
  { agent: 'Code Reviewer', status: { label: 'Scheduled', color: 'neutral' }, confidence: 96, cost: 0.041, tasks: '21', assignees: ['/assets/avatars/avatar-photo-32.png', '/assets/avatars/avatar-11.png', '/assets/avatars/avatar-20.png'], extra: 3 },
];

const TASK_OPTIONS = ['2', '3', '5', '7', '12', '21'].map((v) => ({ value: v, label: v }));

export default function TablePage() {
  const [rows, setRows] = useState(ROWS);
  const [sort, setSort] = useState<TableSort>('none');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSort = () => {
    const next: TableSort = sort === 'ascending' ? 'descending' : 'ascending';
    setSort(next);
    setRows((r) => [...r].sort((a, b) => (next === 'ascending' ? 1 : -1) * a.agent.localeCompare(b.agent)));
  };

  const allSelected = selected.size === rows.length ? true : selected.size ? 'indeterminate' : false;

  return (
    <div className={styles.demo}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Table</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <TableHeaderCell
                  onSort={toggleSort}
                  sort={sort}
                  selected={allSelected}
                  onSelectedChange={(on) => setSelected(on ? new Set(rows.map((r) => r.agent)) : new Set())}
                >
                  Agent
                </TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Confidence</TableHeaderCell>
                <TableHeaderCell align="right">Cost</TableHeaderCell>
                <TableHeaderCell>Tasks</TableHeaderCell>
                <TableHeaderCell>Assignee</TableHeaderCell>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.agent}>
                  <TableTextCell
                    text={row.agent}
                    selected={selected.has(row.agent)}
                    onSelectedChange={(on) =>
                      setSelected((s) => {
                        const next = new Set(s);
                        if (on) next.add(row.agent);
                        else next.delete(row.agent);
                        return next;
                      })
                    }
                    selectLabel={`Select ${row.agent}`}
                  />
                  <TableBadgeCell badge={<Badge color={row.status.color} size="sm" border>{row.status.label}</Badge>} />
                  <TableProgressCell filled={Math.round(row.confidence / 10)} label={`${row.confidence}%`} />
                  <TableNumericCell align="right" value={`$${row.cost.toFixed(3)}`} />
                  <TableDropdownCell
                    options={TASK_OPTIONS}
                    value={row.tasks}
                    triggerLabel={`Tasks for ${row.agent}`}
                    onChange={(tasks) => setRows((r) => r.map((x) => (x.agent === row.agent ? { ...x, tasks } : x)))}
                  />
                  <TableAvatarCell
                    multiple={row.assignees.length > 1}
                    avatar={
                      row.assignees.length > 1 || row.extra ? (
                        <AvatarGroup count={row.extra}>
                          {row.assignees.map((src) => <Avatar key={src} type="photo" src={src} alt="" size={32} />)}
                        </AvatarGroup>
                      ) : (
                        <Avatar type="photo" src={row.assignees[0]} alt="" size={32} />
                      )
                    }
                  />
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination type="simple" pageCount={5} totalItems={`${rows.length} of 35 items`} />
        </div>
      </div>
    </div>
  );
}
