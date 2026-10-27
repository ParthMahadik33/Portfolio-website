"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const AgroRentProject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isSpread, setIsSpread] = useState(false);

  const toggleSpread = () => {
    setIsSpread((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSpread();
    }
  };

  // Scroll-based Stack Spread parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scrollSpreadX = useTransform(scrollYProgress, [0.1, 0.9], [0, -32]);
  const scrollSpreadY = useTransform(scrollYProgress, [0.1, 0.9], [0, -12]);
  const scrollRotate = useTransform(scrollYProgress, [0.1, 0.9], [2, 5.5]);

  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];
  const tags = ["Python", "Flask", "Gemini API", "Twilio", "Razorpay"];

  return (
    <article
      ref={containerRef}
      className={styles.flagshipArticle}
      aria-labelledby="agrorent-title"
    >
      {/* Background Vintage Tractor Engraving */}
      <div className={styles.tractorEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/tractor-engraving.jpg"
          alt=""
          width={1600}
          height={900}
          className={styles.tractorEngravingImg}
          priority={false}
        />
      </div>

      {/* Left Column: Project Editorial Metadata */}
      <div className={styles.projectInfoColumn}>
        <div className={styles.projectMetaHeader}>
          <span className={styles.projectNumber}>01</span>
          <div className={styles.titleBadgeRow}>
            <h3 id="agrorent-title" className={styles.projectTitle}>
              AgroRent
            </h3>
            <span className={styles.liveBadge}>LIVE</span>
          </div>
          <div className={styles.projectRule} />
        </div>

        <p className={styles.projectDescription}>
          An AI-assisted farm machinery rental marketplace designed to connect
          farmers with equipment owners through a more accessible, transparent
          rental experience.
        </p>

        {/* Technology Tags */}
        <ul className={styles.techTagList} aria-label="Technologies used in AgroRent">
          {tags.map((tag) => (
            <li key={tag} className={styles.techTagItem}>
              {tag}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className={styles.projectActionLinks}>
          <a
            href="https://agrorent-v3.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="Explore AgroRent live application (opens in new tab)"
          >
            <span>EXPLORE PROJECT</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/ParthMahadik33/AgroRent-v3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="View AgroRent source code on GitHub (opens in new tab)"
          >
            <span>VIEW SOURCE</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Right Column: Tactile Stack Spread Screenshot Collage */}
      <div
        className={`${styles.stackSpreadContainer} ${isSpread ? styles.isSpread : ""}`}
        onClick={toggleSpread}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="AgroRent screenshot stack. Tap or hover to spread screenshots."
      >
        {/* Handwritten Annotation 1: AI condition checks */}
        <div className={styles.annotationTopLeft} aria-hidden="true">
          <span className={styles.handwrittenNote}>
            AI-assisted equipment condition checks
          </span>
          <svg
            viewBox="0 0 65 45"
            className={styles.annotationArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 5 10 Q 35 8 50 32"
              stroke="#171512"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="2 1"
            />
            <path
              d="M 43 31 L 51 34 L 54 26"
              stroke="#171512"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Handwritten Annotation 2: Rental marketplace */}
        <div className={styles.annotationTopRight} aria-hidden="true">
          <span className={styles.handwrittenNote}>
            Rental marketplace for farmers
          </span>
          <svg
            viewBox="0 0 65 45"
            className={styles.annotationArrowSvgRight}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 55 8 Q 28 12 14 34"
              stroke="#171512"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="2 1"
            />
            <path
              d="M 21 34 L 13 36 L 11 28"
              stroke="#171512"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Layer 3 (Background paper scrap): Warm Parchment Accent */}
        <div className={styles.supplementalPaperSheet} aria-hidden="true">
          <ProjectTape rotation={-14} width={50} height={16} className={styles.paperTape} />
        </div>

        {/* Layer 2 (Secondary Rear Screenshot): Equipment Listings Real */}
        <motion.div
          className={styles.rearListingsCard}
          style={
            shouldReduceMotion
              ? {}
              : {
                  x: scrollSpreadX,
                  y: scrollSpreadY,
                  rotate: scrollRotate,
                }
          }
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, x: 20, rotate: 2 }
          }
          whileInView={{ opacity: 1, x: 0, rotate: 4.5 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: 0.2,
            ease: easeCurve,
          }}
        >
          <div className={styles.screenshotFrame}>
            <Image
              src="/assets/projects/agrorent-listings-real.webp"
              alt="AgroRent equipment listings page showing machinery inventory"
              width={960}
              height={402}
              className={styles.screenshotImg}
              priority={false}
            />
          </div>
          <ProjectTape
            rotation={-8}
            width={48}
            height={16}
            className={styles.listingsTapeTop}
          />
        </motion.div>

        {/* Layer 1 (Foreground Focal Screenshot): Landing Real */}
        <motion.div
          className={styles.focalLandingCard}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30, rotate: -3.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: 0.1,
            ease: easeCurve,
          }}
        >
          <div className={styles.screenshotFrame}>
            <Image
              src="/assets/projects/agrorent-landing-real.webp"
              alt="AgroRent homepage showing farm machinery rental interface"
              width={960}
              height={485}
              className={styles.screenshotImg}
              priority={false}
            />
          </div>
          <ProjectTape
            rotation={18}
            width={62}
            height={20}
            className={styles.landingTapeTopRight}
          />
        </motion.div>

        {/* Circular Stamp: Supporting Farmers Through Technology */}
        <div className={styles.farmerSealStamp} aria-hidden="true">
          <svg viewBox="0 0 140 140" className={styles.farmerSealSvg}>
            <circle
              cx="70"
              cy="70"
              r="64"
              stroke="#B5282D"
              strokeWidth="1.4"
              strokeDasharray="180 1.5 90 1"
              opacity="0.85"
              fill="none"
            />
            <circle
              cx="70"
              cy="70"
              r="58"
              stroke="#B5282D"
              strokeWidth="0.8"
              opacity="0.6"
              fill="none"
            />
            <defs>
              <path id="sealTopArc" d="M 18,70 A 52,52 0 0,1 122,70" fill="none" />
              <path id="sealBottomArc" d="M 22,70 A 48,48 0 0,0 118,70" fill="none" />
            </defs>
            <text
              fill="#B5282D"
              fontSize="7.8"
              fontFamily="var(--font-condensed)"
              fontWeight="700"
              letterSpacing="0.2em"
              opacity="0.9"
            >
              <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
                SUPPORTING FARMERS
              </textPath>
            </text>
            <text
              fill="#B5282D"
              fontSize="7.8"
              fontFamily="var(--font-condensed)"
              fontWeight="700"
              letterSpacing="0.2em"
              opacity="0.9"
            >
              <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
                THROUGH TECHNOLOGY
              </textPath>
            </text>
            {/* Center leaf motif */}
            <path
              d="M 70 52 C 60 62 60 76 70 86 C 80 76 80 62 70 52 Z"
              fill="none"
              stroke="#B5282D"
              strokeWidth="1.2"
              opacity="0.75"
            />
            <path d="M 70 56 L 70 82" stroke="#B5282D" strokeWidth="0.9" opacity="0.65" />
          </svg>
        </div>
      </div>
    </article>
  );
};
