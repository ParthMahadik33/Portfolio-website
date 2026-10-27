"use client";

import React from "react";
import { motion } from "framer-motion";
import { RecognitionTape } from "./RecognitionTape";
import styles from "./Recognition.module.scss";

interface RecognitionHeaderProps {
  shouldReduceMotion: boolean | null;
}

export const RecognitionHeader: React.FC<RecognitionHeaderProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <header className={styles.sectionHeader}>
      {/* 1. Section Tag Row: 03 / RECOGNITION & EXPERIENCE */}
      <div className={styles.sectionHeaderRow}>
        <motion.div
          className={styles.sectionTag}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
        >
          <span className={styles.tagNum}>03</span>
          <span className={styles.tagSep}>/</span>
          <span className={styles.tagText}>RECOGNITION &amp; EXPERIENCE</span>
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

      {/* 2. Headline and Sanskrit Paper Note Row */}
      <div className={styles.headerMainRow}>
        {/* Left: Two-line editorial serif headline + supporting line */}
        <div className={styles.headlineCol}>
          <h2 className={styles.editorialHeadline}>
            <motion.span
              className={styles.headlineLineCharcoal}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: easeCurve,
              }}
            >
              The work took
            </motion.span>
            <motion.span
              className={styles.headlineLineVermilion}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.22,
                ease: easeCurve,
              }}
            >
              more than one try.
            </motion.span>
          </h2>

          <motion.p
            className={styles.supportingCopy}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.32,
              ease: easeCurve,
            }}
          >
            Many attempts. Lessons earned. Then, results worth celebrating.
          </motion.p>
        </div>

        {/* Right: Small archival paper note with Sanskrit quote & translation */}
        <motion.div
          className={styles.sanskritNoteScrap}
          initial={
            shouldReduceMotion
              ? { opacity: 1, rotate: 1.5 }
              : { opacity: 0, y: 12, rotate: 0 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: easeCurve,
          }}
          aria-label="Sanskrit reflection: Abhyāsāt siddhiḥ - Progress through practice"
        >
          {/* Top masking tape */}
          <RecognitionTape
            rotation={-4}
            width="50px"
            height="16px"
            className={styles.sanskritNoteTape}
          />

          <span className={styles.sanskritScript} lang="sa">
            अभ्यासात् सिद्धिः
          </span>
          <span className={styles.sanskritTranslation}>
            Progress through practice.
          </span>
        </motion.div>
      </div>
    </header>
  );
};
