"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./About.module.scss";

export const AboutEditorialContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.editorialLeft}>
      {/* Background Fort Engraving at Bottom Left from assets/about/ */}
      <div className={styles.fortEngravingWrapper} aria-hidden="true">
        <Image
          src="/assets/about/about-fort-mountain-engraving.png"
          alt=""
          width={2172}
          height={608}
          className={styles.fortEngravingImg}
          priority={false}
        />
      </div>

      {/* Section Label: 01 / ABOUT THE BUILDER */}
      <div className={styles.sectionHeaderRow}>
        <motion.div
          className={styles.sectionTag}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
        >
          <span className={styles.tagNum}>01</span>
          <span className={styles.tagSep}>/</span>
          <span className={styles.tagText}>ABOUT THE BUILDER</span>
        </motion.div>

        {/* Thin horizontal red line extending to the right */}
        <motion.div
          className={styles.headerRule}
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: easeCurve }}
        />
      </div>

      {/* Devanagari Accent: परिचय */}
      <motion.div
        className={styles.devanagariIntro}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.15, ease: easeCurve }}
      >
        परिचय
      </motion.div>

      {/* Bold Editorial Headline in Bodoni Moda Didone Display Style */}
      <motion.h2
        className={styles.editorialHeadline}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.25, ease: easeCurve }}
      >
        <span className={styles.headlineCharcoal}>Curious by default.</span>
        <span className={styles.headlineVermilion}>Builder by choice.</span>
      </motion.h2>

      {/* Readable Body Copy */}
      <motion.div
        className={styles.bodyCopy}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: easeCurve }}
      >
        <p className={styles.bodyParagraph}>
          I&apos;m Parth, a Computer Engineering student who enjoys turning ideas
          into practical software. I work across web development, backend systems,
          and AI-enabled applications, learning by building, testing, and iterating
          on real problems.
        </p>
        <p className={styles.bodyParagraph}>
          Beyond individual projects, I enjoy collaborating with teams,
          participating in technical communities, and exploring how technology
          can solve practical problems.
        </p>
      </motion.div>

      {/* Closing Accent: घडत राहा. घडवत राहा. */}
      <motion.div
        className={styles.closingAccent}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.55, ease: easeCurve }}
      >
        <div className={styles.closingDevanagariRow}>
          <span className={styles.closingDevanagari}>घडत राहा. घडवत राहा.</span>
          {/* Hand-drawn vermilion underline flourish */}
          <svg
            viewBox="0 0 160 12"
            className={styles.closingFlourishSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              d="M 2 8 Q 60 4 120 7 Q 145 9 158 5"
              stroke="#B5282D"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.7 }}
            />
          </svg>
        </div>
        <span className={styles.closingTranslation}>
          KEEP BECOMING. KEEP BUILDING.
        </span>
      </motion.div>
    </div>
  );
};
