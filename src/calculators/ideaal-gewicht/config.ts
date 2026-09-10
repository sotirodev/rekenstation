import { Scale } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { IdeaalGewichtCalculator } from "./Calculator";

export const ideaalGewichtConfig: CalculatorConfig = {
  slug: "ideaal-gewicht-calculator",
  title: "Ideaal gewicht calculator",
  shortTitle: "Ideaal gewicht",
  category: "gezondheid",
  icon: Scale,
  summary: "Bereken een indicatie van je ideale lichaamsgewicht op basis van je lengte.",
  metaDescription:
    "Bereken gratis een indicatie van je ideale lichaamsgewicht op basis van je lengte en geslacht, met de veelgebruikte Devine-formule.",
  intro: "Vul je lengte en geslacht in voor een indicatie van je ideale lichaamsgewicht.",
  explanation: {
    heading: "Hoe wordt het ideale gewicht berekend?",
    body: [
      "Deze calculator gebruikt de Devine-formule uit 1974, een van de meest gebruikte formules voor ideaal lichaamsgewicht in de medische literatuur. Voor mannen is dat 50 kg plus 2,3 kg per inch boven de 152,4 cm; voor vrouwen 45,5 kg plus 2,3 kg per inch boven de 152,4 cm.",
      "Dit is een andere berekening dan BMI: BMI zegt iets over je gewicht in verhouding tot je lengte, terwijl deze formule een concreet gewicht in kilogram als indicatie geeft.",
    ],
  },
  faq: [
    {
      question: "Is dit hetzelfde als BMI?",
      answer:
        "Nee. BMI berekent een verhoudingsgetal (gewicht gedeeld door lengte in het kwadraat), terwijl deze calculator een concreet indicatief gewicht in kilogram geeft op basis van de Devine-formule.",
    },
    {
      question: "Houdt deze berekening rekening met spiermassa?",
      answer:
        "Nee, net als BMI houdt deze formule geen rekening met spiermassa, lichaamsbouw of leeftijd. Sporters met veel spiermassa wegen vaak meer dan de uitkomst van deze calculator, zonder dat dit ongezond is.",
    },
  ],
  relatedSlugs: ["bmi-calculator", "calorie-calculator"],
  Component: IdeaalGewichtCalculator,
};
