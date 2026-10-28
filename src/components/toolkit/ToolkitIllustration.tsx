"use client";

import React from "react";
import Image from "next/image";
import { GOOGLE_CLOUD_BADGES, CREDLY_PROFILE_URL } from "./toolkitData";
import styles from "./Toolkit.module.scss";

interface ToolkitIllustrationProps {
  shouldReduceMotion: boolean | null;
}

export const ToolkitIllustration: React.FC<ToolkitIllustrationProps> = ({
  shouldReduceMotion,
}) => {
  return (
    <aside
      className={styles.rightIllustrationColumn}
      aria-label="Engineering visual anchor and verified credentials"
    >
      {/* 1. Technical Engineering Illustration: Laptop, Browser & Code Screen */}
      <div className={styles.laptopIllustrationWrapper}>
        {/* Handwritten Annotation: Turn ideas into working products */}
        <div className={styles.noteTurnIdeas} aria-hidden="true">
          <span className={styles.noteText}>Turn ideas</span>
          <span className={styles.noteText}>into working</span>
          <span className={styles.noteText}>products.</span>
          <div className={styles.noteRedUnderline} />
        </div>

        {/* Handwritten Annotation: Design / Develop / Deploy with arrow */}
        <div className={styles.noteDesignDevelop} aria-hidden="true">
          <span className={styles.noteText}>Design</span>
          <span className={styles.noteText}>Develop</span>
          <span className={styles.noteText}>Deploy</span>
          <svg
            viewBox="0 0 45 28"
            className={styles.noteCurvedArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 6 4 Q 22 10 32 24"
              stroke="#171512"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeDasharray="2.5 1.5"
            />
            <path
              d="M 26 21 L 32 25 L 35 18"
              stroke="#171512"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Main Laptop & Code Editor Vector Sketch */}
        <div className={styles.laptopSketchContainer}>
          <Image
            src="/assets/toolkit/illustrations/laptop-browser-code.svg"
            alt="Technical illustration of browser interface, code editor window, and laptop workstation"
            width={740}
            height={480}
            className={styles.laptopSketchImg}
            priority={false}
          />
        </div>

        {/* Handwritten Annotation: Clean UI / Responsive / Interactive */}
        <div className={styles.noteCleanUi} aria-hidden="true">
          <span className={styles.noteText}>Clean UI</span>
          <span className={styles.noteText}>Responsive</span>
          <span className={styles.noteText}>Interactive</span>
        </div>
      </div>

      {/* 2. System Architecture Flow Diagram */}
      <div className={styles.architectureFlowWrapper}>
        <div className={styles.architectureGrid}>
          {/* Frontend Node */}
          <div className={styles.archNode}>
            <div className={styles.archNodeIconWrap}>
              <svg viewBox="0 0 24 24" className={styles.archIconSvg} fill="none" stroke="#1A1A18" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className={styles.archNodeInfo}>
              <span className={styles.archNodeTitle}>Frontend</span>
              <span className={styles.archNodeSub}>Next.js / TypeScript</span>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className={styles.archFlowArrow} aria-hidden="true">
            <svg viewBox="0 0 40 20" fill="none" className={styles.connectorSvg}>
              <path d="M 0 10 H 34" stroke="#B5282D" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 28 6 L 35 10 L 28 14" stroke="#B5282D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Backend / API Node */}
          <div className={styles.archNode}>
            <div className={styles.archNodeIconWrap}>
              <svg viewBox="0 0 24 24" className={styles.archIconSvg} fill="none" stroke="#1A1A18" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 15h10M9 9h6" />
                <circle cx="6" cy="9" r="1" fill="#1A1A18" />
              </svg>
            </div>
            <div className={styles.archNodeInfo}>
              <span className={styles.archNodeTitle}>Backend</span>
              <span className={styles.archNodeSub}>Flask / REST API</span>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className={styles.archFlowArrow} aria-hidden="true">
            <svg viewBox="0 0 40 20" fill="none" className={styles.connectorSvg}>
              <path d="M 0 10 H 34" stroke="#B5282D" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 28 6 L 35 10 L 28 14" stroke="#B5282D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Database Node */}
          <div className={styles.archNode}>
            <div className={styles.archNodeIconWrap}>
              <svg viewBox="0 0 24 24" className={styles.archIconSvg} fill="none" stroke="#1A1A18" strokeWidth="1.8">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div className={styles.archNodeInfo}>
              <span className={styles.archNodeTitle}>Database</span>
              <span className={styles.archNodeSub}>SQLite</span>
            </div>
          </div>

          {/* Deploy Node */}
          <div className={styles.archNodeDeploy}>
            <div className={styles.archNodeIconWrap}>
              <svg viewBox="0 0 24 24" className={styles.archIconSvg} fill="none" stroke="#1A1A18" strokeWidth="1.8">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <div className={styles.archNodeInfo}>
              <span className={styles.archNodeTitle}>Deploy</span>
              <span className={styles.archNodeSub}>Vercel / Render</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Understated Verified Learning Block: Google Cloud Badges */}
      <div className={styles.verifiedLearningSection}>
        <div className={styles.verifiedHeaderRow}>
          <div className={styles.verifiedTitleGroup}>
            <span className={styles.verifiedOverline}>VERIFIED LEARNING</span>
            <h4 className={styles.verifiedHeading}>Google Cloud Skill Badges</h4>
            <span className={styles.verifiedSub}>Completed through Google Cloud (Credly)</span>
          </div>

          <a
            href={CREDLY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credlyAllBadgesLink}
            aria-label="View all verified skill badges on Credly (opens in new tab)"
          >
            <span>View all badges</span>
            <span className={styles.linkArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Badges Row */}
        <div className={styles.badgesRow}>
          {GOOGLE_CLOUD_BADGES.map((badge, idx) => (
            <a
              key={idx}
              href={badge.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeItemLink}
              title={`${badge.title} (Credly)`}
            >
              {/* Google Cloud 4-color iconic emblem */}
              <div className={styles.badgeEmblemCircle}>
                <svg viewBox="0 0 48 48" className={styles.gcpCloudSvg} fill="none">
                  {/* Google 4-color Cloud geometry */}
                  <path
                    d="M 37 20 C 37 13.9 32.1 9 26 9 C 21.1 9 17 12.2 15.6 16.7 C 14.8 16.3 13.9 16 13 16 C 8.6 16 5 19.6 5 24 C 5 28.4 8.6 32 13 32 L 36 32 C 40.4 32 44 28.4 44 24 C 44 20.1 40.8 16.8 37 16.2"
                    stroke="#4285F4"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 13 32 L 26 32"
                    stroke="#34A853"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 26 32 L 36 32"
                    stroke="#FBBC04"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <circle cx="26" cy="20.5" r="4.5" fill="#EA4335" />
                </svg>
              </div>

              <span className={styles.badgeTitleText}>{badge.title}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
