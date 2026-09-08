import { Briefcase } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ZzpUurtariefCalculator } from "./Calculator";

export const zzpUurtariefConfig: CalculatorConfig = {
  slug: "zzp-uurtarief-calculator",
  title: "ZZP uurtarief calculator",
  shortTitle: "ZZP uurtarief calculator",
  category: "geld-salaris",
  icon: Briefcase,
  summary: "Bereken welk uurtarief je als zzp'er/freelancer moet vragen.",
  metaDescription:
    "Bereken gratis je minimale uurtarief als zzp'er of freelancer op basis van je gewenste inkomen, zakelijke kosten en factureerbare uren.",
  intro:
    "Vul je gewenste inkomen, kosten en uren in om een indicatie van je minimale uurtarief te krijgen.",
  explanation: {
    heading: "Hoe wordt het uurtarief berekend?",
    body: [
      "Deze calculator rekent je gewenste nettojaarinkomen om naar het brutobedrag dat je moet omzetten, gebaseerd op een reservering voor belasting en premies. Daar worden je zakelijke kosten bij opgeteld, en het totaal wordt gedeeld door je factureerbare uren per jaar.",
      "Factureerbare uren zijn de uren die je daadwerkelijk kunt doorberekenen aan klanten. Reken vakantie, ziekte, administratie en acquisitie er dus niet bij.",
    ],
  },
  faq: [
    {
      question: "Hoeveel factureerbare uren heeft een gemiddelde zzp'er per jaar?",
      answer:
        "Vaak wordt uitgegaan van 1.100 tot 1.400 uur per jaar, afhankelijk van hoeveel tijd er opgaat aan niet-declarabele werkzaamheden zoals administratie en acquisitie.",
    },
    {
      question: "Waarom een reservering voor belasting?",
      answer:
        "Als zzp'er houdt niemand loonheffing voor je in: je moet zelf reserveren voor inkomstenbelasting en de premie Zvw, meestal 30-40% van je winst.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator", "uurloon-calculator"],
  Component: ZzpUurtariefCalculator,
};
