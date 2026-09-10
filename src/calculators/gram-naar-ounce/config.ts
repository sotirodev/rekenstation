import { Weight } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const gramNaarOunceConfig: CalculatorConfig = {
  slug: "gram-naar-ounce-calculator",
  title: "Gram naar ounce calculator",
  shortTitle: "Gram naar ounce",
  category: "maten-eenheden",
  icon: Weight,
  summary: "Reken gram snel om naar ounce (oz), of andersom.",
  metaDescription:
    "Reken snel gram om naar ounce, of andersom. Gratis en exacte gram naar ounce calculator, handig bij Amerikaanse recepten.",
  intro: "Vul een waarde in gram in om direct de waarde in ounce (oz) te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je gram om naar ounce?",
    body: [
      "1 ounce (oz) is internationaal exact vastgesteld op 28,349523125 gram. Om van gram naar ounce te rekenen, deel je door 28,349523125. Om van ounce naar gram te rekenen, vermenigvuldig je met 28,349523125.",
      "Deze omrekening komt vaak van pas bij Amerikaanse recepten, die gewichten meestal in ounces (oz) of cups aangeven in plaats van gram.",
    ],
  },
  faq: [
    {
      question: "Hoeveel gram is 1 ounce?",
      answer: "1 ounce (oz) is ongeveer 28,35 gram.",
    },
    {
      question: "Hoeveel ounce is 100 gram?",
      answer: "100 gram is ongeveer 3,53 ounce.",
    },
  ],
  relatedSlugs: ["ounce-naar-gram-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("gewicht", "g", "oz"),
};
