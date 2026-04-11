import { Icon } from "@/app/components/Icon/Icon";
import styles from "./page.module.css";

export default function StyleTester3() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* ================================================================
            TOP LEFT — Contacts Navigation Card
            ================================================================ */}
        <div className={styles.card}>
          <h1 className={styles.contactsTitle}>Contacts</h1>
          <p className={styles.contactsSubtitle}>
            One place to manage your contacts.
          </p>
          <div className={styles.divider} />
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              Client 1 (Primary Borrower)
            </li>
            <li className={styles.linkItem}>Client 2 (Co-Borrower)</li>
            <li className={styles.linkItem}>Documents</li>
            <li className={styles.linkDivider} role="separator" />
            <li className={styles.linkItemSmall}>Rate Sheet Details</li>
          </ul>
        </div>

        {/* ================================================================
            TOP MIDDLE — Enable Alerts Card
            ================================================================ */}
        <div className={styles.card}>
          <h2 className={styles.alertsTitle}>Enable Alerts</h2>
          <div className={styles.switchList}>
            {/* Switch 1 — ON */}
            <div className={styles.switchRow}>
              <div className={styles.switchTextGroup}>
                <span className={styles.switchLabel}>Daily Digest</span>
                <span className={styles.switchDescription}>
                  Summary of scenario status.
                </span>
              </div>
              <div
                className={styles.switchTrackActive}
                role="switch"
                aria-checked="true"
                aria-label="Daily Digest"
                tabIndex={0}
              >
                <div className={styles.switchKnobActive} />
              </div>
            </div>

            {/* Switch 2 — ON */}
            <div className={styles.switchRow}>
              <div className={styles.switchTextGroup}>
                <span className={styles.switchLabel}>Weekly Report</span>
                <span className={styles.switchDescription}>
                  Comprehensive Monday morning review.
                </span>
              </div>
              <div
                className={styles.switchTrackActive}
                role="switch"
                aria-checked="true"
                aria-label="Weekly Report"
                tabIndex={0}
              >
                <div className={styles.switchKnobActive} />
              </div>
            </div>

            {/* Switch 3 — ON */}
            <div className={styles.switchRow}>
              <div className={styles.switchTextGroup}>
                <span className={styles.switchLabel}>
                  As soon as the targets are hit
                </span>
                <span className={styles.switchDescription}>
                  Real-time notification on threshold triggers.
                </span>
              </div>
              <div
                className={styles.switchTrackActive}
                role="switch"
                aria-checked="true"
                aria-label="As soon as the targets are hit"
                tabIndex={0}
              >
                <div className={styles.switchKnobActive} />
              </div>
            </div>

            {/* Switch 4 — OFF */}
            <div className={styles.switchRow}>
              <div className={styles.switchTextGroup}>
                <span className={styles.switchLabel}>
                  When a contact is created
                </span>
                <span className={styles.switchDescription}>
                  Instant alerts for critical updates.
                </span>
              </div>
              <div
                className={styles.switchTrack}
                role="switch"
                aria-checked="false"
                aria-label="When a contact is created"
                tabIndex={0}
              >
                <div className={styles.switchKnob} />
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            RIGHT COLUMN — Chat Interface (spans both rows)
            ================================================================ */}
        <div className={styles.chatCard}>
          {/* Top bar */}
          <div className={styles.chatTopBar}>
            <Icon
              name="agentic-logo"
              size={24}
              className={styles.chatLogo}
            />
            <button className={styles.newChatButton} type="button">
              <Icon
                name="plus"
                size={13}
                className={styles.newChatButtonIcon}
              />
              New chat
            </button>
          </div>

          {/* Suggestion chips */}
          <div className={styles.suggestionsArea}>
            <div className={styles.suggestionChip}>
              What tasks are overdue?
            </div>
            <div className={styles.suggestionChip}>
              What notifications do I have?
            </div>
            <div className={styles.suggestionChip}>
              Create a contact for John Smith
            </div>
          </div>

          {/* Chat input */}
          <div className={styles.chatInputWrapper}>
            <div className={styles.chatInputPlaceholder}>
              Ask anything...
            </div>
            <div className={styles.chatInputActions}>
              <button
                className={styles.chatIconButton}
                aria-label="Attach file"
                type="button"
              >
                <Icon name="plus" size={20} />
              </button>

              <div className={styles.chatActionsRight}>
                <button
                  className={styles.chatIconButton}
                  aria-label="Voice input"
                  type="button"
                >
                  <Icon name="microphone" size={20} />
                </button>
                <button
                  className={styles.sendButton}
                  aria-label="Send message"
                  type="button"
                  disabled
                >
                  <Icon name="arrow-up" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            BOTTOM LEFT — Rate Sheet Details Card
            ================================================================ */}
        <div className={styles.card}>
          <div className={styles.kvList}>
            <div className={styles.kvPair}>
              <span className={styles.kvLabel}>Lender</span>
              <span className={styles.kvValue}>PHH</span>
            </div>
            <div className={styles.kvPair}>
              <span className={styles.kvLabel}>Version</span>
              <span className={styles.kvValue}>2026-03-12-v1</span>
            </div>
            <div className={styles.kvPair}>
              <span className={styles.kvLabel}>Effective Date</span>
              <span className={styles.kvValue}>Mar 11, 2026</span>
            </div>
            <div className={styles.kvPair}>
              <span className={styles.kvLabel}>File</span>
              <span className={styles.kvValue}>
                Best Efforts Rate Sheet_3-11-AM.xlsx
              </span>
            </div>
            <div className={styles.kvPair}>
              <span className={styles.kvLabel}>Uploaded By</span>
              <span className={styles.kvValue}>Alex Gilev</span>
            </div>
          </div>
        </div>

        {/* ================================================================
            BOTTOM MIDDLE — Parse Result Summary Card
            ================================================================ */}
        <div className={styles.card}>
          <h3 className={styles.parseTitle}>Parse Result Summary</h3>
          <div className={styles.codeBlockWrapper}>
            <button
              className={styles.copyButton}
              aria-label="Copy code"
              type="button"
            >
              <Icon name="copy" size={16} />
            </button>
            <code className={styles.codeText}>
              {`'use strict';

// Increase max listeners
for event emitters
require('events').EventEm
itter.defaultMaxListeners
= 100;

const gulp =
require('gulp');
const util = require('./...`}
            </code>
            <button className={styles.showMore} type="button">
              Show more
              <Icon
                name="chevron-down"
                size={13}
                className={styles.showMoreIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
