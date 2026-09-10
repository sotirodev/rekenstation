import { Clock } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { UurloonNaarJaarsalarisCalculator } from "./Calculator";

export const uurloonNaarJaarsalarisConfig: CalculatorConfig = {
  slug: "uurloon-naar-jaarsalaris-calculator",
  title: "Uurloon naar jaarsalaris calculator",
  shortTitle: "Uurloon naar jaarsalaris",
  category: "geld-salaris",
  icon: Clock,
  summary: "Reken je bruto uurloon om naar een bruto jaarsalaris.",
  metaDescription:
    "Bereken snel je bruto jaarsalaris uit je uurloon en gewerkte uren per week. Gratis en direct resultaat.",
  intro: "Vul je bruto uurloon en je uren per week in om je bruto jaarsalaris te zien.",
  explanation: {
    heading: "Hoe wordt het jaarsalaris berekend?",
    body: [
      "Deze calculator rekent je uurloon om naar een maandsalaris door uit te gaan van gemiddeld 52/12 weken per maand, en vermenigvuldigt dat met 12 voor het jaarsalaris.",
    ],
  },
  faq: [
    {
      question: "Waarom wordt 52/12 weken per maand gebruikt?",
      answer:
        "Een jaar heeft 52 weken, dus gemiddeld 52/12 (ongeveer 4,33) weken per maand. Dit geeft een nauwkeuriger resultaat dan uitgaan van exact 4 weken per maand.",
    },
  ],
  relatedSlugs: ["jaarsalaris-naar-uurloon-calculator", "bruto-netto-calculator"],
  Component: UurloonNaarJaarsalarisCalculator,
};
