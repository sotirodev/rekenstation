import { PiggyBank } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { PensioenOpbouwCalculator } from "./Calculator";

export const pensioenOpbouwConfig: CalculatorConfig = {
  slug: "pensioen-opbouw-calculator",
  title: "Pensioen opbouw calculator",
  shortTitle: "Pensioen opbouw",
  category: "geld-salaris",
  icon: PiggyBank,
  summary: "Bereken hoeveel vermogen je opbouwt tot je pensioen.",
  metaDescription:
    "Bereken gratis hoeveel vermogen je opbouwt tot je pensioen, op basis van je huidige inleg, maandelijkse inleg en verwacht rendement.",
  intro: "Vul je huidige vermogen, maandelijkse inleg, verwacht rendement en resterende jaren in.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt hetzelfde principe als samengestelde interest: elke maand groeit je vermogen met het verwachte rendement, en wordt je maandelijkse inleg daarbij opgeteld. Op de lange termijn levert dit een aanzienlijk hoger eindbedrag op dan alleen de som van je inleg.",
    ],
  },
  faq: [
    {
      question: "Is dit een gegarandeerd rendement?",
      answer:
        "Nee, dit is een schatting op basis van een door jou ingevoerd verwacht rendement. Het werkelijke rendement van beleggingen of pensioenfondsen schommelt van jaar tot jaar en kan ook negatief zijn.",
    },
    {
      question: "Houdt dit rekening met AOW of pensioenpremies van mijn werkgever?",
      answer:
        "Nee, deze calculator berekent alleen de groei van een vermogen op basis van jouw eigen invoer. Voor een volledig beeld van je pensioen kun je terecht op mijnpensioenoverzicht.nl.",
    },
  ],
  relatedSlugs: ["samengestelde-interest-calculator", "spaarrente-calculator"],
  Component: PensioenOpbouwCalculator,
};
