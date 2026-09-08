import { Breadcrumbs, type Crumb } from "@/components/navigation/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
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
      ...(calculator.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: calculator.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
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

function Faq({ items }: { items: CalculatorConfig["faq"] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-foreground">Veelgestelde vragen</h2>
      <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
        {items.map((item) => (
          <details key={item.question} className="group p-4">
            <summary className="cursor-pointer list-none font-medium text-foreground marker:content-none">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
