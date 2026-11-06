// Client-side Google Analytics 4 (GA4) event tracking utility
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventParamValue = string | number | boolean | undefined | null;

/**
 * Dispatches a custom GA4 event to Google Analytics via gtag if available.
 * Safe to call on server or when GA is not configured.
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, EventParamValue>
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, eventParams);
    } catch {
      // Ignore analytics dispatch errors in strict environments
    }
  }
}
