"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";
import { getCalculatorsByCategory } from "@/data/calculators";

export function CategoryMegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-150 hover:text-brand-dark"
      >
        Categorieën
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-20 w-[560px] -translate-x-1/2 pt-2">
          <div className="grid grid-cols-2 gap-6 rounded-xl border border-border bg-surface p-6 shadow-lg">
            {categories.map((category) => {
              const items = getCalculatorsByCategory(category.slug);
              return (
                <div key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-sm font-semibold text-ink transition-colors duration-150 hover:text-brand-dark dark:text-foreground"
                  >
                    {category.title}
                  </Link>
                  {items.length > 0 ? (
                    <ul className="mt-1.5 space-y-1">
                      {items.map((calculator) => (
                        <li key={calculator.slug}>
                          <Link
                            href={`/${calculator.slug}`}
                            className="block rounded-md text-sm text-muted transition-all duration-150 hover:translate-x-0.5 hover:text-brand-dark"
                          >
                            {calculator.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1.5 text-sm text-muted">Binnenkort beschikbaar</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
