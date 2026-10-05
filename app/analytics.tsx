"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function cleanText(value: string | null | undefined) {
  return value?.replace("↗", "").replace(/\s+/g, " ").trim() ?? "";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const trackLinkClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a");
      if (!link || !window.gtag) return;

      const url = new URL(link.href, window.location.href);
      const linkText = cleanText(link.textContent);

      if (url.pathname.endsWith("/Jing_Han_CV.pdf")) {
        window.gtag("event", "cv_download", {
          file_name: "Jing_Han_CV.pdf",
          link_text: linkText,
          link_url: url.href,
        });
        return;
      }

      if (link.closest("#research, .publication")) {
        const paperTitle = cleanText(link.closest("article")?.querySelector("h3")?.textContent);
        window.gtag("event", "paper_click", {
          paper_title: paperTitle || linkText,
          link_text: linkText,
          link_url: url.href,
        });
      }
    };

    document.addEventListener("click", trackLinkClick);
    return () => document.removeEventListener("click", trackLinkClick);
  }, []);

  return null;
}
