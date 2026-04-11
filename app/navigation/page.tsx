import { Navigation, NavLink, NavSubLink, NavSection } from '../components/Navigation';
import styles from './page.module.css';

export default function NavigationDemo() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Navigation</h1>
        <p className={styles.subtitle}>
          Enterprise sidebar navigation with Classic (flat and sectioned) and
          Tree (hierarchical) variants. Supports expandable sections, active
          states, and user settings.
        </p>
      </div>

      <div className={styles.demoContainer}>
        {/* Variant 1: Classic Flat */}
        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Classic — Flat</span>
          <div className={styles.navWrapper}>
            <Navigation variant="classic">
              <NavLink icon="meter" label="Dashboard" />
              <NavLink icon="event-schedule" label="Events" />
              <NavLink icon="code" label="Agents" />
              <NavLink icon="play" label="Playbooks" />
              <NavLink icon="money" label="Campaigns" />
            </Navigation>
          </div>
        </div>

        {/* Variant 2: Classic with Sections */}
        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Classic — Sectioned</span>
          <div className={styles.navWrapper}>
            <Navigation variant="classic">
              <NavLink asLabel label="Engage" />
              <NavLink icon="filter" label="Audiences" />
              <NavLink icon="code" label="Agents" />
              <NavLink icon="send-alt" label="Sequences" />
              <NavLink icon="cut" label="Snippets" />
              <NavLink icon="play" label="Playbooks" />

              <NavSection label="Dashboards" divider>
                <NavLink
                  icon="direction-bear-right"
                  label="Leading"
                  chevron
                  expanded={false}
                />
                <NavLink
                  icon="direction-loop-left"
                  label="Lagging"
                  chevron
                  expanded={false}
                />
                <NavLink icon="email" label="Email Backlog" />
              </NavSection>
            </Navigation>
          </div>
        </div>

        {/* Variant 3: Tree (Hierarchical) */}
        <div className={styles.demoCard}>
          <span className={styles.demoLabel}>Tree — Hierarchical</span>
          <div className={styles.navWrapper}>
            <Navigation variant="tree">
              <NavSection icon="meter" label="Monitor">
                <NavSubLink label="Dashboard" />
                <NavSubLink label="Call History" />
                <NavSubLink label="Live Calls" />
              </NavSection>

              <NavSection icon="load-balancer-classic" label="Orchestrate">
                <NavSubLink label="Agents" active />
                <NavSubLink label="Campaigns" />
                <NavSubLink label="Playbooks" />
              </NavSection>

              <NavSection icon="deploy" label="Delegate">
                <NavSubLink label="Phone Numbers" />
                <NavSubLink label="Voice Library" />
                <NavSubLink label="Integrations" />
                <NavSubLink label="Events" />
              </NavSection>
            </Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
