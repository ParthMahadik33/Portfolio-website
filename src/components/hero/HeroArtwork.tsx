"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export interface HeroArtworkProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroArtwork: React.FC<HeroArtworkProps> = ({
  animateIntro = false,
}) => {
  return (
    <div className={styles.artworkContainer} aria-hidden="true">
      {/* SCENE 04 (1.50s - 2.15s): Sahyadri Mountain Landscape & Vermilion Sun */}
      <div
        className={`${styles.artworkWrapper} ${animateIntro ? styles.animateArtwork : ""}`}
      >
        <Image
          src="/assets/hero/hero-bg-mountain.png"
          alt="Sahyadri mountain landscape, historic fort walls, and vermilion sun"
          width={1672}
          height={921}
          preload
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
};
