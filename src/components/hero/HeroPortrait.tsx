"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export interface HeroPortraitProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  animateIntro = false,
}) => {
  return (
    <div
      className={`${styles.portraitWrapper} ${animateIntro ? styles.animatePortrait : ""}`}
    >
      <Image
        src="/assets/hero-potrait.png"
        alt="Parth Mahadik - Software Developer & Computer Engineering Student"
        width={1277}
        height={1232}
        loading="eager"
        sizes="(max-width: 768px) 220px, (max-width: 1200px) 45vw, 560px"
        className={styles.portraitImage}
      />
    </div>
  );
};
