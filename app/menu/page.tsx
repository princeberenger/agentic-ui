import { Icon } from '@/app/components/Icon/Icon';
import { Menu, MenuItem, MenuDivider, MenuSectionHeader } from '@/app/components/Menu';
import styles from './page.module.css';

function ModelIcon() {
  return (
    <div className={styles.modelBadge}>
      <Icon name="anthropic" size={13} />
    </div>
  );
}

function Shortcut({ keys }: { keys: string[] }) {
  return (
    <span className={styles.shortcutKeys}>
      {keys.map((key, i) => (
        <span key={i}>{key}</span>
      ))}
    </span>
  );
}

export default function MenuPage() {
  return (
    <div className={styles.demo}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Menu</span>
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

      {/* Model Selection Menu — centered top */}
      <div className={styles.modelMenuWrapper}>
        <Menu width={531}>
          <MenuSectionHeader label="Anthropic" />
          <MenuItem
            label="Claude 4 Sonnet - High Thinking (May 2025)"
            helperText="Power 5/5 •  Context Window: 200k •  Reasoning"
            icon={<ModelIcon />}
          />
          <MenuItem
            label="Claude 4.1 Opus (Aug 2025)"
            helperText="Power 5/5 •  Context Window: 200k •  Reasoning"
            icon={<ModelIcon />}
            selected
          />
          <MenuItem
            label="Claude 4.5 Sonnet - High Thinking (Sep 2025)"
            helperText="Power 5/5 •  Context Window: 200k •  Reasoning"
            icon={<ModelIcon />}
          />
          <MenuItem
            label="Claude 4.5 Haiku (Sep 2025)"
            helperText="Power 5/5 •  Context Window: 200k •  Reasoning"
            icon={<ModelIcon />}
          />
          <MenuItem
            label="Claude 4.5 Opus (Nov 2025)"
            helperText="Power 5/5  •  Context Window: 200k •  Complex Tasks"
            icon={<ModelIcon />}
          />
        </Menu>
      </div>

      {/* Bottom row: 4 menu variants */}
      <div className={styles.menuRow}>
        {/* Account menu */}
        <Menu width={160}>
          <MenuItem label="Account" />
          <MenuItem label="Preferences" />
          <MenuItem label="Upgrade" />
          <MenuItem label="Support" />
          <MenuDivider />
          <MenuItem
            label="Log out"
            shortcut={
              <span className={styles.trailingIcon}>
                <Icon name="logout" size={14} />
              </span>
            }
          />
        </Menu>

        {/* Simple menu (regular) — date range */}
        <Menu width={160}>
          <MenuItem label="Today" />
          <MenuItem label="Last 7 days" selected />
          <MenuItem label="Last 14 days" />
          <MenuItem label="Last 30 days" />
          <MenuItem label="Last 3 months" />
          <MenuItem label="Last 6 months" />
          <MenuItem label="Year to date" />
        </Menu>

        {/* Simple menu (sm) */}
        <Menu size="sm" width={128}>
          <MenuItem label="Create invoice" size="sm" />
          <MenuItem label="Send receipt" size="sm" />
          <MenuItem label="Refund" size="sm" />
          <MenuItem label="Archive" size="sm" />
        </Menu>

        {/* Shortcuts menu */}
        <Menu width={220}>
          <MenuItem label="Paste here" size="sm" />
          <MenuDivider />
          <MenuItem label="Show/Hide UI" size="sm" shortcut={<Shortcut keys={['⌘', '\\']} />} />
          <MenuItem label="Show/Hide Comments" size="sm" shortcut={<Shortcut keys={['⌥', 'C']} />} />
          <MenuDivider />
          <MenuItem label="Actions" size="sm" shortcut={<Shortcut keys={['⌘', 'K']} />} />
          <MenuItem label="Tools" size="sm" hasSubmenu />
          <MenuItem label="Widgets" size="sm" hasSubmenu />
        </Menu>
      </div>
    </div>
  );
}
