import { type ReactNode } from 'react';
import { Icon } from '@/app/components/Icon/Icon';
import styles from './page.module.css';

/* ── Tiny inline components for cell content types ── */

type BadgeColor = 'green' | 'yellow' | 'red' | 'gray';

const BADGE_CLASSES: Record<BadgeColor, string> = {
  green: styles.badgeGreen,
  yellow: styles.badgeYellow,
  red: styles.badgeRed,
  gray: styles.badgeGray,
};

function Badge({ label, color }: { label: string; color: BadgeColor }) {
  return <span className={BADGE_CLASSES[color]}>{label}</span>;
}

function MiniProgress({ filled, total = 10, label }: { filled: number; total?: number; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className={styles.miniProgress}>
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className={i < filled ? styles.miniBarFilled : styles.miniBarEmpty} />
        ))}
      </div>
      <span className={styles.miniProgressLabel}>{label}</span>
    </div>
  );
}

function Dropdown({ value }: { value: string }) {
  return (
    <div className={styles.dropdown}>
      <span className={styles.cellText}>{value}</span>
      <Icon name="chevron-down" size={16} className={styles.dropdownIcon} />
    </div>
  );
}

function AvatarPhoto({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className={styles.avatarSingle}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ''} />
    </div>
  );
}

function AvatarGroupCell({ children }: { children: ReactNode }) {
  return <div className={styles.avatarGroup}>{children}</div>;
}

function AvatarGroupPhoto({ src }: { src: string }) {
  return (
    <div className={styles.avatarGroupItem}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" />
    </div>
  );
}

function AvatarCounter({ label }: { label: string }) {
  return <div className={styles.avatarInitials}>{label}</div>;
}

/* ── Table row data ── */

interface RowData {
  agent: string;
  status: { label: string; color: BadgeColor };
  confidenceFilled: number;
  confidenceLabel: string;
  cost: string;
  tasks: string;
  assignee: ReactNode;
}

const TABLE_DATA: RowData[] = [
  {
    agent: 'Researcher',
    status: { label: 'Running', color: 'green' },
    confidenceFilled: 8,
    confidenceLabel: '94%',
    cost: '$0.034',
    tasks: '12',
    assignee: <AvatarPhoto src="/assets/avatars/avatar-photo-32.png" />,
  },
  {
    agent: 'Proposal Drafter',
    status: { label: 'Idle', color: 'yellow' },
    confidenceFilled: 8,
    confidenceLabel: '87%',
    cost: '$0.018',
    tasks: '3',
    assignee: (
      <AvatarGroupCell>
        <AvatarGroupPhoto src="/assets/avatars/avatar-04.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-05.png" />
        <AvatarCounter label="+3" />
      </AvatarGroupCell>
    ),
  },
  {
    agent: 'Data Extractor',
    status: { label: 'Error', color: 'red' },
    confidenceFilled: 6,
    confidenceLabel: '61',
    cost: '$0.052',
    tasks: '2',
    assignee: <AvatarCounter label="AG" />,
  },
  {
    agent: 'UX Reviewer',
    status: { label: 'Running', color: 'green' },
    confidenceFilled: 8,
    confidenceLabel: '91%',
    cost: '$0.027',
    tasks: '7',
    assignee: (
      <AvatarGroupCell>
        <AvatarGroupPhoto src="/assets/avatars/avatar-11.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-20.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-06.png" />
      </AvatarGroupCell>
    ),
  },
  {
    agent: 'Composer',
    status: { label: 'Running', color: 'green' },
    confidenceFilled: 8,
    confidenceLabel: '88%',
    cost: '$0.011',
    tasks: '5',
    assignee: (
      <AvatarGroupCell>
        <AvatarGroupPhoto src="/assets/avatars/avatar-07.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-20.png" />
        <AvatarCounter label="+2" />
      </AvatarGroupCell>
    ),
  },
  {
    agent: 'Code Reviewer',
    status: { label: 'Scheduled', color: 'gray' },
    confidenceFilled: 8,
    confidenceLabel: '96%',
    cost: '$0.041',
    tasks: '21',
    assignee: (
      <AvatarGroupCell>
        <AvatarGroupPhoto src="/assets/avatars/avatar-photo-32.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-11.png" />
        <AvatarGroupPhoto src="/assets/avatars/avatar-20.png" />
        <AvatarCounter label="+3" />
      </AvatarGroupCell>
    ),
  },
];

export default function TablePage() {
  return (
    <div className={styles.demo}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Table</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.headerLabel}>Launch Demo</span>
          <div className={styles.kbdGroup}>
            <kbd className={styles.kbd}>⌥</kbd>
            <kbd className={styles.kbd}>⌘</kbd>
            <kbd className={styles.kbd}>↩</kbd>
          </div>
        </div>
      </header>

      {/* Centered Table */}
      <div className={styles.content}>
        <div className={styles.tableWrapper}>
          {/* Header row */}
          <div className={styles.headerRow} role="row">
            <button type="button" className={styles.headerCellFlex} role="columnheader">
              Agent
              <Icon name="sort" size={16} className={styles.sortIcon} />
            </button>
            <button type="button" className={styles.headerCellFlex} role="columnheader">Status</button>
            <button type="button" className={styles.headerCellFlex} role="columnheader">Confidence</button>
            <button type="button" className={styles.headerCellFixed} role="columnheader">Cost</button>
            <button type="button" className={styles.headerCellFixed} role="columnheader">Tasks</button>
            <button type="button" className={styles.headerCellFlex} role="columnheader">Assignee</button>
          </div>

          {/* Body */}
          <div className={styles.tableBody} role="rowgroup">
            {TABLE_DATA.map((row, i) => {
              const isLast = i === TABLE_DATA.length - 1;
              return (
                <div key={row.agent} className={`${styles.row} ${isLast ? styles.rowLast : ''}`} role="row">
                  <button type="button" className={styles.cellFlex} role="gridcell">
                    <span className={styles.cellText}>{row.agent}</span>
                  </button>
                  <button type="button" className={styles.cellFlex} role="gridcell">
                    <Badge label={row.status.label} color={row.status.color} />
                  </button>
                  <button type="button" className={styles.cellFlex} role="gridcell">
                    <MiniProgress filled={row.confidenceFilled} label={row.confidenceLabel} />
                  </button>
                  <button type="button" className={styles.cellFixed} role="gridcell">
                    <span className={styles.cellText}>{row.cost}</span>
                  </button>
                  <button type="button" className={styles.cellFixed} role="gridcell">
                    <Dropdown value={row.tasks} />
                  </button>
                  <button type="button" className={styles.cellFlex} role="gridcell">
                    {row.assignee}
                  </button>
                </div>
              );
            })}

            {/* Pagination */}
            <div className={styles.pagination}>
              <div className={styles.paginationLabel}>
                <span>Showing:</span>
                <span>7 of 35 items</span>
              </div>
              <div className={styles.paginationControls}>
                <button type="button" className={styles.paginationButtonDisabled} aria-label="Previous page" disabled>
                  <Icon name="chevron-left" size={16} />
                </button>
                <span className={styles.paginationPage}>1/5</span>
                <button type="button" className={styles.paginationButtonBordered} aria-label="Next page">
                  <Icon name="chevron-right" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
