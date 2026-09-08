import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPopularCalculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { CalculatorExplorer } from "@/components/calculator/CalculatorExplorer";
import { HeroSearch } from "@/components/calculator/HeroSearch";
import { JsonLd } from "@/components/seo/JsonLd";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Rekenstation",
      url: "https://rekenstation.nl",
      logo: "https://rekenstation.nl/icon.svg",
    },
    {
      "@type": "WebSite",
      name: "Rekenstation",
      url: "https://rekenstation.nl",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://rekenstation.nl/calculators?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
  const populaireCalculators = getPopularCalculators();

  return (
    <div>
      <JsonLd data={jsonLd} />
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-ink dark:text-foreground sm:text-5xl">
            Bereken het snel met Rekenstation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Handige online calculators voor geld, werk, wonen, auto, gezondheid en meer.
          </p>

          <div className="mx-auto mt-8 max-w-xl text-left">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-foreground">Meest gebruikte calculators</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {populaireCalculators.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">Categorieën</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-brand-dark transition-transform duration-200 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
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
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Alle calculators</h2>
          <Link href="/calculators" className="text-sm font-medium text-brand-dark hover:underline">
            Bekijk alles
          </Link>
        </div>
        <div className="mt-6">
          <CalculatorExplorer />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground">Over Rekenstation</h2>
          <p className="mt-3 text-sm text-muted">
            Rekenstation.nl helpt je om snel en betrouwbaar de dagelijkse berekeningen te maken die
            ertoe doen — van je nettosalaris tot je hypotheeklasten. Geen ingewikkelde formulieren,
            gewoon direct antwoord.
          </p>
        </div>
      </section>
    </div>
  );
}
