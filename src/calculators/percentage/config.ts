import { Percent } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { PercentageCalculator } from "./Calculator";

export const percentageConfig: CalculatorConfig = {
  slug: "percentage-calculator",
  title: "Percentage calculator",
  shortTitle: "Percentage calculator",
  category: "overige",
  icon: Percent,
  summary: "Bereken percentages: X% van Y, welk percentage, of procentuele verandering.",
  metaDescription:
    "Gratis percentage calculator: bereken X% van Y, welk percentage X van Y is, of de procentuele stijging of daling tussen twee waarden.",
  intro: "Kies je berekening en vul de waarden in om het percentage te berekenen.",
  explanation: {
    heading: "Hoe werk je met percentages?",
    body: [
      "Met 'X% van Y' bereken je een deel van een totaal, bijvoorbeeld korting of BTW. Met 'Welk percentage is X van Y' bereken je welk aandeel een waarde vormt van een totaal. Met 'Percentage stijging/daling' bereken je hoeveel procent een waarde is toe- of afgenomen.",
    ],
  },
  faq: [
    {
      question: "Hoe bereken ik korting?",
      answer:
        "Gebruik 'X% van Y' met het kortingspercentage als X en de oorspronkelijke prijs als Y om het kortingsbedrag te berekenen.",
    },
    {
      question: "Wat betekent een negatieve procentuele verandering?",
      answer:
        "Een negatief percentage bij 'stijging/daling' betekent dat de waarde is gedaald ten opzichte van de startwaarde.",
    },
  ],
  relatedSlugs: ["btw-calculator", "bruto-netto-calculator"],
  Component: PercentageCalculator,
};
