"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export interface HeroPortraitProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  animateIntro = false,
  isComplete = false,
}) => {
  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <motion.div
      className={styles.portraitWrapper}
      initial={false}
      animate={
        animateIntro
          ? {
            y: [18, 0],
            scale: [0.985, 1],
            opacity: 1,
          }
          : {
            y: 0,
            scale: 1,
            opacity: 1,
          }
      }
      transition={{
        duration: animateIntro ? 0.65 : 0,
        delay: animateIntro ? 1.65 : 0,
        ease: easeCurve,
      }}
      style={{
        transform: isComplete ? "none" : undefined,
      }}
    >
      <Image
        src="/assets/hero/hero-portrait.png"
        alt="Parth Mahadik - Software Developer & Computer Engineering Student"
        width={1277}
        height={1232}
        preload
        fetchPriority="high"
        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 48vw, 620px"
        className={styles.portraitImage}
      />
    </motion.div>
  );
};
