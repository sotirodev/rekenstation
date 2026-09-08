import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculators, getCalculator, getCalculatorsByCategory } from "@/data/calculators";
import { categories, getCategory } from "@/data/categories";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export function generateStaticParams() {
  return [
    ...calculators.map((calculator) => ({ slug: calculator.slug })),
    ...categories.map((category) => ({ slug: category.slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  const calculator = getCalculator(slug);
  if (calculator) {
    return {
      title: calculator.title,
      description: calculator.metaDescription,
      alternates: { canonical: `/${calculator.slug}` },
      openGraph: {
        title: calculator.title,
        description: calculator.metaDescription,
      },
    };
  }

  const category = getCategory(slug);
  if (category) {
    return {
      title: `${category.title} calculators`,
      description: category.description,
      alternates: { canonical: `/${category.slug}` },
    };
  }

  return {};
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;

  const calculator = getCalculator(slug);
  if (calculator) {
    return <CalculatorShell calculator={calculator} />;
  }

  const category = getCategory(slug);
  if (category) {
    const items = getCalculatorsByCategory(category.slug);

    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.title }]} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
          {category.title} calculators
        </h1>
        <p className="mt-3 max-w-2xl text-muted">{category.description}</p>

        {items.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <CalculatorCard key={item.slug} calculator={item} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted">
            Er zijn nog geen calculators in deze categorie. Kom binnenkort terug.
          </p>
        )}
      </div>
    );
  }

  notFound();
}
