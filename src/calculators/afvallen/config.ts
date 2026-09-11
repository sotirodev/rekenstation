import { TrendingDown } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { AfvallenCalculator } from "./Calculator";

export const afvallenConfig: CalculatorConfig = {
  slug: "afvallen-calculator",
  title: "Afvallen calculator",
  shortTitle: "Afvallen calculator",
  category: "gezondheid",
  icon: TrendingDown,
  summary: "Bereken hoeveel tijd het kost om af te vallen bij een calorietekort.",
  metaDescription:
    "Bereken gratis hoeveel weken het kost om af te vallen naar je doelgewicht, op basis van je dagelijkse calorietekort.",
  intro: "Vul je huidige gewicht, doelgewicht en dagelijkse calorietekort in.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gaat uit van de vuistregel dat ongeveer 7.700 kcal overeenkomt met 1 kilo lichaamsvet. Door het gewicht dat je wilt verliezen te vermenigvuldigen met 7.700 en te delen door je dagelijkse calorietekort, krijg je een schatting van het aantal dagen dat daarvoor nodig is.",
      "Bijvoorbeeld: wil je 5 kg afvallen met een dagelijks tekort van 500 kcal, dan kost dat ongeveer (5 × 7.700) / 500 = 77 dagen, oftewel 11 weken.",
    ],
  },
  faq: [
    {
      question: "Wat is een gezond dagelijks calorietekort?",
      answer:
        "Een tekort van 300 tot 500 kcal per dag wordt vaak als een gezond en vol te houden tempo gezien, goed voor ongeveer 0,25 tot 0,5 kg per week. Raadpleeg bij twijfel een diëtist.",
    },
    {
      question: "Waarom gaat gewichtsverlies in de praktijk niet altijd lineair?",
      answer:
        "Je lichaam past zich aan een tekort aan, en factoren als vochtbalans, spiermassa en stofwisseling beïnvloeden het tempo. Deze calculator geeft een gemiddelde schatting, geen gegarandeerd resultaat.",
    },
  ],
  relatedSlugs: ["calorie-calculator", "bmi-calculator", "ideaal-gewicht-calculator"],
  Component: AfvallenCalculator,
};
