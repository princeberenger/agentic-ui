// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=230-699
// Extracted: 2026-10-17
// Demo page: Navigation classic and tree, collapse toggle, nav-link / nav-sub-link / nav-logo states

'use client';

import { useState } from 'react';
import { Navigation, NavLink, NavLogo, NavSection, NavSubLink, NavUserSettings } from '../components/Navigation';
import styles from './page.module.css';

const CLASSIC = [
  ['meter', 'Dashboard'],
  ['event-schedule', 'Events'],
  ['code', 'Agents'],
  ['play', 'Playbooks'],
  ['money', 'Campaigns'],
] as const;

const TREE = [
  { icon: 'meter', label: 'Monitor', links: ['Dashboard', 'Call history', 'Live calls'] },
  { icon: 'load-balancer-classic', label: 'Orchestrate', links: ['Agents', 'Campaigns', 'Playbooks'] },
  { icon: 'deploy', label: 'Delegate', links: ['Phone numbers', 'Voice library', 'Integrations', 'Events'] },
];

export default function NavigationDemo() {
  const [page, setPage] = useState('Dashboard');
  const [sub, setSub] = useState('Orchestrate/Agents');
  const [open, setOpen] = useState<Record<string, boolean>>({ Leading: false, Lagging: true });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Navigation</h1>
        <p className={styles.subtitle}>Figma Navigation 230:699: classic and tree types, the logo button collapses the sidebar.</p>
      </div>

      <div className={styles.demoContainer}>
        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Classic</span>
          <div className={styles.navWrapper}>
            <Navigation userName="Alex">
              {CLASSIC.map(([icon, label]) => (
                <NavLink key={label} icon={icon} label={label} active={page === label} onClick={() => setPage(label)} />
              ))}
            </Navigation>
          </div>
        </div>

        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Classic with labels and sections</span>
          <div className={styles.navWrapper}>
            <Navigation userName="Alex">
              <NavLink asLabel label="Engage" />
              <NavLink icon="filter" label="Audiences" onClick={() => setPage('Audiences')} active={page === 'Audiences'} />
              <NavLink icon="code" label="Agents" onClick={() => setPage('Agents')} active={page === 'Agents'} />
              <NavLink asLabel label="Dashboards" />
              {(['Leading', 'Lagging'] as const).map((label) => (
                <NavLink
                  key={label}
                  icon={label === 'Leading' ? 'direction-bear-right' : 'direction-loop-left'}
                  label={label}
                  expanded={open[label]}
                  onClick={() => setOpen((o) => ({ ...o, [label]: !o[label] }))}
                />
              ))}
            </Navigation>
          </div>
        </div>

        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Tree</span>
          <div className={styles.navWrapper}>
            <Navigation variant="tree" userName="Alex">
              {TREE.map((section) => (
                <NavSection key={section.label} icon={section.icon} label={section.label}>
                  {section.links.map((label) => {
                    const id = `${section.label}/${label}`;
                    return <NavSubLink key={id} label={label} active={sub === id} onClick={() => setSub(id)} />;
                  })}
                </NavSection>
              ))}
            </Navigation>
          </div>
        </div>

        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Collapsed (tree, closed)</span>
          <div className={styles.navWrapper}>
            <Navigation variant="tree" userName="Alex" defaultCollapsed>
              {TREE.map((section) => (
                <NavSection key={section.label} icon={section.icon} label={section.label}>
                  {section.links.map((label) => <NavSubLink key={label} label={label} />)}
                </NavSection>
              ))}
            </Navigation>
          </div>
        </div>

        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Parts</span>
          <NavLogo onToggle={() => {}} />
          <NavLogo collapsed onToggle={() => {}} />
          <NavLink icon="meter" label="Section label" onClick={() => {}} />
          <NavLink icon="meter" label="Section label" expanded={false} onClick={() => {}} />
          <NavLink asLabel label="Section label" />
          <NavSubLink label="Link label" onClick={() => {}} />
          <NavSubLink label="Link label" active onClick={() => {}} />
          <NavUserSettings userName="Alex" onMenu={() => {}} />
        </div>
      </div>
    </div>
  );
}
