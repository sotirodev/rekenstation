import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const kmNaarMijlConfig: CalculatorConfig = {
  slug: "km-naar-mijl-calculator",
  title: "Km naar mijl calculator",
  shortTitle: "Km naar mijl",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken kilometers snel om naar mijlen, of andersom.",
  metaDescription:
    "Reken snel km om naar mijl, of andersom. Gratis en exacte km naar mijl calculator, gebaseerd op de internationale standaard van 1,609344 km per mijl.",
  intro: "Vul een waarde in kilometers in om direct de waarde in mijlen te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je km om naar mijl?",
    body: [
      "1 mijl (Engelse landmijl) is internationaal exact vastgesteld op 1,609344 kilometer. Om van kilometer naar mijl te rekenen, deel je door 1,609344. Om van mijl naar kilometer te rekenen, vermenigvuldig je met 1,609344.",
    ],
  },
  faq: [
    {
      question: "Hoeveel km is 1 mijl?",
      answer: "1 mijl is precies 1,609344 kilometer.",
    },
    {
      question: "Hoeveel mijl is 1 km?",
      answer: "1 kilometer is ongeveer 0,621371 mijl.",
    },
  ],
  relatedSlugs: ["mijl-naar-km-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "km", "mile"),
};
