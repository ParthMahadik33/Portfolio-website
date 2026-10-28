"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CommunityTape } from "./CommunityTape";
import styles from "./Community.module.scss";

interface AgroRentPresentationFeatureProps {
  shouldReduceMotion: boolean | null;
}

export const AgroRentPresentationFeature: React.FC<AgroRentPresentationFeatureProps> = ({
  shouldReduceMotion,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;
    video.defaultMuted = true;

    if (shouldReduceMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting && !shouldReduceMotion) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch(() => {
                setIsPlaying(false);
              });
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        root: null,
        rootMargin: "60px 0px 60px 0px",
        threshold: 0.2,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      ref={containerRef}
      className={styles.videoFeatureCol}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: easeCurve }}
    >
      {/* 1. Top-Right Annotation: "From idea to presentation." */}
      <div className={styles.videoAnnotationTopRight} aria-hidden="true">
        <svg
          viewBox="0 0 65 45"
          className={styles.videoArrowSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 54 8 Q 26 8 15 28"
            stroke="#171512"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 23 20 L 14 29 L 10 19"
            stroke="#171512"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.videoAnnotationCopy}>
          <span>From idea</span>
          <span>to presentation.</span>
        </div>
      </div>

      {/* 2. Archival Presentation Video Frame */}
      <div className={styles.videoFrameCard}>
        {/* Washi tape pinned at top-left corner */}
        <CommunityTape
          rotation={-28}
          width="74px"
          height="24px"
          className={styles.videoTapeTopLeft}
        />

        {/* 16:9 Ambient Video Display */}
        <div className={styles.videoViewport}>
          <Image
            src="/assets/community/agrorent-presentation-poster.jpg"
            alt="Parth Mahadik presenting AgroRent problem statement and solution at Google Developer Group event"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 760px"
            priority={false}
            className={`${styles.videoPoster} ${
              isPlaying && videoLoaded ? styles.videoPosterHidden : ""
            }`}
          />

          {!shouldReduceMotion && (
            <video
              ref={videoRef}
              src="/assets/community/agrorent-presentation.mp4"
              poster="/assets/community/agrorent-presentation-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Silent video of Parth Mahadik presenting AgroRent farm machinery platform"
              className={styles.ambientVideo}
              onLoadedData={() => setVideoLoaded(true)}
            />
          )}
        </div>
      </div>

      {/* 3. Editorial Caption below the Video Frame */}
      <div className={styles.videoCaptionContainer}>
        <div className={styles.captionAccentBar} aria-hidden="true" />
        <div className={styles.captionTextCol}>
          <h3 className={styles.captionHeadline}>
            Ideas become meaningful when you put them in front of people.
          </h3>
          <p className={styles.captionParagraph}>
            Presenting AgroRent, an AI-assisted farm machinery rental platform designed to make agricultural equipment more accessible to farmers.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
