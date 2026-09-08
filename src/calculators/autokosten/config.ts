import { Car } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { AutokostenCalculator } from "./Calculator";

export const autokostenConfig: CalculatorConfig = {
  slug: "autokosten-calculator",
  title: "Autokosten calculator",
  shortTitle: "Autokosten calculator",
  category: "auto-vervoer",
  icon: Car,
  summary: "Bereken je maandelijkse en jaarlijkse autokosten.",
  metaDescription:
    "Bereken je totale autokosten per maand en per jaar: brandstof, verzekering, wegenbelasting, onderhoud en afschrijving, inclusief kosten per kilometer.",
  intro:
    "Vul je autokosten in om een overzicht te krijgen van je totale kosten per maand, per jaar en per kilometer.",
  explanation: {
    heading: "Hoe worden de autokosten berekend?",
    body: [
      "Deze calculator telt je brandstofkosten (op basis van kilometers en verbruik) op bij je vaste maandelijkse kosten: verzekering, wegenbelasting, onderhoud en afschrijving. Zo krijg je een compleet overzicht van je autokosten per maand, per jaar en per kilometer.",
      "Vul voor onderhoud en afschrijving een gemiddeld maandbedrag in — bijvoorbeeld de jaarlijkse kosten gedeeld door 12.",
    ],
  },
  faq: [
    {
      question: "Hoe bepaal ik mijn afschrijving per maand?",
      answer:
        "Een vuistregel is de aanschafwaarde min de verwachte restwaarde, gedeeld door het aantal maanden dat je de auto verwacht te houden.",
    },
    {
      question: "Waarom wijkt mijn werkelijke verbruik af?",
      answer:
        "Het opgegeven verbruik per 100 km is meestal een gemiddelde. Rijstijl, weersomstandigheden en het type rit (stad/snelweg) beïnvloeden het werkelijke verbruik.",
    },
  ],
  relatedSlugs: ["brandstofkosten-calculator"],
  Component: AutokostenCalculator,
};
