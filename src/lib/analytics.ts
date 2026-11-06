// Client-side Google Tag Manager & Google Analytics 4 event tracking utility
export const GTM_CONTAINER_ID =
  process.env.NEXT_PUBLIC_GTM_ID || "GTM-PJJDLZR2";
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-4GD9QZJK5D";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventParamValue = string | number | boolean | undefined | null;

/**
 * Dispatches a custom event to Google Tag Manager via dataLayer.
 * If window.gtag is initialized by the GTM container, also forwards the event directly.
 * Safe to call on server or when analytics is blocked/not loaded.
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, EventParamValue>
): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  } catch {
    // Fail silently in strict or adblocked environments
  }
}
