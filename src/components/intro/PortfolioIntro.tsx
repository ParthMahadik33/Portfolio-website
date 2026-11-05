"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./PortfolioIntro.module.scss";

interface WordItem {
  text: string;
  font: string;
  lang: string;
  durationMs: number;
}

const WORDS: WordItem[] = [
  { text: "HELLO", font: "var(--font-display)", lang: "en", durationMs: 560 },
  { text: "नमस्कार", font: "var(--font-devanagari)", lang: "mr", durationMs: 360 },
  { text: "नमस्ते", font: "var(--font-devanagari)", lang: "hi", durationMs: 360 },
  { text: "BONJOUR", font: "var(--font-display)", lang: "fr", durationMs: 360 },
  { text: "HOLA", font: "var(--font-display)", lang: "es", durationMs: 360 },
  { text: "こんにちは", font: "var(--font-japanese)", lang: "ja", durationMs: 400 },
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
    const timeouts = timeoutsRef.current;
    // Schedule word transforms with smooth readable cadence
    // Scene 01: HELLO (0.00s - 0.56s)
    // Scene 02: Transforming languages (0.56s - 2.40s)
    let accumulatedTime = WORDS[0].durationMs;

    for (let i = 1; i < WORDS.length; i++) {
      const idx = i;
      const t = setTimeout(() => {
        setCurrentIndex(idx);
      }, accumulatedTime);
      timeouts.push(t);
      accumulatedTime += WORDS[i].durationMs;
    }

    // Scene 03: The Meaning - निर्माण (2.40s - 3.25s)
    const tMeaning = setTimeout(() => {
      setShowMeaning(true);
    }, accumulatedTime); // 2400ms
    timeouts.push(tMeaning);

    // Scene 04 Trigger: Smooth crossfade into Hero landscape starts at 3.25s
    const tLandscape = setTimeout(() => {
      setIsFadingOut(true);
      onStartLandscape();
    }, accumulatedTime + 850); // 3250ms
    timeouts.push(tLandscape);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onStartLandscape]);

  return (
    <div
      className={`${styles.introOverlay} ${isFadingOut ? styles.introOverlayFading : ""}`}
    >
      <div className={styles.centerContainer} aria-hidden="true">
        {/* SCENE 01 & 02: Single Word Transform with enter, hold, and exit */}
        <div className={styles.wordBox}>
          {!showMeaning && currentIndex < WORDS.length && (
            <div
              key={WORDS[currentIndex].text}
              className={`${styles.wordText} ${styles.wordTextAnimated}`}
              style={{
                fontFamily: WORDS[currentIndex].font,
                animationDuration: `${WORDS[currentIndex].durationMs}ms`,
              }}
              lang={WORDS[currentIndex].lang}
            >
              {WORDS[currentIndex].text}
            </div>
          )}
        </div>

        {/* SCENE 03: The Meaning - निर्माण + Vermilion Underline + Translation */}
        {showMeaning && (
          <div
            className={`${styles.meaningContainer} ${isFadingOut ? styles.meaningContainerFading : ""}`}
          >
            <h2 className={styles.devanagariTitle} lang="sa">
              निर्माण
            </h2>

            {/* Vermilion Underline drawn left-to-right */}
            <div className={styles.vermilionLine} />

            {/* English Translation */}
            <p className={styles.translationText}>
              CREATION · BUILDING · PROGRESS
            </p>
          </div>
        )}
      </div>

      {/* Small, accessible Skip Intro control */}
      <button
        className={styles.skipButton}
        onClick={onSkip}
        aria-label="Skip introduction animation and enter website"
        tabIndex={isFadingOut ? -1 : 0}
      >
        <span>SKIP INTRO</span>
        <span className={styles.skipKeyBadge} aria-hidden="true">
          ESC
        </span>
      </button>
    </div>
  );
};
