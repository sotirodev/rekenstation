import type { Metadata } from "next";
import { CalculatorExplorer } from "@/components/calculator/CalculatorExplorer";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Alle calculators",
  description:
    "Bekijk alle calculators van Rekenstation: geld, gezondheid, auto, wonen, belastingen en meer. Zoek en filter op categorie.",
  alternates: { canonical: "/calculators" },
};

export default async function CalculatorsPage({
  searchParams,
}: PageProps<"/calculators">) {
  const params = await searchParams;
  const rawQuery = params.q;
  const initialQuery = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Alle calculators" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        Alle calculators
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Zoek of filter op categorie om de calculator te vinden die je nodig hebt.
      </p>

      <div className="mt-8">
        <CalculatorExplorer initialQuery={initialQuery} />
      </div>
    </div>
  );
}
