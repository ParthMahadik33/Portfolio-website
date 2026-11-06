"use client";

import React, { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./Hero.module.scss";

export interface HeroNavbarProps {
  animateIntro?: boolean;
}

export const HeroNavbar: React.FC<HeroNavbarProps> = ({
  animateIntro = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string, source: string) => {
    trackEvent("section_navigation", { section, source });
  };

  return (
    <header
      className={`${styles.navbar} ${animateIntro ? styles.animateNavbar : ""}`}
    >
      <a
        href="#home"
        className={styles.brand}
        onClick={() => handleNavClick("home", "brand_logo")}
      >
        <span className={styles.brandFirst}>PARTH</span>
        <span className={styles.brandLast}>MAHADIK</span>
      </a>

      <nav className={styles.navigation} aria-label="Main Navigation">
        <ul className={styles.navLinks}>
          <li>
            <a
              href="#home"
              className={`${styles.navLink} ${styles.navActive}`}
              onClick={() => handleNavClick("home", "navbar")}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#journey"
              className={styles.navLink}
              onClick={() => handleNavClick("journey", "navbar")}
            >
              JOURNEY
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={styles.navLink}
              onClick={() => handleNavClick("work", "navbar")}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={styles.navLink}
              onClick={() => handleNavClick("about", "navbar")}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.navLink}
              onClick={() => handleNavClick("contact", "navbar")}
            >
              CONTACT
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("home", "mobile_drawer");
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#journey"
                className={styles.mobileNavLink}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("journey", "mobile_drawer");
                }}
              >
                JOURNEY
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={styles.mobileNavLink}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("work", "mobile_drawer");
                }}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.mobileNavLink}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("about", "mobile_drawer");
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={styles.mobileNavLink}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("contact", "mobile_drawer");
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
