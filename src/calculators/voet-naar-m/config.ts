import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const voetNaarMConfig: CalculatorConfig = {
  slug: "voet-naar-m-calculator",
  title: "Voet naar meter calculator",
  shortTitle: "Voet naar meter",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken voet (feet) snel om naar meters, of andersom.",
  metaDescription:
    "Reken snel voet (feet) om naar meter, of andersom. Gratis en exacte voet naar meter calculator, gebaseerd op de internationale standaard van 0,3048 meter per voet.",
  intro: "Vul een waarde in voet (feet) in om direct de waarde in meters te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je voet om naar meter?",
    body: [
      "1 voet (foot) is internationaal exact vastgesteld op 0,3048 meter. Om van voet naar meter te rekenen, vermenigvuldig je met 0,3048. Om van meter naar voet te rekenen, deel je door 0,3048.",
    ],
  },
  faq: [
    {
      question: "Hoeveel meter is 1 voet?",
      answer: "1 voet (foot) is precies 0,3048 meter.",
    },
    {
      question: "Hoeveel voet is 1 meter?",
      answer: "1 meter is ongeveer 3,28084 voet.",
    },
  ],
  relatedSlugs: ["m-naar-voet-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "foot", "m"),
};
