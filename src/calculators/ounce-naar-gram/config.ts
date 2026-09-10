import { Weight } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { createEenheidConversieCalculator } from "@/calculators/eenheden/ConversieCalculator";

export const ounceNaarGramConfig: CalculatorConfig = {
  slug: "ounce-naar-gram-calculator",
  title: "Ounce naar gram calculator",
  shortTitle: "Ounce naar gram",
  category: "maten-eenheden",
  icon: Weight,
  summary: "Reken ounce (oz) snel om naar gram, of andersom.",
  metaDescription:
    "Reken snel ounce om naar gram, of andersom. Gratis en exacte ounce naar gram calculator, handig bij Amerikaanse recepten.",
  intro: "Vul een waarde in ounce (oz) in om direct de waarde in gram te zien, of reken andersom.",
  explanation: {
    heading: "Hoe reken je ounce om naar gram?",
    body: [
      "1 ounce (oz) is internationaal exact vastgesteld op 28,349523125 gram. Om van ounce naar gram te rekenen, vermenigvuldig je met 28,349523125. Om van gram naar ounce te rekenen, deel je door 28,349523125.",
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
  relatedSlugs: ["gram-naar-ounce-calculator", "eenheden-omrekenen"],
  Component: createEenheidConversieCalculator("gewicht", "oz", "g"),
};
