"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroNavbar } from "./HeroNavbar";
import { HeroIntro } from "./HeroIntro";
import { HeroPortrait } from "./HeroPortrait";
import { HeroArtwork } from "./HeroArtwork";
import { HeroDecorations } from "./HeroDecorations";
import { SanskritDetail } from "./SanskritDetail";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

  return (
    <section className={styles.heroSection} id="home">
      {/* 1. Navbar */}
      <motion.div
        className={styles.navbarContainer}
        initial={
          shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : 0.1,
          ease: easeOutQuart,
        }}
      >
        <HeroNavbar />
      </motion.div>

      {/* 2. Mountain Landscape & Red Sun Artwork (Layer 3) */}
      <motion.div
        className={styles.artworkContainer}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          delay: shouldReduceMotion ? 0 : 0.2,
          ease: easeOutQuart,
        }}
      >
        <HeroArtwork />
      </motion.div>

      {/* 3. SVG Birds & Lower-Right Sparkle (Layer 4) */}
      <motion.div
        className={styles.decorationsContainer}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.0,
          delay: shouldReduceMotion ? 0 : 1.6,
          ease: easeOutQuart,
        }}
      >
        <HeroDecorations />
      </motion.div>

      {/* 4. Left Editorial Column (Roles, Headline, Quote, Buttons) */}
      <div className={styles.contentContainer}>
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.0,
            delay: shouldReduceMotion ? 0 : 0.7,
            ease: easeOutQuart,
          }}
        >
          <HeroIntro />
        </motion.div>
      </div>

      {/* 5. Hero Portrait in Center-Right Foreground (Layer 5) */}
      <motion.div
        className={styles.portraitContainer}
        initial={
          shouldReduceMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 35, scale: 0.98 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          delay: shouldReduceMotion ? 0 : 0.45,
          ease: easeOutQuart,
        }}
      >
        <HeroPortrait />
      </motion.div>

      {/* 6. Right-side Sanskrit and Guiding Pillars */}
      <motion.div
        className={styles.sanskritContainer}
        initial={
          shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }
        }
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.0,
          delay: shouldReduceMotion ? 0 : 1.4,
          ease: easeOutQuart,
        }}
      >
        <SanskritDetail />
      </motion.div>
    </section>
  );
};
