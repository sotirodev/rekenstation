import { Thermometer } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { WarmtepompCalculator } from "./Calculator";

export const warmtepompConfig: CalculatorConfig = {
  slug: "warmtepomp-calculator",
  title: "Warmtepomp besparing calculator",
  shortTitle: "Warmtepomp calculator",
  category: "duurzaamheid",
  icon: Thermometer,
  summary: "Bereken een indicatie van je besparing met een warmtepomp t.o.v. gas.",
  metaDescription:
    "Bereken gratis een indicatie van je besparing als je overstapt van gasverwarming naar een warmtepomp, op basis van je eigen verbruik en tarieven.",
  intro: "Vul je huidige gasverbruik en de gegevens van de warmtepomp in.",
  explanation: {
    heading: "Hoe wordt de besparing berekend?",
    body: [
      "Eerst wordt je huidige warmtevraag in kWh geschat uit je gasverbruik, het rendement van je CV-ketel en de energie-inhoud van aardgas. Die warmtevraag wordt gedeeld door de COP (prestatiecoëfficiënt) van de warmtepomp om de benodigde stroom te schatten.",
      "De COP staat meestal in de specificaties van de warmtepomp; een hogere COP betekent minder stroomverbruik voor dezelfde hoeveelheid warmte.",
    ],
  },
  faq: [
    {
      question: "Wat is een realistische COP?",
      answer:
        "Dat verschilt sterk per type warmtepomp en woning; fabrikanten geven vaak een SCOP (seizoensgemiddelde) op tussen de 3 en 5. Vraag je installateur naar een realistische waarde voor jouw situatie.",
    },
  ],
  relatedSlugs: ["energieverbruik-calculator", "zonnepanelen-terugverdientijd-calculator"],
  Component: WarmtepompCalculator,
};
