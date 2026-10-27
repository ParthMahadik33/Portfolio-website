"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export const HeroPortrait: React.FC = () => {
  return (
    <div className={styles.portraitWrapper}>
      <Image
        src="/assets/hero-potrait.png"
        alt="Parth Mahadik - Software Developer & Computer Engineering Student"
        width={1277}
        height={1232}
        priority
        className={styles.portraitImage}
      />
    </div>
  );
};
