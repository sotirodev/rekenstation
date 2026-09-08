import { CalendarCheck } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { VakantiedagenCalculator } from "./Calculator";

export const vakantiedagenConfig: CalculatorConfig = {
  slug: "vakantiedagen-calculator",
  title: "Vakantiedagen calculator",
  shortTitle: "Vakantiedagen calculator",
  category: "geld-salaris",
  icon: CalendarCheck,
  summary: "Bereken je wettelijk minimum aantal vakantiedagen.",
  metaDescription:
    "Bereken gratis je wettelijk minimum aantal vakantiedagen en -uren op basis van je uren en dagen per week.",
  intro: "Vul je uren en dagen per week in om je wettelijk minimum vakantie te berekenen.",
  explanation: {
    heading: "Hoe wordt het wettelijk minimum berekend?",
    body: [
      "Het wettelijk minimum aantal vakantie-uren is viermaal je overeengekomen arbeidsduur per week. Werk je bijvoorbeeld 40 uur per week, dan is het wettelijk minimum 160 uur (20 dagen bij een 5-daagse werkweek) per jaar.",
    ],
  },
  faq: [
    {
      question: "Krijg ik altijd precies het wettelijk minimum?",
      answer:
        "Nee, veel werkgevers en cao's bieden meer vakantiedagen dan het wettelijk minimum (bovenwettelijke vakantiedagen). Check je arbeidsovereenkomst of cao voor je exacte aantal.",
    },
  ],
  relatedSlugs: ["vakantiegeld-calculator", "uurloon-calculator"],
  Component: VakantiedagenCalculator,
};
