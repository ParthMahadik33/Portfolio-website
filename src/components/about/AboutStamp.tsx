import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

interface AboutStampProps {
  className?: string;
  size?: number;
  rotation?: number;
}

export const AboutStamp: React.FC<AboutStampProps> = ({
  className = "",
  size = 118,
  rotation = -5,
}) => {
  return (
    <div
      className={`${styles.editorialStampWrap} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      aria-label="Editorial Stamp: Still Learning, Still Building"
      role="img"
    >
      {/* 1. Authentic Distressed Mountain Emblem from assets/about/ */}
      <Image
        src="/assets/about/about-mountain-stamp.png"
        alt=""
        width={1172}
        height={1153}
        className={styles.stampImage}
        priority={false}
      />

      {/* 2. Concentric SVG Arc Text: STILL LEARNING / STILL BUILDING */}
      <svg
        viewBox="0 0 160 160"
        className={styles.stampTextSvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Top arc (clockwise over top from 9 o'clock to 3 o'clock) */}
          <path
            id="stampTopArc"
            d="M 21,80 A 59,59 0 0,1 139,80"
            fill="none"
          />
          {/* Bottom arc (clockwise under bottom from 9 o'clock to 3 o'clock) */}
          <path
            id="stampBottomArc"
            d="M 25,80 A 55,55 0 0,0 135,80"
            fill="none"
          />
        </defs>

        {/* Top curved text: STILL LEARNING */}
        <text
          fill="#171512"
          fontSize="9.8"
          fontFamily="var(--font-condensed)"
          fontWeight="700"
          letterSpacing="0.22em"
          opacity="0.9"
        >
          <textPath href="#stampTopArc" startOffset="50%" textAnchor="middle">
            STILL LEARNING
          </textPath>
        </text>

        {/* Bottom curved text: STILL BUILDING */}
        <text
          fill="#171512"
          fontSize="9.8"
          fontFamily="var(--font-condensed)"
          fontWeight="700"
          letterSpacing="0.22em"
          opacity="0.9"
        >
          <textPath href="#stampBottomArc" startOffset="50%" textAnchor="middle">
            STILL BUILDING
          </textPath>
        </text>
      </svg>
    </div>
  );
};
