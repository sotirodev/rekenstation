"use client";

import { setCookieConsent } from "@/lib/cookieConsent";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => setCookieConsent(null)}
      className="text-sm text-muted transition-colors duration-150 hover:text-brand-dark"
    >
      Cookie-instellingen
    </button>
  );
}
