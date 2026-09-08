import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        {title}
      </h1>
      {intro && <p className="mt-3 text-muted">{intro}</p>}

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
            <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-foreground/90">
              {section.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
