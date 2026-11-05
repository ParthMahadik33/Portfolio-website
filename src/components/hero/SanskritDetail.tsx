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
    { text: "IDEAS", delay: "3.85s" },
    { text: "DISCIPLINE", delay: "3.91s" },
    { text: "EXECUTION", delay: "3.97s" },
    { text: "IMPACT", delay: "4.03s" },
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
