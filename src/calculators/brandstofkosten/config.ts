import { Fuel } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { BrandstofkostenCalculator } from "./Calculator";

export const brandstofkostenConfig: CalculatorConfig = {
  slug: "brandstofkosten-calculator",
  title: "Brandstofkosten calculator",
  shortTitle: "Brandstofkosten calculator",
  category: "auto-vervoer",
  icon: Fuel,
  summary: "Bereken de brandstofkosten voor een rit of afstand.",
  metaDescription:
    "Bereken snel de brandstofkosten voor een rit op basis van afstand, verbruik en brandstofprijs, inclusief kosten per kilometer.",
  intro: "Vul de afstand, het verbruik en de brandstofprijs in om de kosten te berekenen.",
  explanation: {
    heading: "Hoe worden de brandstofkosten berekend?",
    body: [
      "De calculator berekent eerst het aantal benodigde liters op basis van de afstand en het verbruik per 100 km, en vermenigvuldigt dit met de brandstofprijs per liter.",
    ],
  },
  faq: [
    {
      question: "Waar vind ik het verbruik van mijn auto?",
      answer:
        "Het gemiddelde verbruik staat vaak in het kentekenbewijs of op de website van de fabrikant. Je werkelijke verbruik kan hiervan afwijken.",
    },
  ],
  relatedSlugs: ["autokosten-calculator"],
  Component: BrandstofkostenCalculator,
};
