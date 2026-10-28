"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AboutEditorialContent } from "./AboutEditorialContent";
import { AboutCollage } from "./AboutCollage";
import { AboutPillars } from "./AboutPillars";
import { TornEdgeBottom } from "./AboutTornScraps";
import styles from "./About.module.scss";

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <section className={styles.aboutSection} id="about" aria-label="About the Builder">
      {/* Anchor for #journey link */}
      <span id="journey" className={styles.sectionAnchor} aria-hidden="true" />

      <div className={styles.aboutContainer}>
        {/* Left Editorial Text Column (Dominant 65% area) */}
        <AboutEditorialContent />

        {/* Right Art-Directed Photo Column (35% area with dedicated Pillars Header) */}
        <div className={styles.editorialRightCol}>
          {/* Reserved Space for Pillars Group: Completely Clear of Photos, Leaves & Tape */}
          <motion.div
            className={styles.pillarsWrapper}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.25, ease: easeCurve }}
          >
            <AboutPillars />
          </motion.div>

          {/* Layered Photo Collage */}
          <AboutCollage />
        </div>
      </div>

      {/* Continuous Torn Paper Edge along the bottom */}
      <TornEdgeBottom />
    </section>
  );
};
