"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const ArraProject: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];
  const [activeStage, setActiveStage] = useState<number>(2);

  const tags = ["Python", "AI Agents", "Simulation", "Real-time"];

  const stages = [
    {
      id: 1,
      name: "Detect",
      detail: "Obstacle identified",
      done: true,
    },
    {
      id: 2,
      name: "Assess",
      detail: "Risk evaluation",
      done: true,
    },
    {
      id: 3,
      name: "Coordinate",
      detail: "All systems",
      done: true,
    },
    {
      id: 4,
      name: "Respond",
      detail: "Dispatch resources",
      done: false,
    },
  ];

  return (
    <article className={styles.editorialSplitProject} aria-labelledby="arra-title">
      {/* Background Vintage Railway Tracks with Red Sun Engraving */}
      <div className={styles.railwayTracksEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/railway-tracks-sun.jpg"
          alt=""
          width={1600}
          height={900}
          className={styles.railwayTracksSunImg}
          priority={false}
        />
      </div>

      {/* Left Column: Project Metadata */}
      <div className={styles.secondaryInfoCol}>
        <div className={styles.projectMetaHeader}>
          <div className={styles.projectNumberRow}>
            <span className={styles.projectNumber}>03</span>
            <div className={styles.projectRule} />
          </div>
          <div className={styles.titleBadgeRow}>
            <h3 id="arra-title" className={styles.projectTitle}>
              ARRA
            </h3>
            <span className={styles.liveBadge}>LIVE</span>
          </div>
        </div>

        <p className={styles.projectDescription}>
          An autonomous railway incident-response architecture exploring
          multi-agent coordination for hazard assessment, emergency response
          workflows, and incident communication.
        </p>

        {/* Technology Tags */}
        <ul className={styles.techTagList} aria-label="Technologies used in ARRA">
          {tags.map((tag) => (
            <li key={tag} className={styles.techTagItem}>
              {tag}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className={styles.projectActionLinks}>
          <a
            href="https://arraproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="Explore ARRA live prototype (opens in new tab)"
          >
            <span>EXPLORE PROJECT</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/ParthMahadik33/A.R.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="View ARRA source code on GitHub (opens in new tab)"
          >
            <span>VIEW SOURCE</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Right Column: ARRA Tactical Map & Incident Response Console */}
      <div className={styles.secondaryVisualCol}>
        <motion.div
          className={styles.arraConsoleWrap}
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, rotate: 1 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: -1.4 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.2, ease: easeCurve }}
        >
          {/* Deckle Paper Backing */}
          <div className={styles.decklePaperMountArra}>
            <div className={styles.arraTacticalCard}>
              {/* Top Header */}
              <div className={styles.arraHeaderBar}>
                <div className={styles.arraTitleGroup}>
                  <span className={styles.arraLogoIcon}>✦</span>
                  <span className={styles.arraHeaderTitle}>A.R.R.A.</span>
                  <span className={styles.arraHeaderSub}>AUTONOMOUS RESPONSE UNIT</span>
                </div>
                <div className={styles.arraLiveIndicator}>
                  <span className={styles.greenRadarPulse} />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Main Content: Map Visual + Stage Checklist */}
              <div className={styles.arraConsoleBody}>
                {/* Left/Main: Red Alert Box + Railway Network Map */}
                <div className={styles.arraMapSection}>
                  {/* Red Alert Banner */}
                  <div className={styles.incidentAlertBanner}>
                    <div className={styles.alertIconCircle}>!</div>
                    <div className={styles.alertTextWrap}>
                      <span className={styles.alertHeading}>Track Obstruction Detected</span>
                      <span className={styles.alertSub}>Location: KM 124.8 • Section 4</span>
                    </div>
                    <span className={styles.priorityPill}>High Priority</span>
                  </div>

                  {/* SVG Railway Track Network Map */}
                  <div className={styles.trackNetworkMap}>
                    <svg viewBox="0 0 280 160" className={styles.networkMapSvg} fill="none">
                      {/* Grid background */}
                      <defs>
                        <pattern id="radarGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8"/>
                        </pattern>
                      </defs>
                      <rect width="280" height="160" fill="url(#radarGrid)" />

                      {/* Main Track Routes */}
                      <path
                        d="M 20 130 Q 80 110 130 95 T 260 40"
                        stroke="rgba(0, 229, 255, 0.45)"
                        strokeWidth="1.8"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M 40 25 Q 90 60 130 95 T 210 145"
                        stroke="rgba(0, 229, 255, 0.35)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 130 95 L 80 145"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1.2"
                      />

                      {/* Station Nodes */}
                      <circle cx="40" cy="25" r="3.5" fill="#38BDF8" />
                      <circle cx="80" cy="110" r="3" fill="#38BDF8" />
                      <circle cx="210" cy="145" r="3.5" fill="#38BDF8" />
                      <circle cx="260" cy="40" r="3" fill="#38BDF8" />

                      {/* Active Hazard Location with Pulsing Rings (KM 124.8) */}
                      <circle cx="130" cy="95" r="16" stroke="#B5282D" strokeWidth="1" opacity="0.4">
                        <animate attributeName="r" values="8;22" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="130" cy="95" r="6" fill="#B5282D" />
                      <circle cx="130" cy="95" r="2.5" fill="#FFFFFF" />

                      {/* Moving Train Marker on track */}
                      <g transform="translate(68, 114)">
                        <rect x="-6" y="-3.5" width="12" height="7" rx="1.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="0.8" />
                        <text x="8" y="2" fill="#10B981" fontSize="6.5" fontFamily="monospace" fontWeight="700">T-3108</text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Right: Sequential Stage Checklist */}
                <div className={styles.stageChecklistCol}>
                  <div className={styles.checklistTitle}>RESPONSE STAGES</div>
                  {stages.map((stage) => {
                    const isSelected = activeStage === stage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        className={`${styles.stageCheckItem} ${isSelected ? styles.stageCheckSelected : ""}`}
                        onClick={() => setActiveStage(stage.id)}
                      >
                        <span className={`${styles.checkCircle} ${stage.done ? styles.checkDone : ""}`}>
                          {stage.done ? "✓" : "○"}
                        </span>
                        <div className={styles.stageTextWrap}>
                          <span className={styles.stageName}>{stage.name}</span>
                          <span className={styles.stageDetail}>{stage.detail}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Masking Tape */}
          <ProjectTape rotation={-10} width={48} height={16} className={styles.arraTapeTop} />
          <ProjectTape rotation={14} width={44} height={15} className={styles.arraTapeBottom} />
        </motion.div>
      </div>
    </article>
  );
};
