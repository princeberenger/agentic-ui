// Source: https://www.figma.com/design/Pc8p5kBLcXx4wwc7iWQXHC/GENIUS-DESIGN-SYSTEM-V.1?node-id=8007-10646
// Demo page showing DialerCard in 3 states: on-hold, in-progress, in-progress (muted)

'use client';

import { useState } from 'react';
import { DialerCard } from '../components/DialerCard';
import type { ContactData, ParticipantData } from '../components/DialerCard';

const CONTACTS: ContactData[] = [
  { id: '1', name: 'Alice Johnson', role: 'Loan officer', avatarSrc: '/showcase/avatar-alice.png' },
  { id: '2', name: 'Catherine Smith', role: 'Underwriter', avatarSrc: '/showcase/avatar-catherine.png' },
  { id: '3', name: 'Frank Garcia', role: 'Loan officer', avatarSrc: '/showcase/avatar-frank.png' },
];

const PARTICIPANTS: ParticipantData[] = [
  { id: '2', name: 'Catherine Smith', role: 'Underwriter', avatarSrc: '/showcase/avatar-catherine.png' },
  { id: 'self', name: 'You', role: 'Loan officer', avatarSrc: '/showcase/avatar-self.png', isSelf: true },
];

export default function DialerPage() {
  const [mutedParticipants, setMutedParticipants] = useState<Set<string>>(new Set());
  const [selfMuted, setSelfMuted] = useState(false);

  const participantsNormal = PARTICIPANTS.map((p) => ({
    ...p,
    isMuted: mutedParticipants.has(p.id),
  }));

  const participantsMuted = PARTICIPANTS.map((p) => ({
    ...p,
    isMuted: p.isSelf ? true : mutedParticipants.has(p.id),
  }));

  return (
    <main style={pageStyle}>
      {/* Card 1: On hold — searching for contacts */}
      <DialerCard
        callerName="Ben Porter"
        callDuration="00:45"
        callStatus="on-hold"
        statusLabel="On hold"
        avatars={[{ src: '/showcase/avatar-agent.svg', alt: 'Agent avatar' }]}
        contacts={CONTACTS}
        onMuteToggle={() => setSelfMuted((m) => !m)}
        onAddContact={(id) => console.log('Add contact:', id)}
      />

      {/* Card 2: Call in progress — participants visible */}
      <DialerCard
        callerName="Ben Porter"
        callDuration="02:11"
        callStatus="in-progress"
        statusLabel="Call in progress"
        avatars={[
          { src: '/showcase/avatar-agent.svg', alt: 'Agent' },
          { src: '/showcase/avatar-ben.png', alt: 'Ben Porter' },
          { src: '/showcase/avatar-catherine.png', alt: 'Catherine Smith' },
        ]}
        participants={participantsNormal}
        metadata={{ duration: '00:00', contacts: '1 of 2', voicemail: 0, textSent: 0 }}
        onParticipantMuteToggle={(id) =>
          setMutedParticipants((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
          })
        }
        onDropParticipant={(id) => console.log('Drop participant:', id)}
      />

      {/* Card 3: Call in progress — self muted */}
      <DialerCard
        callerName="Ben Porter"
        callDuration="02:11"
        callStatus="in-progress"
        statusLabel="Call in progress"
        avatars={[
          { src: '/showcase/avatar-agent.svg', alt: 'Agent' },
          { src: '/showcase/avatar-ben.png', alt: 'Ben Porter' },
          { src: '/showcase/avatar-catherine.png', alt: 'Catherine Smith' },
        ]}
        participants={participantsMuted}
        metadata={{ duration: '00:00', contacts: '1 of 2', voicemail: 0, textSent: 0 }}
        onParticipantMuteToggle={(id) => console.log('Toggle mute:', id)}
        onDropParticipant={(id) => console.log('Drop participant:', id)}
      />
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '48px',
  background: 'var(--color-bg-secondary)',
};
