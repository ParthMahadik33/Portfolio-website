import React from "react";
import styles from "./About.module.scss";

export const KraftTornStrip: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = "", style = {} }) => {
  return (
    <div
      className={`${styles.kraftTornStrip} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 45 420"
        preserveAspectRatio="none"
        className={styles.kraftTornSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="kraftTearFilter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="3"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.82   0 0 0 0 0.73   0 0 0 0 0.60  0 0 0 0.28 0"
              in="noise"
              result="coloredNoise"
            />
            <feBlend mode="multiply" in="SourceGraphic" in2="coloredNoise" />
          </filter>
        </defs>

        {/* Soft paper cast shadow */}
        <path
          d="M 6 0 
             L 10 30 L 4 65 L 9 105 L 3 145 L 11 190 L 5 230 
             L 10 270 L 4 315 L 11 360 L 5 400 L 8 420 
             L 45 420 L 45 0 Z"
          fill="rgba(23, 21, 18, 0.08)"
          transform="translate(-2, 2)"
        />

        {/* Torn kraft paper body */}
        <path
          d="M 8 0 
             Q 11 15 9 30 Q 3 48 4 65 Q 11 85 9 105 
             Q 2 125 3 145 Q 13 168 11 190 Q 3 210 5 230 
             Q 12 250 10 270 Q 2 292 4 315 Q 13 338 11 360 
             Q 3 380 5 400 Q 9 412 8 420 
             L 45 420 L 45 0 Z"
          fill="#D6C4A7"
          filter="url(#kraftTearFilter)"
        />

        {/* Deckled white fibrous tear line along edge */}
        <path
          d="M 8 0 
             Q 11 15 9 30 Q 3 48 4 65 Q 11 85 9 105 
             Q 2 125 3 145 Q 13 168 11 190 Q 3 210 5 230 
             Q 12 250 10 270 Q 2 292 4 315 Q 13 338 11 360 
             Q 3 380 5 400 Q 9 412 8 420"
          stroke="#F4ECDC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 1 3 1"
          fill="none"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

export const VermilionTornScrap: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = "", style = {} }) => {
  return (
    <div
      className={`${styles.vermilionTornScrap} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 70 85"
        preserveAspectRatio="none"
        className={styles.vermilionTornSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle shadow */}
        <path
          d="M 4 6 L 66 3 L 64 78 L 6 82 Z"
          fill="rgba(23, 21, 18, 0.12)"
          transform="translate(1, 2)"
        />
        {/* Authentic torn crimson paper scrap */}
        <path
          d="M 4 6 
             Q 22 2 40 4 Q 56 1 66 3 
             Q 68 25 65 48 Q 67 66 64 78 
             Q 48 83 30 80 Q 15 84 6 82 
             Q 8 58 5 35 Q 2 18 4 6 Z"
          fill="#B5282D"
        />
        {/* Weathered paper fibers along upper and left tear edge */}
        <path
          d="M 4 6 Q 22 2 40 4 Q 56 1 66 3"
          stroke="#8E1D22"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 4 6 Q 8 58 6 82"
          stroke="#E5A3A6"
          strokeWidth="1"
          strokeDasharray="2 1.5 1 1"
          fill="none"
          opacity="0.65"
        />
      </svg>
    </div>
  );
};

export const TornEdgeBottom: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div className={`${styles.tornBottomContainer} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        className={styles.tornBottomSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Delicate deckled paper shadow under-line */}
        <path
          d="M 0 12 
             Q 120 9 240 13 Q 360 8 480 14 Q 600 10 720 12 
             Q 840 8 960 14 Q 1080 11 1200 9 Q 1320 13 1440 11 
             L 1440 24 L 0 24 Z"
          fill="rgba(23, 21, 18, 0.04)"
        />
        {/* Subtle fibrous deckle tear hairline */}
        <path
          d="M 0 10 
             Q 90 7 180 11 Q 270 9 360 7 Q 450 12 540 8 
             Q 630 11 720 9 Q 810 7 900 12 Q 990 8 1080 10 
             Q 1170 7 1260 11 Q 1350 9 1440 8"
          stroke="#DDD1BD"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="4 2 8 2 2 1"
          fill="none"
        />
      </svg>
    </div>
  );
};
