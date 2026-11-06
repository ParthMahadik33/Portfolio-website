"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { GTM_CONTAINER_ID, trackEvent } from "@/lib/analytics";

/**
 * Google Tag Manager (GTM) Single-Installation Loader
 *
 * Loads GTM container asynchronously after page interactivity (`afterInteractive`)
 * to prevent render blocking and preserve Lighthouse performance.
 *
 * Includes universal passive click handler for automatic resume / document download tracking.
 */
export const GoogleTagManager: React.FC = () => {
  const gtmId = GTM_CONTAINER_ID;

  // Passive event listener for resume and document downloads
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const lower = href.toLowerCase();
      const isResumeOrDoc =
        lower.includes("resume") ||
        lower.includes("cv") ||
        lower.endsWith(".pdf") ||
        target.hasAttribute("download");

      if (isResumeOrDoc) {
        const fileName =
          href.split("/").pop()?.split("?")[0] || "Parth_Mahadik_Resume.pdf";
        trackEvent("resume_download", {
          file_name: fileName,
          file_type: "pdf",
          download_url: href,
          link_text: target.innerText?.trim() || "Resume",
        });
      }
    };

    document.addEventListener("click", handleDocumentClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  if (!gtmId || !gtmId.startsWith("GTM-")) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};
