import { TrendingUp } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { SamengesteldeInterestCalculator } from "./Calculator";

export const samengesteldeInterestConfig: CalculatorConfig = {
  slug: "samengestelde-interest-calculator",
  title: "Samengestelde interest calculator",
  shortTitle: "Samengestelde interest",
  category: "overige",
  icon: TrendingUp,
  summary: "Bereken hoeveel een bedrag wordt met rente-op-rente over meerdere jaren.",
  metaDescription:
    "Bereken gratis hoeveel een startkapitaal wordt na een aantal jaren met samengestelde interest (rente-op-rente).",
  intro: "Vul een startkapitaal, rentepercentage en looptijd in om het eindkapitaal te zien.",
  explanation: {
    heading: "Wat is samengestelde interest?",
    body: [
      "Bij samengestelde interest (rente-op-rente) wordt de rente niet alleen over je startkapitaal berekend, maar ook over de rente die je in eerdere jaren al hebt opgebouwd. Hierdoor groeit een bedrag sneller dan bij enkelvoudige rente.",
      "Deze calculator rekent maandelijks rente bij, wat in de praktijk vergelijkbaar is met de meeste spaarrekeningen en beleggingen.",
    ],
  },
  faq: [
    {
      question: "Wat is het verschil met enkelvoudige rente?",
      answer:
        "Bij enkelvoudige rente bereken je elk jaar hetzelfde rentebedrag over alleen het startkapitaal. Bij samengestelde interest wordt de rente van eerdere jaren ook meegeteld, waardoor het eindbedrag hoger uitvalt naarmate de looptijd langer is.",
    },
    {
      question: "Kan ik ook een maandelijkse inleg meerekenen?",
      answer:
        "Deze calculator gaat uit van een eenmalig startkapitaal. Wil je ook een maandelijkse inleg meerekenen, gebruik dan de spaarrente calculator.",
    },
  ],
  relatedSlugs: ["spaarrente-calculator", "percentage-calculator"],
  Component: SamengesteldeInterestCalculator,
};
