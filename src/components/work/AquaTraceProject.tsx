"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MaskingTape } from "@/components/common/MaskingTape";
import { trackEvent } from "@/lib/analytics";
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
          width={960}
          height={720}
          sizes="(max-width: 768px) 80vw, 480px"
          className={styles.sailingShipImg}
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
            onClick={() => {
              trackEvent("external_project_visit", {
                project_name: "AquaTrace",
                url: "https://aqua-trace-olive.vercel.app/",
                link_location: "project_card",
              });
              trackEvent("project_exploration", {
                project_name: "AquaTrace",
                interaction_type: "live_demo_click",
              });
            }}
            aria-label="Explore Project — AquaTrace live application (opens in new tab)"
          >
            <span>EXPLORE PROJECT</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/ParthMahadik33/Aqua-Trace"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            onClick={() =>
              trackEvent("github_repository_click", {
                repository_name: "Aqua-Trace",
                project_name: "AquaTrace",
                url: "https://github.com/ParthMahadik33/Aqua-Trace",
                link_location: "project_card",
              })
            }
            aria-label="View Source — AquaTrace on GitHub (opens in new tab)"
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
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 540px"
                className={styles.aquatraceScreenshotImg}
              />
            </div>
          </div>

          {/* 4 Corner Masking Tape Pieces */}
          <MaskingTape rotation={-38} width={42} height={14} className={styles.tapeTopLeft} />
          <MaskingTape rotation={42} width={44} height={14} className={styles.tapeTopRight} />
          <MaskingTape rotation={36} width={40} height={14} className={styles.tapeBottomLeft} />
          <MaskingTape rotation={-44} width={42} height={14} className={styles.tapeBottomRight} />
        </motion.div>
      </div>
    </article>
  );
};
