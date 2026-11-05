"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PortfolioIntro.module.scss";

interface WordItem {
  text: string;
  font: string;
  lang: string;
  durationMs: number;
}

const WORDS: WordItem[] = [
  { text: "HELLO", font: "var(--font-display)", lang: "en", durationMs: 350 },
  { text: "नमस्कार", font: "var(--font-devanagari)", lang: "mr", durationMs: 160 },
  { text: "नमस्ते", font: "var(--font-devanagari)", lang: "hi", durationMs: 160 },
  { text: "BONJOUR", font: "var(--font-display)", lang: "fr", durationMs: 160 },
  { text: "HOLA", font: "var(--font-display)", lang: "es", durationMs: 160 },
  { text: "こんにちは", font: "var(--font-japanese)", lang: "ja", durationMs: 160 },
];

export interface PortfolioIntroProps {
  onStartLandscape: () => void;
  onSkip: () => void;
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({
  onStartLandscape,
  onSkip,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showMeaning, setShowMeaning] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Schedule word transforms
    // Scene 01: HELLO (0.00s - 0.35s)
    // Scene 02: Transforming languages (0.35s - 1.15s)
    let accumulatedTime = WORDS[0].durationMs;

    for (let i = 1; i < WORDS.length; i++) {
      const idx = i;
      const t = setTimeout(() => {
        setCurrentIndex(idx);
      }, accumulatedTime);
      timeoutsRef.current.push(t);
      accumulatedTime += WORDS[i].durationMs;
    }

    // Scene 03: The Meaning (1.15s - 1.50s)
    const tMeaning = setTimeout(() => {
      setShowMeaning(true);
    }, accumulatedTime); // ~1150ms
    timeoutsRef.current.push(tMeaning);

    // Scene 04 Trigger: Landscape reveal starts at 1.50s
    const tLandscape = setTimeout(() => {
      setIsFadingOut(true);
      onStartLandscape();
    }, accumulatedTime + 350); // ~1500ms
    timeoutsRef.current.push(tLandscape);

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [onStartLandscape]);

  return (
    <motion.div
      className={styles.introOverlay}
      initial={{ opacity: 1 }}
      animate={isFadingOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      aria-hidden="true"
    >
      <div className={styles.centerContainer}>
        {/* SCENE 01 & 02: Single Word Transform */}
        <div className={styles.wordBox}>
          <AnimatePresence mode="wait">
            {!showMeaning && currentIndex < WORDS.length && (
              <motion.div
                key={WORDS[currentIndex].text}
                className={styles.wordText}
                initial={{
                  y: currentIndex === 0 ? 12 : 18,
                  opacity: 0,
                  filter: "blur(4px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: -18,
                  opacity: 0,
                  filter: "blur(3px)",
                }}
                transition={{
                  duration: currentIndex === 0 ? 0.3 : 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ fontFamily: WORDS[currentIndex].font }}
                lang={WORDS[currentIndex].lang}
              >
                {WORDS[currentIndex].text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SCENE 03: The Meaning - निर्माण + Vermilion Underline + Translation */}
        <AnimatePresence>
          {showMeaning && (
            <motion.div
              className={styles.meaningContainer}
              initial={{ opacity: 0, y: 16 }}
              animate={
                isFadingOut
                  ? { opacity: 0, y: -24 }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: isFadingOut ? 0.26 : 0.24,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <h2 className={styles.devanagariTitle} lang="sa">
                निर्माण
              </h2>

              {/* Vermilion Underline drawn left-to-right */}
              <motion.div
                className={styles.vermilionLine}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.26,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* English Translation */}
              <motion.p
                className={styles.translationText}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.22,
                  delay: 0.14,
                  ease: "easeOut",
                }}
              >
                CREATION · BUILDING · PROGRESS
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Small, accessible Skip Intro control */}
      <button
        className={styles.skipButton}
        onClick={onSkip}
        aria-label="Skip introduction animation and enter website"
        tabIndex={0}
      >
        <span>SKIP INTRO</span>
        <span className={styles.skipKeyBadge} aria-hidden="true">
          ESC
        </span>
      </button>
    </motion.div>
  );
};
