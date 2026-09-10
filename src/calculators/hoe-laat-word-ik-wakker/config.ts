import { Moon } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HoeLaatWordIkWakkerCalculator } from "./Calculator";

export const hoeLaatWordIkWakkerConfig: CalculatorConfig = {
  slug: "hoe-laat-word-ik-wakker-calculator",
  title: "Hoe laat word ik wakker",
  shortTitle: "Hoe laat word ik wakker",
  category: "gezondheid",
  icon: Moon,
  summary: "Bereken de beste wektijden op basis van wanneer je naar bed gaat.",
  metaDescription:
    "Bereken hoe laat je het beste wakker kunt worden als je nu naar bed gaat, op basis van slaapcycli van 90 minuten.",
  intro: "Vul in hoe laat je naar bed gaat om de beste wektijden te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Slaap verloopt in cycli van gemiddeld 90 minuten. Wakker worden aan het einde van een volledige cyclus, in plaats van er middenin, voelt doorgaans minder groggy aan.",
      "Deze calculator telt vanaf je bedtijd 15 minuten inslaaptijd en vervolgens stappen van 90 minuten op, en toont meerdere wektijden met een verschillend aantal complete slaapcycli.",
    ],
  },
  faq: [
    {
      question: "Waarom staan er meerdere tijden?",
      answer:
        "Hoe meer volledige slaapcycli je haalt, hoe uitgeruster je doorgaans wakker wordt. De meeste volwassenen hebben baat bij 5 tot 6 cycli, maar dit verschilt per persoon.",
    },
    {
      question: "Is dit exact voor iedereen hetzelfde?",
      answer:
        "Nee, de duur van een slaapcyclus verschilt van persoon tot persoon en kan tussen de 80 en 120 minuten liggen. Deze calculator gaat uit van het gemiddelde van 90 minuten.",
    },
  ],
  relatedSlugs: ["hoe-laat-moet-ik-slapen-calculator"],
  Component: HoeLaatWordIkWakkerCalculator,
};
