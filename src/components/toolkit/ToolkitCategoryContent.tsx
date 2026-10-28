"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ToolkitCategory } from "./toolkitData";
import styles from "./Toolkit.module.scss";

interface ToolkitCategoryContentProps {
  category: ToolkitCategory;
  shouldReduceMotion: boolean | null;
}

export const ToolkitCategoryContent: React.FC<ToolkitCategoryContentProps> = ({
  category,
  shouldReduceMotion,
}) => {
  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <div
      id={`panel-${category.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${category.id}`}
      className={styles.dynamicContentColumn}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          className={styles.categoryContentTransitionWrap}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -10 }
          }
          transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: easeCurve }}
        >
          {/* 1. Category Editorial Header */}
          <div className={styles.categoryHeader}>
            <div className={styles.categoryOverline}>
              <span className={styles.categoryOverlineNum}>{category.number}</span>
              <span className={styles.categoryOverlineSep}>/</span>
              <span className={styles.categoryOverlineText}>
                {category.name.toUpperCase()}
              </span>
            </div>

            <h3 className={styles.categoryDisplayTitle}>{category.name}</h3>

            <span className={styles.categorySubheading}>{category.subheading}</span>

            <p className={styles.categoryParagraph}>{category.description}</p>
          </div>

          {/* 2. Open Typographic Technologies List */}
          <div className={styles.techSection}>
            <h4 className={styles.techSectionHeader}>Technologies I work with</h4>

            <div className={styles.techList}>
              {category.technologies.map((tech) => (
                <div key={tech.name} className={styles.techRow}>
                  <div className={styles.techNameCol}>
                    <span className={styles.techArrow} aria-hidden="true">
                      →
                    </span>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>

                  <span className={styles.techContextTag}>{tech.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Featured Work Strip (Unboxed Editorial List) */}
          <div className={styles.featuredWorkSection}>
            <h4 className={styles.featuredWorkHeader}>Featured Work</h4>

            <div className={styles.featuredWorkBody}>
              {/* Thumbnail + Link */}
              <div className={styles.featuredThumbnailCol}>
                <div className={styles.featuredThumbFrame}>
                  <Image
                    src={category.featuredWork.imageSrc}
                    alt={category.featuredWork.title}
                    fill
                    sizes="(max-width: 768px) 140px, 160px"
                    className={styles.featuredThumbImg}
                    priority={false}
                  />
                </div>
                <a
                  href={category.featuredWork.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredViewLink}
                  aria-label={`View ${category.featuredWork.title} live (opens in new tab)`}
                >
                  <span>View Project</span>
                  <span className={styles.linkArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              {/* Project Metadata */}
              <div className={styles.featuredMetaCol}>
                <h5 className={styles.featuredTitle}>
                  {category.featuredWork.title}
                </h5>
                <span className={styles.featuredRole}>
                  {category.featuredWork.role}
                </span>
                <p className={styles.featuredDescription}>
                  {category.featuredWork.description}
                </p>
              </div>

              {/* Also Used In List */}
              <div className={styles.alsoUsedInCol}>
                <span className={styles.alsoUsedInHeading}>Also used in</span>
                <ul className={styles.alsoUsedInList}>
                  {category.featuredWork.alsoUsedIn.map((item) => (
                    <li key={item} className={styles.alsoUsedInItem}>
                      <span className={styles.bulletDot} aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
