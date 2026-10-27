import React from "react";
import styles from "./About.module.scss";

interface AboutStampProps {
  className?: string;
  size?: number;
  rotation?: number;
}

export const AboutStamp: React.FC<AboutStampProps> = ({
  className = "",
  size = 112,
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
      <svg
        viewBox="0 0 160 160"
        className={styles.stampSvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer vermilion seal ring with subtle physical print imperfection */}
        <circle
          cx="80"
          cy="80"
          r="74"
          stroke="#B5282D"
          strokeWidth="1.6"
          strokeDasharray="210 1.5 120 1 70 1.2"
          opacity="0.88"
        />
        {/* Inner concentric ring */}
        <circle
          cx="80"
          cy="80"
          r="68"
          stroke="#B5282D"
          strokeWidth="0.8"
          opacity="0.65"
        />

        {/* Circular text paths */}
        <defs>
          {/* Top arc (clockwise over top from 9 o'clock to 3 o'clock) */}
          <path
            id="stampTopArc"
            d="M 20,80 A 60,60 0 0,1 140,80"
            fill="none"
          />
          {/* Bottom arc (clockwise under bottom from 9 o'clock to 3 o'clock) */}
          <path
            id="stampBottomArc"
            d="M 23,80 A 57,57 0 0,0 137,80"
            fill="none"
          />
        </defs>

        {/* Top curved text: STILL LEARNING */}
        <text
          fill="#171512"
          fontSize="9.5"
          fontFamily="var(--font-condensed)"
          fontWeight="700"
          letterSpacing="0.22em"
          opacity="0.88"
        >
          <textPath href="#stampTopArc" startOffset="50%" textAnchor="middle">
            STILL LEARNING
          </textPath>
        </text>

        {/* Bottom curved text: STILL BUILDING */}
        <text
          fill="#171512"
          fontSize="9.5"
          fontFamily="var(--font-condensed)"
          fontWeight="700"
          letterSpacing="0.22em"
          opacity="0.88"
        >
          <textPath href="#stampBottomArc" startOffset="50%" textAnchor="middle">
            STILL BUILDING
          </textPath>
        </text>

        {/* Side decorative divider stars */}
        <text
          x="18"
          y="83"
          fill="#B5282D"
          fontSize="8"
          textAnchor="middle"
          opacity="0.75"
        >
          ✦
        </text>
        <text
          x="142"
          y="83"
          fill="#B5282D"
          fontSize="8"
          textAnchor="middle"
          opacity="0.75"
        >
          ✦
        </text>

        {/* Inner mountain framing circle */}
        <circle
          cx="80"
          cy="80"
          r="48"
          stroke="#B5282D"
          strokeWidth="1.1"
          opacity="0.7"
        />

        {/* Hand-drawn ink mountain peaks illustration */}
        <g stroke="#171512" strokeLinecap="round" strokeLinejoin="round">
          {/* Central Main Peak */}
          <path
            d="M 46 96 L 80 56 L 114 96"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Left Peak */}
          <path
            d="M 38 96 L 58 74 L 72 88"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Right Peak */}
          <path
            d="M 90 86 L 104 74 L 122 96"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Ridge crest lines */}
          <path
            d="M 80 56 Q 79 68 81 78 Q 83 87 82 96"
            strokeWidth="1.3"
            fill="none"
          />
          <path
            d="M 58 74 Q 61 84 62 96"
            strokeWidth="1.0"
            fill="none"
          />
          <path
            d="M 104 74 Q 101 84 100 96"
            strokeWidth="1.0"
            fill="none"
          />

          {/* Shading crosshatch lines on right face */}
          <line x1="81" y1="64" x2="88" y2="68" strokeWidth="0.7" opacity="0.75" />
          <line x1="81" y1="70" x2="93" y2="75" strokeWidth="0.7" opacity="0.75" />
          <line x1="82" y1="76" x2="97" y2="82" strokeWidth="0.7" opacity="0.75" />
          <line x1="82" y1="82" x2="102" y2="89" strokeWidth="0.7" opacity="0.75" />
          <line x1="82" y1="89" x2="107" y2="95" strokeWidth="0.7" opacity="0.75" />

          {/* Base baseline */}
          <path
            d="M 34 96 Q 58 95 80 96 Q 102 95 126 96"
            strokeWidth="1.1"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
