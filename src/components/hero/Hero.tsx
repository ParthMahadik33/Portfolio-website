"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { PortfolioIntro } from "@/components/intro/PortfolioIntro";
import { HeroNavbar } from "./HeroNavbar";
import { HeroIntro } from "./HeroIntro";
import { HeroPortrait } from "./HeroPortrait";
import { HeroArtwork } from "./HeroArtwork";
import { HeroDecorations } from "./HeroDecorations";
import { SanskritDetail } from "./SanskritDetail";
import styles from "./Hero.module.scss";

const STORAGE_KEY = "pm_portfolio_intro_seen";

export const Hero: React.FC = () => {
  const [introState, setIntroState] = useState<"ssr" | "playing" | "done">("ssr");
  const [showIntroOverlay, setShowIntroOverlay] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSkip = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowIntroOverlay(false);
    setIntroState("done");

    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      }
    } catch {
      // Ignore sessionStorage exceptions
    }
  }, []);

  const handleStartLandscape = useCallback(() => {
    // Scene 04 begins at 1.50s: landscape emerges as title card lifts away
  }, []);

  useEffect(() => {
    let isReload = false;
    try {
      if (typeof window !== "undefined") {
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries.length > 0) {
          isReload =
            (navEntries[0] as PerformanceNavigationTiming).type === "reload";
        }
      }
    } catch {
      // Fallback
    }

    const isReplay =
      typeof window !== "undefined" &&
      window.location.search.includes("replay=1");

    let alreadySeen = false;
    try {
      if (typeof window !== "undefined" && !isReload && !isReplay) {
        alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "true";
      }
    } catch {
      alreadySeen = false;
    }

    let startTimerId: NodeJS.Timeout | null = null;
    const shouldReduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rafId = window.requestAnimationFrame(() => {
      if (shouldReduceMotion || alreadySeen) {
        setShowIntroOverlay(false);
        setIntroState("done");
        return;
      }

      // Allow Frame 1 (SSR Hero & LCP artwork) to paint first before starting the opening overlay
      startTimerId = setTimeout(() => {
        setIntroState("playing");
        setShowIntroOverlay(true);

        // Complete opening smoothly
        timerRef.current = setTimeout(() => {
          handleSkip();
        }, 3600);
      }, 60);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(rafId);
      if (startTimerId) {
        clearTimeout(startTimerId);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSkip]);

  const isPlaying = introState === "playing";
  const isComplete = introState === "done";
  const animateIntro = isPlaying;

  return (
    <section
      className={styles.heroSection}
      id="home"
    >
      {/* SCENE 01-03: Multilingual Cinematic Typographic Intro Overlay (0.0s - 1.75s) */}
      {animateIntro && showIntroOverlay && (
        <PortfolioIntro
          onStartLandscape={handleStartLandscape}
          onSkip={handleSkip}
        />
      )}

      {/* 1. Navbar Container (Scene 06 - 2.55s restrained entrance) */}
      <div className={styles.navbarContainer}>
        <HeroNavbar animateIntro={animateIntro} />
      </div>

      {/* 2. Mountain Landscape & Vermilion Sun Artwork (Scene 04 - 1.50s to 2.15s) */}
      <HeroArtwork animateIntro={animateIntro} isComplete={isComplete} />

      {/* 3. SVG Birds (Scene 04 - 1.75s to 2.35s subtle drift) */}
      <div className={styles.decorationsContainer}>
        <HeroDecorations animateIntro={animateIntro} />
      </div>

      {/* 4. Left Editorial Column (Scene 05: Bodoni Name at 2.0s; Scene 06: Roles, Tagline, CTAs at 2.55s) */}
      <div className={styles.contentContainer}>
        <HeroIntro animateIntro={animateIntro} isComplete={isComplete} />
      </div>

      {/* 5. Hero Portrait in Center-Right Foreground (Scene 05 - 2.00s upward clip reveal) */}
      <div className={styles.portraitContainer}>
        <HeroPortrait animateIntro={animateIntro} isComplete={isComplete} />
      </div>

      {/* 6. Right-side Sanskrit & Philosophy Pillars (Scene 06 - 2.60s to 2.95s) */}
      <div className={styles.sanskritContainer}>
        <SanskritDetail animateIntro={animateIntro} />
      </div>
    </section>
  );
};
