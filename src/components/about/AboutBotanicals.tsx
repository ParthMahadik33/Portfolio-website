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
          width={960}
          height={319}
          sizes="(max-width: 768px) 160px, 240px"
          className={styles.botanicalCropImg}
        />
      </div>
    </div>
  );
};
