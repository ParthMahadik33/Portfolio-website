"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const AquaTraceProject: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  const tags = ["Next.js", "TypeScript", "Python", "Flask", "Leaflet", "PyTorch"];

  return (
    <article className={styles.secondaryProjectArticle} aria-labelledby="aquatrace-title">
      {/* Background Vintage Cargo Ship Engraving */}
      <div className={styles.shipEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/cargoship-engraving.jpg"
          alt=""
          width={1600}
          height={900}
          className={styles.shipEngravingImg}
          priority={false}
        />
      </div>

      {/* Project Header & Meta */}
      <div className={styles.projectMetaHeader}>
        <span className={styles.projectNumber}>02</span>
        <div className={styles.titleBadgeRow}>
          <h3 id="aquatrace-title" className={styles.projectTitle}>
            AquaTrace
          </h3>
          <span className={styles.liveBadge}>LIVE</span>
        </div>
        <div className={styles.projectRule} />
      </div>

      <p className={styles.projectDescription}>
        A maritime intelligence and oil-spill investigation platform combining
        satellite-data workflows, vessel-track correlation, geospatial analysis,
        and spill-dispersion simulations.
      </p>

      {/* Technology Tags */}
      <ul className={styles.techTagList} aria-label="Technologies used in AquaTrace">
        {tags.map((tag) => (
          <li key={tag} className={styles.techTagItem}>
            {tag}
          </li>
        ))}
      </ul>

      {/* Action Links */}
      <div className={styles.projectActionLinks}>
        <a
          href="https://aqua-trace-olive.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.editorialActionLink}
          aria-label="Explore AquaTrace live application (opens in new tab)"
        >
          <span>EXPLORE PROJECT</span>
          <span className={styles.linkArrow} aria-hidden="true">→</span>
        </a>
        <a
          href="https://github.com/ParthMahadik33/Aqua-Trace"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.editorialActionLink}
          aria-label="View AquaTrace source code on GitHub (opens in new tab)"
        >
          <span>VIEW SOURCE</span>
          <span className={styles.linkArrow} aria-hidden="true">→</span>
        </a>
      </div>

      {/* Real Screenshot Collage with Restrained Maritime Route Annotation */}
      <div className={styles.aquatraceVisualWrap}>
        <motion.div
          className={styles.aquatraceCard}
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, rotate: 0.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.15, ease: easeCurve }}
        >
          <div className={styles.screenshotFrame}>
            <Image
              src="/assets/projects/aquatrace-landing-real.webp"
              alt="AquaTrace maritime oil spill observation and vessel intelligence interface"
              width={960}
              height={485}
              className={styles.screenshotImg}
              priority={false}
            />

            {/* Restrained SVG Vessel Track and Coordinates Overlay */}
            <div className={styles.nauticalRouteOverlay} aria-hidden="true">
              <svg viewBox="0 0 400 200" className={styles.nauticalRouteSvg} fill="none">
                {/* AIS Vessel Trajectory Line */}
                <path
                  d="M 40 160 Q 140 120 220 135 T 360 70"
                  stroke="rgba(0, 220, 255, 0.65)"
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                />
                {/* Drift Dispersion Ellipse */}
                <ellipse
                  cx="220"
                  cy="135"
                  rx="35"
                  ry="18"
                  stroke="rgba(255, 80, 70, 0.75)"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  fill="rgba(255, 50, 40, 0.08)"
                />
                {/* Waypoint Beacon Pulse */}
                <circle cx="220" cy="135" r="3.5" fill="#B5282D" />
                <circle cx="360" cy="70" r="3" fill="#00D4FF" />
                {/* Tactical Coordinate Tag */}
                <rect
                  x="230"
                  y="120"
                  width="72"
                  height="16"
                  rx="2"
                  fill="rgba(10, 20, 30, 0.82)"
                  stroke="rgba(0, 220, 255, 0.4)"
                  strokeWidth="0.8"
                />
                <text
                  x="234"
                  y="131"
                  fill="rgba(0, 220, 255, 0.95)"
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  AIS 312° // 12.4k
                </text>
              </svg>
            </div>
          </div>

          {/* Corner Masking Tape */}
          <ProjectTape rotation={-14} width={54} height={18} className={styles.aquatraceTape} />
        </motion.div>
      </div>
    </article>
  );
};
