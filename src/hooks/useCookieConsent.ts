"use client";

import { useSyncExternalStore } from "react";
import { getCookieConsent, subscribeCookieConsent, type CookieConsent } from "@/lib/cookieConsent";

export function useCookieConsent(): CookieConsent {
  return useSyncExternalStore(subscribeCookieConsent, getCookieConsent, () => null);
}
