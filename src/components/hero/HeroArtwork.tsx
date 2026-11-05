"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export interface HeroArtworkProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroArtwork: React.FC<HeroArtworkProps> = ({
  animateIntro = false,
  isComplete = false,
}) => {
  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <div className={styles.artworkContainer} aria-hidden="true">
      {/* SCENE 04 (1.50s - 2.15s): Sahyadri Mountain Landscape - Bottom-to-Top Clip Reveal */}
      <motion.div
        className={styles.artworkWrapper}
        initial={
          animateIntro
            ? { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 }
            : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
        }
        animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        transition={{
          duration: animateIntro ? 0.65 : 0,
          delay: animateIntro ? 1.5 : 0,
          ease: easeCurve,
        }}
        style={{
          clipPath: isComplete ? "none" : undefined,
        }}
      >
        <Image
          src="/assets/hero-bg-mountain.png"
          alt="Sahyadri mountain landscape, historic fort walls, and vermilion sun"
          width={1672}
          height={921}
          priority
          className={styles.backgroundImage}
        />
      </motion.div>

      {/* SCENE 04 (1.65s - 2.15s): Vermilion Sun Ink-Mask Radial Reveal */}
      {animateIntro && !isComplete && (
        <motion.div
          className={styles.sunArtworkWrapper}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{
            duration: 0.5,
            delay: 1.65,
            ease: easeCurve,
          }}
        >
          <Image
            src="/assets/hero-bg-mountain.png"
            alt=""
            width={1672}
            height={921}
            priority
            className={`${styles.backgroundImage} ${styles.sunImageMask}`}
          />
        </motion.div>
      )}
    </div>
  );
};
