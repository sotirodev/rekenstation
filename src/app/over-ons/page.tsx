import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees meer over Rekenstation.nl en waarom deze website bestaat.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Over ons" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        Over Rekenstation
      </h1>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/90">
        <p>
          Rekenstation.nl is een Nederlandse website met handige online calculators voor
          dagelijks gebruik. Van je nettosalaris tot je hypotheeklasten: wij willen dat je in een
          paar seconden een duidelijk antwoord krijgt, zonder ingewikkelde formulieren of
          overbodige stappen.
        </p>
        <p>
          Het doel van Rekenstation is simpel: praktische berekeningen op het gebied van geld,
          werk, wonen, gezondheid en meer eenvoudig toegankelijk maken voor iedereen. Onze
          calculators zijn gebaseerd op officiële bronnen waar dat relevant is, zoals de
          Belastingdienst, en worden bijgewerkt wanneer regels of tarieven veranderen.
        </p>
        <p>
          Rekenstation is en blijft in ontwikkeling — we voegen regelmatig nieuwe calculators toe
          om je nog beter te helpen.
        </p>
      </div>
    </div>
  );
}
