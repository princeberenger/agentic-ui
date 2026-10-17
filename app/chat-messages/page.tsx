// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Chat)
// Extracted: 2026-10-17
// Demo page: user and agent messages, metadata, read receipts, system messages, status dots, scroll button

'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { CodeBlock } from '@/app/components/CodeBlock';
import { Icon } from '@/app/components/Icon/Icon';
import {
  AgentMessage,
  ChatMessageMetadata,
  ChatReadReceipt,
  ChatScrollButton,
  ChatStatusDot,
  ChatSystemMessage,
  type ChatReceiptStatus,
} from '@/app/components/Chat';
import { UserMessage } from '@/app/components/Chat';
import styles from './page.module.css';

const RECEIPTS: ChatReceiptStatus[] = ['sending', 'sent', 'delivered', 'read', 'failed'];

export default function ChatMessagesPage() {
  const [log, setLog] = useState('');
  const note = (what: string) => () => setLog(what);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Thread</h2>
        <div className={styles.column}>
          <ChatSystemMessage type="date">March 15, 2026</ChatSystemMessage>
          <UserMessage metadata={<ChatMessageMetadata receipt="read" time="9:15 AM" />}>Text message goes here.</UserMessage>
          <AgentMessage
            text="Agent message text."
            metadata={<ChatMessageMetadata align="start" time="9:15 AM" onCopy={note('copy')} onRetry={note('retry')} onThumbsUp={note('up')} onThumbsDown={note('down')} />}
          />
          <ChatSystemMessage type="section">Today</ChatSystemMessage>
          <UserMessage variant="filled" mention="@bug_review" metadata={<ChatMessageMetadata receipt="delivered" time="9:16 AM" />}>
            Text message goes here.
          </UserMessage>
          <AgentMessage text="Agent message text." error metadata={<ChatMessageMetadata align="start" time="9:15 AM" error="Not sent" />} />
          <AgentMessage
            text="Agent message text."
            action={<Button variant="secondary-filled" icon={<Icon name="arrow-up-right" />} iconPosition="right">View copy</Button>}
            metadata={<ChatMessageMetadata align="start" time="9:17 AM" />}
          />
          <AgentMessage text="Agent message text." metadata={<ChatMessageMetadata align="start" time="9:18 AM" />}>
            <CodeBlock variant="advanced" code={"'use strict';\n\n// Increase max listeners for event emitters\nrequire('events').EventEmitter.defaultMaxListeners = 100;\n\nconst gulp = require('gulp');"} />
          </AgentMessage>
          <ChatSystemMessage type="event">Alex joined</ChatSystemMessage>
          <ChatSystemMessage type="system">Conversation marked as resolved</ChatSystemMessage>
          <ChatSystemMessage type="checkpoint" onRestore={note('restore')}>Restore checkpoint</ChatSystemMessage>
          <p className={styles.title}>last action: {log || '—'}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>ChatMetadataRead</h2>
        <div className={styles.row}>
          {RECEIPTS.map((s) => <ChatReadReceipt key={s} status={s} />)}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Chat status dot</h2>
        <div className={styles.row}>
          {(['gray', 'black', 'yellow', 'red', 'green'] as const).map((s) => <ChatStatusDot key={s} status={s} />)}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>ChatScrollButton</h2>
        <div className={styles.column}>
          <ChatScrollButton onClick={note('scroll')} />
          <ChatScrollButton label="New messages" background="secondary" onClick={note('new messages')} />
        </div>
      </section>
    </div>
  );
}
