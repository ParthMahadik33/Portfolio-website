"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const AquaTraceProject: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  const tags = ["Next.js", "TypeScript", "Python", "Flask", "Leaflet"];

  return (
    <article className={styles.editorialSplitProject} aria-labelledby="aquatrace-title">
      {/* Background Vintage Sailing Ship Engraving */}
      <div className={styles.sailingShipEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/sailing-ship-etching.jpg"
          alt=""
          width={1200}
          height={900}
          className={styles.sailingShipImg}
          priority={false}
        />
      </div>

      {/* Left Column: Project Metadata */}
      <div className={styles.secondaryInfoCol}>
        <div className={styles.projectMetaHeader}>
          <div className={styles.projectNumberRow}>
            <span className={styles.projectNumber}>02</span>
            <div className={styles.projectRule} />
          </div>
          <div className={styles.titleBadgeRow}>
            <h3 id="aquatrace-title" className={styles.projectTitle}>
              AquaTrace
            </h3>
            <span className={styles.liveBadge}>LIVE</span>
          </div>
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
      </div>

      {/* Right Column: Framed Maritime UI with 4-Corner Masking Tape */}
      <div className={styles.secondaryVisualCol}>
        <motion.div
          className={styles.aquatraceFrameWrap}
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, rotate: -0.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 1.2 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.15, ease: easeCurve }}
        >
          {/* Deckle Paper Mount & Screenshot */}
          <div className={styles.decklePaperMount}>
            <div className={styles.screenshotFrameDark}>
              <Image
                src="/assets/projects/aquatrace-landing-real.webp"
                alt="AquaTrace maritime oil spill observation and vessel intelligence interface"
                width={880}
                height={500}
                className={styles.aquatraceScreenshotImg}
                priority={false}
              />
            </div>
          </div>

          {/* 4 Corner Masking Tape Pieces */}
          <ProjectTape rotation={-38} width={42} height={14} className={styles.tapeTopLeft} />
          <ProjectTape rotation={42} width={44} height={14} className={styles.tapeTopRight} />
          <ProjectTape rotation={36} width={40} height={14} className={styles.tapeBottomLeft} />
          <ProjectTape rotation={-44} width={42} height={14} className={styles.tapeBottomRight} />
        </motion.div>
      </div>
    </article>
  );
};
