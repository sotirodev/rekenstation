import { Weight } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const pondNaarKgConfig: CalculatorConfig = {
  slug: "pond-naar-kg-calculator",
  title: "Pond naar kg calculator",
  shortTitle: "Pond naar kg",
  category: "maten-eenheden",
  icon: Weight,
  summary: "Reken pond snel om naar kilogram, of andersom.",
  metaDescription:
    "Reken snel pond om naar kg, of andersom. Gratis pond naar kg calculator met het Nederlandse pond van 500 gram.",
  intro: "Vul een waarde in pond in om direct de waarde in kilogram te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je pond om naar kg?",
    body: [
      "In Nederland is 1 pond gelijk aan 500 gram. Om van pond naar kilogram te rekenen, deel je door 2. Om van kilogram naar pond te rekenen, vermenigvuldig je met 2.",
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
  relatedSlugs: ["kg-naar-pond-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("gewicht", "pond", "kg"),
};
