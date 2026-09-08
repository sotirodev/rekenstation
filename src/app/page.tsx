import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { calculators, getPopularCalculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
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
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="group flex items-center gap-2 rounded-full border border-border bg-background py-2 pl-2.5 pr-4 text-sm font-medium text-foreground transition-all duration-150 hover:border-brand hover:text-brand-dark hover:shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint text-brand-dark transition-transform duration-150 group-hover:scale-110">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  {category.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-foreground">En nog veel meer</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted">
          In totaal staan er {calculators.length} calculators klaar, doorzoekbaar op onderwerp.
        </p>
        <Link
          href="/calculators"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Bekijk alle calculators
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
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
