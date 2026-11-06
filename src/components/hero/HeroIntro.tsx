"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./Hero.module.scss";

export interface HeroIntroProps {
  animateIntro?: boolean;
  isComplete?: boolean;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  animateIntro = false,
  isComplete = false,
}) => {
  return (
    <div className={styles.introContainer}>
      {/* SCENE 06 (2.55s - 2.85s): Role labels fade in */}
      <div
        className={`${styles.roleGroup} ${animateIntro ? styles.animateRoleGroup : ""}`}
      >
        <div className={styles.rolePrimary}>SOFTWARE DEVELOPER</div>
        <div className={styles.roleSecondary}>COMPUTER ENGINEERING STUDENT</div>
      </div>

      {/* SCENE 05 (2.00s - 2.55s): Oversized Bodoni headline with overflow masks */}
      <h1 className={styles.headline}>
        <span
          className={styles.nameRow}
          style={{ overflow: isComplete ? "visible" : "hidden" }}
        >
          <span
            className={`${styles.nameCharcoal} ${animateIntro ? styles.animateNameCharcoal : ""}`}
            style={{
              transform: isComplete ? "none" : undefined,
            }}
          >
            PARTH
          </span>
        </span>
        <span
          className={styles.nameRow}
          style={{ overflow: isComplete ? "visible" : "hidden" }}
        >
          <span
            className={`${styles.nameVermilion} ${animateIntro ? styles.animateNameVermilion : ""}`}
            style={{
              transform: isComplete ? "none" : undefined,
            }}
          >
            MAHADIK
          </span>
        </span>
      </h1>

      {/* SCENE 06 (2.65s - 2.95s): Description / Tagline */}
      <p
        className={`${styles.description} ${animateIntro ? styles.animateDescription : ""}`}
        style={{
          transform: isComplete ? "none" : undefined,
        }}
      >
        I build software that solves
        <br />
        real problems.”
      </p>

      {/* SCENE 06 (2.70s - 3.00s): Action Buttons */}
      <div
        className={`${styles.actionButtons} ${animateIntro ? styles.animateActions : ""}`}
        style={{
          transform: isComplete ? "none" : undefined,
        }}
      >
        <a
          href="#journey"
          className={styles.btnPrimary}
          onClick={() => {
            trackEvent("section_navigation", {
              section_name: "journey",
              navigation_source: "hero_primary_cta",
              destination_anchor: "#journey",
            });
            trackEvent("journey_cta_click", {
              destination: "#journey",
              source: "hero_primary_cta",
            });
          }}
          aria-label="Explore My Journey — Scroll to about and journey section"
        >
          <span>EXPLORE MY JOURNEY</span>
          <svg
            className={styles.btnArrow}
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M 3 8 H 13 M 9 4 L 13 8 L 9 12" />
          </svg>
        </a>

        <a
          href="#work"
          className={styles.btnSecondary}
          onClick={() =>
            trackEvent("section_navigation", {
              section_name: "work",
              navigation_source: "hero_secondary_cta",
              destination_anchor: "#work",
            })
          }
          aria-label="View Projects — Scroll to selected engineering work"
        >
          <span className={styles.playIconContainer} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#171512">
              <circle cx="12" cy="12" r="11" fill="#171512" />
              <polygon points="10,7.5 17,12 10,16.5" fill="#F4EBDD" />
            </svg>
          </span>
          <span>VIEW PROJECTS</span>
        </a>
      </div>
    </div>
  );
};
