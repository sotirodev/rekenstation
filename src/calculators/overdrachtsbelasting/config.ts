import { FileStack } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { OverdrachtsbelastingCalculator } from "./Calculator";

export const overdrachtsbelastingConfig: CalculatorConfig = {
  slug: "overdrachtsbelasting-calculator",
  title: "Overdrachtsbelasting calculator",
  shortTitle: "Overdrachtsbelasting calculator",
  category: "wonen-hypotheek",
  icon: FileStack,
  summary: "Bereken de overdrachtsbelasting bij aankoop van een woning of pand.",
  metaDescription:
    "Bereken gratis de overdrachtsbelasting bij het kopen van een woning, inclusief de startersvrijstelling, op basis van de officiële Belastingdienst-tarieven voor 2025 en 2026.",
  intro: "Vul de aankoopprijs en je situatie in om de overdrachtsbelasting te berekenen.",
  explanation: {
    heading: "Hoe wordt de overdrachtsbelasting berekend?",
    body: [
      "Ga je zelf in de woning wonen, dan geldt het verlaagde tarief van 2%. Kom je in aanmerking voor de startersvrijstelling (18 tot en met 34 jaar, eenmalig, en de woning blijft onder de geldende woningwaardegrens), dan betaal je 0%.",
      "Koop je een woning als belegging of tweede huis, of een bedrijfspand, dan geldt een hoger tarief. Voor niet-woningen (zoals bedrijfspanden) blijft dit tarief in 2025 en 2026 gelijk; voor beleggingswoningen daalt het tarief in 2026.",
    ],
  },
  faq: [
    {
      question: "Wat gebeurt er als ik net boven de startersgrens zit?",
      answer:
        "De startersvrijstelling is een alles-of-nietsregeling: kom je ook maar €1 boven de woningwaardegrens, dan vervalt de vrijstelling volledig en betaal je het reguliere hoofdverblijf-tarief van 2% over de hele aankoopprijs.",
    },
    {
      question: "Kan ik de startersvrijstelling meerdere keren gebruiken?",
      answer: "Nee, de startersvrijstelling kan je maar één keer in je leven gebruiken.",
    },
  ],
  relatedSlugs: ["hypotheek-calculator", "bruto-netto-calculator"],
  laatstGecontroleerd: "2026-09-11",
  popular: true,
  Component: OverdrachtsbelastingCalculator,
};
