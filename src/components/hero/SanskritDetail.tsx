"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export interface SanskritDetailProps {
  animateIntro?: boolean;
}

export const SanskritDetail: React.FC<SanskritDetailProps> = ({
  animateIntro = false,
}) => {
  const gentleEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

  const pillars = [
    { text: "IDEAS", delay: 2.7 },
    { text: "DISCIPLINE", delay: 2.76 },
    { text: "EXECUTION", delay: 2.82 },
    { text: "IMPACT", delay: 2.88 },
  ];

  return (
    <aside className={styles.sanskritColumn} aria-label="Core Philosophy">
      {/* SCENE 06 (2.60s - 2.95s): Vertical Sanskrit Calligraphy - Grouped clip mask reveal */}
      <motion.div
        className={styles.sanskritWord}
        aria-label="उद्यमेन"
        initial={
          animateIntro
            ? { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }
            : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
        }
        animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        transition={{
          duration: animateIntro ? 0.35 : 0,
          delay: animateIntro ? 2.6 : 0,
          ease: gentleEase,
        }}
      >
        <span className={styles.sanskritGlyph}>उ</span>
        <span className={styles.sanskritGlyph}>द्य</span>
        <span className={styles.sanskritGlyph}>मे</span>
        <span className={styles.sanskritGlyph}>न</span>
      </motion.div>

      {/* SCENE 06 (2.70s - 3.00s): Philosophy Pillars - Subtle Stagger */}
      <div className={styles.pillarsList}>
        {pillars.map((item) => (
          <motion.span
            key={item.text}
            className={styles.pillarItem}
            initial={
              animateIntro ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animateIntro ? 0.25 : 0,
              delay: animateIntro ? item.delay : 0,
              ease: gentleEase,
            }}
          >
            {item.text}
          </motion.span>
        ))}
      </div>
    </aside>
  );
};
