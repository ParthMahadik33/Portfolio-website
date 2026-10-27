"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const ArraProject: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];
  const [activeStage, setActiveStage] = useState<number>(1);

  const tags = ["Python", "AI Agents", "Simulation", "Real-time"];

  const stages = [
    {
      id: 1,
      code: "DETECT",
      label: "Hazard Identified",
      status: "Obstacle Detected at KM 124.3",
      accent: "#B5282D",
    },
    {
      id: 2,
      code: "ASSESS",
      label: "Risk Evaluation",
      status: "Speed & Deceleration Matrix",
      accent: "#D97706",
    },
    {
      id: 3,
      code: "COORDINATE",
      label: "Multi-Agent Sync",
      status: "Signal & Dispatch Alerted",
      accent: "#059669",
    },
    {
      id: 4,
      code: "RESPOND",
      label: "Protocol Execution",
      status: "Auto-Brake & Corridor Clear",
      accent: "#2563EB",
    },
  ];

  return (
    <article className={styles.secondaryProjectArticle} aria-labelledby="arra-title">
      {/* Background Vintage Railway Locomotive Engraving */}
      <div className={styles.railwayEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/railway-engraving.jpg"
          alt=""
          width={1600}
          height={900}
          className={styles.railwayEngravingImg}
          priority={false}
        />
      </div>

      {/* Project Header & Meta */}
      <div className={styles.projectMetaHeader}>
        <span className={styles.projectNumber}>03</span>
        <div className={styles.titleBadgeRow}>
          <h3 id="arra-title" className={styles.projectTitle}>
            ARRA
          </h3>
          <span className={styles.liveBadge}>LIVE</span>
        </div>
        <div className={styles.projectRule} />
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

      {/* Bespoke Railway Response Architecture Console Diagram */}
      <div className={styles.arraVisualWrap}>
        <motion.div
          className={styles.arraConsoleCard}
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, rotate: -0.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.2, ease: easeCurve }}
        >
          {/* Console Header Bar */}
          <div className={styles.railwayConsoleHeader}>
            <div className={styles.consoleStatusRow}>
              <span className={styles.livePulseDot} aria-hidden="true" />
              <span className={styles.consoleTitleText}>
                ARRA // AUTONOMOUS RAILWAY INCIDENT RESPONSE
              </span>
            </div>
            <span className={styles.consoleStatusTag}>STAGE 0{activeStage} ACTIVE</span>
          </div>

          {/* Sequential 4-Stage Response Flow */}
          <div className={styles.stageGrid}>
            {stages.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  className={`${styles.stageButton} ${isActive ? styles.stageActive : ""}`}
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  aria-pressed={isActive}
                  aria-label={`Stage ${stage.id}: ${stage.code} - ${stage.label}`}
                >
                  <div className={styles.stageTopRow}>
                    <span
                      className={styles.stagePill}
                      style={{
                        borderColor: stage.accent,
                        color: stage.accent,
                      }}
                    >
                      0{stage.id}
                    </span>
                    <span className={styles.stageCode}>{stage.code}</span>
                  </div>
                  <span className={styles.stageLabel}>{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Railway Track SVG Diagram */}
          <div className={styles.railwayDiagramContainer} aria-hidden="true">
            <svg
              viewBox="0 0 460 88"
              className={styles.railwayTrackSvg}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dual Rails */}
              <line x1="20" y1="36" x2="440" y2="36" stroke="#4A3F35" strokeWidth="2.5" />
              <line x1="20" y1="52" x2="440" y2="52" stroke="#4A3F35" strokeWidth="2.5" />

              {/* Wooden Sleepers */}
              {[40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 420].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="28"
                  x2={x}
                  y2="60"
                  stroke="#2E2620"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              ))}

              {/* Waypoint Signal Nodes corresponding to 4 stages */}
              {[
                { x: 80, id: 1, color: "#B5282D" },
                { x: 180, id: 2, color: "#D97706" },
                { x: 280, id: 3, color: "#059669" },
                { x: 380, id: 4, color: "#2563EB" },
              ].map((node) => {
                const isSelected = activeStage === node.id;
                return (
                  <g key={node.id}>
                    {/* Signal post */}
                    <line x1={node.x} y1="36" x2={node.x} y2="12" stroke="#5C4D3F" strokeWidth="1.5" />
                    {/* Outer glow ring when active */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy="12"
                        r="8"
                        stroke={node.color}
                        strokeWidth="1.2"
                        opacity="0.6"
                      />
                    )}
                    {/* Center signal lamp */}
                    <circle
                      cx={node.x}
                      cy="12"
                      r="4.5"
                      fill={node.color}
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}

              {/* Active Incident Corridor Highlight */}
              <line
                x1={80}
                y1="44"
                x2={activeStage === 1 ? 120 : activeStage === 2 ? 220 : activeStage === 3 ? 320 : 420}
                stroke="#B5282D"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Active Stage Status Ticker Output */}
          <div className={styles.stageStatusFooter}>
            <span className={styles.statusIndicatorLabel}>TELEMETRY //</span>
            <span className={styles.statusMessageText}>
              {stages[activeStage - 1].status}
            </span>
          </div>

          {/* Corner Masking Tape */}
          <ProjectTape rotation={12} width={52} height={18} className={styles.arraTape} />
        </motion.div>
      </div>
    </article>
  );
};
