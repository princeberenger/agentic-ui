// Source: https://www.figma.com/design/FLribGjjakpYvdwuBTGTvD/AGENTIC-DESIGN-SYSTEM--v1.2-?node-id=4052-537
// Extracted: 2026-04-05

import { Icon } from '@/app/components/Icon/Icon';
import { TabGroup, Tab } from '@/app/components/TabGroup';
import { DemoPageHeader } from '@/app/components/DemoPageHeader';
import styles from './page.module.css';

export default function TabsPage() {
  return (
    <div className={styles.demo}>
      <DemoPageHeader label="Tabs" />

      {/* Centered Content */}
      <div className={styles.content}>
        <div className={styles.sections}>
          {/* --- Section 1: Pill + Segmented --- */}
          <div className={styles.section}>
            <p className={styles.sectionDescription}>
              Good for Modes/Personas.
            </p>

            {/* Pill tabs */}
            <TabGroup style="pill" defaultIndex={0}>
              <Tab>Design</Tab>
              <Tab>Deploy</Tab>
            </TabGroup>

            {/* Segmented tabs */}
            <TabGroup style="segmented" defaultIndex={0}>
              <Tab>Call Logs</Tab>
              <Tab tailIcon={<Icon name="warning-triangle" size={16} mode="img" />}>
                Chats
              </Tab>
              <Tab>Workflows</Tab>
            </TabGroup>
          </div>

          {/* --- Section 2: Underline --- */}
          <div className={styles.section}>
            <p className={styles.sectionDescription}>
              Good for Primary Sections.<br />
              Use larger labels where the tab changes the whole working mode.
            </p>

            {/* Underline — 2 tabs */}
            <TabGroup style="underline" defaultIndex={0}>
              <Tab>Plan</Tab>
              <Tab>Execute</Tab>
            </TabGroup>

            {/* Underline — 3 tabs with status dot */}
            <TabGroup style="underline" defaultIndex={0}>
              <Tab>Pending</Tab>
              <Tab>Complete</Tab>
              <Tab tailIcon={<span className={styles.statusDot} />}>
                Failed
              </Tab>
            </TabGroup>

            {/* Underline — 4 tabs with icons */}
            <TabGroup style="underline" defaultIndex={0}>
              <Tab leadIcon={<Icon name="voice-activate" size={16} />}>
                Voice
              </Tab>
              <Tab leadIcon={<Icon name="chat" size={16} />}>
                Chat
              </Tab>
              <Tab leadIcon={<Icon name="email" size={16} />}>
                Email
              </Tab>
              <Tab leadIcon={<Icon name="send" size={16} />}>
                SMS
              </Tab>
            </TabGroup>
          </div>

          {/* --- Section 3: Rounded (small) --- */}
          <div className={styles.section}>
            <p className={styles.sectionDescription}>
              Use small tabs for lightweight filters<br />
              where the risk of mis‑tap is low and the choice is reversible.
            </p>

            {/* Rounded — 2 tabs */}
            <TabGroup style="rounded" defaultIndex={0}>
              <Tab>Billing</Tab>
              <Tab>Invoices</Tab>
            </TabGroup>

            {/* Rounded — 3 tabs */}
            <TabGroup style="rounded" defaultIndex={0}>
              <Tab>Low</Tab>
              <Tab>Normal</Tab>
              <Tab>Critical</Tab>
            </TabGroup>

            {/* Rounded — 4 tabs, full width */}
            <TabGroup style="rounded" fullWidth defaultIndex={0}>
              <Tab>Observe</Tab>
              <Tab>Suggest</Tab>
              <Tab>Co-Pilot</Tab>
              <Tab>Autonomous</Tab>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
