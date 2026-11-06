"use client";

import React, { useEffect, useRef } from "react";
import { MaskingTape } from "@/components/common/MaskingTape";
import { trackEvent } from "@/lib/analytics";
import styles from "./Contact.module.scss";

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackEvent("contact_section_view", { section: "contact" });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className={styles.contactSection}
      aria-label="Section 06: Contact and Colophon"
    >
      {/* Anchor for direct #contact navigation */}
      <span id="contact-anchor" className={styles.sectionAnchor} aria-hidden="true" />

      <div className={styles.contactContainer}>
        {/* 1. Section Header: 06 / CONTACT & COLOPHON */}
        <header className={styles.sectionHeaderRow}>
          <div className={styles.sectionTag}>
            <span className={styles.tagNum}>06</span>
            <span className={styles.tagSep}>/</span>
            <span className={styles.tagText}>CONTACT &amp; COLOPHON</span>
          </div>

          <div className={styles.ruleWithNode}>
            <span className={styles.ruleNode} />
            <div className={styles.headerRule} />
          </div>
        </header>

        {/* 2. Headline & Sanskrit Paper Note Row */}
        <div className={styles.headerMainRow}>
          <div className={styles.headlineCol}>
            <div className={styles.brandTagline}>
              Curious by default. Builder by choice.
            </div>

            <h2 className={styles.editorialHeadline}>
              <span className={styles.headlineCharcoal}>Let&apos;s build something</span>
              <span className={styles.headlineVermilion}>meaningful together.</span>
            </h2>

            <p className={styles.supportingCopy}>
              I am always open to exploring ambitious software collaborations, full-stack web
              systems, AI engineering initiatives, or technical discussions. Whether you have an
              opportunity or an idea to discuss, my inbox is open.
            </p>
          </div>

          {/* Archival Sanskrit Paper Note */}
          <aside
            className={styles.sanskritNoteScrap}
            aria-label="Sanskrit reflection: Samvadah samruddhaye - Dialogue leads to progress"
          >
            <MaskingTape
              rotation={-3}
              width="50px"
              height="16px"
              className={styles.sanskritNoteTape}
            />
            <span className={styles.sanskritScript} lang="sa">
              संवादः समृद्धये
            </span>
            <span className={styles.sanskritTranslation}>
              Dialogue leads to progress. Every great build begins with a conversation.
            </span>
          </aside>
        </div>

        {/* 3. Contact Actions & Channels Grid */}
        <div className={styles.actionsGrid}>
          {/* Left: Direct Email Block */}
          <div className={styles.directEmailBlock}>
            <div className={styles.blockTitle}>Direct Contact</div>

            <a
              href="mailto:parthmahadik752@gmail.com"
              className={styles.emailButton}
              onClick={() =>
                trackEvent("contact_email_click", {
                  email: "parthmahadik752@gmail.com",
                  source: "contact_button",
                })
              }
              aria-label="Send email to Parth Mahadik at parthmahadik752@gmail.com"
            >
              <span>parthmahadik752@gmail.com</span>
              <span className={styles.emailArrow} aria-hidden="true">
                ↗
              </span>
            </a>

            <div className={styles.availabilityBadge}>
              <span className={styles.availableDot} aria-hidden="true" />
              <span>Available for software engineering roles and technical collaborations</span>
            </div>
          </div>

          {/* Right: Verified Professional Channels */}
          <div className={styles.channelsCol}>
            <div className={styles.blockTitle}>Profiles &amp; Repositories</div>

            <ul className={styles.channelsList}>
              <li>
                <a
                  href="https://github.com/ParthMahadik33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItemLink}
                  onClick={() =>
                    trackEvent("github_click", {
                      url: "https://github.com/ParthMahadik33",
                      source: "contact_section",
                    })
                  }
                  aria-label="Parth Mahadik on GitHub (opens in new tab)"
                >
                  <span>
                    <span className={styles.channelLabel}>Code</span>
                    GitHub / ParthMahadik33
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/parthmahadik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItemLink}
                  onClick={() =>
                    trackEvent("linkedin_click", {
                      url: "https://www.linkedin.com/in/parthmahadik/",
                      source: "contact_section",
                    })
                  }
                  aria-label="Parth Mahadik on LinkedIn (opens in new tab)"
                >
                  <span>
                    <span className={styles.channelLabel}>Network</span>
                    LinkedIn / in/parthmahadik
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.credly.com/users/parth-mahadik.7429132e/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItemLink}
                  onClick={() =>
                    trackEvent("external_project_click", {
                      project: "Credly Google Cloud Badges",
                      source: "contact_section",
                    })
                  }
                  aria-label="Verified Google Cloud Badges on Credly (opens in new tab)"
                >
                  <span>
                    <span className={styles.channelLabel}>Badges</span>
                    Credly / Google Cloud Badges
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>

            {/* Scorebadge Public Site Audit Link */}
            <div className={styles.scorebadgeWrap}>
              <a
                href="https://scorebadge.com/site/parthmahadik.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.scorebadgePill}
                onClick={() =>
                  trackEvent("external_project_click", {
                    project: "Scorebadge Audit",
                    source: "contact_footer",
                  })
                }
                aria-label="View public website score and audit report on scorebadge.com (opens in new tab)"
              >
                <span className={styles.scorebadgeIcon} aria-hidden="true">
                  ✦
                </span>
                <span>scorebadge · Public Site Audit</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Colophon Footer */}
        <div className={styles.colophonFooter}>
          <div className={styles.colophonLeft}>
            <div>
              &copy; {new Date().getFullYear()} Parth Mahadik. Built with Next.js, TypeScript &amp; SCSS Modules.
            </div>
            <div>
              Engineered in Pune, Maharashtra, India. All rights reserved.
            </div>
          </div>

          <a
            href="#home"
            className={styles.backToTopLink}
            onClick={() =>
              trackEvent("section_navigation", {
                section: "home",
                source: "back_to_top",
              })
            }
            aria-label="Back to top of the page"
          >
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

