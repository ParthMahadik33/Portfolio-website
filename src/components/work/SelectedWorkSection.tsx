"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AgroRentProject } from "./AgroRentProject";
import { AquaTraceProject } from "./AquaTraceProject";
import { ArraProject } from "./ArraProject";
import { TornEdgeBottom } from "../about/AboutTornScraps";
import styles from "./SelectedWork.module.scss";

export const SelectedWorkSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <section className={styles.workSection} id="work" aria-label="Selected Engineering Work">
      {/* Background paper texture overlay */}
      <div className={styles.workBgPaper} />

      <div className={styles.workContainer}>
        {/* Section Header */}
        <header className={styles.sectionHeader}>
          {/* Section Tag Row: 02 / SELECTED WORK */}
          <div className={styles.sectionHeaderRow}>
            <motion.div
              className={styles.sectionTag}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
            >
              <span className={styles.tagNum}>02</span>
              <span className={styles.tagSep}>/</span>
              <span className={styles.tagText}>SELECTED WORK</span>
            </motion.div>

            {/* Thin vermilion rule extending across */}
            <motion.div
              className={styles.headerRule}
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: easeCurve }}
            />
          </div>

          {/* High-Contrast Editorial Serif Headline in Bodoni Moda */}
          <motion.h2
            className={styles.editorialHeadline}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: easeCurve }}
          >
            <span className={styles.headlineCharcoal}>Built to solve</span>
            <span className={styles.headlineVermilion}>something.</span>
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            className={styles.supportingCopy}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.35, ease: easeCurve }}
          >
            A selection of projects where engineering meets real-world problems.
          </motion.p>
        </header>

        {/* Flagship Project 01: AgroRent (Dominant visual presence with Stack Spread) */}
        <div className={styles.flagshipContainer}>
          <AgroRentProject />
        </div>

        {/* Secondary Row: Project 02 (AquaTrace) and Project 03 (ARRA) */}
        <div className={styles.secondaryProjectsGrid}>
          <AquaTraceProject />
          <ArraProject />
        </div>
      </div>

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
