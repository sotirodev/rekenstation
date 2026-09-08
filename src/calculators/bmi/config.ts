import { HeartPulse } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { BmiCalculator } from "./Calculator";

export const bmiConfig: CalculatorConfig = {
  slug: "bmi-calculator",
  title: "BMI calculator",
  shortTitle: "BMI calculator",
  category: "gezondheid",
  icon: HeartPulse,
  summary: "Bereken je Body Mass Index (BMI) op basis van gewicht en lengte.",
  metaDescription:
    "Bereken gratis je BMI (Body Mass Index) op basis van je gewicht en lengte, en zie direct in welke categorie je valt.",
  intro:
    "Vul je gewicht en lengte in om je BMI en de bijbehorende categorie te berekenen.",
  explanation: {
    heading: "Hoe werkt de BMI-berekening?",
    body: [
      "De BMI wordt berekend door je gewicht in kilogram te delen door je lengte in meters in het kwadraat (BMI = gewicht / lengte²).",
      "De BMI is een globale indicator en houdt geen rekening met spiermassa, botdichtheid, leeftijd of geslacht. Sporters met veel spiermassa kunnen bijvoorbeeld een hogere BMI hebben zonder overgewicht te hebben.",
    ],
  },
  faq: [
    {
      question: "Is de BMI een medisch advies?",
      answer:
        "Nee, de BMI is een indicatie. Raadpleeg bij twijfel over je gezondheid altijd een arts of diëtist.",
    },
    {
      question: "Vanaf welke waarde is er sprake van overgewicht?",
      answer: "Een BMI vanaf 25 wordt over het algemeen gezien als overgewicht, en vanaf 30 als obesitas.",
    },
  ],
  relatedSlugs: ["calorie-calculator", "leeftijd-calculator"],
  popular: true,
  Component: BmiCalculator,
};
