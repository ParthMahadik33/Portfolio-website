"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AboutTape } from "./AboutTape";
import { AboutStamp } from "./AboutStamp";
import { AboutBotanicals } from "./AboutBotanicals";
import { AboutHandwriting } from "./AboutHandwriting";
import { KraftTornStrip, VermilionTornScrap } from "./AboutTornScraps";
import styles from "./About.module.scss";

export const AboutCollage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  // Toggle state for touchscreens & keyboard accessibility
  const [isSpread, setIsSpread] = useState(false);

  const toggleSpread = () => {
    setIsSpread((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSpread();
    }
  };

  return (
    <div
      className={`${styles.collageContainer} ${isSpread ? styles.isSpread : ""}`}
      onClick={toggleSpread}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Interactive photo collage. Tap or hover to fan out polaroids."
    >
      {/* 1. Believable Torn Paper Scraps tucked behind foreground photo */}
      <VermilionTornScrap className={styles.vermilionScrapPos} />
      <KraftTornStrip className={styles.kraftScrapPos} />

      {/* 2. Casual Handwritten Note & Curved Arrow on the Left */}
      <AboutHandwriting className={styles.handwritingPos} />

      {/* 3. Authentic Botanical Foliage on Middle-Right Edge (from assets/about/) */}
      <motion.div
        className={styles.botanicalsPos}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.35, ease: easeCurve }}
      >
        <AboutBotanicals />
      </motion.div>

      {/* 4. Main Focal Point: Foreground Color Speaking Photo (z-index: 10) */}
      <motion.div
        className={styles.mainPhotoWrapper}
        initial={
          shouldReduceMotion
            ? { opacity: 1, y: 0, rotate: -2.5 }
            : { opacity: 0, y: 22, rotate: -3.5 }
        }
        whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
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
          width={62}
          height={19}
        />
      </motion.div>

      {/* 5. Three Black & White Polaroids Tucked Behind Main Photo (35-50% visible in resting state) */}
      <div className={styles.tuckedPolaroidsStack}>
        {/* Polaroid 1 (Upper-Right): Parth at Fort Bastion */}
        <div className={`${styles.tuckedPolaroid} ${styles.polaroidFort}`}>
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-04-fort-portrait.png"
              alt="Parth Mahadik at heritage fort bastion"
              width={225}
              height={263}
              className={styles.polaroidImg}
            />
          </div>
          <AboutTape
            className={styles.polaroidTape1}
            rotation={-12}
            width={48}
            height={16}
          />
        </div>

        {/* Polaroid 2 (Lower-Right): Parth on Stone Stairs */}
        <div className={`${styles.tuckedPolaroid} ${styles.polaroidStairs}`}>
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-01-stairs.png"
              alt="Parth Mahadik on heritage stone stairs"
              width={225}
              height={263}
              className={styles.polaroidImg}
            />
          </div>
          <AboutTape
            className={styles.polaroidTape2}
            rotation={14}
            width={48}
            height={16}
          />
        </div>

        {/* Polaroid 3 (Lower-Left edge): Parth with Bicycle in nature */}
        <div className={`${styles.tuckedPolaroid} ${styles.polaroidCycling}`}>
          <div className={styles.polaroidCard}>
            <Image
              src="/assets/polaroid-05-cycling.png"
              alt="Parth Mahadik exploring trails with bicycle"
              width={210}
              height={247}
              className={styles.polaroidImg}
            />
          </div>
          <AboutTape
            className={styles.polaroidTape3}
            rotation={-8}
            width={44}
            height={15}
          />
        </div>
      </div>

      {/* 6. Circular Printed Mountain Seal Stamp from assets/about/ */}
      <motion.div
        className={styles.stampPos}
        initial={
          shouldReduceMotion
            ? { opacity: 1, scale: 1, rotate: -5 }
            : { opacity: 0, scale: 0.88, rotate: -12 }
        }
        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.55, ease: easeCurve }}
      >
        <AboutStamp size={124} rotation={-5} />
      </motion.div>
    </div>
  );
};
