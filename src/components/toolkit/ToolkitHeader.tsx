"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Toolkit.module.scss";

interface ToolkitHeaderProps {
  shouldReduceMotion: boolean | null;
}

export const ToolkitHeader: React.FC<ToolkitHeaderProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <header className={styles.sectionHeader}>
      {/* 1. Section Tag: 05 / TECHNICAL TOOLKIT */}
      <div className={styles.sectionHeaderRow}>
        <motion.div
          className={styles.sectionTag}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
        >
          <span className={styles.tagNum}>05</span>
          <span className={styles.tagSep}>/</span>
          <span className={styles.tagText}>TECHNICAL TOOLKIT</span>
        </motion.div>

        {/* Node point & fine vermilion hairline rule */}
        <div className={styles.ruleWithNode}>
          <span className={styles.ruleNode} />
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
      </div>

      {/* 2. Editorial Headline & Devanagari Accent */}
      <div className={styles.headerMainBlock}>
        <h2 className={styles.editorialHeadline}>
          <motion.span
            className={styles.headlineLineCharcoal}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: easeCurve,
            }}
          >
            Tools I use.
          </motion.span>
          <motion.span
            className={styles.headlineLineVermilion}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.22,
              ease: easeCurve,
            }}
          >
            Systems I build.
          </motion.span>
        </h2>

        <motion.p
          className={styles.supportingCopy}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.28,
            ease: easeCurve,
          }}
        >
          A combination of web development, backend systems, AI integrations, and cloud
          technologies that help me turn ideas into real-world applications.
        </motion.p>

        {/* 3. Genuine Devanagari Text Motif "अभ्यास" with brush underline */}
        <motion.div
          className={styles.devanagariAccent}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: easeCurve,
          }}
          aria-label="अभ्यास (Abhyas) — Practice and Mastery"
        >
          <span className={styles.devanagariText} lang="sa">
            अभ्यास
          </span>
          <div className={styles.brushUnderlineWrap} aria-hidden="true">
            <Image
              src="/assets/toolkit/ornaments/brush-underline.svg"
              alt=""
              width={140}
              height={18}
              className={styles.brushUnderlineImg}
              priority={false}
            />
          </div>
          <span className={styles.srOnly}>अभ्यास (Abhyas) — Practice and Mastery</span>
        </motion.div>
      </div>
    </header>
  );
};
