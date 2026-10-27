"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RecognitionTape } from "./RecognitionTape";
import { IdeasStamp } from "./IdeasStamp";
import styles from "./Recognition.module.scss";

interface MainHackathonCardProps {
  shouldReduceMotion: boolean | null;
}

export const MainHackathonCard: React.FC<MainHackathonCardProps> = ({
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <article className={styles.mainHackathonArticle} aria-labelledby="hackathon-2025-title">
      {/* 1. Header & Prize Display */}
      <div className={styles.awardMetaHeader}>
        <div className={styles.awardNumberRow}>
          <span className={styles.awardNumber}>01</span>
          <div className={styles.awardRule} />
        </div>

        {/* Prize Amount with Sketched Trophy */}
        <div className={styles.prizeRow}>
          <motion.h3
            className={styles.prizeAmount}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: easeCurve }}
          >
            ₹1,00,000
          </motion.h3>

          {/* Small Sketched Winner Trophy */}
          <motion.div
            className={styles.prizeTrophyWrap}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: easeCurve,
            }}
            aria-hidden="true"
          >
            <Image
              src="/assets/recognition/ornate-trophy.png"
              alt=""
              width={677}
              height={908}
              className={styles.prizeTrophyImg}
            />
          </motion.div>
        </div>

        {/* Title and Badge */}
        <div className={styles.awardTitleBlock}>
          <h4 id="hackathon-2025-title" className={styles.awardMainTitle}>
            WINNER • HACK-TECH <br />
            INNOVATION HACKATHON 2025
          </h4>

          <div className={styles.awardBadgeRow}>
            <span className={styles.teamBadge}>Team Synapse Trinity</span>
          </div>

          <p className={styles.awardDescription}>
            Recognized at Science and Technology Park (India) for our solution and innovation.
          </p>
        </div>
      </div>

      {/* 2. Photo Stage with Tilted Frame, Ideas Stamp, and Tape */}
      <div className={styles.mainPhotoStage}>
        {/* Red Distressed Ink Stamp: IDEAS / PEOPLE / IMPACT */}
        <IdeasStamp className={styles.stampPositioned} />

        {/* Large Tilted Printed Photo Frame */}
        <motion.div
          className={styles.mainChequePhotoFrame}
          initial={
            shouldReduceMotion
              ? { opacity: 1, rotate: 2.2 }
              : { opacity: 0, y: 18, rotate: 0.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 2.2 }}
          viewport={{ once: true, amount: 0.05, margin: "120px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: easeCurve,
          }}
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  y: -5,
                  rotate: 1.5,
                  boxShadow:
                    "0 22px 42px rgba(23, 21, 18, 0.18), 0 6px 14px rgba(23, 21, 18, 0.1)",
                }
          }
        >
          {/* Masking tape on top-left and bottom-right corners */}
          <RecognitionTape
            rotation={-36}
            width="62px"
            height="20px"
            className={styles.tapeTopLeft}
          />
          <RecognitionTape
            rotation={38}
            width="65px"
            height="21px"
            className={styles.tapeBottomRight}
          />

          <div className={styles.chequePhotoContainer}>
            <Image
              src="/assets/recognition/main-hackathon-cheque.jpg"
              alt="Parth Mahadik holding the ₹1,00,000 Hack-Tech Innovation Hackathon 2025 winner cheque for Team Synapse Trinity at Science and Technology Park"
              width={668}
              height={376}
              className={styles.chequePhotoImg}
              priority={false}
            />
          </div>
        </motion.div>

        {/* Handwritten Annotation below Photo */}
        <div className={styles.photoAnnotationWrap} aria-hidden="true">
          <svg
            viewBox="0 0 54 44"
            className={styles.annotationArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 6 36 Q 16 12 44 8"
              stroke="#171512"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeDasharray="2.5 1.5"
            />
            <path
              d="M 36 3 L 45 8 L 38 16"
              stroke="#171512"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.photoAnnotationText}>
            <span>Team Synapse Trinity</span>
            <span>Hack-Tech Innovation Hackathon 2025</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom-Left Reflection Note & Journey Link */}
      <div className={styles.journeyNoteRow}>
        <p className={styles.journeyHandwrittenQuote}>
          The rejections and near-misses belong to the longer story.
        </p>

        <svg
          viewBox="0 0 48 20"
          className={styles.journeyArrowSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 2 10 Q 22 4 42 10"
            stroke="#171512"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeDasharray="2.5 1.5"
          />
          <path
            d="M 36 5 L 44 10 L 36 15"
            stroke="#171512"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <a
          href="#journey"
          className={styles.journeyActionLink}
          aria-label="View the longer story and journey (jumps to journey section)"
        >
          <span>/ JOURNEY</span>
          <span className={styles.journeyLinkArrow} aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
};
