"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CommunityTape } from "./CommunityTape";
import styles from "./Community.module.scss";

interface CommunityGdgCardProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityGdgCard: React.FC<CommunityGdgCardProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.gdgSectionWrapper}>
      {/* 1. Tilted Photographic Print: GDG TCOER Team */}
      <motion.div
        className={styles.gdgPhotoColumn}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
      >
        <div className={styles.gdgPhotoFrameWrap}>
          {/* Top-Left Washi Tape */}
          <CommunityTape
            rotation={-25}
            width="68px"
            height="22px"
            className={styles.gdgTapeTopLeft}
          />

          {/* Bottom-Right Washi Tape */}
          <CommunityTape
            rotation={25}
            width="68px"
            height="22px"
            className={styles.gdgTapeBottomRight}
          />

          {/* White border photographic print */}
          <div className={styles.gdgPhotoMount}>
            <div className={styles.gdgPhotoAspect}>
              <Image
                src="/assets/community/gdg-tcoer-team.jpg"
                alt="Google Developer Group on Campus TCOER core team standing together behind the colorful GDG TCOER installation"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                className={styles.gdgPhotoImg}
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Annotation Below Photo: Built by a community */}
        <div className={styles.photoAnnotationRow} aria-hidden="true">
          <svg
            viewBox="0 0 65 35"
            className={styles.builtArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 8 14 Q 22 30 46 30"
              stroke="#171512"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M 38 24 L 48 30 L 38 36"
              stroke="#171512"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.builtText}>Built by a community.</span>
        </div>
      </motion.div>

      {/* 2. Card 02: Google Developer Group on Campus — TCOER */}
      <motion.article
        className={styles.gdgMetaColumn}
        aria-labelledby="gdg-role-heading"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.12,
          ease: easeCurve,
        }}
      >
        {/* Index 02 Row with Hairline Vermilion Rule */}
        <div className={styles.cardIndexRow}>
          <span className={styles.cardIndexNum}>02</span>
          <div className={styles.cardHairlineRule} />
        </div>

        {/* GDG Campus Lockup */}
        <div className={styles.gdgLockupWrap}>
          <Image
            src="/assets/community/marks/gdg-campus-lockup.svg"
            alt="Google Developer Group on Campus — TCOER"
            width={280}
            height={64}
            className={styles.gdgLockupImg}
            priority={false}
          />
        </div>

        {/* Role Title in Vermilion Serif */}
        <h3 id="gdg-role-heading" className={styles.roleTitleVermilion}>
          Web Development Co-Lead
        </h3>

        {/* Description */}
        <p className={styles.roleDescription}>
          Contributing to the campus developer community through web development, collaborative learning, and technical initiatives.
        </p>

        {/* Skill / Activity Pills */}
        <div className={styles.pillTagGroup}>
          <div className={styles.pillTagRow}>
            <span className={styles.pillTag}>Community</span>
            <span className={styles.pillTag}>Web Development</span>
            <span className={styles.pillTag}>Learning</span>
          </div>
          <div className={styles.pillTagRow}>
            <span className={styles.pillTag}>Collaboration</span>
            <span className={styles.pillTag}>Student Initiatives</span>
          </div>
        </div>
      </motion.article>
    </div>
  );
};
