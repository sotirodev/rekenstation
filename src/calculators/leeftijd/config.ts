import { Cake } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { LeeftijdCalculator } from "./Calculator";

export const leeftijdConfig: CalculatorConfig = {
  slug: "leeftijd-calculator",
  title: "Leeftijd calculator",
  shortTitle: "Leeftijd calculator",
  category: "tijd",
  icon: Cake,
  summary: "Bereken je exacte leeftijd in jaren, maanden en dagen.",
  metaDescription:
    "Bereken je exacte leeftijd in jaren, maanden en dagen op basis van je geboortedatum, plus het aantal dagen tot je volgende verjaardag.",
  intro: "Vul je geboortedatum in om je exacte leeftijd te berekenen.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "De calculator telt het aantal volledige jaren, maanden en dagen tussen je geboortedatum en de peildatum (standaard vandaag). Ook zie je hoeveel dagen je in totaal hebt geleefd en hoeveel dagen het nog duurt tot je volgende verjaardag.",
    ],
  },
  faq: [
    {
      question: "Kan ik mijn leeftijd op een andere datum in het verleden of de toekomst berekenen?",
      answer:
        "Ja, vul een peildatum in om te zien wat je leeftijd was of zal zijn op een specifieke datum.",
    },
  ],
  relatedSlugs: ["bmi-calculator"],
  Component: LeeftijdCalculator,
};
