"use client";

import React, { useRef } from "react";
import { useScroll, useReducedMotion } from "framer-motion";
import { RecognitionHeader } from "./RecognitionHeader";
import { MainHackathonCard } from "./MainHackathonCard";
import { RightStoriesStack } from "./RightStoriesStack";
import { RecognitionOrnaments } from "./RecognitionOrnaments";
import { TornEdgeBottom } from "../about/AboutTornScraps";
import styles from "./Recognition.module.scss";

export const RecognitionSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for subtle parallax on engraved ornaments (6-12px)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className={styles.recognitionSection}
      aria-label="Recognition and Experience"
    >
      {/* Anchor for alternative #recognition link */}
      <span id="recognition" className={styles.sectionAnchor} aria-hidden="true" />

      {/* Engraved Vintage Ornaments (Skyline, Domed Capitol, Botanicals) */}
      <RecognitionOrnaments
        scrollYProgress={scrollYProgress}
        shouldReduceMotion={shouldReduceMotion}
      />

      <div className={styles.recognitionContainer}>
        {/* Section Header with Eyebrow, Two-line Serif Headline, and Sanskrit Reflection */}
        <RecognitionHeader shouldReduceMotion={shouldReduceMotion} />

        {/* Asymmetric Editorial Layout: Left ~55% Flagship Hackathon, Right ~45% Stacked Stories */}
        <div className={styles.asymmetricGrid}>
          {/* Left Column: Flagship Hackathon 2025 Win */}
          <div className={styles.dominantCol}>
            <MainHackathonCard shouldReduceMotion={shouldReduceMotion} />
          </div>

          {/* Right Column: Stacked Compact Stories */}
          <div className={styles.supportingCol}>
            <RightStoriesStack shouldReduceMotion={shouldReduceMotion} />
          </div>
        </div>
      </div>

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
