// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=179-17313
// Extracted: 2026-10-17
// Demo page: Avatar type / color / size matrix, AvatarGroup (figma 783:773)

import { Avatar, AvatarGroup, type AvatarAgentColor, type AvatarSize } from '@/app/components/Avatar';
import styles from './page.module.css';

const SIZES: AvatarSize[] = [16, 20, 24, 32, 40, 48, 56, 64];
const PHOTOS = ['avatar-photo-32', 'avatar-04', 'avatar-05', 'avatar-11'];
const COLORS: AvatarAgentColor[] = ['gray', 'blue', 'purple', 'orange', 'teal', 'pink'];

export default function AvatarPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>Matrix</h2>
        <div className={styles.grid}>
          <span />
          {SIZES.map((size) => (
            <span key={size} className={styles.colLabel}>{size}</span>
          ))}
          {COLORS.map((color) => (
            <Row key={color} label={`agent ${color}`}>
              {(size) => <Avatar type="agent" color={color} size={size} />}
            </Row>
          ))}
          <Row label="photo">
            {(size) => <Avatar type="photo" src="/assets/avatars/avatar-photo-32.png" alt="User" size={size} />}
          </Row>
          <Row label="initials">
            {(size) => <Avatar type="initials" initials={size < 24 ? 'A' : 'AG'} size={size} />}
          </Row>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Group</h2>
        <div className={styles.groups}>
          <span className={styles.rowLabel}>photos</span>
          <AvatarGroup count={3}>
            {PHOTOS.map((p) => <Avatar key={p} type="photo" src={`/assets/avatars/${p}.png`} alt="User" size={32} />)}
          </AvatarGroup>
          <span className={styles.rowLabel}>initials</span>
          <AvatarGroup>
            {['MH', 'JK', 'AG'].map((i) => <Avatar key={i} type="initials" initials={i} size={32} />)}
          </AvatarGroup>
          <span className={styles.rowLabel}>initials-label</span>
          <AvatarGroup label="Alex Gilev">
            <Avatar type="initials" initials="AG" size={32} />
          </AvatarGroup>
          <span className={styles.rowLabel}>compact</span>
          <AvatarGroup compact count={3}>
            {PHOTOS.map((p) => <Avatar key={p} type="photo" src={`/assets/avatars/${p}.png`} alt="User" size={32} />)}
          </AvatarGroup>
        </div>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: (size: AvatarSize) => React.ReactNode }) {
  return (
    <>
      <span className={styles.rowLabel}>{label}</span>
      {SIZES.map((size) => (
        <span key={size} className={styles.cell}>{children(size)}</span>
      ))}
    </>
  );
}
