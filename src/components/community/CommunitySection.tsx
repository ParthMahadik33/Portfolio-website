"use client";

import React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { CommunityHeader } from "./CommunityHeader";
import { CommunityVideoFeature } from "./CommunityVideoFeature";
import { CommunityGdgFeature } from "./CommunityGdgFeature";
import { CommunityLeadershipRoles } from "./CommunityLeadershipRoles";
import { TornEdgeBottom } from "../about/AboutTornScraps";
import styles from "./Community.module.scss";

export const CommunitySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="community"
      className={styles.communitySection}
      aria-label="Community & Leadership"
    >
      {/* Anchor for alternative #leadership link */}
      <span id="leadership" className={styles.sectionAnchor} aria-hidden="true" />

      {/* Decorative Campus Engraving Line Art Background (Middle & Top) */}
      <div className={styles.campusEngravingBackground} aria-hidden="true">
        <Image
          src="/assets/community/backgrounds/campus-engraving-lineart.png"
          alt=""
          width={1400}
          height={467}
          sizes="(max-width: 768px) 95vw, 1140px"
          className={styles.campusEngravingImg}
        />
      </div>


      {/* Decorative Botanical Branch at Bottom Right with Vermilion Blossoms */}
      <div className={styles.botanicalBottomRight} aria-hidden="true">
        <Image
          src="/assets/community/illustrations/botanical-branch-original-transparent.png"
          alt=""
          width={240}
          height={200}
          sizes="(max-width: 768px) 140px, 240px"
          className={styles.botanicalImg}
        />
      </div>

      {/* Main Editorial Canvas */}
      <div className={styles.communityContainer}>
        {/* Upper Region: Header & Sahakarya (Left) | Compact Taped Video (Right) */}
        <div className={styles.editorialTopArea}>
          <CommunityHeader shouldReduceMotion={shouldReduceMotion} />
          <CommunityVideoFeature shouldReduceMotion={shouldReduceMotion} />
        </div>

        {/* Lower Region: Dominant Taped GDG Photo & Role (Left) | Open Leadership Roles (Right) */}
        <div className={styles.editorialBottomArea}>
          <CommunityGdgFeature shouldReduceMotion={shouldReduceMotion} />
          <CommunityLeadershipRoles shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>

      {/* Faint ground contour line at bottom */}
      <div className={styles.groundLineEngraving} aria-hidden="true" />

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
