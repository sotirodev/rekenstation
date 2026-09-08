"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";
import { getCalculatorsByCategory } from "@/data/calculators";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Alle calculators" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

function noopSubscribe() {
  return () => {};
}

/** Levert `false` tijdens SSR/eerste render en `true` zodra we op de client gehydrateerd zijn. */
function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const menu = (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-4">
        <span className="font-semibold text-foreground">Menu</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Sluit menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-surface-muted"
          >
            {link.label}
          </Link>
        ))}

        <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-muted">
          Categorieën
        </p>
        {categories.map((category) => {
          const isOpen = openCategory === category.slug;
          const items = getCalculatorsByCategory(category.slug);
          return (
            <div key={category.slug}>
              <button
                type="button"
                onClick={() => setOpenCategory(isOpen ? null : category.slug)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-surface-muted"
              >
                {category.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <div className="flex flex-col gap-1 px-3 pb-2">
                  <Link
                    href={`/${category.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark"
                  >
                    Bekijk categorie
                  </Link>
                  {items.map((calculator) => (
                    <Link
                      key={calculator.slug}
                      href={`/${calculator.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-muted"
                    >
                      {calculator.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open && mounted && createPortal(menu, document.body)}
    </div>
  );
}
