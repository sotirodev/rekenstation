import { Clock } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { JaarsalarisNaarUurloonCalculator } from "./Calculator";

export const jaarsalarisNaarUurloonConfig: CalculatorConfig = {
  slug: "jaarsalaris-naar-uurloon-calculator",
  title: "Jaarsalaris naar uurloon calculator",
  shortTitle: "Jaarsalaris naar uurloon",
  category: "geld-salaris",
  icon: Clock,
  summary: "Reken je bruto jaarsalaris om naar een bruto uurloon.",
  metaDescription:
    "Bereken snel je bruto uurloon uit je jaarsalaris en gewerkte uren per week. Gratis en direct resultaat.",
  intro: "Vul je bruto jaarsalaris en je uren per week in om je bruto uurloon te zien.",
  explanation: {
    heading: "Hoe wordt het uurloon berekend?",
    body: [
      "Deze calculator deelt je jaarsalaris door 12 voor het maandsalaris, en rekent dat vervolgens om naar een uurloon door uit te gaan van gemiddeld 52/12 weken per maand.",
    ],
  },
  faq: [
    {
      question: "Waarom wordt 52/12 weken per maand gebruikt?",
      answer:
        "Een jaar heeft 52 weken, dus gemiddeld 52/12 (ongeveer 4,33) weken per maand. Dit geeft een nauwkeuriger resultaat dan uitgaan van exact 4 weken per maand.",
    },
  ],
  relatedSlugs: ["uurloon-naar-jaarsalaris-calculator", "bruto-netto-calculator"],
  Component: JaarsalarisNaarUurloonCalculator,
};
