"use client";

import React from "react";
import { AboutEditorialContent } from "./AboutEditorialContent";
import { AboutCollage } from "./AboutCollage";
import { TornEdgeBottom } from "./AboutTornScraps";
import styles from "./About.module.scss";

export const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about" aria-label="About the Builder">
      {/* Background paper texture & watermark */}
      <div className={styles.aboutBgPaper} />

      <div className={styles.aboutContainer}>
        {/* Left Editorial Text Column */}
        <AboutEditorialContent />

        {/* Right Art-Directed Photo Collage */}
        <AboutCollage />
      </div>

      {/* Continuous Torn Paper Edge along the bottom */}
      <TornEdgeBottom />
    </section>
  );
};
