"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export interface HeroIntroProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  animateIntro = false,
  isComplete = false,
}) => {
  const textEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const gentleEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.introContainer}>
      {/* SCENE 06 (2.55s - 2.85s): Role labels fade in */}
      <motion.div
        className={styles.roleGroup}
        initial={animateIntro ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: animateIntro ? 0.35 : 0,
          delay: animateIntro ? 2.55 : 0,
          ease: gentleEase,
        }}
      >
        <div className={styles.rolePrimary}>SOFTWARE DEVELOPER</div>
        <div className={styles.roleSecondary}>COMPUTER ENGINEERING STUDENT</div>
      </motion.div>

      {/* SCENE 05 (2.00s - 2.55s): Oversized Bodoni headline with overflow masks */}
      <h1 className={styles.headline}>
        <span
          className={styles.nameRow}
          style={{ overflow: isComplete ? "visible" : "hidden" }}
        >
          <motion.span
            className={styles.nameCharcoal}
            initial={animateIntro ? { y: 16, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: animateIntro ? 0.45 : 0,
              delay: animateIntro ? 2.0 : 0,
              ease: textEase,
            }}
            style={{
              transform: isComplete ? "none" : undefined,
            }}
          >
            PARTH
          </motion.span>
        </span>
        <span
          className={styles.nameRow}
          style={{ overflow: isComplete ? "visible" : "hidden" }}
        >
          <motion.span
            className={styles.nameVermilion}
            initial={animateIntro ? { y: 18, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: animateIntro ? 0.45 : 0,
              delay: animateIntro ? 2.15 : 0,
              ease: textEase,
            }}
            style={{
              transform: isComplete ? "none" : undefined,
            }}
          >
            MAHADIK
          </motion.span>
        </span>
      </h1>

      {/* SCENE 06 (2.65s - 2.95s): Description / Tagline */}
      <motion.p
        className={styles.description}
        initial={animateIntro ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: animateIntro ? 0.35 : 0,
          delay: animateIntro ? 2.65 : 0,
          ease: gentleEase,
        }}
        style={{
          transform: isComplete ? "none" : undefined,
        }}
      >
        I build software that solves
        <br />
        real problems.”
      </motion.p>

      {/* SCENE 06 (2.70s - 3.00s): Action Buttons */}
      <motion.div
        className={styles.actionButtons}
        initial={animateIntro ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: animateIntro ? 0.35 : 0,
          delay: animateIntro ? 2.7 : 0,
          ease: gentleEase,
        }}
        style={{
          transform: isComplete ? "none" : undefined,
        }}
      >
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
      </motion.div>
    </div>
  );
};
