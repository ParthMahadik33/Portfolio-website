"use client";

import React from "react";
import Image from "next/image";
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
      {/* Subtle organic paper background texture */}
      <div className={styles.workBgPaper} aria-hidden="true" />

      {/* Decorative Botanical / Harvest Branch in Upper-Right Background */}
      <div className={styles.upperRightBotanical} aria-hidden="true">
        <Image
          src="/assets/community/illustrations/botanical-branch-original-transparent.png"
          alt=""
          width={240}
          height={200}
          className={styles.botanicalImg}
          priority={false}
        />
      </div>

      {/* Antique Agricultural Tractor Engraving emerging from behind AgroRent visuals */}
      <motion.div
        className={styles.tractorEngravingBackground}
        initial={shouldReduceMotion ? { opacity: 0.15 } : { opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.2, ease: easeCurve }}
        aria-hidden="true"
      >
        <Image
          src="/assets/projects/tractor-isolated.png"
          alt=""
          width={1325}
          height={710}
          className={styles.tractorEngravingImg}
          priority={false}
        />
      </motion.div>

      {/* Traditional Cultivated Fields & Crop-Row Engraving Grounding AgroRent */}
      <motion.div
        className={styles.fieldsEngravingBackground}
        initial={shouldReduceMotion ? { opacity: 0.12 } : { opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.35, ease: easeCurve }}
        aria-hidden="true"
      >
        <Image
          src="/assets/projects/agricultural-engraving-panorama.png"
          alt=""
          width={1824}
          height={688}
          className={styles.fieldsEngravingImg}
          priority={false}
        />
      </motion.div>

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

          <div className={styles.headerMainContent}>
            <div className={styles.headerTitleGroup}>
              {/* Devanagari Accent: सृजन (Srijan — Creation) */}
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
                  सृजन
                </span>
                <svg
                  viewBox="0 0 130 20"
                  className={styles.devanagariUnderlineSvg}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 12 Q 32 5 68 11 T 124 9"
                    stroke="#B5282D"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 14 16 Q 44 8 78 14"
                    stroke="#B5282D"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
                <span className={styles.srOnly}>
                  सृजन (Srijan) — Creation
                </span>
              </motion.div>

              {/* High-Contrast Editorial Serif Headline in Bodoni Moda */}
              <motion.h2
                className={styles.editorialHeadline}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.1, ease: easeCurve }}
              >
                <span className={styles.headlineCharcoal}>Built to solve</span>
                <span className={styles.headlineVermilion}>something.</span>
              </motion.h2>

              {/* Supporting Copy */}
              <motion.p
                className={styles.supportingCopy}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2, ease: easeCurve }}
              >
                A selection of projects where engineering meets real-world problems.
              </motion.p>
            </div>

            {/* Handwritten Editorial Annotation bridging the header and AgroRent showcase */}
            <motion.div
              className={styles.headerAnnotationBridge}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.35, ease: easeCurve }}
              aria-hidden="true"
            >
              <div className={styles.annotationNoteText}>
                <span>Ideas into</span>
                <span>useful tools.</span>
              </div>
              {/* Fine curved hand-drawn ink arrow curving downward toward AgroRent */}
              <svg
                viewBox="0 0 70 50"
                className={styles.headerArrowSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 12 10 C 28 12 48 22 54 38"
                  stroke="#171512"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M 42 37 L 54 39 L 55 27"
                  stroke="#171512"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </header>

        {/* Flagship Project 01: AgroRent (Dominant visual presence) */}
        <div className={styles.flagshipContainer}>
          <AgroRentProject />
        </div>

        {/* Section Dividing Hairline Rule between Project 01 and Projects 02 & 03 */}
        <div className={styles.sectionDividerRule} aria-hidden="true" />

        {/* Secondary Row: Project 02 (AquaTrace) and Project 03 (ARRA) */}
        <div className={styles.secondaryProjectsSpread}>
          <div className={styles.secondaryProjectColLeft}>
            <AquaTraceProject />
          </div>
          <div className={styles.secondaryProjectColRight}>
            <ArraProject />
          </div>
        </div>
      </div>

      {/* Faint ground contour / crop-row field line engraving along bottom */}
      <div className={styles.groundCropRowEngraving} aria-hidden="true" />

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
