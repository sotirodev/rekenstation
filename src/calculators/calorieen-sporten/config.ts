import { Flame } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { CalorieenSportenCalculator } from "./Calculator";

export const calorieenSportenConfig: CalculatorConfig = {
  slug: "calorieen-verbranden-sporten-calculator",
  title: "Calorieën verbranden tijdens sporten calculator",
  shortTitle: "Calorieën verbranden sporten",
  category: "gezondheid",
  icon: Flame,
  summary: "Bereken hoeveel calorieën je verbrandt bij een sport of activiteit.",
  metaDescription:
    "Bereken gratis hoeveel calorieën je verbrandt tijdens hardlopen, fietsen, zwemmen en meer, op basis van de MET-methode.",
  intro: "Kies een activiteit en vul je gewicht en de duur in om je calorieverbruik te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt MET-waarden (Metabolic Equivalent of Task) uit het Compendium of Physical Activities, de standaardreferentie voor het energieverbruik van lichamelijke activiteiten. Elke activiteit heeft een vaste MET-waarde, die wordt vermenigvuldigd met je gewicht en de duur van de activiteit.",
      "Bijvoorbeeld: hardlopen op 10 km/u heeft een MET-waarde van 9,8. Bij 70 kg en 30 minuten kom je uit op 9,8 × 70 × 0,5 = 343 kcal.",
    ],
  },
  faq: [
    {
      question: "Wat is een MET-waarde?",
      answer:
        "MET staat voor Metabolic Equivalent of Task, een maat voor hoe intensief een activiteit is ten opzichte van rust. Een MET-waarde van 1 komt overeen met stilzitten; hoe hoger de waarde, hoe meer energie de activiteit kost.",
    },
    {
      question: "Waarom klopt mijn sporthorloge niet met deze uitkomst?",
      answer:
        "Sporthorloges houden vaak ook rekening met je hartslag, leeftijd en conditie, wat een preciezere maar ook meer wisselende schatting geeft. Deze calculator gebruikt vaste, algemeen erkende MET-waarden.",
    },
  ],
  relatedSlugs: ["calorie-calculator", "afvallen-calculator"],
  Component: CalorieenSportenCalculator,
};
