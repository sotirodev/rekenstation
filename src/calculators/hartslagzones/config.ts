import { HeartPulse } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HartslagzonesCalculator } from "./Calculator";

export const hartslagzonesConfig: CalculatorConfig = {
  slug: "hartslagzones-calculator",
  title: "Hartslagzones calculator",
  shortTitle: "Hartslagzones",
  category: "gezondheid",
  icon: HeartPulse,
  summary: "Bereken je trainingszones op basis van je geschatte maximale hartslag.",
  metaDescription:
    "Bereken gratis je geschatte maximale hartslag en trainingszones voor sporten, op basis van de Fox-formule.",
  intro: "Vul je leeftijd in om je geschatte maximale hartslag en trainingszones te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt de Fox-formule (220 min je leeftijd) om je geschatte maximale hartslag te bepalen, en verdeelt die vervolgens in vijf trainingszones, van rustig herstel tot maximale inspanning.",
      "Bijvoorbeeld: bij een leeftijd van 30 jaar is de geschatte maximale hartslag 190 bpm, wat betekent dat zone 2 (vetverbranding) ligt tussen 114 en 133 bpm.",
    ],
  },
  faq: [
    {
      question: "Hoe nauwkeurig is de Fox-formule?",
      answer:
        "De Fox-formule (220 min leeftijd) is een veelgebruikte vuistregel, maar de werkelijke maximale hartslag kan per persoon 10 tot 20 slagen afwijken. Een inspanningstest bij een sportarts geeft een preciezer getal.",
    },
    {
      question: "In welke zone moet ik trainen om af te vallen?",
      answer:
        "Zone 2 (60-70% van je maximale hartslag) wordt vaak aangeraden voor vetverbranding, omdat je lichaam in dat tempo verhoudingsgewijs meer vet als brandstof gebruikt.",
    },
  ],
  relatedSlugs: ["calorieen-verbranden-sporten-calculator", "bmi-calculator"],
  Component: HartslagzonesCalculator,
};
