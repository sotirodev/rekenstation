import { Clock } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { UurloonCalculator } from "./Calculator";

export const uurloonConfig: CalculatorConfig = {
  slug: "uurloon-calculator",
  title: "Uurloon calculator",
  shortTitle: "Uurloon calculator",
  category: "geld-salaris",
  icon: Clock,
  summary: "Reken je maandsalaris om naar uurloon en andersom.",
  metaDescription:
    "Bereken je bruto uurloon uit je maandsalaris, of andersom: reken je uurloon om naar een bruto maand- en jaarsalaris.",
  intro: "Vul je salaris of uurloon en je gewerkte uren per week in.",
  explanation: {
    heading: "Hoe wordt het uurloon berekend?",
    body: [
      "Deze calculator rekent je maandsalaris om naar een uurloon door uit te gaan van gemiddeld 52/12 weken per maand. Andersom kun je vanuit een uurloon je bruto maand- en jaarsalaris berekenen.",
    ],
  },
  faq: [
    {
      question: "Waarom wordt 52/12 weken per maand gebruikt?",
      answer:
        "Een jaar heeft 52 weken, dus gemiddeld 52/12 (ongeveer 4,33) weken per maand. Dit geeft een nauwkeuriger resultaat dan uitgaan van exact 4 weken per maand.",
    },
  ],
  relatedSlugs: [
    "uurloon-naar-jaarsalaris-calculator",
    "jaarsalaris-naar-uurloon-calculator",
    "overuren-calculator",
    "bruto-netto-calculator",
  ],
  Component: UurloonCalculator,
};
