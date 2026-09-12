import { Plug } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { StroomkostenApparaatCalculator } from "./Calculator";

export const stroomkostenApparaatConfig: CalculatorConfig = {
  slug: "stroomkosten-apparaat-calculator",
  title: "Stroomkosten van een apparaat calculator",
  shortTitle: "Stroomkosten apparaat",
  category: "energie",
  icon: Plug,
  summary: "Bereken wat een apparaat aan stroom kost per dag, maand en jaar.",
  metaDescription:
    "Bereken gratis wat een apparaat (droger, airco, tv, gamesetup) aan stroomkosten kost per dag, maand en jaar, op basis van wattage en jouw stroomprijs.",
  intro: "Vul het wattage, de gebruiksduur en je stroomprijs in om de kosten te zien.",
  explanation: {
    heading: "Hoe wordt dit berekend?",
    body: [
      "Het verbruik in kilowattuur (kWh) is het wattage gedeeld door 1.000, vermenigvuldigd met het aantal uren gebruik. Dat verbruik wordt vervolgens vermenigvuldigd met je stroomprijs per kWh.",
      "Bijvoorbeeld: een apparaat van 2.000 watt dat 1 uur per dag draait, gebruikt 2 kWh per dag. Bij een stroomprijs van €0,30 per kWh kost dat €0,60 per dag, oftewel ongeveer €18 per maand.",
    ],
  },
  faq: [
    {
      question: "Waar vind ik het wattage van mijn apparaat?",
      answer:
        "Meestal op het typeplaatje van het apparaat zelf, in de handleiding, of op de productpagina van de fabrikant. Sommige apparaten geven het vermogen aan in kW in plaats van watt; vermenigvuldig dat met 1.000.",
    },
    {
      question: "Waar vind ik mijn stroomprijs per kWh?",
      answer:
        "Op je jaarafrekening of maandfactuur van je energieleverancier, of in je online klantomgeving. Deze prijs verschilt per leverancier en contract.",
    },
  ],
  relatedSlugs: ["energieverbruik-calculator", "douchekosten-calculator"],
  Component: StroomkostenApparaatCalculator,
};
