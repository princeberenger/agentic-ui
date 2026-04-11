import { Icon } from "@/app/components/Icon/Icon";
import styles from "./page.module.css";

export default function StyleTester2() {
  return (
    <div className={styles.page}>
      {/* ================================================================
          LEFT SIDEBAR — Navigation
          ================================================================ */}
      <nav className={styles.sidebar}>
        {/* Logo */}
        <div className={styles.sidebarLogo}>
          <span className={styles.logoWordmark} role="img" aria-label="AgentVc" />
        </div>

        {/* Nav Links */}
        <div className={styles.navSection}>
          {/* ENGAGE section */}
          <div className={styles.navSectionHeader}>Engage</div>

          <div className={styles.navItem}>
            <Icon name="filter" size={16} className={styles.navItemIcon} />
            <span>Audiences</span>
          </div>

          <div className={`${styles.navItem} ${styles.navItemActive}`}>
            <Icon name="code" size={16} className={styles.navItemIcon} />
            <span>Agents</span>
          </div>

          <div className={styles.navItem}>
            <Icon name="send-alt" size={16} className={styles.navItemIcon} />
            <span>Sequences</span>
          </div>

          <div className={styles.navItem}>
            <Icon name="cut" size={16} className={styles.navItemIcon} />
            <span>Snippets</span>
          </div>

          <div className={styles.navItem}>
            <Icon name="play" size={16} className={styles.navItemIcon} />
            <span>Playbooks</span>
          </div>

          <div className={styles.navSpacer} />

          {/* DASHBOARDS section */}
          <div className={styles.navSectionHeader}>Dashboards</div>

          <div className={styles.navItem}>
            <Icon name="direction-bear-right" size={16} className={styles.navItemIcon} />
            <span>Leading</span>
            <Icon name="chevron-down" size={16} className={styles.navItemChevron} />
          </div>

          <div className={styles.navItem}>
            <Icon name="direction-loop-left" size={16} className={styles.navItemIcon} />
            <span>Lagging</span>
            <Icon name="chevron-down" size={16} className={styles.navItemChevron} />
          </div>

          <div className={styles.navItem}>
            <Icon name="email" size={16} className={styles.navItemIcon} />
            <span>Email Backlog</span>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <span className={styles.sidebarFooterName}>Hi, Alex</span>
          <Icon name="overflow-menu-vertical" size={16} className={styles.sidebarFooterIcon} />
        </div>
      </nav>

      {/* ================================================================
          RIGHT CONTENT — Card Grid
          ================================================================ */}
      <div className={styles.content}>
        {/* ---- Row 1, Col 1: Icon Buttons + Tooltip ---- */}
        <div className={`${styles.card} ${styles.cardIconButtons}`}>
          <div className={styles.tooltip}>Pricing</div>
          <div className={styles.iconButtonRow}>
            <button className={styles.iconButton} aria-label="Add">
              <Icon name="sparkle" size={20} />
            </button>
            <button className={`${styles.iconButton} ${styles.iconButtonActive}`} aria-label="Calendar view">
              <Icon name="calendar" size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Notifications">
              <Icon name="bell" size={20} />
            </button>
          </div>
        </div>

        {/* ---- Row 1-2, Col 2: Contact Form (tall card) ---- */}
        <div className={`${styles.card} ${styles.cardContactForm}`}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-first-name">First Name</label>
            <input className={styles.formInput} type="text" id="contact-first-name" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-last-name">Last Name</label>
            <input className={styles.formInput} type="text" id="contact-last-name" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-email">Email</label>
            <input className={styles.formInput} type="email" id="contact-email" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-phone">Phone</label>
            <input className={styles.formInput} type="tel" id="contact-phone" />
          </div>
          <button className={styles.formButton}>Add Contact</button>
        </div>

        {/* ---- Row 1, Col 3: Avatar Group ---- */}
        <div className={`${styles.card} ${styles.cardAvatarGroup}`}>
          <div className={styles.avatarStack}>
            <img className={styles.avatarImage} src="/assets/avatars/avatar-photo-32.png" alt="" />
            <img className={styles.avatarImage} src="/assets/avatars/avatar-stack-02.png" alt="" />
            <img className={styles.avatarImage} src="/assets/avatars/avatar-02.png" alt="" />
            <div className={styles.avatar}>+3</div>
          </div>
          <div className={styles.avatarInfo}>
            <span className={styles.avatarInfoLabel}>Assigned Team</span>
            <span className={styles.avatarInfoCount}>6 Members</span>
          </div>
        </div>

        {/* ---- Row 2-3, Col 1: File Upload (tall card) ---- */}
        <div className={`${styles.card} ${styles.cardFileUpload}`}>
          <div className={styles.uploadZone}>
            <Icon name="upload" size={32} className={styles.uploadIcon} />
            <span className={styles.uploadText}>Drag and drop your files here</span>
            <button className={styles.uploadButton}>Or Select File</button>
            <span className={styles.uploadHelper}>
              W-2, 1099, Pay Stubs, Tax Returns, Bank Statements
            </span>
          </div>

          <div className={styles.fileList}>
            {/* File: W-2.PDF — uploaded, with trash icon */}
            <div className={styles.fileItem}>
              <span className={styles.fileName}>W-2.pdf</span>
              <button className={styles.fileAction} aria-label="Delete file">
                <Icon name="trash" size={16} />
              </button>
            </div>

            {/* File: 1099_2.PDF — completed, green checkmark */}
            <div className={`${styles.fileItem} ${styles.fileItemBordered}`}>
              <span className={styles.fileName}>1099_2.pdf</span>
              <Icon name="checkmark-filled" size={16} mode="img" />
            </div>

            {/* File: BOA_2025.PDF — loading, spinner + close */}
            <div className={`${styles.fileItem} ${styles.fileItemBordered}`}>
              <span className={styles.fileNameMuted}>boa_2025.pdf</span>
              <div className={styles.fileItemActions}>
                <Icon name="spinner" size={16} className={styles.spinner} />
                <button className={styles.fileAction} aria-label="Cancel upload">
                  <Icon name="close" size={16} />
                </button>
              </div>
            </div>

            {/* File: TAX-2025.PDF — error state */}
            <div className={styles.fileItemErrorWrapper}>
              <div className={`${styles.fileItem} ${styles.fileItemError}`}>
                <span className={styles.fileName}>tax-2025.pdf</span>
                <button className={styles.fileAction} aria-label="Remove file">
                  <Icon name="trash" size={16} />
                </button>
              </div>
              <div className={styles.fileErrorBackground}>
                <Icon name="error-circle" size={13} mode="img" className={styles.fileErrorIcon} />
                <span className={styles.fileErrorMessage}>File exceeds 5mb size limit</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Row 2, Col 3: Team Members ---- */}
        <div className={`${styles.card} ${styles.cardTeamMembers}`}>
          <div className={styles.teamMember}>
            <img className={styles.teamAvatarImage} src="/assets/avatars/andrea-klein.png" alt="Andrea Klein" />
            <div className={styles.teamMemberInfo}>
              <span className={styles.teamMemberName}>Andrea Klein</span>
              <span className={styles.teamMemberRole}>Assistant</span>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img className={styles.teamAvatarImage} src="/assets/avatars/markus-henke.png" alt="Markus Henke" />
            <div className={styles.teamMemberInfo}>
              <span className={styles.teamMemberName}>Markus Henke</span>
              <span className={styles.teamMemberRole}>Processor</span>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamAvatar}>JD</div>
            <div className={styles.teamMemberInfo}>
              <span className={styles.teamMemberName}>James Donowan</span>
              <span className={styles.teamMemberRole}>Underwriter</span>
            </div>
          </div>
        </div>

        {/* ---- Row 3, Col 2: User Profile ---- */}
        <div className={`${styles.card} ${styles.cardUserProfile}`}>
          <div className={styles.profileContent}>
            <div className={styles.profileIdentity}>
              <div className={styles.profileAvatarWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/avatars/alex-gilev-agent.svg" alt="" className={styles.profileAvatarBase} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/avatars/alex-gilev-overlay.svg" alt="" className={styles.profileAvatarOverlay} />
              </div>
              <div className={styles.profileNameBadge}>
                <span className={styles.profileName}>Alex Gilev</span>
                <span className={styles.profileBadge}>Lead</span>
              </div>
            </div>
            <button className={styles.profileCallButton}>
              <Icon name="phone-filled" size={13} className={styles.profileCallIcon} />
              <span>Call Now</span>
            </button>
          </div>
        </div>

        {/* ---- Row 3, Col 3: Contact Details ---- */}
        <div className={`${styles.card} ${styles.cardContactDetails}`}>
          <div className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <Icon name="email" size={16} className={styles.detailIcon} />
              <span className={styles.detailLabel}>Primary Email</span>
            </div>
            <span className={styles.detailValue}>alex@agenticui.net</span>
          </div>
          <div className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <Icon name="phone-outline" size={16} className={styles.detailIcon} />
              <span className={styles.detailLabel}>Mobile Phone</span>
            </div>
            <span className={styles.detailValue}>(561) 456-9070</span>
          </div>
        </div>
      </div>
    </div>
  );
}
