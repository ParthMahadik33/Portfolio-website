import React from "react";
import styles from "./Community.module.scss";

interface CommunityTapeProps {
  className?: string;
  rotation?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const CommunityTape: React.FC<CommunityTapeProps> = ({
  className = "",
  rotation = 0,
  width = "64px",
  height = "22px",
  style = {},
}) => {
  return (
    <div
      className={`${styles.communityTape} ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 180 56"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.tapeSvg}
      >
        <defs>
          <pattern
            id="tapeStripes"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <rect width="8" height="8" fill="#F0E5CF" fillOpacity="0.82" />
            <path
              d="M0 0 V8"
              stroke="#C8B99E"
              strokeWidth="1.4"
              strokeOpacity="0.45"
            />
          </pattern>
        </defs>
        <path
          d="M8 9 L171 5 L176 45 L5 50Z"
          fill="url(#tapeStripes)"
          stroke="#D3C3A9"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
