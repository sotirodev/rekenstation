import { LogOut } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { TransitievergoedingCalculator } from "./Calculator";

export const transitievergoedingConfig: CalculatorConfig = {
  slug: "transitievergoeding-calculator",
  title: "Transitievergoeding calculator",
  shortTitle: "Transitievergoeding calculator",
  category: "geld-salaris",
  icon: LogOut,
  summary: "Bereken een indicatie van de transitievergoeding bij ontslag.",
  metaDescription:
    "Bereken gratis een indicatie van de transitievergoeding bij ontslag op basis van je bruto maandsalaris en dienstjaren.",
  intro: "Vul je bruto maandsalaris en de duur van je dienstverband in.",
  explanation: {
    heading: "Hoe wordt de transitievergoeding berekend?",
    body: [
      "De transitievergoeding is 1/3 bruto maandsalaris per dienstjaar, naar rato voor een onvolledig jaar. Dit geldt vanaf de eerste werkdag, zonder minimale diensttijd.",
      "Er geldt een wettelijk maximumbedrag, of één bruto jaarsalaris als dat hoger is dan het maximum.",
    ],
  },
  faq: [
    {
      question: "Telt vakantiegeld mee in het maandsalaris?",
      answer:
        "Ja, voor de berekening van de transitievergoeding tellen vakantietoeslag en vaste, structurele looncomponenten mee in het bruto maandsalaris.",
    },
    {
      question: "Heb ik altijd recht op een transitievergoeding?",
      answer:
        "In de meeste gevallen van ontslag op initiatief van de werkgever wel, maar er zijn uitzonderingen (bijvoorbeeld bij ernstig verwijtbaar handelen). Raadpleeg een jurist of het UWV voor jouw specifieke situatie.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator", "vakantiegeld-calculator"],
  laatstGecontroleerd: "2026-09-11",
  Component: TransitievergoedingCalculator,
};
