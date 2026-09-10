import { Moon } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HoeLaatSlapenCalculator } from "./Calculator";

export const hoeLaatSlapenConfig: CalculatorConfig = {
  slug: "hoe-laat-moet-ik-slapen-calculator",
  title: "Hoe laat moet ik gaan slapen",
  shortTitle: "Hoe laat moet ik slapen",
  category: "gezondheid",
  icon: Moon,
  summary: "Bereken de beste bedtijden op basis van je gewenste wektijd.",
  metaDescription:
    "Bereken hoe laat je moet gaan slapen om uitgerust wakker te worden, op basis van slaapcycli van 90 minuten.",
  intro: "Vul in hoe laat je wakker wilt worden om de beste bedtijden te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Slaap verloopt in cycli van gemiddeld 90 minuten. Wakker worden aan het einde van een volledige cyclus, in plaats van er middenin, voelt doorgaans minder groggy aan.",
      "Deze calculator telt terug vanaf je gewenste wektijd in stappen van 90 minuten, plus 15 minuten om in slaap te vallen, en toont meerdere bedtijden met een verschillend aantal complete slaapcycli.",
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
  relatedSlugs: ["hoe-laat-word-ik-wakker-calculator"],
  Component: HoeLaatSlapenCalculator,
};
