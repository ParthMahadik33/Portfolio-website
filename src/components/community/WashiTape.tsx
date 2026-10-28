import React from "react";
import styles from "./Community.module.scss";

interface WashiTapeProps {
  className?: string;
  rotation?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  patternId?: string;
}

/**
 * Reusable archival translucent washi tape component.
 * Features realistic torn fiber edges, subtle diagonal paper grain, and soft drop shadows.
 */
export const WashiTape: React.FC<WashiTapeProps> = ({
  className = "",
  rotation = 0,
  width = "72px",
  height = "24px",
  style = {},
  patternId = "washiTapePattern",
}) => {
  return (
    <div
      className={`${styles.washiTapeWrap} ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 48"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.washiTapeSvg}
      >
        <defs>
          <pattern
            id={patternId}
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(28)"
          >
            {/* Base warm ivory translucent paper */}
            <rect width="12" height="12" fill="#F3E9D7" fillOpacity="0.82" />
            {/* Fine diagonal fibers */}
            <path
              d="M0 0 V12 M6 0 V12"
              stroke="#D1BE9C"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />
            {/* Organic paper grain specks */}
            <path
              d="M3 2 L4 7 M9 4 L10 9"
              stroke="#BFA57B"
              strokeWidth="0.6"
              strokeOpacity="0.38"
            />
          </pattern>
        </defs>

        {/* Organic torn edges on both ends */}
        <path
          d="M 6 3 
             L 154 2 
             L 156 8 L 153 15 L 157 23 L 154 31 L 158 39 L 155 45 
             L 5 46 
             L 7 38 L 3 30 L 6 21 L 4 13 L 7 6 Z"
          fill={`url(#${patternId})`}
          stroke="#D8C7A8"
          strokeWidth="0.75"
          strokeOpacity="0.55"
        />
      </svg>
    </div>
  );
};

// Re-export as CommunityTape for backwards compatibility
export const CommunityTape = WashiTape;
