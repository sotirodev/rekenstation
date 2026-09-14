const CONSENT_KEY = "rekenstation:cookie-consent";

export type CookieConsent = "accepted" | "declined" | null;

type Listener = () => void;
const listeners = new Set<Listener>();

let cache: CookieConsent | undefined;

function readFromStorage(): CookieConsent {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw === "accepted" || raw === "declined" ? raw : null;
  } catch {
    return null;
  }
}

export function getCookieConsent(): CookieConsent {
  if (cache === undefined) {
    cache = readFromStorage();
  }
  return cache;
}

export function setCookieConsent(value: CookieConsent): void {
  cache = value;
  try {
    if (value === null) {
      window.localStorage.removeItem(CONSENT_KEY);
    } else {
      window.localStorage.setItem(CONSENT_KEY, value);
    }
  } catch {
    // localStorage kan onbeschikbaar zijn (privémodus, uitgeschakeld); dan onthouden we de keuze niet.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeCookieConsent(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
