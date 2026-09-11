import { Clock3 } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { OverurenCalculator } from "./Calculator";

export const overurenConfig: CalculatorConfig = {
  slug: "overuren-calculator",
  title: "Overuren calculator",
  shortTitle: "Overuren calculator",
  category: "geld-salaris",
  icon: Clock3,
  summary: "Bereken je vergoeding voor overuren op basis van je uurloon en toeslag.",
  metaDescription:
    "Bereken gratis je overwerkvergoeding op basis van je bruto uurloon, het aantal overuren en het toeslagpercentage uit je cao.",
  intro: "Vul je uurloon, het toeslagpercentage en het aantal overuren in.",
  explanation: {
    heading: "Hoe wordt overwerk vergoed?",
    body: [
      "Je vergoeding per overuur is je normale uurloon plus een toeslag, meestal uitgedrukt als percentage. Dit percentage staat in je cao of arbeidsovereenkomst en verschilt per sector, en vaak ook per tijdstip (bijvoorbeeld hoger in het weekend of 's nachts).",
      "Bijvoorbeeld: bij een uurloon van €20 en een toeslag van 25% ontvang je €25 per overuur.",
    ],
  },
  faq: [
    {
      question: "Welk toeslagpercentage geldt voor mij?",
      answer:
        "Dit verschilt per cao en soms per tijdstip van het overwerk. Raadpleeg je cao of je werkgever voor het exacte percentage.",
    },
    {
      question: "Ben ik altijd verplicht om overuren te maken?",
      answer:
        "Dat hangt af van je arbeidsovereenkomst en cao. Raadpleeg deze documenten of je werkgever voor jouw specifieke situatie.",
    },
  ],
  relatedSlugs: ["uurloon-calculator", "bruto-netto-calculator"],
  Component: OverurenCalculator,
};
