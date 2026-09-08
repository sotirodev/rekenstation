import { CalendarDays } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { DatumVerschilCalculator } from "./Calculator";

export const datumverschilConfig: CalculatorConfig = {
  slug: "datum-verschil-calculator",
  title: "Datum verschil calculator",
  shortTitle: "Datum verschil calculator",
  category: "tijd",
  icon: CalendarDays,
  summary: "Bereken het aantal dagen, weken, maanden en jaren tussen twee datums.",
  metaDescription:
    "Bereken gratis het exacte verschil tussen twee datums in dagen, weken, maanden en jaren.",
  intro: "Vul twee datums in om het verschil ertussen te berekenen.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "De calculator telt het aantal volledige jaren, maanden en dagen tussen de twee datums, en toont ook het totaal aantal dagen en weken. De volgorde van invoer maakt niet uit.",
    ],
  },
  faq: [
    {
      question: "Kan ik ook datums in de toekomst gebruiken?",
      answer: "Ja, je kunt elke combinatie van twee datums invullen, ook toekomstige.",
    },
  ],
  relatedSlugs: ["leeftijd-calculator"],
  Component: DatumVerschilCalculator,
};
