"use client";

import React from "react";
import { motion } from "framer-motion";
import { TOOLKIT_CATEGORIES, ToolkitCategory } from "./toolkitData";
import styles from "./Toolkit.module.scss";

interface ToolkitCategoryIndexProps {
  activeCategoryId: string;
  onSelectCategory: (category: ToolkitCategory) => void;
  shouldReduceMotion: boolean | null;
}

export const ToolkitCategoryIndex: React.FC<ToolkitCategoryIndexProps> = ({
  activeCategoryId,
  onSelectCategory,
  shouldReduceMotion,
}) => {
  return (
    <nav
      className={styles.categoryIndexNav}
      aria-label="Technical toolkit category navigation"
      role="tablist"
    >
      {/* Slim vertical timeline track */}
      <div className={styles.timelineTrack} aria-hidden="true">
        <div className={styles.timelineLine} />
      </div>

      <div className={styles.categoryList}>
        {TOOLKIT_CATEGORIES.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              className={`${styles.categoryItemBtn} ${isActive ? styles.activeCategoryItem : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {/* Timeline Indicator Marker */}
              <div className={styles.nodeMarkerWrap} aria-hidden="true">
                {isActive ? (
                  <motion.div
                    className={styles.activeTargetNode}
                    layoutId={shouldReduceMotion ? undefined : "activeTargetNode"}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                    <span className={styles.outerTargetRing} />
                    <span className={styles.innerTargetDot} />
                  </motion.div>
                ) : (
                  <span className={styles.inactiveNodeCircle} />
                )}
              </div>

              {/* Number and Category Text */}
              <div className={styles.categoryLabelGroup}>
                <div className={styles.categoryHeadingRow}>
                  <span className={styles.categoryNum}>{category.number}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                </div>
                <span className={styles.categoryNavSub}>{category.navSubtitle}</span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
