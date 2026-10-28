"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Community.module.scss";

interface CommunityLeadershipRolesProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityLeadershipRoles: React.FC<CommunityLeadershipRolesProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.leadershipColumn}>
      {/* =====================================================================
          ROLE 02: CORE, TCOER — Technical Secretary (Open Editorial Layout)
          ===================================================================== */}
      <motion.article
        className={styles.roleEntryBlock}
        aria-labelledby="core-role-title"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.12,
          ease: easeCurve,
        }}
      >
        {/* Label: 02 / CORE, TCOER with Hairline Vermilion Rule */}
        <div className={styles.roleIndexRow}>
          <span className={styles.roleIndexText}>02 / CORE, TCOER</span>
          <div className={styles.roleHairlineRule} />
        </div>

        {/* Content Row: Authentic CORE Logo (Left) + Role Details (Center) + Handwritten Note (Right) */}
        <div className={styles.roleContentRow}>
          {/* Authentic Circular CORE Logo */}
          <div className={styles.coreLogoWrapper}>
            <Image
              src="/assets/community/core-tcoer-logo.png"
              alt="CORE, TCOER (Computer Organisation of Radical Engineers) Official Emblem"
              width={76}
              height={76}
              className={styles.coreLogoImg}
              priority={false}
            />
          </div>

          {/* Role Details */}
          <div className={styles.roleDetailsCol}>
            <h3 id="core-role-title" className={styles.roleTitleVermilion}>
              Technical Secretary
            </h3>
            <p className={styles.roleDescription}>
              Contributing to technical student participation, coordination, and technical activities within the college community.
            </p>

            {/* CORE Activity Pills */}
            <div className={styles.pillTagGroup}>
              <div className={styles.pillTagRow}>
                <span className={styles.pillTag}>Technical Activities</span>
                <span className={styles.pillTag}>Student Community</span>
              </div>
              <div className={styles.pillTagRow}>
                <span className={styles.pillTag}>Coordination</span>
                <span className={styles.pillTag}>Collaboration</span>
              </div>
            </div>
          </div>

          {/* Handwritten Annotation to the Right: Students, Ideas, Impact */}
          <div className={styles.sideAnnotationText} aria-hidden="true">
            <div className={styles.studentsNoteText}>
              <span>Students</span>
              <span>Ideas</span>
              <span>Impact</span>
            </div>
            {/* Subtle ink underline/slash */}
            <svg
              viewBox="0 0 45 16"
              className={styles.noteAccentSvg}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 4 10 Q 22 14 42 6"
                stroke="#B5282D"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.article>

      {/* =====================================================================
          DELICATE HORIZONTAL HAIRLINE DIVIDER WITH CENTER VERMILION DIAMOND
          ===================================================================== */}
      <div className={styles.leadershipDivider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerDiamond}>◆</span>
        <span className={styles.dividerLine} />
      </div>

      {/* =====================================================================
          ROLE 03: GOOGLE AI — Gemini Student Ambassador (Open Editorial Layout)
          ===================================================================== */}
      <motion.article
        className={styles.roleEntryBlock}
        aria-labelledby="gemini-role-title"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.22,
          ease: easeCurve,
        }}
      >
        {/* Label: 03 / GOOGLE AI with Hairline Vermilion Rule */}
        <div className={styles.roleIndexRow}>
          <span className={styles.roleIndexText}>03 / GOOGLE AI</span>
          <div className={styles.roleHairlineRule} />
        </div>

        {/* Content Row: Gemini Spark (Left) + Details (Center) + Handwritten Note (Right) */}
        <div className={styles.roleContentRow}>
          {/* Gemini Spark Accent */}
          <div className={styles.geminiSparkWrapper}>
            <Image
              src="/assets/community/marks/gemini-spark.svg"
              alt=""
              width={52}
              height={52}
              className={styles.geminiSparkImg}
              priority={false}
            />
          </div>

          {/* Role Details */}
          <div className={styles.roleDetailsCol}>
            <h3 id="gemini-role-title" className={styles.roleTitleVermilion}>
              Gemini Student Ambassador
            </h3>
            <p className={styles.roleDescription}>
              Exploring how Gemini and AI tools can support learning, experimentation, and application development.
            </p>

            {/* Gemini Activity Pills */}
            <div className={styles.pillTagGroup}>
              <div className={styles.pillTagRow}>
                <span className={styles.pillTag}>AI</span>
                <span className={styles.pillTag}>Learning</span>
                <span className={styles.pillTag}>Exploration</span>
                <span className={styles.pillTag}>Innovation</span>
                <span className={styles.pillTag}>Community</span>
              </div>
            </div>
          </div>

          {/* Handwritten Annotation to the Right: AI for a more open future. */}
          <div className={styles.sideAnnotationText} aria-hidden="true">
            <div className={styles.aiFutureNoteText}>
              <span>AI for</span>
              <span>a more open</span>
              <span>future.</span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};
