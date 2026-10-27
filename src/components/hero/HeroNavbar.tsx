"use client";

import React, { useState } from "react";
import styles from "./Hero.module.scss";

interface HeroNavbarProps {
  animated?: boolean;
}

export const HeroNavbar: React.FC<HeroNavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <a href="#home" className={styles.brand} aria-label="Parth Mahadik Home">
        <span className={styles.brandFirst}>PARTH</span>
        <span className={styles.brandLast}>MAHADIK</span>
      </a>

      <nav className={styles.navigation} aria-label="Main Navigation">
        <ul className={styles.navLinks}>
          <li>
            <a href="#home" className={`${styles.navLink} ${styles.navActive}`}>
              HOME
            </a>
          </li>
          <li>
            <a href="#journey" className={styles.navLink}>
              JOURNEY
            </a>
          </li>
          <li>
            <a href="#work" className={styles.navLink}>
              WORK
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              ABOUT
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburgerBtn} ${mobileMenuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <a
                href="#home"
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#journey"
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                JOURNEY
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
