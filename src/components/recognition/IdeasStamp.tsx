import React from "react";
import styles from "./Recognition.module.scss";

interface IdeasStampProps {
  className?: string;
}

export const IdeasStamp: React.FC<IdeasStampProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.ideasStamp} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 110 110"
        className={styles.stampSvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer distressed circular ring */}
        <circle
          cx="55"
          cy="55"
          r="48"
          stroke="var(--color-vermilion)"
          strokeWidth="1.8"
          strokeDasharray="4.5 1.5 8 1 2 2"
          opacity="0.82"
        />
        {/* Inner concentric ring */}
        <circle
          cx="55"
          cy="55"
          r="41"
          stroke="var(--color-vermilion)"
          strokeWidth="1.1"
          strokeDasharray="5 2 3 1.5"
          opacity="0.75"
        />

        {/* Text inside stamp: IDEAS / PEOPLE / IMPACT */}
        <text
          x="55"
          y="42"
          textAnchor="middle"
          fill="var(--color-vermilion)"
          fontFamily="var(--font-condensed)"
          fontWeight="800"
          fontSize="11.5"
          letterSpacing="0.18em"
          opacity="0.88"
        >
          IDEAS
        </text>
        <text
          x="55"
          y="58"
          textAnchor="middle"
          fill="var(--color-vermilion)"
          fontFamily="var(--font-condensed)"
          fontWeight="800"
          fontSize="11.5"
          letterSpacing="0.18em"
          opacity="0.88"
        >
          PEOPLE
        </text>
        <text
          x="55"
          y="74"
          textAnchor="middle"
          fill="var(--color-vermilion)"
          fontFamily="var(--font-condensed)"
          fontWeight="800"
          fontSize="11.5"
          letterSpacing="0.18em"
          opacity="0.88"
        >
          IMPACT
        </text>

        {/* Subtle decorative stars or dots */}
        <circle cx="26" cy="55" r="1.3" fill="var(--color-vermilion)" opacity="0.65" />
        <circle cx="84" cy="55" r="1.3" fill="var(--color-vermilion)" opacity="0.65" />
      </svg>
    </div>
  );
};
