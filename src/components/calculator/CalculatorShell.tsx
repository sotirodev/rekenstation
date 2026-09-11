import { Breadcrumbs, type Crumb } from "@/components/navigation/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { Faq, faqPageJsonLd } from "@/components/calculator/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategory } from "@/data/categories";
import { getCalculatorsBySlug } from "@/data/calculators";
import type { CalculatorConfig } from "@/types/calculator";

export function CalculatorShell({ calculator }: { calculator: CalculatorConfig }) {
  const category = getCategory(calculator.category);
  const related = getCalculatorsBySlug(calculator.relatedSlugs);
  const CalculatorComponent = calculator.Component;

  const breadcrumbItems: Crumb[] = [
    { label: "Home", href: "/" },
    ...(category ? [{ label: category.title, href: `/${category.slug}` }] : []),
    { label: calculator.shortTitle },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          ...(item.href ? { item: item.href } : {}),
        })),
      },
      {
        "@type": "WebApplication",
        name: calculator.title,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      },
      ...(calculator.faq.length > 0 ? [faqPageJsonLd(calculator.faq)] : []),
      ...(calculator.howToSteps && calculator.howToSteps.length > 0
        ? [
            {
              "@type": "HowTo",
              name: calculator.title,
              step: calculator.howToSteps.map((tekst, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                text: tekst,
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground sm:text-4xl">
        {calculator.title}
      </h1>
      <p className="mt-3 text-base text-muted">{calculator.intro}</p>

      <div className="mt-6">
        <CalculatorComponent />
      </div>

      <div className="mt-8">
        <AdSlot position="between-content" />
      </div>

      {calculator.howToSteps && calculator.howToSteps.length > 0 && (
        <HowToSteps steps={calculator.howToSteps} />
      )}

      <Explanation calculator={calculator} />

      {calculator.faq.length > 0 && <Faq items={calculator.faq} />}

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">Gerelateerde calculators</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <CalculatorCard key={item.slug} calculator={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function HowToSteps({ steps }: { steps: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-foreground">In stappen</h2>
      <ol className="mt-4 space-y-3">
        {steps.map((stap, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-semibold text-brand-dark">
              {index + 1}
            </span>
            <span className="text-[15px] leading-relaxed text-foreground/90">{stap}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Explanation({ calculator }: { calculator: CalculatorConfig }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-foreground">
        {calculator.explanation.heading}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/90">
        {calculator.explanation.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
