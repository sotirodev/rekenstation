"use client";

import { useFavorites, useRecentlyViewed } from "@/hooks/useFavorites";
import { getCalculator } from "@/data/calculators";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import type { CalculatorConfig } from "@/types/calculator";

function slugsNaarCalculators(slugs: string[]): CalculatorConfig[] {
  return slugs
    .map((slug) => getCalculator(slug))
    .filter((calculator): calculator is CalculatorConfig => Boolean(calculator));
}

export function FavorietenSectie() {
  const favorieten = slugsNaarCalculators(useFavorites());

  if (favorieten.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-foreground">Jouw favorieten</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favorieten.map((calculator) => (
          <CalculatorCard key={calculator.slug} calculator={calculator} />
        ))}
      </div>
    </section>
  );
}

export function OnlangsBekekenSectie() {
  const onlangsBekeken = slugsNaarCalculators(useRecentlyViewed());

  if (onlangsBekeken.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-foreground">Onlangs bekeken</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {onlangsBekeken.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      </div>
    </section>
  );
}
