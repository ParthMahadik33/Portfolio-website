"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./About.module.scss";

interface AboutHandwritingProps {
  className?: string;
}

export const AboutHandwriting: React.FC<AboutHandwritingProps> = ({
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`${styles.handwritingNoteWrap} ${className}`} aria-hidden="true">
      <span className={styles.handwrittenText}>
        A little
        <br />
        curiosity
        <br />
        goes a long
        <br />
        way.
      </span>

      {/* Casual, delicate ink arrow curving down toward photograph */}
      <svg
        viewBox="0 0 75 55"
        className={styles.handwritingArrowSvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curving stroke */}
        <motion.path
          d="M 8 8 C 16 35 38 42 58 38"
          stroke="#171512"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
          fill="none"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.4 }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M 46 32 L 59 38 L 50 46"
          stroke="#171512"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.8"
          fill="none"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: 1.0 }}
        />
      </svg>
    </div>
  );
};
