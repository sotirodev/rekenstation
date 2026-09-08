"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    router.push(`/calculators${params}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        aria-hidden
      />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Welke berekening zoek je?"
        aria-label="Zoek een calculator"
        className="w-full rounded-full border border-border bg-surface py-3.5 pl-12 pr-28 text-base text-foreground outline-none transition-colors focus:ring-2 focus:ring-brand/40"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        Zoeken
      </button>
    </form>
  );
}
