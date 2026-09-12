const FAVORITES_KEY = "rekenstation:favorieten";
const RECENT_KEY = "rekenstation:onlangs-bekeken";
const MAX_RECENT = 8;

type Listener = () => void;
const listeners = new Set<Listener>();

// Cache houdt per key een stabiele array-referentie bij, zodat
// useSyncExternalStore niet bij elke render een "nieuwe" snapshot ziet
// (wat anders tot een oneindige update-lus leidt).
const cache = new Map<string, string[]>();

function readFromStorage(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getList(key: string): string[] {
  if (!cache.has(key)) {
    cache.set(key, readFromStorage(key));
  }
  return cache.get(key)!;
}

function setList(key: string, list: string[]): void {
  cache.set(key, list);
  try {
    window.localStorage.setItem(key, JSON.stringify(list));
  } catch {
    // localStorage kan onbeschikbaar zijn (privémodus, uitgeschakeld); dan slaan we simpelweg niets op.
  }
  listeners.forEach((listener) => listener());
}

export function getFavorites(): string[] {
  return getList(FAVORITES_KEY);
}

export function toggleFavorite(slug: string): void {
  const current = getList(FAVORITES_KEY);
  const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
  setList(FAVORITES_KEY, next);
}

export function getRecentlyViewed(): string[] {
  return getList(RECENT_KEY);
}

export function addRecentlyViewed(slug: string): void {
  const current = getList(RECENT_KEY).filter((s) => s !== slug);
  setList(RECENT_KEY, [slug, ...current].slice(0, MAX_RECENT));
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
