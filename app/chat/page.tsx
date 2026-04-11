import { Icon } from '@/app/components/Icon/Icon';
import styles from './page.module.css';

export default function ChatPage() {
  return (
    <div className={styles.demo}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Chat</span>
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

      {/* Chat Thread */}
      <div className={styles.thread}>
        <div className={styles.threadContent}>
          {/* Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerLabel}>Task Initiated</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Agent Steps */}
          <div className={styles.steps}>
            {/* Step 1: Company Analysis */}
            <div className={styles.step}>
              <div className={styles.stepDotSmall} />
              <div className={styles.stepLabel}>
                <Icon name="dna" size={16} className={styles.stepIcon} />
                <span className={styles.stepName}>Company Analysis</span>
                <Icon name="chevron-down" size={16} className={styles.stepChevron} />
              </div>
            </div>

            {/* Step 2: Brand Voice */}
            <div className={styles.step}>
              <div className={styles.stepDotSmall} />
              <div className={styles.stepLabel}>
                <Icon name="bullhorn" size={16} className={styles.stepIcon} />
                <span className={styles.stepName}>Brand Voice</span>
                <Icon name="chevron-down" size={16} className={styles.stepChevron} />
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className={styles.messageBubble} role="article" tabIndex={0}>
            Create 3-4 additional elevator pitches for my company.
          </div>

          {/* Agent Steps — continued */}
          <div className={styles.steps}>
            {/* Step 3: Ideas */}
            <div className={styles.step}>
              <div className={styles.stepDotMedium} />
              <div className={styles.stepLabel}>
                <Icon name="lightning" size={16} className={styles.stepIcon} />
                <span className={styles.stepName}>Ideas</span>
                <Icon name="chevron-down" size={16} className={styles.stepChevron} />
              </div>
            </div>

            {/* Step 4: Running Tasks in Parallel */}
            <div className={styles.step}>
              <div className={styles.stepDotMedium} />
              <div>
                <div className={styles.stepLabel}>
                  <Icon name="decision-tree" size={16} className={styles.stepIcon} />
                  <span className={styles.stepName}>Running Tasks in Parallel</span>
                  <Icon name="chevron-down" size={16} className={styles.stepChevron} />
                </div>
                {/* Subtasks */}
                <div className={styles.subtasks}>
                  <div className={styles.subtask}>
                    <Icon name="todo" size={16} className={styles.subtaskIcon} />
                    <span className={styles.subtaskLabel}>Write version 1</span>
                  </div>
                  <div className={styles.subtask}>
                    <Icon name="todo" size={16} className={styles.subtaskIcon} />
                    <span className={styles.subtaskLabel}>Write version 2</span>
                  </div>
                  <div className={styles.subtask}>
                    <Icon name="todo" size={16} className={styles.subtaskIcon} />
                    <span className={styles.subtaskLabel}>Write version 3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Testing (active, with gradient) */}
            <div className={styles.step}>
              <div className={styles.stepDotLarge} />
              <div className={styles.stepLabel}>
                <Icon name="chemistry" size={16} className={styles.stepIcon} />
                <span className={styles.stepNameActive}>Testing</span>
                <Icon name="chevron-up" size={16} className={styles.stepChevron} />
              </div>
            </div>
          </div>

          {/* Response Text */}
          <p className={styles.responseText}>
            Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai.
          </p>
        </div>
      </div>

      {/* Chat Input */}
      <div className={styles.inputWrapper}>
        <div className={styles.chatInput}>
          <div className={styles.chatInputArea}>
            <span className={styles.chatInputPlaceholder}>Ask anything...</span>
          </div>
          <div className={styles.chatInputActions}>
            <div className={styles.actionsLeft}>
              <button type="button" className={styles.chatButton} aria-label="Attach file">
                <Icon name="plus" size={20} />
              </button>
            </div>
            <div className={styles.actionsRight}>
              <button type="button" className={styles.chatButton} aria-label="Voice input">
                <Icon name="microphone" size={20} />
              </button>
              <button type="button" className={styles.chatButtonDisabled} aria-label="Send message" disabled>
                <Icon name="arrow-up" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
