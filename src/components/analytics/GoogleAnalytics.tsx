"use client";

import React from "react";
import Script from "next/script";

export const GoogleAnalytics: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Only load analytics script if a valid Measurement ID starting with G- is provided
  if (!gaId || !gaId.startsWith("G-")) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
};

