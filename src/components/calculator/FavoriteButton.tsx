"use client";

import { Star } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { toggleFavorite } from "@/lib/favorites";

export function FavoriteButton({ slug, className = "" }: { slug: string; className?: string }) {
  const favorites = useFavorites();
  const isFavoriet = favorites.includes(slug);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(slug);
      }}
      aria-label={isFavoriet ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
      aria-pressed={isFavoriet}
      className={`relative z-10 rounded-full p-1.5 transition-colors hover:bg-mint ${
        isFavoriet ? "text-brand-dark" : "text-muted"
      } ${className}`}
    >
      <Star className="h-5 w-5" strokeWidth={2} fill={isFavoriet ? "currentColor" : "none"} aria-hidden />
    </button>
  );
}
