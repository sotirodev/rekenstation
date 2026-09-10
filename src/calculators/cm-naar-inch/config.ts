import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const cmNaarInchConfig: CalculatorConfig = {
  slug: "cm-naar-inch-calculator",
  title: "Cm naar inch calculator",
  shortTitle: "Cm naar inch",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken centimeters snel om naar inches, of andersom.",
  metaDescription:
    "Reken snel cm om naar inch, of andersom. Gratis en exacte cm naar inch calculator, gebaseerd op de internationale standaard van 2,54 cm per inch.",
  intro: "Vul een waarde in centimeters in om direct de waarde in inches te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je cm om naar inch?",
    body: [
      "1 inch is internationaal exact vastgesteld op 2,54 centimeter. Om van centimeter naar inch te rekenen, deel je door 2,54. Om van inch naar centimeter te rekenen, vermenigvuldig je met 2,54.",
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
  relatedSlugs: ["inch-naar-cm-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("lengte", "cm", "inch"),
};
