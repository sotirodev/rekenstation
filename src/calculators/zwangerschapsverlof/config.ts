import { Baby } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ZwangerschapsverlofCalculator } from "./Calculator";

export const zwangerschapsverlofConfig: CalculatorConfig = {
  slug: "zwangerschapsverlof-calculator",
  title: "Zwangerschapsverlof calculator",
  shortTitle: "Zwangerschapsverlof",
  category: "gezondheid",
  icon: Baby,
  summary: "Bereken wanneer je zwangerschapsverlof ingaat en hoe lang je verlof duurt.",
  metaDescription:
    "Bereken gratis wanneer je zwangerschapsverlof ingaat en hoe je bevallingsverlof wordt verdeeld, op basis van je uitgerekende datum.",
  intro: "Vul je uitgerekende datum in om je verlofperiode te berekenen.",
  explanation: {
    heading: "Hoe werkt het zwangerschaps- en bevallingsverlof?",
    body: [
      "Het zwangerschapsverlof gaat in op een zelf gekozen moment tussen 6 en 4 weken vóór de uitgerekende datum. Het totale verlof is minimaal 16 weken.",
      "Kies je 6 weken zwangerschapsverlof, dan heb je recht op 10 weken bevallingsverlof. Kies je 4 weken, dan heb je 12 weken bevallingsverlof. Het bevallingsverlof gaat in op de dag na de bevalling en duurt altijd minimaal 10 weken, ook als de baby te vroeg of te laat komt.",
    ],
  },
  faq: [
    {
      question: "Wat als mijn baby eerder of later wordt geboren dan de uitgerekende datum?",
      answer:
        "Het bevallingsverlof gaat altijd in op de dag na de daadwerkelijke bevalling en duurt minimaal 10 weken, ongeacht of de baby te vroeg of te laat komt. Kom je eerder te bevallen dan gepland, dan schuift je resterende zwangerschapsverlof niet door, maar begint het bevallingsverlof direct.",
    },
    {
      question: "Moet ik verplicht 6 weken van tevoren beginnen?",
      answer:
        "Nee, je kiest zelf een moment tussen 6 en 4 weken voor de uitgerekende datum. Hoe later je begint, hoe meer bevallingsverlof je overhoudt na de geboorte.",
    },
    {
      question: "Geldt dit ook bij een meerling?",
      answer:
        "Nee, bij een meerling geldt een langere verlofperiode van minimaal 20 weken, met een ingangsmoment tussen 10 en 8 weken voor de uitgerekende datum. Deze calculator gaat uit van een eenling.",
    },
  ],
  relatedSlugs: ["zwangerschap-uitgerekende-datum-calculator", "vakantiedagen-calculator"],
  Component: ZwangerschapsverlofCalculator,
};
