import { Weight } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const kgNaarPondConfig: CalculatorConfig = {
  slug: "kg-naar-pond-calculator",
  title: "Kg naar pond calculator",
  shortTitle: "Kg naar pond",
  category: "maten-eenheden",
  icon: Weight,
  summary: "Reken kilogram snel om naar pond, of andersom.",
  metaDescription:
    "Reken snel kg om naar pond, of andersom. Gratis kg naar pond calculator met het Nederlandse pond van 500 gram.",
  intro: "Vul een waarde in kilogram in om direct de waarde in pond te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je kg om naar pond?",
    body: [
      "In Nederland is 1 pond gelijk aan 500 gram. Om van kilogram naar pond te rekenen, vermenigvuldig je met 2. Om van pond naar kilogram te rekenen, deel je door 2.",
      "Let op: dit is het Nederlandse pond (500 gram), niet het Engelse 'pound' (lb) van 453,59 gram dat in Engelstalige landen wordt gebruikt.",
    ],
  },
  faq: [
    {
      question: "Hoeveel gram is 1 pond?",
      answer: "In Nederland is 1 pond precies 500 gram.",
    },
    {
      question: "Is het Nederlandse pond hetzelfde als het Engelse 'pound'?",
      answer:
        "Nee. Het Nederlandse pond is 500 gram, terwijl het Engelse pound (lb) 453,59237 gram is. Deze calculator gebruikt het Nederlandse pond; kies bij de eenhedencalculator 'Engels pond (lb)' als je die wilt.",
    },
  ],
  relatedSlugs: ["pond-naar-kg-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("gewicht", "kg", "pond"),
};
