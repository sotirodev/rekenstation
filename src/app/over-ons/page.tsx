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
          Rekenstation.nl is een Nederlandse website met online calculators voor dagelijks
          gebruik, van je nettosalaris tot je hypotheeklasten. Je vult iets in en krijgt direct
          een antwoord, zonder overbodige stappen.
        </p>
        <p>
          De calculators zijn gebaseerd op officiële bronnen waar dat relevant is, zoals de
          Belastingdienst, en worden bijgewerkt wanneer regels of tarieven veranderen.
        </p>
      </div>
    </div>
  );
}
