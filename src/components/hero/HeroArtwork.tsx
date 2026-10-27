"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export const HeroArtwork: React.FC = () => {
  return (
    <div className={styles.artworkWrapper} aria-hidden="true">
      <Image
        src="/assets/hero-bg-mountain.png"
        alt="Sahyadri mountain landscape, historic fort walls, and vermilion sun"
        width={1672}
        height={921}
        priority
        className={styles.backgroundImage}
      />
    </div>
  );
};
