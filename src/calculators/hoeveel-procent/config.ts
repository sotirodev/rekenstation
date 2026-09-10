import { Percent } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HoeveelProcentCalculator } from "./Calculator";

export const hoeveelProcentConfig: CalculatorConfig = {
  slug: "hoeveel-procent-calculator",
  title: "Hoeveel procent calculator",
  shortTitle: "Hoeveel procent",
  category: "overige",
  icon: Percent,
  summary: "Bereken welk percentage een getal is van een ander getal.",
  metaDescription:
    "Bereken snel hoeveel procent een getal is van een totaal. Gratis en direct resultaat.",
  intro: "Vul een getal en een totaal in om direct te zien welk percentage dat is.",
  explanation: {
    heading: "Hoe bereken je welk percentage iets is?",
    body: [
      "Deel het getal door het totaal en vermenigvuldig met 100. Bijvoorbeeld: 15 van 60 is (15 / 60) × 100 = 25%.",
    ],
  },
  faq: [
    {
      question: "Wat als het getal groter is dan het totaal?",
      answer: "Dan krijg je een percentage boven de 100%, dat is normaal en rekenkundig correct.",
    },
  ],
  relatedSlugs: ["procent-van-getal-calculator", "procentuele-verandering-calculator"],
  Component: HoeveelProcentCalculator,
};
