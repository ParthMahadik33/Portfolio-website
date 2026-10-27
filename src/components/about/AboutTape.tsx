import React from "react";
import styles from "./About.module.scss";

interface AboutTapeProps {
  className?: string;
  rotation?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const AboutTape: React.FC<AboutTapeProps> = ({
  className = "",
  rotation = 0,
  width = "65px",
  height = "20px",
  style = {},
}) => {
  return (
    <div
      className={`${styles.maskingTape} ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className={styles.tapeTexture} />
      <div className={styles.tapeHighlight} />
    </div>
  );
};
