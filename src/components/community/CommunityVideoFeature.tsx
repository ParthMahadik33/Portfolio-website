"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WashiTape } from "./WashiTape";
import styles from "./Community.module.scss";

interface CommunityVideoFeatureProps {
  shouldReduceMotion: boolean | null;
}

export const CommunityVideoFeature: React.FC<CommunityVideoFeatureProps> = ({
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
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        root: null,
        rootMargin: "60px 0px 60px 0px",
        threshold: 0.15,
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
      className={styles.videoFeatureColumn}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
    >
      {/* Upper-Right Video Container with Pinned Washi Tape & Handwritten Note */}
      <div className={styles.videoCardOuterWrap}>
        {/* Taped Archival Video Frame (Slight organic tilt) */}
        <div className={styles.videoPhotoFrame}>
          {/* Tape #1: Angled across top-right corner */}
          <WashiTape
            rotation={16}
            width="68px"
            height="22px"
            patternId="videoTapeRight"
            className={styles.videoTapeTopRight}
          />

          {/* Tape #2: Holding the upper-left edge */}
          <WashiTape
            rotation={-22}
            width="64px"
            height="22px"
            patternId="videoTapeLeft"
            className={styles.videoTapeTopLeft}
          />

          {/* 16:9 Ambient Video Viewport */}
          <div className={styles.videoViewport}>
            <Image
              src="/assets/community/agrorent-presentation-poster.jpg"
              alt="Parth Mahadik presenting at a Google Developer Group event in GDG attire"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
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
                aria-label="Silent video of Parth Mahadik presenting at a Google Developer Group community event"
                className={styles.ambientVideo}
                onLoadedData={() => setVideoLoaded(true)}
              />
            )}
          </div>
        </div>

        {/* Handwritten Annotation to the right of the video: Learning, building, sharing. */}
        <div className={styles.videoAnnotationSide} aria-hidden="true">
          <div className={styles.learningNoteText}>
            <span>Learning,</span>
            <span>building,</span>
            <span>sharing.</span>
          </div>
          {/* Fine curved hand-drawn ink arrow curving left toward the video */}
          <svg
            viewBox="0 0 60 50"
            className={styles.learningArrowSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 48 8 C 30 18 18 24 10 36"
              stroke="#171512"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M 18 36 L 9 37 L 12 28"
              stroke="#171512"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Short Editorial Caption directly beneath the video frame */}
      <div className={styles.videoCaptionRow}>
        <span className={styles.captionBulletDot} aria-hidden="true" />
        <span className={styles.captionText}>
          GDG TCOER &middot; A moment from the community
        </span>
      </div>
    </motion.div>
  );
};
