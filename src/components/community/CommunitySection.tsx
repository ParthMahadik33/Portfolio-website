"use client";

import React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { CommunityHeader } from "./CommunityHeader";
import { AgroRentPresentationFeature } from "./AgroRentPresentationFeature";
import { CommunityGdgCard } from "./CommunityGdgCard";
import { CommunityLeadershipCards } from "./CommunityLeadershipCards";
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

      {/* Subtle organic paper background texture */}
      <div className={styles.communityBgPaper} aria-hidden="true" />

      {/* Decorative Campus Engraving Line Art Background */}
      <div className={styles.campusEngravingLineart} aria-hidden="true">
        <Image
          src="/assets/community/backgrounds/campus-engraving-lineart.png"
          alt=""
          width={1300}
          height={434}
          className={styles.campusEngravingImg}
          priority={false}
        />
      </div>

      {/* Decorative Botanical Branch at Top Right */}
      <div className={styles.botanicalTopRight} aria-hidden="true">
        <Image
          src="/assets/community/illustrations/botanical-branch-ink.png"
          alt=""
          width={220}
          height={184}
          className={styles.botanicalImg}
          priority={false}
        />
      </div>

      <div className={styles.communityContainer}>
        {/* Top Editorial Row: Left is Header + Sahakarya + Copy + Annotation; Right is Presentation Video */}
        <div className={styles.communityTopRow}>
          <CommunityHeader shouldReduceMotion={shouldReduceMotion} />
          <AgroRentPresentationFeature shouldReduceMotion={shouldReduceMotion} />
        </div>

        {/* Bottom Editorial Row: Left is GDG Photo Print & Card 02; Right is Card 03 & Card 04 */}
        <div className={styles.communityBottomRow}>
          <CommunityGdgCard shouldReduceMotion={shouldReduceMotion} />
          <CommunityLeadershipCards shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>

      {/* Continuous Torn Paper Edge along bottom */}
      <TornEdgeBottom />
    </section>
  );
};
