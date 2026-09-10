import { Percent } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { PercentageVanGetalCalculator } from "./Calculator";

export const percentageVanGetalConfig: CalculatorConfig = {
  slug: "procent-van-getal-calculator",
  title: "Procent van een getal calculator",
  shortTitle: "Procent van een getal",
  category: "overige",
  icon: Percent,
  summary: "Bereken snel hoeveel procent van een getal is.",
  metaDescription:
    "Bereken snel hoeveel X procent van een getal is, bijvoorbeeld voor korting of BTW. Gratis en direct resultaat.",
  intro: "Vul een percentage en een getal in om direct de uitkomst te zien.",
  explanation: {
    heading: "Hoe bereken je een percentage van een getal?",
    body: [
      "Vermenigvuldig het getal met het percentage gedeeld door 100. Bijvoorbeeld: 20% van 50 is 50 × (20 / 100) = 10.",
    ],
  },
  faq: [
    {
      question: "Hoe bereken ik korting met deze calculator?",
      answer:
        "Vul het kortingspercentage in bij 'Percentage' en de oorspronkelijke prijs bij 'Van getal'. De uitkomst is het kortingsbedrag; trek dit af van de oorspronkelijke prijs voor de nieuwe prijs.",
    },
  ],
  relatedSlugs: ["hoeveel-procent-calculator", "procentuele-verandering-calculator"],
  Component: PercentageVanGetalCalculator,
};
