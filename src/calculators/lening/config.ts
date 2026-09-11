import { HandCoins } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { LeningCalculator } from "./Calculator";

export const leningConfig: CalculatorConfig = {
  slug: "lening-calculator",
  title: "Lening calculator",
  shortTitle: "Lening calculator",
  category: "geld-salaris",
  icon: HandCoins,
  summary: "Bereken de maandlasten van een persoonlijke lening.",
  metaDescription:
    "Bereken gratis de indicatieve maandlasten van een persoonlijke lening of doorlopend krediet, op basis van leenbedrag, rente en looptijd.",
  intro: "Vul het leenbedrag, de rente en de looptijd in voor een indicatie van je maandlasten.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gaat uit van een annuïtaire lening: elke maand betaal je hetzelfde bedrag, waarbij de verhouding tussen rente en aflossing gedurende de looptijd verschuift.",
      "Bijvoorbeeld: bij een lening van €10.000, 6% rente per jaar en een looptijd van 60 maanden, betaal je ongeveer €193 per maand.",
    ],
  },
  faq: [
    {
      question: "Is dit hetzelfde als de hypotheek calculator?",
      answer:
        "De onderliggende rekenmethode (annuïtair) is vergelijkbaar, maar deze calculator is bedoeld voor consumptieve leningen zoals een persoonlijke lening of doorlopend krediet, met een looptijd in maanden in plaats van jaren.",
    },
    {
      question: "Is dit een leningsaanbod?",
      answer:
        "Nee, dit is een indicatieve berekening. De rente en voorwaarden verschillen per kredietverstrekker en hangen af van je persoonlijke situatie.",
    },
  ],
  relatedSlugs: ["hypotheek-calculator", "bruto-netto-calculator"],
  Component: LeningCalculator,
};
