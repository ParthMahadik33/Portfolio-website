import React from "react";
import styles from "./SelectedWork.module.scss";

interface ProjectTapeProps {
  className?: string;
  rotation?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const ProjectTape: React.FC<ProjectTapeProps> = ({
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
