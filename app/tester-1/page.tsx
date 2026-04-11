import styles from "./page.module.css";

/* ── Color palette data ──────────────────────────────────────────────────── */
const palettes = [
  {
    label: "Primary",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)",
    swatches: [
      "#0a1628",
      "#122347",
      "#1a3a6b",
      "#2c5a9e",
      "#4a7ec4",
      "#7aa3d8",
      "#a8c5e6",
      "#d4dff0",
    ],
  },
  {
    label: "Secondary",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #6b6b6b 100%)",
    swatches: [
      "#1a1a1a",
      "#2e2e2e",
      "#444444",
      "#5c5c5c",
      "#757575",
      "#9e9e9e",
      "#c4c4c4",
      "#e0e0e0",
      "#f5f5f5",
    ],
  },
  {
    label: "Success",
    gradient: "linear-gradient(135deg, #0a2816 0%, #1a6b3a 100%)",
    swatches: [
      "#0a2816",
      "#124723",
      "#1a6b3a",
      "#2c9e5a",
      "#4ac47e",
      "#7ad8a3",
      "#a8e6c5",
      "#d4f0df",
    ],
  },
  {
    label: "Error",
    gradient: "linear-gradient(135deg, #280a0a 0%, #6b1a1a 100%)",
    swatches: [
      "#280a0a",
      "#471212",
      "#6b1a1a",
      "#9e2c2c",
      "#c44a4a",
      "#d87a7a",
      "#e6a8a8",
      "#f0d4d4",
    ],
  },
];

/* ── Search icon SVG ─────────────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg
      className={styles.searchIcon}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Checkmark icon SVG ──────────────────────────────────────────────────── */
function CheckmarkIcon() {
  return (
    <svg
      className={styles.checkmark}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11.667 3.5 5.25 9.917 2.333 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function StyleTester1() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* ────────────────────────────────────────────────────────────────
            Column 1 — Color Palettes
            ──────────────────────────────────────────────────────────── */}
        <div className={styles.palettesColumn}>
          {palettes.map((palette) => (
            <div key={palette.label} className={styles.paletteCard}>
              <div
                className={styles.paletteHeader}
                style={{ background: palette.gradient }}
              >
                <span className={styles.paletteLabel}>{palette.label}</span>
              </div>
              <div className={styles.paletteSwatches}>
                {palette.swatches.map((color, i) => (
                  <div
                    key={i}
                    className={styles.paletteSwatch}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ────────────────────────────────────────────────────────────────
            Columns 2-4 — Component Cards (3x3)
            ──────────────────────────────────────────────────────────── */}
        <div className={styles.cardsGrid}>
          {/* ── Row 1, Card 1 — Headline Typography ──────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Headline</span>
            <div className={styles.typographyDisplay}>
              <span className={styles.aaHeading}>Aa</span>
            </div>
          </div>

          {/* ── Row 1, Card 2 — Buttons ──────────────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Buttons</span>
            <div className={styles.buttonsStack}>
              <button type="button" className={styles.btnPrimary}>
                Primary
              </button>
              <button type="button" className={styles.btnSecondary}>
                Secondary
              </button>
              <button type="button" className={styles.btnGhost}>
                Ghost
              </button>
            </div>
          </div>

          {/* ── Row 1, Card 3 — Search Input ─────────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Search</span>
            <div className={styles.searchWrapper}>
              <div className={styles.searchInput} role="search">
                <SearchIcon />
                <span className={styles.searchPlaceholder}>Search</span>
                <span className={styles.searchShortcut}>&#8984;S</span>
              </div>
            </div>
          </div>

          {/* ── Row 2, Card 4 — Body Typography ──────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Body</span>
            <div className={styles.typographyDisplay}>
              <span className={styles.aaBody}>Aa</span>
            </div>
          </div>

          {/* ── Row 2, Card 5 — Progress Bars ────────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Progress</span>
            <div className={styles.progressStack}>
              <div className={styles.progressRow}>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "10%" }}
                  />
                </div>
                <span className={styles.progressLabel}>10%</span>
              </div>
              <div className={styles.progressRow}>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "50%" }}
                  />
                </div>
                <span className={styles.progressLabel}>50%</span>
              </div>
              <div className={styles.progressRow}>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "90%" }}
                  />
                </div>
                <span className={styles.progressLabel}>90%</span>
              </div>
            </div>
          </div>

          {/* ── Row 2, Card 6 — Tab Group ────────────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Tabs</span>
            <div className={styles.tabGroupWrapper}>
              <div className={styles.tabGroup} role="tablist">
                <button
                  type="button"
                  className={styles.tabActive}
                  role="tab"
                  aria-selected="true"
                >
                  Tab One
                </button>
                <button
                  type="button"
                  className={styles.tab}
                  role="tab"
                  aria-selected="false"
                >
                  Tab Two
                </button>
                <button
                  type="button"
                  className={styles.tab}
                  role="tab"
                  aria-selected="false"
                >
                  Tab Three
                </button>
              </div>
            </div>
          </div>

          {/* ── Row 3, Card 7 — Label Typography ─────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Label</span>
            <div className={styles.typographyDisplay}>
              <span className={styles.aaLabel}>Aa</span>
            </div>
          </div>

          {/* ── Row 3, Card 8 — Badges + Controls (split card) ───────── */}
          <div className={styles.splitCard}>
            {/* Left half — Badges */}
            <div className={styles.splitHalf}>
              <span className={styles.cardLabel}>Badges</span>
              <div className={styles.badgesStack}>
                <span className={styles.badgeQueued}>queued</span>
                <span className={styles.badgePending}>Pending</span>
                <span className={styles.badgeSuccess}>&#10003; Success</span>
                <span className={styles.badgeFailed}>&#9888; Failed</span>
                <span className={styles.badgePassed}>Passed</span>
              </div>
            </div>

            {/* Right half — Controls */}
            <div className={styles.splitHalf}>
              <span className={styles.cardLabel}>Controls</span>
              <div className={styles.controlsStack}>
                {/* Radio buttons */}
                <div className={styles.controlRow}>
                  <div className={styles.radio} role="radio" aria-checked="false" aria-label="Unselected radio" tabIndex={0} />
                  <div className={styles.radioSelected} role="radio" aria-checked="true" aria-label="Selected radio" tabIndex={0}>
                    <div className={styles.radioDot} />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className={styles.controlRow}>
                  <div className={styles.checkbox} role="checkbox" aria-checked="false" aria-label="Unselected checkbox" tabIndex={0} />
                  <div className={styles.checkboxSelected} role="checkbox" aria-checked="true" aria-label="Selected checkbox" tabIndex={0}>
                    <CheckmarkIcon />
                  </div>
                </div>

                {/* Switches */}
                <div className={styles.controlRow}>
                  <div className={styles.switch} role="switch" aria-checked="false" aria-label="Inactive switch" tabIndex={0}>
                    <div className={styles.switchKnob} />
                  </div>
                  <div className={styles.switchActive} role="switch" aria-checked="true" aria-label="Active switch" tabIndex={0}>
                    <div className={styles.switchKnobActive} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Row 3, Card 9 — Menu Dropdown ────────────────────────── */}
          <div className={styles.card}>
            <span className={styles.cardLabel}>Menu</span>
            <div className={styles.menuWrapper}>
              <nav className={styles.menu} aria-label="Date range menu">
                <div className={styles.menuItem}>Today</div>
                <div className={styles.menuItemSelected}>Last 7 days</div>
                <div className={styles.menuItem}>Last 30 days</div>
                <div className={styles.menuItem}>Year to date</div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
