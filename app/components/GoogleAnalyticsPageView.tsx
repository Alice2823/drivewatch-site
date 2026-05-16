"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageview } from "../lib/analytics";

let lastTrackedPath: string | null = null;

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const queryString = searchParams.toString();
    const currentPath = queryString ? `${pathname}?${queryString}` : pathname;

    if (currentPath === lastTrackedPath) {
      return;
    }

    lastTrackedPath = currentPath;
    trackPageview(currentPath);
  }, [pathname, searchParams]);

  return null;
}
