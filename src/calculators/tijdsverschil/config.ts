import { Globe } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { TijdsverschilCalculator } from "./Calculator";

export const tijdsverschilConfig: CalculatorConfig = {
  slug: "tijdsverschil-calculator",
  title: "Tijdsverschil calculator",
  shortTitle: "Tijdsverschil calculator",
  category: "tijd",
  icon: Globe,
  summary: "Bereken het tijdsverschil tussen twee steden of tijdzones.",
  metaDescription:
    "Bereken gratis het tijdsverschil tussen twee steden of tijdzones, inclusief automatische correctie voor zomer- en wintertijd.",
  intro: "Kies twee tijdzones en een datum om het tijdsverschil te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt de tijdzonedatabase die in elke browser is ingebouwd om het exacte tijdsverschil tussen twee plaatsen te bepalen, inclusief automatische correctie voor zomer- en wintertijd.",
      "Omdat niet elk land op dezelfde datum overschakelt tussen zomer- en wintertijd, kan het tijdsverschil tussen twee plaatsen door het jaar heen wisselen. Kies daarom de datum waarvoor je het verschil wilt weten.",
    ],
  },
  faq: [
    {
      question: "Waarom moet ik een datum invullen?",
      answer:
        "Omdat landen op verschillende momenten overschakelen tussen zomer- en wintertijd, kan het tijdsverschil tussen twee plaatsen op sommige dagen van het jaar anders zijn dan op andere dagen.",
    },
  ],
  relatedSlugs: ["datumverschil-calculator", "leeftijd-calculator"],
  Component: TijdsverschilCalculator,
};
