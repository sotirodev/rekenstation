import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const mNaarVoetConfig: CalculatorConfig = {
  slug: "m-naar-voet-calculator",
  title: "Meter naar voet calculator",
  shortTitle: "Meter naar voet",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken meters snel om naar voet (feet), of andersom.",
  metaDescription:
    "Reken snel meter om naar voet (feet), of andersom. Gratis en exacte meter naar voet calculator, gebaseerd op de internationale standaard van 0,3048 meter per voet.",
  intro: "Vul een waarde in meters in om direct de waarde in voet (feet) te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je meter om naar voet?",
    body: [
      "1 voet (foot) is internationaal exact vastgesteld op 0,3048 meter. Om van meter naar voet te rekenen, deel je door 0,3048. Om van voet naar meter te rekenen, vermenigvuldig je met 0,3048.",
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
  relatedSlugs: ["voet-naar-m-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "m", "foot"),
};
