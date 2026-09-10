import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const mijlNaarKmConfig: CalculatorConfig = {
  slug: "mijl-naar-km-calculator",
  title: "Mijl naar km calculator",
  shortTitle: "Mijl naar km",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken mijlen snel om naar kilometers, of andersom.",
  metaDescription:
    "Reken snel mijl om naar km, of andersom. Gratis en exacte mijl naar km calculator, gebaseerd op de internationale standaard van 1,609344 km per mijl.",
  intro: "Vul een waarde in mijlen in om direct de waarde in kilometers te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je mijl om naar km?",
    body: [
      "1 mijl (Engelse landmijl) is internationaal exact vastgesteld op 1,609344 kilometer. Om van mijl naar kilometer te rekenen, vermenigvuldig je met 1,609344. Om van kilometer naar mijl te rekenen, deel je door 1,609344.",
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
  relatedSlugs: ["km-naar-mijl-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "mile", "km"),
};
