import { Palmtree } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { VakantiegeldCalculator } from "./Calculator";

export const vakantiegeldConfig: CalculatorConfig = {
  slug: "vakantiegeld-calculator",
  title: "Vakantiegeld calculator",
  shortTitle: "Vakantiegeld calculator",
  category: "geld-salaris",
  icon: Palmtree,
  summary: "Bereken je bruto vakantiegeld op basis van je brutoloon.",
  metaDescription:
    "Bereken gratis je vakantiegeld op basis van je bruto salaris, met het wettelijk minimum van 8% als standaard.",
  intro: "Vul je brutoloon in om je vakantiegeld te berekenen.",
  explanation: {
    heading: "Hoe wordt vakantiegeld berekend?",
    body: [
      "Vakantiegeld is wettelijk minimaal 8% van je bruto jaarloon. Werkgevers of cao's kunnen een hoger percentage hanteren. Vakantiegeld wordt meestal in mei of juni in één keer uitbetaald, maar je kunt hier ook zien hoeveel je er maandelijks voor opbouwt.",
    ],
  },
  faq: [
    {
      question: "Is vakantiegeld verplicht?",
      answer: "Ja, in Nederland is een vakantiegeld van minimaal 8% van het bruto jaarloon wettelijk verplicht voor werknemers.",
    },
    {
      question: "Wanneer wordt vakantiegeld uitbetaald?",
      answer: "Meestal in mei of juni, maar dit kan per werkgever of cao verschillen.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator", "uurloon-calculator"],
  Component: VakantiegeldCalculator,
};
