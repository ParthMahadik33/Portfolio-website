"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export interface HeroNavbarProps {
  animateIntro?: boolean;
}

export const HeroNavbar: React.FC<HeroNavbarProps> = ({
  animateIntro = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const gentleEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <motion.header
      className={styles.navbar}
      initial={
        animateIntro
          ? { opacity: 0, y: -8 }
          : { opacity: 1, y: 0 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: animateIntro ? 0.35 : 0,
        delay: animateIntro ? 2.55 : 0,
        ease: gentleEase,
      }}
    >
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
    </motion.header>
  );
};
