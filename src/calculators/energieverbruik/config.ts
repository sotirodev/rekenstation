import { Lightbulb } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { EnergieverbruikCalculator } from "./Calculator";

export const energieverbruikConfig: CalculatorConfig = {
  slug: "energieverbruik-calculator",
  title: "Energieverbruik kosten calculator",
  shortTitle: "Energieverbruik calculator",
  category: "energie",
  icon: Lightbulb,
  summary: "Bereken je geschatte energiekosten per maand en per jaar.",
  metaDescription:
    "Bereken gratis je geschatte energiekosten per maand en per jaar op basis van je stroom- en gasverbruik en de actuele prijzen.",
  intro: "Vul je verbruik en prijzen in om je energiekosten te berekenen.",
  explanation: {
    heading: "Hoe worden de energiekosten berekend?",
    body: [
      "Deze calculator vermenigvuldigt je jaarlijkse stroom- en gasverbruik met de prijs per kWh en per m³, en telt daar de vaste leveringskosten bij op.",
      "Vul je eigen actuele tarieven in, want energieprijzen verschillen sterk per leverancier en contract.",
    ],
  },
  faq: [
    {
      question: "Waar vind ik mijn verbruik en tarieven?",
      answer:
        "Je jaarverbruik staat op je laatste jaarafrekening of in de app van je energieleverancier. De tarieven staan op je contract of factuur.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator"],
  Component: EnergieverbruikCalculator,
};
