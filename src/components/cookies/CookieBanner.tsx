"use client";

import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { setCookieConsent } from "@/lib/cookieConsent";

export function CookieBanner() {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-lg sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/90">
          Rekenstation gebruikt cookies voor websitestatistieken (Google Analytics) en om
          straks advertenties te kunnen tonen (Google AdSense). Lees meer in ons{" "}
          <Link href="/cookiebeleid" className="underline hover:text-brand-dark">
            cookiebeleid
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setCookieConsent("declined")}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-brand"
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
