"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WashiTape } from "./WashiTape";
import styles from "./Community.module.scss";

interface CommunityGdgFeatureProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityGdgFeature: React.FC<CommunityGdgFeatureProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div className={styles.gdgDominantColumn}>
      {/* 1. Dominant Photographic Print with Washi Tape & Left Handwritten Note */}
      <motion.div
        className={styles.photoPrintContainer}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
      >
        {/* Handwritten Annotation to the Left of Photo: People, Projects, Progress */}
        <div className={styles.photoSideAnnotation} aria-hidden="true">
          <div className={styles.peopleNoteText}>
            <span>People</span>
            <span>Projects</span>
            <span>Progress</span>
          </div>
          {/* Subtle ink underline/accent */}
          <svg
            viewBox="0 0 45 16"
            className={styles.peopleAccentSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 4 8 Q 22 14 42 6"
              stroke="#B5282D"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* The Physical Photo Mount Frame (Tilted -1.8deg) */}
        <div className={styles.photoMountFrame}>
          {/* Translucent Washi Tape on Top-Left Corner */}
          <WashiTape
            rotation={-25}
            width="78px"
            height="25px"
            patternId="gdgPhotoTape"
            className={styles.photoTapeTopLeft}
          />

          {/* Archival 16:9 Image Container */}
          <div className={styles.photoImageAspect}>
            <Image
              src="/assets/community/gdg-tcoer-team.jpg"
              alt="Google Developer Group on Campus TCOER core team standing together behind the colorful GDG TCOER installation"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              className={styles.teamPhotoImg}
              priority={false}
            />
          </div>
        </div>
      </motion.div>

      {/* 2. Editorial Role Block Directly Beneath the Photo */}
      <motion.div
        className={styles.gdgRoleBlock}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.12,
          ease: easeCurve,
        }}
      >
        {/* Label: 01 / GDG ON CAMPUS */}
        <div className={styles.roleIndexRow}>
          <span className={styles.roleIndexText}>01 / GDG ON CAMPUS</span>
          <div className={styles.roleHairlineRule} />
        </div>

        {/* Content Row: Icon + Headings & Description + Right Note */}
        <div className={styles.gdgDetailsLayout}>
          <div className={styles.gdgIconAndText}>
            {/* GDG Multicolor Chevron Bracket Symbol */}
            <div className={styles.gdgSymbolWrap}>
              <Image
                src="/assets/community/marks/gdg-symbol.svg"
                alt="Google Developer Groups"
                width={48}
                height={36}
                className={styles.gdgSymbolImg}
                priority={false}
              />
            </div>

            {/* Role Headings and Description */}
            <div className={styles.gdgTextCol}>
              <span className={styles.gdgChapterName}>
                Google Developer Group on Campus — TCOER
              </span>
              <h3 className={styles.roleTitleVermilion}>
                Web Development Co-Lead
              </h3>
              <p className={styles.roleDescription}>
                Contributing to the campus developer community through web development, collaborative learning, and technical initiatives.
              </p>
            </div>
          </div>

          {/* Handwritten Annotation to the Right: Build, Learn, Collaborate with Curved Arrow */}
          <div className={styles.buildNoteWrap} aria-hidden="true">
            <div className={styles.buildNoteText}>
              <span>Build</span>
              <span>Learn</span>
              <span>Collaborate</span>
            </div>
            {/* Hand-drawn curved arrow pointing up-left toward the photo/role */}
            <svg
              viewBox="0 0 55 45"
              className={styles.buildArrowSvg}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 44 38 C 30 36 18 25 12 10"
                stroke="#171512"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 8 18 L 12 9 L 20 14"
                stroke="#171512"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
