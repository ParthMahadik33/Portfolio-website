"use client";

import React from "react";
import styles from "./Hero.module.scss";

export const SanskritDetail: React.FC = () => {
  return (
    <aside className={styles.sanskritColumn} aria-label="Core Philosophy">
      {/* Vertical Sanskrit Calligraphy */}
      <div className={styles.sanskritWord} aria-label="उद्यमेन">
        <span className={styles.sanskritGlyph}>उ</span>
        <span className={styles.sanskritGlyph}>द्य</span>
        <span className={styles.sanskritGlyph}>मे</span>
        <span className={styles.sanskritGlyph}>न</span>
      </div>

      {/* Philosophy Pillars */}
      <div className={styles.pillarsList}>
        <span className={styles.pillarItem}>IDEAS</span>
        <span className={styles.pillarItem}>DISCIPLINE</span>
        <span className={styles.pillarItem}>EXECUTION</span>
        <span className={styles.pillarItem}>IMPACT</span>
      </div>
    </aside>
  );
};
