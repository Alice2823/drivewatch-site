export const GA_MEASUREMENT_ID = "G-JF85KVW71Y";

type GtagArguments =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["set", Record<string, unknown>];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArguments) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: GtagArguments) => {
      window.dataLayer?.push(args);
    });

  return window.gtag;
}

export function trackPageview(path: string, title?: string) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = ensureGtag();
  const pageUrl = new URL(path, window.location.origin);
  const pageTitle = title ?? document.title;

  gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_title: pageTitle,
    page_location: pageUrl.toString(),
    page_path: `${pageUrl.pathname}${pageUrl.search}`,
  });
}
