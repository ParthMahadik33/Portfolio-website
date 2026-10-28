"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import styles from "./Recognition.module.scss";

interface RecognitionOrnamentsProps {
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

export const RecognitionOrnaments: React.FC<RecognitionOrnamentsProps> = ({
  scrollYProgress,
  shouldReduceMotion,
}) => {
  // Gentle 6-12px parallax drift on scroll as requested in motion plan
  const parallaxYSlow = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const parallaxYMedium = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const parallaxYGentle = useTransform(scrollYProgress, [0, 1], [0, -6]);

  const ySlow = shouldReduceMotion ? 0 : parallaxYSlow;
  const yMed = shouldReduceMotion ? 0 : parallaxYMedium;
  const yGentle = shouldReduceMotion ? 0 : parallaxYGentle;

  return (
    <div className={styles.ornamentsContainer} aria-hidden="true">
      {/* 1. Botanical Branch at Top Right */}
      <motion.div
        className={styles.ornamentBotanicalBranch}
        style={{ y: yGentle }}
      >
        <Image
          src="/assets/recognition/botanical-branch.png"
          alt=""
          width={623}
          height={1002}
          className={styles.ornamentImg}
          priority={false}
        />
      </motion.div>

      {/* 2. City Skyline behind Main Award */}
      <motion.div
        className={styles.ornamentCitySkyline}
        style={{ y: ySlow }}
      >
        <Image
          src="/assets/recognition/city-skyline.png"
          alt=""
          width={1323}
          height={461}
          className={styles.ornamentImg}
          priority={false}
        />
      </motion.div>

      {/* 3. Domed Capitol Building around center */}
      <motion.div
        className={styles.ornamentDomedBuilding}
        style={{ y: yMed }}
      >
        <Image
          src="/assets/recognition/domed-building.png"
          alt=""
          width={959}
          height={832}
          className={styles.ornamentImg}
          priority={false}
        />
      </motion.div>
    </div>
  );
};
