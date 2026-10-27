"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RecognitionTape } from "./RecognitionTape";
import styles from "./Recognition.module.scss";

interface RightStoriesStackProps {
  shouldReduceMotion: boolean | null;
}

export const RightStoriesStack: React.FC<RightStoriesStackProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <aside className={styles.rightStoriesContainer} aria-label="Additional Recognition and Industry Experience">
      {/* =========================================================================
          STORY 02: EFOS SKILLUP INDIA HACKATHON 2026 (₹5,000 THIRD PRIZE)
          ========================================================================= */}
      <article className={styles.compactStoryItem} aria-labelledby="story-efos-title">
        {/* Top Annotation above Story 02 */}
        <div className={styles.topAnnotationEfos} aria-hidden="true">
          <span className={styles.handwrittenNoteText}>
            Same people, different challenges, a shared pursuit to build, learn and grow.
          </span>
          <svg
            viewBox="0 0 45 32"
            className={styles.efosTopArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 6 8 Q 28 4 38 24"
              stroke="#171512"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="2.5 1.5"
            />
            <path
              d="M 30 20 L 38 25 L 42 16"
              stroke="#171512"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={styles.storyContentGrid}>
          {/* Left Column: Metadata & Descriptions */}
          <div className={styles.storyMetaCol}>
            <div className={styles.storyNumberRow}>
              <span className={styles.storyNumber}>02</span>
            </div>

            <h4 className={styles.storyBigVermilion}>₹5,000</h4>
            <div className={styles.storySubCategory}>THIRD PRIZE</div>

            <h5 id="story-efos-title" className={styles.storyTitle}>
              EFOS SkillUp India <br />
              Hackathon 2026
            </h5>

            <div className={styles.storyBadgeRow}>
              <span className={styles.teamBadge}>Team Elite Trio</span>
            </div>

            <p className={styles.storyDescription}>
              Secured 3rd prize and ₹5,000 at EFOS SkillUp India Hackathon 2026 in Pune, Maharashtra.
            </p>
          </div>

          {/* Right Column: Tilted Photo Frame & Annotation */}
          <div className={styles.storyPhotoCol}>
            <motion.div
              className={styles.storyPhotoFrame}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, rotate: -2 }
                  : { opacity: 0, scale: 0.95, rotate: 0 }
              }
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true, amount: 0.05, margin: "120px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.1, ease: easeCurve }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      rotate: -0.5,
                      boxShadow:
                        "0 18px 36px rgba(23, 21, 18, 0.16), 0 4px 10px rgba(23, 21, 18, 0.08)",
                    }
              }
            >
              <RecognitionTape
                rotation={-25}
                width="48px"
                height="16px"
                className={styles.tapeTopLeft}
              />
              <RecognitionTape
                rotation={32}
                width="50px"
                height="17px"
                className={styles.tapeBottomRight}
              />

              <div className={styles.photoContainer}>
                <Image
                  src="/assets/recognition/efos-award-photo.jpg"
                  alt="Team Elite Trio celebrating 3rd Prize at EFOS SkillUp India Hackathon 2026"
                  width={300}
                  height={300}
                  className={styles.storyImg}
                  priority={false}
                />
              </div>
            </motion.div>

            {/* Right side handwritten annotation */}
            <div className={styles.sideAnnotationWrap} aria-hidden="true">
              <svg
                viewBox="0 0 38 34"
                className={styles.sideArrowSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 32 6 Q 14 10 8 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="2.5 1.5"
                />
                <path
                  d="M 6 18 L 7 27 L 16 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.handwrittenSideText}>
                A step forward, with an amazing team.
              </span>
            </div>
          </div>
        </div>

        {/* Story Dividing Hairline Rule */}
        <div className={styles.storyDividerRule} aria-hidden="true" />
      </article>

      {/* =========================================================================
          STORY 03: DEVINE TECH SOLUTIONS HACKATHON (WINNER)
          ========================================================================= */}
      <article className={styles.compactStoryItem} aria-labelledby="story-devine-title">
        <div className={styles.storyContentGrid}>
          {/* Left Column: Metadata & Descriptions */}
          <div className={styles.storyMetaCol}>
            <div className={styles.storyNumberRow}>
              <span className={styles.storyNumber}>03</span>
            </div>

            <h4 className={styles.storyBigVermilion}>WINNER</h4>

            <h5 id="story-devine-title" className={styles.storyTitle}>
              Devine Tech Solutions <br />
              Hackathon
            </h5>

            <div className={styles.storyBadgeRow}>
              <span className={styles.teamBadge}>Team Achievement</span>
            </div>

            <p className={styles.storyDescription}>
              Secured 1st place in the hackathon organized by Devine Tech Solutions. Received goodies as recognition.
            </p>
          </div>

          {/* Right Column: Tilted Photo Frame & Annotation */}
          <div className={styles.storyPhotoCol}>
            <motion.div
              className={styles.storyPhotoFrame}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, rotate: 2 }
                  : { opacity: 0, scale: 0.95, rotate: 0 }
              }
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true, amount: 0.05, margin: "120px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2, ease: easeCurve }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      rotate: 0.5,
                      boxShadow:
                        "0 18px 36px rgba(23, 21, 18, 0.16), 0 4px 10px rgba(23, 21, 18, 0.08)",
                    }
              }
            >
              <RecognitionTape
                rotation={-28}
                width="48px"
                height="16px"
                className={styles.tapeTopLeft}
              />
              <RecognitionTape
                rotation={28}
                width="50px"
                height="17px"
                className={styles.tapeBottomRight}
              />

              <div className={styles.photoContainer}>
                <Image
                  src="/assets/recognition/devine-hackathon-photo.jpg"
                  alt="Parth Mahadik and team member holding certificates as 1st place winners at Devine Tech Solutions Hackathon"
                  width={300}
                  height={220}
                  className={styles.storyImg}
                  priority={false}
                />
              </div>
            </motion.div>

            {/* Right side handwritten annotation */}
            <div className={styles.sideAnnotationWrap} aria-hidden="true">
              <svg
                viewBox="0 0 38 34"
                className={styles.sideArrowSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 32 6 Q 14 10 8 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="2.5 1.5"
                />
                <path
                  d="M 6 18 L 7 27 L 16 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.handwrittenSideText}>
                Ideas turn better with the right people.
              </span>
            </div>
          </div>
        </div>

        {/* Story Dividing Hairline Rule */}
        <div className={styles.storyDividerRule} aria-hidden="true" />
      </article>

      {/* =========================================================================
          STORY 04: INDUSTRY EXPOSURE (TRAINING) — NOVITECH R&D PVT. LTD.
          ========================================================================= */}
      <article className={styles.compactStoryItem} aria-labelledby="story-novitech-title">
        <div className={styles.storyContentGrid}>
          {/* Left Column: Metadata & Descriptions */}
          <div className={styles.storyMetaCol}>
            <div className={styles.storyNumberRow}>
              <span className={styles.trainingEyebrow}>04 INDUSTRY EXPOSURE (TRAINING)</span>
            </div>

            <h4 id="story-novitech-title" className={styles.storyBigCharcoal}>
              FOUNDATIONS IN AI
            </h4>

            <div className={styles.companyName}>NoviTech R&D Pvt. Ltd.</div>
            <div className={styles.companyDates}>
              One-month AI internship • Oct 28 – Dec 7, 2024
            </div>

            <p className={styles.storyDescription}>
              Completed a one-month internship in Artificial Intelligence at NoviTech R&amp;D Pvt. Ltd., with hands-on learning and exposure to real-world development practices.
            </p>
          </div>

          {/* Right Column: Certificate Frame, Annotation, and Stack of Books */}
          <div className={styles.storyPhotoCol}>
            <motion.div
              className={styles.storyCertificateFrame}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, rotate: 1 }
                  : { opacity: 0, scale: 0.95, rotate: 0 }
              }
              whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
              viewport={{ once: true, amount: 0.05, margin: "120px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.3, ease: easeCurve }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      rotate: 0,
                      boxShadow:
                        "0 18px 36px rgba(23, 21, 18, 0.16), 0 4px 10px rgba(23, 21, 18, 0.08)",
                    }
              }
            >
              <RecognitionTape
                rotation={-6}
                width="56px"
                height="18px"
                className={styles.tapeTopCenter}
              />
              <RecognitionTape
                rotation={-40}
                width="44px"
                height="16px"
                className={styles.tapeBottomLeft}
              />

              <div className={styles.certificateContainer}>
                <Image
                  src="/assets/recognition/novitech-certificate.jpg"
                  alt="NoviTech R&D Pvt. Ltd. Certificate of Completion in Artificial Intelligence for Parth Mahadik"
                  width={280}
                  height={220}
                  className={styles.storyImg}
                  priority={false}
                />
              </div>
            </motion.div>

            {/* Right side handwritten annotation */}
            <div className={styles.sideAnnotationWrap} aria-hidden="true">
              <svg
                viewBox="0 0 38 34"
                className={styles.sideArrowSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 32 6 Q 14 10 8 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="2.5 1.5"
                />
                <path
                  d="M 6 18 L 7 27 L 16 26"
                  stroke="#171512"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.handwrittenSideText}>
                Learning beyond the classroom.
              </span>
            </div>

            {/* Antique Engraved Stack of Books with Spines */}
            <div className={styles.booksOrnamentWrap} aria-hidden="true">
              <Image
                src="/assets/recognition/stack-of-books.png"
                alt=""
                width={1022}
                height={986}
                className={styles.booksImg}
              />
              {/* Spines Editorial Pillars */}
              <div className={styles.booksSpinesList}>
                <span className={styles.spineWord}>BUILD</span>
                <span className={styles.spineWord}>LEARN</span>
                <span className={styles.spineWord}>PERSIST</span>
                <span className={styles.spineWord}>GROW</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </aside>
  );
};
