import { CarFront } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { BIJTELLING_JAREN } from "@/lib/calculations/bijtelling";
import { BijtellingCalculator } from "./Calculator";

export const bijtellingConfig: CalculatorConfig = {
  slug: "bijtelling-calculator",
  title: `Bijtelling calculator ${BIJTELLING_JAREN[0]}`,
  shortTitle: "Bijtelling calculator",
  category: "auto-vervoer",
  icon: CarFront,
  summary: "Bereken de bijtelling voor privégebruik van je leaseauto.",
  metaDescription:
    "Bereken gratis de bijtelling voor privégebruik van je auto van de zaak op basis van de officiële Belastingdienst-percentages voor 2025 en 2026.",
  intro: "Vul de cataloguswaarde en het type auto in om de bijtelling te berekenen.",
  explanation: {
    heading: "Hoe wordt de bijtelling berekend?",
    body: [
      "De bijtelling wordt berekend als percentage van de cataloguswaarde (de nieuwprijs inclusief btw en BPM) van de auto. Voor gewone auto's geldt een vast percentage. Voor volledig elektrische auto's geldt een lager percentage tot een bepaalde cataloguswaarde; boven die grens geldt het gewone percentage over het meerdere.",
      "Het bijtellingspercentage wordt vastgesteld in het jaar van eerste tenaamstelling en geldt vervolgens 60 maanden, ook als het percentage in latere jaren verandert.",
    ],
  },
  faq: [
    {
      question: "Wat kost de bijtelling mij netto per maand?",
      answer:
        "De bijtelling wordt bij je belastbaar inkomen opgeteld. Wat dit je netto kost, hangt af van je marginale belastingtarief; gebruik de bruto-netto calculator om dit effect in te schatten.",
    },
    {
      question: "Verandert mijn bijtellingspercentage als de tarieven wijzigen?",
      answer:
        "Nee, het percentage dat gold bij de eerste tenaamstelling van de auto blijft 60 maanden lang van toepassing, ook als de Belastingdienst de tarieven daarna aanpast.",
    },
  ],
  relatedSlugs: ["autokosten-calculator", "bruto-netto-calculator"],
  Component: BijtellingCalculator,
};
