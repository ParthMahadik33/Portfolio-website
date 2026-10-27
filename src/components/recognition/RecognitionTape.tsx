import React from "react";
import styles from "./Recognition.module.scss";

interface RecognitionTapeProps {
  className?: string;
  rotation?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const RecognitionTape: React.FC<RecognitionTapeProps> = ({
  className = "",
  rotation = 0,
  width = "55px",
  height = "18px",
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
