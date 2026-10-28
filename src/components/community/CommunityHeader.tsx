"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Community.module.scss";

interface CommunityHeaderProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityHeader: React.FC<CommunityHeaderProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.headerColumn}>
      {/* 1. Section Tag: 04 / COMMUNITY & LEADERSHIP with Vermilion Accent Rule */}
      <div className={styles.sectionHeaderRow}>
        <motion.div
          className={styles.sectionTag}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
        >
          <span className={styles.tagNum}>04</span>
          <span className={styles.tagSep}>/</span>
          <span className={styles.tagText}>COMMUNITY &amp; LEADERSHIP</span>
        </motion.div>

        {/* Thin vermilion rule extending across */}
        <motion.div
          className={styles.headerRule}
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: easeCurve,
          }}
        />
      </div>

      {/* 2. Devanagari Accent: सहकार्य (rendered as real HTML text with Noto Serif Devanagari) */}
      <motion.div
        className={styles.devanagariAccentWrap}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.08,
          ease: easeCurve,
        }}
      >
        <span className={styles.devanagariText} lang="hi">
          सहकार्य
        </span>
        <svg
          viewBox="0 0 160 22"
          className={styles.devanagariUnderlineSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 4 14 Q 38 6 82 13 T 156 10"
            stroke="#B5282D"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 16 18 Q 52 10 92 16"
            stroke="#B5282D"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        <span className={styles.srOnly}>
          सहकार्य (Sahakarya) — Cooperation and Collaboration
        </span>
      </motion.div>

      {/* 3. Main Editorial Headline: 2 sentences / 3 lines */}
      <h2 className={styles.editorialHeadline}>
        <motion.span
          className={styles.headlineCharcoalLine}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.14,
            ease: easeCurve,
          }}
        >
          Technology brings us
        </motion.span>
        <motion.span
          className={styles.headlineCharcoalLine}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: easeCurve,
          }}
        >
          together.
        </motion.span>
        <motion.span
          className={styles.headlineVermilionLine}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.26,
            ease: easeCurve,
          }}
        >
          <span className={styles.headlineBreakLine}>Community moves</span>
          <span className={styles.headlineBreakLine}>us forward.</span>
        </motion.span>
      </h2>

      {/* 4. Supporting Editorial Copy */}
      <motion.p
        className={styles.supportingCopy}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          delay: shouldReduceMotion ? 0 : 0.32,
          ease: easeCurve,
        }}
      >
        Some of the best work happens when people learn together, share ideas, and build beyond their individual projects.
      </motion.p>
    </div>
  );
};
