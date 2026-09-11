import type { FaqItem } from "@/types/calculator";

export function Faq({ items }: { items: FaqItem[] }) {
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

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
