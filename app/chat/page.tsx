// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Chat)
// Extracted: 2026-10-17
// Demo page: agent thread with steps, tool calls, messages and the composer

'use client';

import { useState } from 'react';
import {
  AgentMessage,
  ChatComposer,
  ChatMessageMetadata,
  ChatStep,
  ChatSystemMessage,
  ChatToolCall,
  ContextUsage,
  UserMessage,
} from '@/app/components/Chat';
import { FileType } from '@/app/components/FileType';
import styles from './page.module.css';

type Sent = { id: number; text: string };

export default function ChatPage() {
  const [sent, setSent] = useState<Sent[]>([]);
  const [files, setFiles] = useState<string[]>([]);

  return (
    <div className={styles.demo}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Chat</span>
        </div>
      </header>

      <div className={styles.thread}>
        <div className={styles.threadContent}>
          <ChatSystemMessage type="date">Task initiated</ChatSystemMessage>
          <div>
            <ChatStep label="Company analysis" icon="dna" />
            <ChatStep label="Brand voice" icon="bullhorn" />
          </div>
          <UserMessage metadata={<ChatMessageMetadata receipt="read" time="9:15 AM" />}>
            Create 3-4 additional elevator pitches for my company.
          </UserMessage>
          <div>
            <ChatStep label="Ideas" icon="lightning" />
            <ChatStep
              label="Running tasks in parallel"
              icon="decision-tree"
              subSteps={[{ label: 'Write version 1', complete: true }, { label: 'Write version 2', complete: true }, { label: 'Write version 3' }]}
            />
            <ChatStep label="Testing" icon="chemistry" state="active" status="black" />
          </div>
          <AgentMessage text="Here is what I ran:" metadata={<ChatMessageMetadata align="start" time="9:16 AM" />}>
            <ChatToolCall
              label="3 Tool calls"
              summary="3 tools"
              calls={[
                { status: 'complete', name: 'bash', detail: 'git diff --stat', time: '340ms' },
                { status: 'error', name: 'read', detail: 'src/utils/formatDate.ts', time: '45ms' },
                { status: 'working', name: 'edit', detail: 'src/utils/formatDate.ts', time: '3120ms' },
              ]}
            />
          </AgentMessage>
          <AgentMessage
            text="Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai."
            metadata={<ChatMessageMetadata align="start" time="9:17 AM" onCopy={() => {}} onRetry={() => {}} onThumbsUp={() => {}} onThumbsDown={() => {}} />}
          />
          {sent.map((m) => (
            <UserMessage key={m.id} metadata={<ChatMessageMetadata receipt="sent" time="now" />}>
              {m.text}
            </UserMessage>
          ))}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.context}>
          <ContextUsage percent={15} used="40k" limit="128k" input={{ tokens: '32k', cost: '$0.04' }} output={{ tokens: '8k', cost: '$0.08' }} totalCost="$0.12" />
        </div>
        <ChatComposer
          model="GPT 5.6"
          onModelClick={() => {}}
          onAttach={() => setFiles((f) => [...f, `image-${f.length + 1}.jpeg`])}
          onMicrophone={() => {}}
          onFiles={(dropped) => setFiles((f) => [...f, ...dropped.map((d) => d.name)])}
          attachments={files.map((name) => (
            <FileType key={name} name={name} size="small" variant="outline" onRemove={() => setFiles((f) => f.filter((x) => x !== name))} />
          ))}
          onSubmit={(text) => setSent((s) => [...s, { id: Date.now(), text }])}
        />
      </div>
    </div>
  );
}
