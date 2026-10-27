"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ProjectTape } from "./ProjectTape";
import styles from "./SelectedWork.module.scss";

export const AgroRentProject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isSpread, setIsSpread] = useState(false);

  const toggleSpread = () => {
    setIsSpread((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSpread();
    }
  };

  // Scroll-based Stack Spread parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scrollSpreadLeftX = useTransform(scrollYProgress, [0.1, 0.9], [0, -18]);
  const scrollSpreadRightX = useTransform(scrollYProgress, [0.1, 0.9], [0, 18]);
  const scrollRotateLeft = useTransform(scrollYProgress, [0.1, 0.9], [-4, -6.5]);
  const scrollRotateRight = useTransform(scrollYProgress, [0.1, 0.9], [6, 8.5]);

  const easeCurve: [number, number, number, number] = [0.25, 1, 0.5, 1];
  const tags = ["Python", "Flask", "Gemini API", "Twilio", "Razorpay"];

  return (
    <article
      ref={containerRef}
      className={styles.flagshipArticle}
      aria-labelledby="agrorent-title"
    >
      {/* Left Column: Project Editorial Metadata */}
      <div className={styles.projectInfoColumn}>
        <div className={styles.projectMetaHeader}>
          <div className={styles.projectNumberRow}>
            <span className={styles.projectNumber}>01</span>
            <div className={styles.projectRule} />
          </div>
          <div className={styles.titleBadgeRow}>
            <h3 id="agrorent-title" className={styles.projectTitle}>
              AgroRent
            </h3>
            <span className={styles.liveBadge}>LIVE</span>
          </div>
        </div>

        <p className={styles.projectDescription}>
          An AI-assisted farm machinery rental marketplace designed to connect
          farmers with equipment owners through a more accessible, transparent
          rental experience.
        </p>

        {/* Technology Tags */}
        <ul className={styles.techTagList} aria-label="Technologies used in AgroRent">
          {tags.map((tag) => (
            <li key={tag} className={styles.techTagItem}>
              {tag}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className={styles.projectActionLinks}>
          <a
            href="https://agrorent-v3.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="Explore AgroRent live application (opens in new tab)"
          >
            <span>EXPLORE PROJECT</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/ParthMahadik33/AgroRent-v3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.editorialActionLink}
            aria-label="View AgroRent source code on GitHub (opens in new tab)"
          >
            <span>VIEW SOURCE</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Central Vintage Farm Tractor Engraving bridging text & collage */}
      <div className={styles.tractorEngravingWrap} aria-hidden="true">
        <Image
          src="/assets/projects/tractor-farm-landscape.jpg"
          alt=""
          width={1376}
          height={768}
          className={styles.tractorEngravingImg}
          priority={false}
        />
      </div>

      {/* Right Column: Flagship Editorial Collage */}
      <div
        className={`${styles.agrorentCollageContainer} ${isSpread ? styles.isSpread : ""}`}
        onClick={toggleSpread}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="AgroRent interactive editorial showcase. Tap or hover to fan out artifacts."
      >
        {/* Botanical Sprigs behind the collage (Top Right & Bottom Right) */}
        <div className={styles.botanicalSprigTopRight} aria-hidden="true">
          <Image
            src="/assets/projects/botanical-sprigs.jpg"
            alt=""
            width={600}
            height={600}
            className={styles.botanicalSprigImg}
          />
        </div>
        <div className={styles.botanicalSprigBottomRight} aria-hidden="true">
          <Image
            src="/assets/projects/botanical-sprigs.jpg"
            alt=""
            width={600}
            height={600}
            className={styles.botanicalSprigImg}
          />
        </div>

        {/* Archival Torn Paper Layer Backing */}
        <div className={styles.archivalTornPaperBacking} aria-hidden="true" />

        {/* LEFT ARTIFACT: AI Condition Analysis Card */}
        <motion.div
          className={styles.aiConditionCard}
          style={
            shouldReduceMotion
              ? {}
              : {
                  x: scrollSpreadLeftX,
                  rotate: scrollRotateLeft,
                }
          }
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, x: -10, rotate: -4 }
          }
          whileInView={{ opacity: 1, x: 0, rotate: -5.5 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: 0.15,
            ease: easeCurve,
          }}
        >
          {/* Handwritten Annotation 1 */}
          <div className={styles.annotationCondition} aria-hidden="true">
            <span className={styles.handwrittenText}>
              AI-assisted<br />equipment<br />condition checks
            </span>
            <svg
              viewBox="0 0 50 40"
              className={styles.conditionArrowSvg}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 12 6 Q 30 14 36 32"
                stroke="#171512"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2.5 1.5"
              />
              <path
                d="M 30 28 L 36 33 L 39 25"
                stroke="#171512"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.conditionCardInner}>
            <div className={styles.conditionCardHeader}>
              <span className={styles.conditionCardTitle}>AI Condition Analysis</span>
            </div>

            <div className={styles.conditionPhotoWrap}>
              <Image
                src="/assets/projects/tractor-condition.jpg"
                alt="AI machinery inspection closeup of tractor wheel and engine"
                width={320}
                height={220}
                className={styles.conditionPhotoImg}
              />
            </div>

            <div className={styles.conditionBadgeRow}>
              <span className={styles.goodConditionBadge}>
                <span className={styles.checkIcon}>✓</span> Good Condition
              </span>
            </div>

            <ul className={styles.conditionChecklist}>
              <li className={styles.checkItem}>
                <span className={styles.itemLabel}>✓ Tire condition</span>
                <span className={styles.itemValue}>Good</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.itemLabel}>✓ Engine health</span>
                <span className={styles.itemValue}>Good</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.itemLabel}>✓ Hydraulics</span>
                <span className={styles.itemValue}>Good</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.itemLabel}>✓ Overall rating</span>
                <span className={styles.ratingValue}>8.5/10</span>
              </li>
            </ul>
          </div>

          <ProjectTape rotation={-5} width={44} height={15} className={styles.conditionTape} />
        </motion.div>

        {/* CENTER ARTIFACT: Main AgroRent Desktop Window */}
        <motion.div
          className={styles.mainDesktopWindow}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24, rotate: 1.5 }
          }
          whileInView={{ opacity: 1, y: 0, rotate: 2.2 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: 0.1,
            ease: easeCurve,
          }}
        >
          <div className={styles.desktopBezel}>
            <Image
              src="/assets/projects/agrorent-marketplace-screen.jpg"
              alt="AgroRent farm machinery rental homepage interface showing tractors and harvesting equipment"
              width={1040}
              height={585}
              className={styles.desktopScreenshotImg}
              priority={false}
            />
          </div>
          <ProjectTape
            rotation={16}
            width={60}
            height={20}
            className={styles.desktopTapeTopRight}
          />
        </motion.div>

        {/* RIGHT ARTIFACT: AgroRent WhatsApp Smartphone Workflow */}
        <motion.div
          className={styles.whatsappPhoneCard}
          style={
            shouldReduceMotion
              ? {}
              : {
                  x: scrollSpreadRightX,
                  rotate: scrollRotateRight,
                }
          }
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, x: 12, rotate: 6 }
          }
          whileInView={{ opacity: 1, x: 0, rotate: 7.8 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: 0.25,
            ease: easeCurve,
          }}
        >
          {/* Handwritten Annotation 2 */}
          <div className={styles.annotationWhatsapp} aria-hidden="true">
            <span className={styles.handwrittenText}>
              Multilingual<br />WhatsApp<br />workflow
            </span>
            <svg
              viewBox="0 0 50 40"
              className={styles.whatsappArrowSvg}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 38 6 Q 22 15 14 30"
                stroke="#171512"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2.5 1.5"
              />
              <path
                d="M 21 28 L 13 32 L 11 23"
                stroke="#171512"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.smartphoneChassis}>
            {/* WhatsApp Header */}
            <div className={styles.whatsappHeader}>
              <div className={styles.waProfileRow}>
                <span className={styles.waBackBtn}>‹</span>
                <div className={styles.waAvatar}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFFFFF">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className={styles.waContactInfo}>
                  <span className={styles.waName}>AgroRent</span>
                  <span className={styles.waStatus}>Online</span>
                </div>
              </div>
              <div className={styles.waIcons}>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>

            {/* WhatsApp Chat Messages */}
            <div className={styles.whatsappChatArea}>
              {/* Message 1: Incoming from Farmer */}
              <div className={styles.waMessageIncoming}>
                <p className={styles.waMsgText}>
                  Hi! I&apos;m looking for a tractor in my area, is it available?
                </p>
                <span className={styles.waMsgTime}>10:24 AM</span>
              </div>

              {/* Message 2: Outgoing from AgroRent AI Bot */}
              <div className={styles.waMessageOutgoing}>
                <p className={styles.waMsgText}>
                  Yes! We have a John Deere 5050D available for rent, ₹1,200 per day. Would you like to book it?
                </p>
                <span className={styles.waMsgTime}>10:25 AM <span className={styles.waChecks}>✓✓</span></span>
              </div>

              {/* Message 3: Incoming confirmation */}
              <div className={styles.waMessageIncoming}>
                <p className={styles.waMsgText}>Yes, please!</p>
                <span className={styles.waMsgTime}>10:26 AM</span>
              </div>
            </div>

            {/* WhatsApp Bottom Input Bar */}
            <div className={styles.whatsappInputBar}>
              <span className={styles.waInputPlaceholder}>Type a message...</span>
              <div className={styles.waMicBtn}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="#FFFFFF">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
};
