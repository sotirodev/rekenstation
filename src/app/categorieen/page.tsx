import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getCalculatorsByCategory } from "@/data/calculators";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Categorieën",
  description: "Bekijk alle categorieën calculators van Rekenstation.",
  alternates: { canonical: "/categorieen" },
};

export default function CategorieenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categorieën" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        Categorieën
      </h1>
      <p className="mt-3 max-w-2xl text-muted">Kies een categorie om de bijbehorende calculators te bekijken.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const count = getCalculatorsByCategory(category.slug).length;

          return (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-brand-dark transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted">
                  {count} {count === 1 ? "tool" : "tools"}
                </span>
              </div>
              <div>
                <h2 className="font-semibold text-foreground">{category.title}</h2>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
              </div>
              <span className="mt-auto flex items-center gap-1 text-sm font-medium text-brand-dark">
                Bekijken
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
