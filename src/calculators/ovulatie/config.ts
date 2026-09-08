import { CalendarHeart } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { OvulatieCalculator } from "./Calculator";

export const ovulatieConfig: CalculatorConfig = {
  slug: "ovulatie-calculator",
  title: "Ovulatie calculator",
  shortTitle: "Ovulatie calculator",
  category: "gezondheid",
  icon: CalendarHeart,
  summary: "Bereken je vermoedelijke vruchtbare periode en ovulatiedatum.",
  metaDescription:
    "Bereken gratis je vermoedelijke ovulatiedatum en vruchtbare periode op basis van je laatste menstruatie en cyclusduur.",
  intro: "Vul de eerste dag van je laatste menstruatie en je gemiddelde cyclusduur in.",
  explanation: {
    heading: "Hoe wordt de ovulatie berekend?",
    body: [
      "Deze calculator gaat uit van een luteale fase (de periode na de eisprong) van gemiddeld 14 dagen. De ovulatie vindt dan plaats op cyclusduur min 14 dagen na de eerste dag van je laatste menstruatie.",
      "De vruchtbare periode omvat de dagen vlak vóór en op de dag van de ovulatie, omdat zaadcellen enkele dagen kunnen overleven.",
    ],
  },
  faq: [
    {
      question: "Is dit medisch advies?",
      answer:
        "Nee, dit is een schatting op basis van gemiddelden. Elke cyclus kan afwijken. Voor een kinderwens of anticonceptie is dit geen betrouwbare methode; raadpleeg een arts of verloskundige.",
    },
  ],
  relatedSlugs: ["zwangerschap-uitgerekende-datum-calculator"],
  Component: OvulatieCalculator,
};
