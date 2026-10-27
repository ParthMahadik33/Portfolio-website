import React from "react";
import styles from "./About.module.scss";

interface AboutPillarsProps {
  className?: string;
}

export const AboutPillars: React.FC<AboutPillarsProps> = ({
  className = "",
}) => {
  const pillars = ["IDEAS", "CODE", "PEOPLE", "COMMUNITY", "IMPACT"];

  return (
    <div className={`${styles.pillarsBlock} ${className}`} aria-hidden="true">
      <div className={styles.pillarsLine} />
      <ul className={styles.pillarsList}>
        {pillars.map((item) => (
          <li key={item} className={styles.pillarItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
