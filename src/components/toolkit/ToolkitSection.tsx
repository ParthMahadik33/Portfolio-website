"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { TOOLKIT_CATEGORIES, ToolkitCategory } from "./toolkitData";
import { ToolkitHeader } from "./ToolkitHeader";
import { ToolkitCategoryIndex } from "./ToolkitCategoryIndex";
import { ToolkitCategoryContent } from "./ToolkitCategoryContent";
import { ToolkitIllustration } from "./ToolkitIllustration";
import { TornEdgeBottom } from "../about/AboutTornScraps";
import styles from "./Toolkit.module.scss";

export const ToolkitSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ToolkitCategory>(
    TOOLKIT_CATEGORIES[0]
  );

  return (
    <section
      id="toolkit"
      className={styles.toolkitSection}
      aria-label="Section 05: Technical Toolkit"
    >
      {/* Anchor for alternative #skills link */}
      <span id="skills" className={styles.sectionAnchor} aria-hidden="true" />

      {/* Subtle organic paper background texture overlay */}
      <div className={styles.toolkitBgPaper} aria-hidden="true" />

      {/* Atmospheric Sahyadri Fort Panorama in Bottom-Left Background */}
      <div className={styles.fortPanoramaWrap} aria-hidden="true">
        <Image
          src="/assets/toolkit/illustrations/sahyadri-fort-mountain-panorama.png"
          alt=""
          width={1086}
          height={362}
          className={styles.fortPanoramaImg}
          priority={false}
        />

        {/* Handwritten Annotation: Ideas / Build / Iterate */}
        <div className={styles.noteIdeasBuildIterate}>
          <span className={styles.noteIterateText}>Ideas</span>
          <span className={styles.noteIterateText}>Build</span>
          <span className={styles.noteIterateText}>Iterate</span>
          <div className={styles.noteIterateRedUnderline} />
        </div>
      </div>

      <div className={styles.toolkitContainer}>
        {/* 1. Section Header: 05 / TECHNICAL TOOLKIT + Tools I use. Systems I build. */}
        <ToolkitHeader shouldReduceMotion={shouldReduceMotion} />

        {/* 2. Asymmetric Editorial Engineering Spread */}
        <div className={styles.toolkitSpreadGrid}>
          {/* Column 1: Slim Vertical Category Index */}
          <div className={styles.indexCol}>
            <ToolkitCategoryIndex
              activeCategoryId={activeCategory.id}
              onSelectCategory={setActiveCategory}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          {/* Column 2: Dynamic Category Content & Technologies */}
          <div className={styles.contentCol}>
            <ToolkitCategoryContent
              category={activeCategory}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          {/* Column 3: Engineering Visual Anchor & Verified Credentials */}
          <div className={styles.illustrationCol}>
            <ToolkitIllustration shouldReduceMotion={shouldReduceMotion} />
          </div>
        </div>
      </div>

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
