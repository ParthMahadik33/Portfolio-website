"use client";

import React from "react";
import styles from "./Hero.module.scss";

export const HeroIntro: React.FC = () => {
  return (
    <div className={styles.introContainer}>
      {/* Role labels */}
      <div className={styles.roleGroup}>
        <div className={styles.rolePrimary}>SOFTWARE DEVELOPER</div>
        <div className={styles.roleSecondary}>COMPUTER ENGINEERING STUDENT</div>
      </div>

      {/* Main oversized headline */}
      <h1 className={styles.headline}>
        <span className={styles.nameRow}>
          <span className={styles.nameCharcoal}>PARTH</span>
        </span>
        <span className={styles.nameRow}>
          <span className={styles.nameVermilion}>MAHADIK</span>
        </span>
      </h1>

      {/* Description */}
      <p className={styles.description}>
        I build software that solves
        <br />
        real problems.”
      </p>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <a href="#journey" className={styles.btnPrimary}>
          <span>EXPLORE MY JOURNEY</span>
          <svg
            className={styles.btnArrow}
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M 3 8 H 13 M 9 4 L 13 8 L 9 12" />
          </svg>
        </a>

        <a href="#work" className={styles.btnSecondary}>
          <span className={styles.playIconContainer} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#171512">
              <circle cx="12" cy="12" r="11" fill="#171512" />
              <polygon points="10,7.5 17,12 10,16.5" fill="#F4EBDD" />
            </svg>
          </span>
          <span>VIEW PROJECTS</span>
        </a>
      </div>
    </div>
  );
};
