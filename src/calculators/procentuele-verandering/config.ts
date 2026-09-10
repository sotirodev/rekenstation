import { Percent } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ProcentueleVeranderingCalculator } from "./Calculator";

export const procentueleVeranderingConfig: CalculatorConfig = {
  slug: "procentuele-verandering-calculator",
  title: "Procentuele verandering calculator",
  shortTitle: "Procentuele verandering",
  category: "overige",
  icon: Percent,
  summary: "Bereken de procentuele stijging of daling tussen twee waarden.",
  metaDescription:
    "Bereken snel de procentuele stijging of daling tussen een startwaarde en een eindwaarde. Gratis en direct resultaat.",
  intro: "Vul een startwaarde en een eindwaarde in om de procentuele verandering te zien.",
  explanation: {
    heading: "Hoe bereken je een procentuele verandering?",
    body: [
      "Trek de startwaarde af van de eindwaarde, deel dat door de startwaarde, en vermenigvuldig met 100. Bijvoorbeeld: van 80 naar 100 is ((100 - 80) / 80) × 100 = 25% stijging.",
    ],
  },
  faq: [
    {
      question: "Wat betekent een negatieve uitkomst?",
      answer: "Een negatieve uitkomst betekent dat de eindwaarde lager is dan de startwaarde, dus een daling.",
    },
  ],
  relatedSlugs: ["procent-van-getal-calculator", "hoeveel-procent-calculator"],
  Component: ProcentueleVeranderingCalculator,
};
