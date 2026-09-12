"use client";

import { useSyncExternalStore } from "react";
import { getFavorites, getRecentlyViewed, subscribe } from "@/lib/favorites";

const EMPTY: string[] = [];

export function useFavorites(): string[] {
  return useSyncExternalStore(subscribe, getFavorites, () => EMPTY);
}

export function useRecentlyViewed(): string[] {
  return useSyncExternalStore(subscribe, getRecentlyViewed, () => EMPTY);
}
