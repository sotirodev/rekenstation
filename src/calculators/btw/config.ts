import { Percent } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { BtwCalculator } from "./Calculator";

export const btwConfig: CalculatorConfig = {
  slug: "btw-calculator",
  title: "BTW calculator",
  shortTitle: "BTW calculator",
  category: "btw-belastingen",
  icon: Percent,
  summary: "Reken snel BTW om: exclusief naar inclusief en andersom.",
  metaDescription:
    "Bereken eenvoudig BTW: van exclusief naar inclusief, van inclusief naar exclusief, of alleen het BTW-bedrag, voor de tarieven 21%, 9% en 0%.",
  intro:
    "Vul een bedrag in en kies het BTW-tarief om snel de BTW te berekenen.",
  explanation: {
    heading: "Hoe werkt de BTW-berekening?",
    body: [
      "In Nederland gelden drie BTW-tarieven: 21% (algemeen tarief), 9% (verlaagd tarief, bijvoorbeeld voedingsmiddelen) en 0% (bijvoorbeeld bij export).",
      "Bij 'exclusief naar inclusief' wordt het BTW-bedrag bij het bedrag opgeteld. Bij 'inclusief naar exclusief' wordt de BTW uit het totaalbedrag berekend.",
    ],
  },
  faq: [
    {
      question: "Welk BTW-tarief geldt voor mijn product of dienst?",
      answer:
        "Dit hangt af van het type product of dienst. Raadpleeg de Belastingdienst voor een volledig overzicht van welk tarief van toepassing is.",
    },
    {
      question: "Hoe bereken ik de BTW uit een totaalbedrag?",
      answer:
        "Kies de optie 'Bedrag is inclusief BTW' en vul het totaalbedrag in. De calculator berekent dan automatisch het bedrag exclusief BTW en het BTW-bedrag.",
    },
  ],
  relatedSlugs: ["percentage-calculator", "bruto-netto-calculator"],
  popular: true,
  Component: BtwCalculator,
};
