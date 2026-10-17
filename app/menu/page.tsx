import { Icon } from '@/app/components/Icon/Icon';
import { KeyboardShortcut } from '@/app/components/KeyboardShortcut';
import { Menu, MenuItem, MenuDivider } from '@/app/components/Menu';
import { ModelLogo, type ModelProvider } from '@/app/components/ModelLogo';
import styles from './page.module.css';

const MODELS = [
  'Claude 4 Sonnet - High Thinking (May 2025)',
  'Claude 4.1 Opus (Aug 2025)',
  'Claude 4.5 Sonnet - High Thinking (Sep 2025)',
  'Claude 4.5 Haiku (Sep 2025)',
  'Claude 4.5 Opus (Nov 2025)',
];

const PROVIDERS: ModelProvider[] = ['anthropic', 'gemini', 'openai', 'mistral', 'xai'];

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
          <span className={styles.kbdGroup}>
            <KeyboardShortcut keys={['option', 'command']} />
            <KeyboardShortcut context="return" />
          </span>
        </div>
      </header>

      {/* Model Selection Menu — centered top */}
      <div className={styles.modelMenuWrapper}>
        {/* Figma Menu model selection 638:6554 */}
        <Menu width={531} aria-label="Model">
          {MODELS.map((model, i) => (
            <MenuItem
              key={model}
              label={model}
              icon={<ModelLogo provider="anthropic" size="sm" />}
              selected={i === 1}
              shortcut={i > 0 ? <KeyboardShortcut keys={['command', 'X']} /> : undefined}
            />
          ))}
        </Menu>
        <div className={styles.models}>
          {PROVIDERS.map((p) => <ModelLogo key={p} provider={p} label="" />)}
          {PROVIDERS.map((p) => <ModelLogo key={`${p}-sm`} provider={p} size="sm" label="" />)}
        </div>
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
          <MenuItem label="Show/Hide UI" size="sm" shortcut={<KeyboardShortcut keys={['command', '\\']} />} />
          <MenuItem label="Show/Hide Comments" size="sm" shortcut={<KeyboardShortcut keys={['option', 'C']} />} />
          <MenuDivider />
          <MenuItem label="Actions" size="sm" shortcut={<KeyboardShortcut keys={['command', 'K']} />} />
          <MenuItem label="Tools" size="sm" hasSubmenu />
          <MenuItem label="Widgets" size="sm" hasSubmenu />
        </Menu>
      </div>
    </div>
  );
}
