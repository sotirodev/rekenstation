import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const inchNaarCmConfig: CalculatorConfig = {
  slug: "inch-naar-cm-calculator",
  title: "Inch naar cm calculator",
  shortTitle: "Inch naar cm",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken inches snel om naar centimeters, of andersom.",
  metaDescription:
    "Reken snel inch om naar cm, of andersom. Gratis en exacte inch naar cm calculator, gebaseerd op de internationale standaard van 2,54 cm per inch.",
  intro: "Vul een waarde in inches in om direct de waarde in centimeters te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je inch om naar cm?",
    body: [
      "1 inch is internationaal exact vastgesteld op 2,54 centimeter. Om van inch naar centimeter te rekenen, vermenigvuldig je met 2,54. Om van centimeter naar inch te rekenen, deel je door 2,54.",
    ],
  },
  faq: [
    {
      question: "Hoeveel is 1 inch in cm?",
      answer: "1 inch is precies 2,54 centimeter.",
    },
    {
      question: "Is deze omrekening afgerond?",
      answer:
        "Nee, de verhouding tussen inch en centimeter is internationaal exact gedefinieerd, dus deze calculator rekent niet met een schatting of afronding.",
    },
  ],
  relatedSlugs: ["cm-naar-inch-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "inch", "cm"),
};
