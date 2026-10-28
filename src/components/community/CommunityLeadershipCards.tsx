"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Community.module.scss";

interface CommunityLeadershipCardsProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityLeadershipCards: React.FC<CommunityLeadershipCardsProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.leadershipStackWrapper}>
      {/* =====================================================================
          CARD 03: CORE, TCOER — Technical Secretary
          ===================================================================== */}
      <motion.article
        className={styles.leadershipCard03}
        aria-labelledby="core-role-heading"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.16,
          ease: easeCurve,
        }}
      >
        {/* Index 03 Row with Vermilion Hairline */}
        <div className={styles.cardIndexRow}>
          <span className={styles.cardIndexNum}>03</span>
          <div className={styles.cardHairlineRule} />
        </div>

        {/* Content Layout: Authentic CORE Logo (Left) + Role Details (Right) */}
        <div className={styles.coreCardBody}>
          <div className={styles.coreLogoWrapper}>
            <Image
              src="/assets/community/core-tcoer-logo.png"
              alt="CORE, TCOER (Computer Organisation of Radical Engineers) Official Logo"
              width={88}
              height={88}
              className={styles.coreLogoImg}
              priority={false}
            />
          </div>

          <div className={styles.coreDetailsCol}>
            <span className={styles.orgOverline}>CORE, TCOER</span>
            <h3 id="core-role-heading" className={styles.roleTitleVermilion}>
              Technical Secretary
            </h3>
            <p className={styles.roleDescription}>
              Contributing to technical student participation, coordination, and technical activities within the college community.
            </p>
          </div>
        </div>

        {/* CORE Activity Pills */}
        <div className={styles.pillTagGroupCore}>
          <div className={styles.pillTagRow}>
            <span className={styles.pillTag}>Technical Activities</span>
            <span className={styles.pillTag}>Student Community</span>
          </div>
          <div className={styles.pillTagRow}>
            <span className={styles.pillTag}>Coordination</span>
            <span className={styles.pillTag}>Collaboration</span>
          </div>
        </div>
      </motion.article>

      {/* =====================================================================
          CARD 04: Gemini Student Ambassador
          ===================================================================== */}
      <motion.article
        className={styles.leadershipCard04}
        aria-labelledby="gemini-role-heading"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.24,
          ease: easeCurve,
        }}
      >
        {/* Index 04 Row with Vermilion Hairline */}
        <div className={styles.cardIndexRow}>
          <span className={styles.cardIndexNum}>04</span>
          <div className={styles.cardHairlineRule} />
        </div>

        {/* Content Layout: Google Ambassador Lockup (Left) | Gemini Ambassador Details (Right) */}
        <div className={styles.geminiCardBody}>
          {/* Left Lockup: Gemini Spark + Google Student Ambassador Text */}
          <div className={styles.googleAmbassadorLockup}>
            <Image
              src="/assets/community/marks/gemini-spark.svg"
              alt=""
              width={48}
              height={48}
              className={styles.geminiSparkImg}
              priority={false}
            />
            <div className={styles.ambassadorStackedText}>
              <span className={styles.ambassadorBrandGoogle}>Google</span>
              <span className={styles.ambassadorBrandSub}>Student</span>
              <span className={styles.ambassadorBrandSub}>Ambassador</span>
            </div>
          </div>

          {/* Fine Vertical Red Hairline Separator */}
          <div className={styles.geminiVerticalDivider} aria-hidden="true" />

          {/* Right Details */}
          <div className={styles.geminiDetailsCol}>
            <h3 id="gemini-role-heading" className={styles.roleTitleVermilionSmall}>
              Gemini Student Ambassador
            </h3>
            <p className={styles.roleDescription}>
              Exploring how Gemini and AI tools can support learning, experimentation, and application development.
            </p>
          </div>
        </div>

        {/* Gemini Skill Pills */}
        <div className={styles.pillTagGroupGemini}>
          <span className={styles.pillTag}>AI</span>
          <span className={styles.pillTag}>Learning</span>
          <span className={styles.pillTag}>Exploration</span>
          <span className={styles.pillTag}>Innovation</span>
          <span className={styles.pillTag}>Community</span>
        </div>
      </motion.article>

      {/* Decorative Botanical Branch in Bottom Right Corner */}
      <div className={styles.cornerBotanicalAccent} aria-hidden="true">
        <Image
          src="/assets/community/illustrations/botanical-branch-original-transparent.png"
          alt=""
          width={180}
          height={150}
          className={styles.cornerBotanicalImg}
          priority={false}
        />
      </div>
    </div>
  );
};
