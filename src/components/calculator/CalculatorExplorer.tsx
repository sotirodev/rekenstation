"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import type { CalculatorConfig } from "@/types/calculator";

interface CalculatorExplorerProps {
  placeholder?: string;
  initialQuery?: string;
}

function sorteerAlfabetisch(items: CalculatorConfig[]): CalculatorConfig[] {
  return [...items].sort((a, b) => a.shortTitle.localeCompare(b.shortTitle, "nl"));
}

export function CalculatorExplorer({
  placeholder = "Welke berekening zoek je?",
  initialQuery = "",
}: CalculatorExplorerProps) {
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<string>("alle");

  const normalizedQuery = query.trim().toLowerCase();

  const matchesQuery = (calculator: CalculatorConfig) =>
    normalizedQuery === "" ||
    calculator.title.toLowerCase().includes(normalizedQuery) ||
    calculator.summary.toLowerCase().includes(normalizedQuery);

  const filtered = useMemo(() => {
    return sorteerAlfabetisch(
      calculators.filter(
        (calculator) =>
          (categoryFilter === "alle" || calculator.category === categoryFilter) &&
          matchesQuery(calculator),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedQuery, categoryFilter]);

  return (
    <div>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label="Zoek een calculator"
          className="w-full rounded-full border border-border bg-surface py-3.5 pl-12 pr-4 text-base text-foreground outline-none transition-colors focus:ring-2 focus:ring-brand/40"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <FilterPill
          label="Alle categorieën"
          active={categoryFilter === "alle"}
          onClick={() => setCategoryFilter("alle")}
        />
        {categories.map((category) => (
          <FilterPill
            key={category.slug}
            label={category.title}
            active={categoryFilter === category.slug}
            onClick={() => setCategoryFilter(category.slug)}
          />
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Geen calculators gevonden. Probeer een andere zoekterm of categorie.
        </p>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-brand bg-mint text-brand-dark"
          : "border-border text-muted hover:border-brand"
      }`}
    >
      {label}
    </button>
  );
}
