"use client";

import React from "react";
import styles from "./Hero.module.scss";

export interface SanskritDetailProps {
  animateIntro?: boolean;
}

export const SanskritDetail: React.FC<SanskritDetailProps> = ({
  animateIntro = false,
}) => {
  const pillars = [
    { text: "IDEAS", delay: "3.88s" },
    { text: "DISCIPLINE", delay: "3.95s" },
    { text: "EXECUTION", delay: "4.02s" },
    { text: "IMPACT", delay: "4.09s" },
  ];

  return (
    <aside className={styles.sanskritColumn} aria-label="Core Philosophy">
      {/* SCENE 06 (2.60s - 2.95s): Vertical Sanskrit Calligraphy - Grouped clip mask reveal */}
      <div
        className={`${styles.sanskritWord} ${animateIntro ? styles.animateSanskrit : ""}`}
        aria-label="उद्यमेन"
      >
        <span className={styles.sanskritGlyph}>उ</span>
        <span className={styles.sanskritGlyph}>द्य</span>
        <span className={styles.sanskritGlyph}>मे</span>
        <span className={styles.sanskritGlyph}>न</span>
      </div>

      {/* SCENE 06 (2.70s - 3.00s): Philosophy Pillars - Subtle Stagger */}
      <div className={styles.pillarsList}>
        {pillars.map((item) => (
          <span
            key={item.text}
            className={`${styles.pillarItem} ${animateIntro ? styles.animatePillar : ""}`}
            style={animateIntro ? { animationDelay: item.delay } : undefined}
          >
            {item.text}
          </span>
        ))}
      </div>
    </aside>
  );
};
