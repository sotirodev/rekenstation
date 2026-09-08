import { Baby } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ZwangerschapCalculator } from "./Calculator";

export const zwangerschapConfig: CalculatorConfig = {
  slug: "zwangerschap-uitgerekende-datum-calculator",
  title: "Zwangerschap uitgerekende datum calculator",
  shortTitle: "Uitgerekende datum calculator",
  category: "gezondheid",
  icon: Baby,
  summary: "Bereken je uitgerekende datum en huidige zwangerschapsduur.",
  metaDescription:
    "Bereken gratis je uitgerekende datum en huidige zwangerschapsduur in weken en dagen op basis van de eerste dag van je laatste menstruatie.",
  intro: "Vul de eerste dag van je laatste menstruatie in om je uitgerekende datum te berekenen.",
  explanation: {
    heading: "Hoe wordt de uitgerekende datum berekend?",
    body: [
      "Deze calculator gebruikt de regel van Naegele: de uitgerekende datum is 280 dagen (40 weken) na de eerste dag van je laatste menstruatie, uitgaande van een gemiddelde cyclus van 28 dagen.",
      "Slechts een klein percentage van de baby's wordt exact op de uitgerekende datum geboren — de meeste bevallingen vinden plaats in de periode van een paar weken daaromheen.",
    ],
  },
  faq: [
    {
      question: "Is dit medisch advies?",
      answer:
        "Nee, dit is een indicatieve berekening. Je verloskundige of gynaecoloog kan met een echo een nauwkeurigere uitgerekende datum bepalen.",
    },
    {
      question: "Wat als mijn cyclus niet precies 28 dagen is?",
      answer:
        "Bij een afwijkende cyclus kan de werkelijke uitgerekende datum iets verschillen. Bespreek dit met je verloskundige.",
    },
  ],
  relatedSlugs: ["leeftijd-calculator", "bmi-calculator"],
  Component: ZwangerschapCalculator,
};
