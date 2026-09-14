"use client";

import Script from "next/script";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const gtagInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JS0CPPKBR6');
`;

/** Laadt Google Analytics en AdSense pas nadat de bezoeker hiervoor toestemming heeft gegeven. */
export function Analytics() {
  const consent = useCookieConsent();

  if (consent !== "accepted") return null;

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JS0CPPKBR6" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {gtagInitScript}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5540080208382917"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
