"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AboutTape } from "./AboutTape";
import { AboutStamp } from "./AboutStamp";
import { AboutBotanicals } from "./AboutBotanicals";
import { AboutPillars } from "./AboutPillars";
import { AboutHandwriting } from "./AboutHandwriting";
import { KraftTornStrip, VermilionTornScrap } from "./AboutTornScraps";
import styles from "./About.module.scss";

export const AboutCollage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  // Active polaroid on interaction
  const [activePolaroid, setActivePolaroid] = useState<number | null>(null);

  return (
    <div className={styles.collageContainer}>
      {/* 1. Small Organic Vermilion Paper Scrap peeking out at top-left */}
      <VermilionTornScrap className={styles.vermilionScrapPos} />

      {/* 2. Narrow Kraft Torn Paper Strip along left of photo */}
      <KraftTornStrip className={styles.kraftScrapPos} />

      {/* 3. Small Casual Handwritten Note & Curved Arrow */}
      <AboutHandwriting className={styles.handwritingPos} />

      {/* 4. Upper Right Guiding Pillars */}
      <motion.div
        className={styles.pillarsPos}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.25, ease: easeCurve }}
      >
        <AboutPillars />
      </motion.div>

      {/* 5. Natural Hand-Drawn Botanical SVG Artwork */}
      <motion.div
        className={styles.botanicalsPos}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: easeCurve }}
      >
        <AboutBotanicals />
      </motion.div>

      {/* 6. Main Focal Point: Authentic Color Speaking Photo */}
      <motion.div
        className={styles.mainPhotoWrapper}
        initial={
          shouldReduceMotion
            ? { opacity: 1, y: 0, rotate: -2 }
            : { opacity: 0, y: 24, rotate: -3.5 }
        }
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.15, ease: easeCurve }}
      >
        <div className={styles.mainPhotoFrame}>
          <div className={styles.mainPhotoInner}>
            <Image
              src="/assets/about-speaking-photo-upper.webp"
              alt="Parth Mahadik speaking at technical event"
              width={640}
              height={544}
              className={styles.mainPhotoImg}
              priority={false}
            />
          </div>
        </div>

        {/* Small translucent masking tape strip attached to top-right corner */}
        <AboutTape
          className={styles.mainPhotoTapeTopRight}
          rotation={22}
          width={65}
          height={20}
        />
      </motion.div>

      {/* 7. Deliberate Layered Composition of Three Black & White Polaroids */}
      <div className={styles.polaroidsStack}>
        {/* Polaroid 3 (Layered naturally between/behind): Parth with Bicycle */}
        <motion.div
          className={`${styles.polaroidItem} ${styles.polaroidBack} ${
            activePolaroid === 3 ? styles.polaroidActive : ""
          }`}
          onMouseEnter={() => setActivePolaroid(3)}
          onMouseLeave={() => setActivePolaroid(null)}
          onClick={() => setActivePolaroid(activePolaroid === 3 ? null : 3)}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0, rotate: -5 }
              : { opacity: 0, y: 20, rotate: -7 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: -5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.3, ease: easeCurve }}
        >
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-05-cycling.png"
              alt="Parth Mahadik exploring trails with bicycle"
              width={220}
              height={259}
              className={styles.polaroidImg}
            />
          </div>
        </motion.div>

        {/* Polaroid 1 (Top right): Parth at Fort Watchtower */}
        <motion.div
          className={`${styles.polaroidItem} ${styles.polaroidTop} ${
            activePolaroid === 1 ? styles.polaroidActive : ""
          }`}
          onMouseEnter={() => setActivePolaroid(1)}
          onMouseLeave={() => setActivePolaroid(null)}
          onClick={() => setActivePolaroid(activePolaroid === 1 ? null : 1)}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0, rotate: 4.5 }
              : { opacity: 0, y: 22, rotate: 2 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 4.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: easeCurve }}
        >
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-04-fort-portrait.png"
              alt="Parth Mahadik at heritage fort bastion"
              width={235}
              height={275}
              className={styles.polaroidImg}
            />
          </div>
          {/* Small tape piece on fort polaroid corner */}
          <AboutTape
            className={styles.polaroidTape1}
            rotation={-14}
            width={52}
            height={17}
          />
        </motion.div>

        {/* Polaroid 2 (Bottom right): Parth on Stone Stairs */}
        <motion.div
          className={`${styles.polaroidItem} ${styles.polaroidBottom} ${
            activePolaroid === 2 ? styles.polaroidActive : ""
          }`}
          onMouseEnter={() => setActivePolaroid(2)}
          onMouseLeave={() => setActivePolaroid(null)}
          onClick={() => setActivePolaroid(activePolaroid === 2 ? null : 2)}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0, rotate: -2.5 }
              : { opacity: 0, y: 22, rotate: -5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.55, ease: easeCurve }}
        >
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-01-stairs.png"
              alt="Parth Mahadik on heritage stone stairs"
              width={235}
              height={275}
              className={styles.polaroidImg}
            />
          </div>
          {/* Small tape piece on stairs polaroid */}
          <AboutTape
            className={styles.polaroidTape2}
            rotation={15}
            width={50}
            height={16}
          />
        </motion.div>
      </div>

      {/* 8. Circular Printed Seal Stamp: STILL LEARNING / STILL BUILDING */}
      <motion.div
        className={styles.stampPos}
        initial={
          shouldReduceMotion
            ? { opacity: 1, scale: 1, rotate: -5 }
            : { opacity: 0, scale: 0.88, rotate: -12 }
        }
        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.65, ease: easeCurve }}
      >
        <AboutStamp size={112} rotation={-5} />
      </motion.div>
    </div>
  );
};
