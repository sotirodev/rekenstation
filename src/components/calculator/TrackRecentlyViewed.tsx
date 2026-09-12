"use client";

import { useEffect } from "react";
import { addRecentlyViewed } from "@/lib/favorites";

export function TrackRecentlyViewed({ slug }: { slug: string }) {
  useEffect(() => {
    addRecentlyViewed(slug);
  }, [slug]);

  return null;
}
