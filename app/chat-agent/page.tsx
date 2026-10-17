// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Chat)
// Extracted: 2026-10-17
// Demo page: Agent step, tool calls, Multistepper, progress ring, CONTEXT, ChatComposer states

'use client';

import { useState } from 'react';
import {
  AgentStep,
  ChatComposer,
  ChatStep,
  ChatToolCall,
  ContextTooltip,
  ContextUsage,
  ProgressRing,
  ToolCallItem,
} from '@/app/components/Chat';
import { FileType } from '@/app/components/FileType';
import styles from './page.module.css';

const CALLS = [
  { status: 'complete' as const, name: 'bash', detail: 'git diff --stat', time: '340ms' },
  { status: 'error' as const, name: 'read', detail: 'src/utils/formatDate.ts', time: '45ms' },
  { status: 'working' as const, name: 'edit', detail: 'src/utils/formatDate.ts', time: '3120ms' },
];

const ACTIONS = [
  { status: 'complete' as const, name: 'Reviewing upload flow', time: '40ms' },
  { status: 'complete' as const, name: 'Checking form validation', time: '1.1s' },
  { status: 'complete' as const, name: 'Updated error message copy', time: '88ms' },
];

const chips = ['Document.pdf', 'image.jpeg', 'image.jpeg'].map((name, i) => (
  <FileType key={i} name={name} size="small" variant="outline" onRemove={() => {}} />
));

export default function ChatAgentPage() {
  const [last, setLast] = useState('');

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Agent step</h2>
        <div className={styles.column}>
          <AgentStep label="State label" />
          <AgentStep label="State label" state="active" />
          <AgentStep label="State label" state="disabled" />
          <AgentStep label="State label" subStep="incomplete" />
          <AgentStep label="State label" subStep="complete" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>toolcall-base / Chat Tool Call</h2>
        <div className={styles.column}>
          {CALLS.map((c) => <ToolCallItem key={c.name} {...c} />)}
          <ChatToolCall label="3 Tool calls" summary="3 tools" calls={CALLS} />
          <ChatToolCall label="3 Actions" summary="3 actions" calls={ACTIONS} defaultExpanded={false} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Multistepper</h2>
        <div className={styles.column}>
          <ChatStep label="State label" />
          <ChatStep label="State label" subSteps={[{ label: 'State label' }, { label: 'State label' }, { label: 'State label', complete: true }]} />
          <ChatStep label="State label" message="Agentic UI is the world-first Figma design system for building scalable agentic experiences with Ai." />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>progress / CONTEXT / CONTEXT-TOOLTIP</h2>
        <div className={styles.row}>
          {[0, 15, 50, 75, 100].map((v) => <ProgressRing key={v} value={v} />)}
        </div>
        <div className={styles.row}>
          {[0, 15, 50, 75, 100].map((v) => (
            <ContextUsage key={v} percent={v} used="40k" limit="128k" input={{ tokens: '32k', cost: '$0.04' }} output={{ tokens: '8k', cost: '$0.08' }} totalCost="$0.12" />
          ))}
        </div>
        <div style={{ position: 'relative', height: 150 }}>
          <ContextTooltip percent={15} used="40k" limit="128k" input={{ tokens: '32k', cost: '$0.04' }} output={{ tokens: '8k', cost: '$0.08' }} totalCost="$0.12" className={styles.staticTooltip} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>ChatComposer — last submit: {last || '—'}</h2>
        <div className={styles.column}>
          <ChatComposer model="GPT 5.6" onModelClick={() => {}} onAttach={() => {}} onMicrophone={() => {}} onSubmit={setLast} onFiles={() => {}} onScrollToBottom={() => {}} />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} disabled />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} defaultValue="Show me the revenue since the beginning of the year." onSubmit={setLast} />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} defaultValue="Show me the revenue since the beginning of the year." status="error" statusMessage="Couldn’t send a message. Please try again." onSubmit={setLast} />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} defaultValue="Show me the revenue since the beginning of the year." status="warning" statusMessage="Context window is 90% full." onSubmit={setLast} />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} attachments={chips} />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} attachments={chips} attachmentsCollapsed />
          <ChatComposer model="GPT 5.6" onAttach={() => {}} onMicrophone={() => {}} condensed onSubmit={setLast} />
        </div>
      </section>
    </div>
  );
}
