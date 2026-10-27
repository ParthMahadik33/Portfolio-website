"use client";

import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

interface AboutBotanicalsProps {
  className?: string;
}

export const AboutBotanicals: React.FC<AboutBotanicalsProps> = ({
  className = "",
}) => {
  return (
    <div className={`${styles.botanicalsContainer} ${className}`} aria-hidden="true">
      <div className={styles.botanicalCropWindow}>
        <Image
          src="/assets/about/about-botanical-grass-border.png"
          alt=""
          width={2172}
          height={721}
          className={styles.botanicalCropImg}
          priority={false}
        />
      </div>
    </div>
  );
};
