// Source: https://www.figma.com/design/FLribGjjakpYvdwuBTGTvD/AGENTIC-DESIGN-SYSTEM--v1.2-
// Extracted: 2026-04-05

'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@/app/components/Icon/Icon';
import { ProgressBars } from '@/app/components/ProgressBars';
import { Slider } from '@/app/components/Slider';
import { SlidingText } from '@/app/components/SlidingText';
import { EASE_OUT_EXPO, DURATION_ENTER } from '@/app/components/motion';
import styles from './page.module.css';

const CARD_STAGGER = 0.12;
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * CARD_STAGGER, duration: DURATION_ENTER, ease: EASE_OUT_EXPO },
  }),
};

function temperatureLabel(percent: number): string {
  const temp = percent / 100;
  if (temp <= 0.15) return `Low (${temp.toFixed(1)})`;
  if (temp <= 0.5) return `Medium (${temp.toFixed(1)})`;
  return `High (${temp.toFixed(1)})`;
}

function temperatureBadgeClass(percent: number): string {
  const temp = percent / 100;
  if (temp <= 0.15) return styles.badgeGreen;
  if (temp <= 0.5) return styles.badgeYellow;
  return styles.badgeRed;
}

export default function ProgressPage() {
  const [volume, setVolume] = useState(60);
  const [temperature, setTemperature] = useState(30);

  return (
    <div className={styles.demo}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoIcon} role="img" aria-label="Agentic UI" />
          <span className={styles.headerSeparator} aria-hidden="true" />
          <span className={styles.headerLabel}>Progress</span>
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

      {/* Centered content */}
      <div className={styles.content}>
        <div className={styles.cardStack}>
          {/* Card 1: Vesting progress */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleGroup}>
                <Icon name="money" size={16} className={styles.cardIcon} />
                <span className={styles.cardTitle}>Vesting</span>
              </div>
              <span className={styles.badgeGreen}>Cliff passed</span>
            </div>
            <ProgressBars total={24} filled={12} aria-label="Vesting progress" />
            <div className={styles.cardMeta}>
              <span className={styles.metaPrimary}>12 of 24 months</span>
              <span className={styles.metaSecondary}>2.5% RSA</span>
            </div>
          </motion.div>

          {/* Card 2: Volume */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleGroup}>
                <Icon name="volume-up-filled" size={16} className={styles.cardIcon} />
                <span className={styles.cardTitle}>Volume</span>
              </div>
            </div>
            <Slider
              defaultValue={60}
              onChange={setVolume}
              size="sm"
              animated
              animationDelay={0.55}
              aria-label="Volume"
            />
          </motion.div>

          {/* Card 3: Agent Temperature */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleGroup}>
                <Icon name="temperature" size={16} className={styles.cardIcon} />
                <span className={styles.cardTitle}>Agent Temperature</span>
              </div>
              <span className={temperatureBadgeClass(temperature)}>
                <SlidingText>{temperatureLabel(temperature)}</SlidingText>
              </span>
            </div>
            <Slider
              defaultValue={30}
              onChange={setTemperature}
              step={10}
              size="lg"
              scaleLabels={['0', '0.5', '1']}
              animated
              animationDelay={0.7}
              aria-label="Agent temperature"
            />
            <p className={styles.helperText}>
              controls how random vs. deterministic agent&apos;s outputs are during sampling.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
