import { Droplets } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { DouchekostenCalculator } from "./Calculator";

export const douchekostenConfig: CalculatorConfig = {
  slug: "douchekosten-calculator",
  title: "Douchekosten calculator",
  shortTitle: "Douchekosten",
  category: "energie",
  icon: Droplets,
  summary: "Bereken wat een douchebeurt kost aan water en energie.",
  metaDescription:
    "Bereken gratis wat een douchebeurt kost aan water en energie, op basis van waterdebiet, doucheduur, waterprijs en energieprijs.",
  intro: "Vul het waterdebiet, de doucheduur en jouw water- en energieprijs in.",
  explanation: {
    heading: "Hoe wordt dit berekend?",
    body: [
      "De waterkosten zijn het waterverbruik (debiet keer duur) vermenigvuldigd met je waterprijs per kubieke meter. De energiekosten zijn de warmte die nodig is om het water op te warmen, uitgaand van een opwarming van 25°C van koud leidingwater naar douchetemperatuur, gedeeld door een geschat boilerrendement van 85%.",
      "Bijvoorbeeld: bij 9 liter per minuut en 8 minuten douchen (72 liter) kost dat bij een waterprijs van €1,50 per m³ en een energieprijs van €0,30 per kWh ongeveer €0,85 per douchebeurt.",
    ],
  },
  faq: [
    {
      question: "Hoeveel water verbruikt een gemiddelde douchekop?",
      answer:
        "Een gemiddelde douchekop verbruikt 8 tot 12 liter per minuut. Een waterbesparende douchekop zit vaak rond de 6 liter per minuut, wat flink kan schelen op je jaarlijkse kosten.",
    },
    {
      question: "Waarom telt de energie voor het opwarmen mee?",
      answer:
        "Het opwarmen van douchewater kost vaak meer dan het water zelf. Deze calculator telt beide kostenposten apart op, zodat je ziet waar de meeste besparing te behalen valt.",
    },
  ],
  relatedSlugs: ["stroomkosten-apparaat-calculator", "energieverbruik-calculator"],
  Component: DouchekostenCalculator,
};
