"use client";

import React from "react";
import Image from "next/image";
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
    <div className={styles.headerLeftCol}>
      {/* 1. Section Tag: 04 / COMMUNITY & LEADERSHIP */}
      <div className={styles.sectionHeaderRow}>
        <motion.div
          className={styles.sectionTag}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -14 }}
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
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: easeCurve,
          }}
        />
      </div>

      {/* 2. Devanagari Accent: सहकार्य */}
      <motion.div
        className={styles.devanagariAccent}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.1,
          ease: easeCurve,
        }}
        aria-label="सहकार्य (Sahakarya) — Cooperation & Collaboration"
      >
        <Image
          src="/assets/community/annotations/sahakarya.svg"
          alt="सहकार्य (Sahakarya) — Collaboration & Community"
          width={180}
          height={50}
          className={styles.sahakaryaImg}
          priority={false}
        />
        {/* Screen reader only announcement */}
        <span className={styles.srOnly}>
          सहकार्य (Sahakarya) — Cooperation and Collaboration
        </span>
      </motion.div>

      {/* 3. Editorial Headline: Exact 3 lines as in target design mockup */}
      <h2 className={styles.editorialHeadline}>
        <motion.span
          className={styles.headlineLineCharcoal}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: easeCurve,
          }}
        >
          Technology brings us
        </motion.span>
        <motion.span
          className={styles.headlineLineTogether}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.22,
            ease: easeCurve,
          }}
        >
          together.
        </motion.span>
        <motion.span
          className={styles.headlineLineForward}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.28,
            ease: easeCurve,
          }}
        >
          Community moves us forward.
        </motion.span>
      </h2>

      {/* 4. Supporting Copy */}
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

      {/* 5. Handwritten Annotation: Ideas grow stronger when shared */}
      <motion.div
        className={styles.headerAnnotation}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.4,
          ease: easeCurve,
        }}
        aria-hidden="true"
      >
        <div className={styles.annotationNoteText}>
          <span>Ideas grow</span>
          <span>stronger when</span>
          <span>shared.</span>
        </div>
        <svg
          viewBox="0 0 70 50"
          className={styles.annotationArrowSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 10 Q 25 35 55 38"
            stroke="#171512"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 45 32 L 56 38 L 47 45"
            stroke="#171512"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};
