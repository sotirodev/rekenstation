import { Sun } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ZonnepanelenCalculator } from "./Calculator";

export const zonnepanelenConfig: CalculatorConfig = {
  slug: "zonnepanelen-terugverdientijd-calculator",
  title: "Zonnepanelen terugverdientijd calculator",
  shortTitle: "Zonnepanelen calculator",
  category: "duurzaamheid",
  icon: Sun,
  summary: "Bereken wanneer je zonnepanelen zijn terugverdiend.",
  metaDescription:
    "Bereken gratis de terugverdientijd van zonnepanelen op basis van de investering, jaarlijkse opbrengst en stroomprijs.",
  intro: "Vul je investering, verwachte opbrengst en stroomprijs in.",
  explanation: {
    heading: "Hoe wordt de terugverdientijd berekend?",
    body: [
      "De jaarlijkse besparing is je opgewekte stroom in kWh vermenigvuldigd met de stroomprijs, minus eventuele onderhoudskosten. De terugverdientijd is de investering gedeeld door deze jaarlijkse besparing.",
    ],
  },
  faq: [
    {
      question: "Waar vind ik mijn verwachte jaarlijkse opbrengst?",
      answer:
        "Je installateur geeft meestal een opbrengstberekening op basis van het aantal panelen, de oriëntatie van je dak en je regio. Reken anders met circa 850-950 kWh per jaar per paneel als indicatie.",
    },
  ],
  relatedSlugs: ["energieverbruik-calculator", "warmtepomp-calculator"],
  Component: ZonnepanelenCalculator,
};
