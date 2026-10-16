import styles from "./page.module.css";

/* ── Color token data ───────────────────────────────────────────────────── */
const colorGroups = [
  {
    label: "Background",
    tokens: [
      { name: "Primary", var: "--color-bg-primary", hex: "#FFFFFF" },
      { name: "Secondary", var: "--color-bg-secondary", hex: "#F7F7F7" },
      { name: "Tertiary", var: "--color-bg-tertiary", hex: "#E0E0E0" },
    ],
  },
  {
    label: "Content",
    tokens: [
      { name: "Primary", var: "--color-content-primary", hex: "#191919" },
      { name: "Secondary", var: "--color-content-secondary", hex: "#616161" },
      { name: "Icon", var: "--color-content-icon", hex: "#8F8F8F" },
      { name: "Disabled", var: "--color-content-disabled", hex: "#E0E0E0" },
    ],
  },
  {
    label: "Border",
    tokens: [
      { name: "Subtle", var: "--color-border-subtle", hex: "#E5E5E5" },
    ],
  },
  {
    label: "Badge",
    tokens: [
      { name: "Label Gray", var: "--color-badge-label-gray", hex: "#363636" },
    ],
  },
  {
    label: "Button",
    tokens: [
      { name: "Disabled", var: "--color-button-disabled", hex: "#F7F7F7" },
    ],
  },
  {
    label: "Switch",
    tokens: [
      { name: "BG Active", var: "--color-switch-bg-active", hex: "#000000" },
      {
        name: "BG Inactive",
        var: "--color-switch-bg-inactive",
        hex: "#E0E0E0",
      },
      {
        name: "Knob Active",
        var: "--color-switch-knob-active",
        hex: "#FFFFFF",
      },
      {
        name: "Knob Inactive",
        var: "--color-switch-knob-inactive",
        hex: "#FFFFFF",
      },
      { name: "Knob Icon", var: "--color-switch-knob-icon", hex: "#000000" },
    ],
  },
];

/* ── Spacing token data ─────────────────────────────────────────────────── */
const spacingTokens = [
  { name: "--space-none", px: 0 },
  { name: "--space-2", px: 2 },
  { name: "--space-4", px: 4 },
  { name: "--space-8", px: 8 },
  { name: "--space-10", px: 10 },
  { name: "--space-12", px: 12 },
  { name: "--space-16", px: 16 },
  { name: "--space-20", px: 20 },
  { name: "--space-24", px: 24 },
  { name: "--space-128", px: 128 },
];

/* ── Icon sizes ─────────────────────────────────────────────────────────── */
const iconSizes = [12, 13, 16, 20, 24, 32, 40];

/* ── Radius data ────────────────────────────────────────────────────────── */
const radii = [
  { name: "sm", var: "--radius-sm", value: "0.5rem" },
  { name: "default", var: "--radius-default", value: "1rem" },
  { name: "full", var: "--radius-full", value: "9999px" },
];

export default function StyleGuide() {
  return (
    <div className={styles.page}>
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>Agentic Design System</h1>
        <p className={styles.subtitle}>
          Foundation tokens extracted from Figma — v1.1
        </p>
      </header>

      {/* ── Font Families ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Font Families</h2>
        <div className={styles.fontShowcase}>
          <div className={styles.fontCard}>
            <span className={styles.fontName}>Headings — New York Large</span>
            <span
              className={styles.fontSample}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The quick brown fox jumps over the lazy dog
            </span>
            <span className={styles.fontMeta}>
              Weights: Regular (400), Medium (500), Bold (700)
            </span>
          </div>
          <div className={styles.fontCard}>
            <span className={styles.fontName}>Body — Geist</span>
            <span
              className={styles.fontSample}
              style={{ fontFamily: "var(--font-body)" }}
            >
              The quick brown fox jumps over the lazy dog
            </span>
            <span className={styles.fontMeta}>Weight: Regular (400)</span>
          </div>
          <div className={styles.fontCard}>
            <span className={styles.fontName}>
              Labels / Links — Departure Mono
            </span>
            <span
              className={styles.fontSample}
              style={{ fontFamily: "var(--font-label)" }}
            >
              The quick brown fox jumps over the lazy dog
            </span>
            <span className={styles.fontMeta}>
              Weights: Regular (400), Medium (500), Semibold (600)
            </span>
          </div>
          <div className={styles.fontCard}>
            <span className={styles.fontName}>Code — JetBrains Mono</span>
            <span
              className={styles.fontSample}
              style={{ fontFamily: "var(--font-code)" }}
            >
              const agent = new Agent(&quot;agentic&quot;);
            </span>
            <span className={styles.fontMeta}>Weight: Regular (400)</span>
          </div>
        </div>
      </section>

      {/* ── Typography Primitives ──────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography Primitives</h2>

        <div className={styles.colorGroup}>
          <span className={styles.colorGroupLabel}>Font Size Scale</span>
          <div className={styles.scaleGrid}>
            {[
              { name: "--text-super-tiny", size: "9px", rem: "0.5625rem" },
              { name: "--text-button", size: "12px", rem: "0.75rem" },
              { name: "--text-tiny", size: "13px", rem: "0.8125rem" },
              { name: "--text-small", size: "14px", rem: "0.875rem" },
              { name: "--text-regular", size: "16px", rem: "1rem" },
              { name: "--text-medium", size: "18px", rem: "1.125rem" },
              { name: "--text-large", size: "20px", rem: "1.25rem" },
              { name: "--text-huge", size: "32px", rem: "2rem" },
            ].map((t) => (
              <div key={t.name} className={styles.scaleRow}>
                <span className={styles.scaleLabel}>{t.name}</span>
                <span className={styles.scaleValue}>{t.size}</span>
                <span
                  className={styles.scaleSample}
                  style={{ fontSize: t.size, fontFamily: "var(--font-body)" }}
                >
                  Ag
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.colorGroup}>
          <span className={styles.colorGroupLabel}>Line Height Scale</span>
          <div className={styles.scaleGrid}>
            {[
              { name: "--leading-buttons", value: "10px", rem: "0.625rem" },
              { name: "--leading-tiny", value: "15px", rem: "0.9375rem" },
              { name: "--leading-small", value: "18px", rem: "1.125rem" },
              { name: "--leading-regular", value: "24px", rem: "1.5rem" },
              { name: "--leading-huge", value: "40px", rem: "2.5rem" },
            ].map((t) => (
              <div key={t.name} className={styles.scaleRow}>
                <span className={styles.scaleLabel}>{t.name}</span>
                <span className={styles.scaleValue}>{t.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.colorGroup}>
          <span className={styles.colorGroupLabel}>Letter Spacing</span>
          <div className={styles.scaleGrid}>
            {[
              { name: "--tracking-tight", value: "-0.3px" },
              { name: "--tracking-normal", value: "0" },
              { name: "--tracking-spacious", value: "0.3px" },
            ].map((t) => (
              <div key={t.name} className={styles.scaleRow}>
                <span className={styles.scaleLabel}>{t.name}</span>
                <span className={styles.scaleValue}>{t.value}</span>
                <span
                  className={styles.scaleSample}
                  style={{
                    fontSize: "16px",
                    letterSpacing: t.value,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ABCDEFGHIJ
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.colorGroup}>
          <span className={styles.colorGroupLabel}>Font Weights</span>
          <div className={styles.scaleGrid}>
            {[
              { name: "--weight-regular", value: "400", label: "Regular" },
              { name: "--weight-medium", value: "500", label: "Medium" },
              { name: "--weight-semibold", value: "600", label: "Semibold" },
            ].map((t) => (
              <div key={t.name} className={styles.scaleRow}>
                <span className={styles.scaleLabel}>{t.name}</span>
                <span className={styles.scaleValue}>
                  {t.value} ({t.label})
                </span>
                <span
                  className={styles.scaleSample}
                  style={{
                    fontSize: "16px",
                    fontWeight: t.value,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  The quick brown fox
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography System ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography System</h2>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Heading / H1</span>
          <span className="heading-h1">Contacts</span>
          <span className={styles.typeMeta}>
            New York Large &middot; 32/40 &middot; Regular &middot; tracking:
            -0.3px
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Heading / H2</span>
          <span className="heading-h2">Enable Alerts</span>
          <span className={styles.typeMeta}>
            New York Large &middot; 20/24 &middot; Medium &middot; tracking: 0
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Heading / H3</span>
          <span className="heading-h3">Parse Result Summary</span>
          <span className={styles.typeMeta}>
            New York Large &middot; 18/24 &middot; Medium &middot; tracking: 0
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Body / MD</span>
          <span className="body-md">
            One place to manage your contacts and keep everything organized.
          </span>
          <span className={styles.typeMeta}>
            Geist &middot; 16/24 &middot; Regular &middot; tracking: 0
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Body / SM</span>
          <span className="body-sm">
            Summary of scenario status. Comprehensive Monday morning review.
          </span>
          <span className={styles.typeMeta}>
            Geist &middot; 14/18 &middot; Regular &middot; tracking: 0
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Body / XS</span>
          <span className="body-xs">
            Real-time notification on threshold triggers.
          </span>
          <span className={styles.typeMeta}>
            Geist &middot; 13/15 &middot; Regular &middot; tracking: 0
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Label / MD</span>
          <span className="label-md">Lender</span>
          <span className={styles.typeMeta}>
            Departure Mono &middot; 12/18 &middot; Medium &middot; tracking:
            0.3px &middot; uppercase
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Button Label / SM</span>
          <span className="button-label-sm">+ New Chat</span>
          <span className={styles.typeMeta}>
            Departure Mono &middot; 10/11 &middot; Semibold &middot; tracking: 0
            &middot; uppercase
          </span>
        </div>

        <div className={styles.typeSpecimen}>
          <span className={styles.typeLabel}>Code / MD</span>
          <span className="code-md">
            {`const gulp = require('gulp');`}
          </span>
          <span className={styles.typeMeta}>
            JetBrains Mono &middot; 12/18 &middot; Regular &middot; tracking: 0
          </span>
        </div>
      </section>

      {/* ── Colors ──────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>

        {colorGroups.map((group) => (
          <div key={group.label} className={styles.colorGroup}>
            <span className={styles.colorGroupLabel}>{group.label}</span>
            <div className={styles.swatchRow}>
              {group.tokens.map((token) => (
                <div key={token.var} className={styles.swatch}>
                  <div
                    className={styles.swatchColor}
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className={styles.swatchName}>{token.name}</span>
                  <span className={styles.swatchValue}>
                    {token.hex}
                    <br />
                    {token.var}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Spacing ─────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing</h2>

        {spacingTokens.map((token) => (
          <div key={token.name} className={styles.spacingRow}>
            <span className={styles.spacingLabel}>{token.name}</span>
            <span className={styles.spacingValue}>{token.px}px</span>
            <div
              className={styles.spacingBar}
              style={{ width: Math.min(token.px * 3, 400) }}
            />
          </div>
        ))}
      </section>

      {/* ── Icon Sizes ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Icon Sizes</h2>

        <div className={styles.iconGrid}>
          {iconSizes.map((size) => (
            <div key={size} className={styles.iconItem}>
              <div
                className={styles.iconBox}
                style={{ width: size + 16, height: size + 16 }}
              >
                <div
                  className={styles.iconPlaceholder}
                  style={{ width: size, height: size }}
                />
              </div>
              <span className={styles.iconLabel}>
                {size}px
                <br />
                --icon-{size}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Border Radius ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>

        <div className={styles.radiusGrid}>
          {radii.map((r) => (
            <div key={r.name} className={styles.radiusItem}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: r.value }}
              />
              <span className={styles.radiusLabel}>
                {r.name}
                <br />
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Shadows ─────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shadows</h2>

        <div className={styles.shadowGrid}>
          <div className={styles.shadowItem}>
            <div
              className={styles.shadowBox}
              style={{ boxShadow: "var(--shadow-elevation-2)" }}
            />
            <span className={styles.shadowLabel}>elevation-2</span>
          </div>
          <div className={styles.shadowItem}>
            <div
              className={styles.shadowBox}
              style={{ boxShadow: "var(--shadow-elevation-4)" }}
            />
            <span className={styles.shadowLabel}>elevation-4</span>
          </div>
          <div className={styles.shadowItem}>
            <div
              className={styles.shadowBox}
              style={{ boxShadow: "var(--shadow-switch-toggle)" }}
            />
            <span className={styles.shadowLabel}>switch-toggle</span>
          </div>
        </div>
      </section>

      {/* ── Components ──────────────────────────────────────────────── */}
      <section>
        <h2 className={styles.sectionTitle}>Components</h2>
        <div className={styles.spacingScale}>
          <a href="/navigation" className={styles.shadowItem} style={{ textDecoration: 'none' }}>
            <div
              className={styles.shadowBox}
              style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-label)',
                fontSize: 'var(--text-super-tiny)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-spacious)',
                color: 'var(--color-content-secondary)',
              }}>
                Nav
              </span>
            </div>
            <span className={styles.shadowLabel}>Navigation</span>
          </a>
        </div>
      </section>
    </div>
  );
}
