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
      initial={
        animateIntro
          ? {
              clipPath: "inset(14% 0% 0% 0%)",
              y: 18,
              scale: 0.985,
              opacity: 0,
            }
          : {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              scale: 1,
              opacity: 1,
            }
      }
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: animateIntro ? 0.65 : 0,
        delay: animateIntro ? 2.0 : 0,
        ease: easeCurve,
      }}
      style={{
        clipPath: isComplete ? "none" : undefined,
        transform: isComplete ? "none" : undefined,
      }}
    >
      <Image
        src="/assets/hero-potrait.png"
        alt="Parth Mahadik - Software Developer & Computer Engineering Student"
        width={1277}
        height={1232}
        priority
        className={styles.portraitImage}
      />
    </motion.div>
  );
};
