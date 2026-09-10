import { HeartHandshake } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ZorgtoeslagCalculator } from "./Calculator";

export const zorgtoeslagConfig: CalculatorConfig = {
  slug: "zorgtoeslag-calculator",
  title: "Zorgtoeslag calculator",
  shortTitle: "Zorgtoeslag calculator",
  category: "toeslagen",
  icon: HeartHandshake,
  summary: "Bereken een indicatie van je zorgtoeslag.",
  metaDescription:
    "Bereken gratis een indicatie van je zorgtoeslag op basis van je verzamelinkomen, met of zonder toeslagpartner.",
  intro: "Vul je verzamelinkomen in om een indicatie van je zorgtoeslag te krijgen.",
  explanation: {
    heading: "Hoe wordt zorgtoeslag berekend?",
    body: [
      "Zorgtoeslag is een bijdrage in de kosten van je zorgverzekering. Hoe hoger je inkomen, hoe lager de toeslag; boven een bepaalde inkomensgrens krijg je geen zorgtoeslag meer.",
      "Heb je een toeslagpartner, dan telt jullie gezamenlijke verzamelinkomen mee en geldt een hogere inkomensgrens, maar ook een andere berekening.",
    ],
  },
  faq: [
    {
      question: "Wat is een verzamelinkomen?",
      answer:
        "Het verzamelinkomen is je totale inkomen vóór aftrekposten, zoals vermeld in je belastingaangifte: loon, uitkering, winst uit onderneming en inkomsten uit vermogen samen.",
    },
    {
      question: "Wat is een toeslagpartner?",
      answer:
        "Meestal je echtgenoot, geregistreerd partner, of iemand waarmee je een gezamenlijke huishouding voert en op hetzelfde adres staat ingeschreven. Kijk op toeslagen.nl voor de exacte voorwaarden.",
    },
    {
      question: "Tot welk inkomen heb ik recht op zorgtoeslag?",
      answer:
        "In 2026 vervalt je recht op zorgtoeslag bij een jaarinkomen vanaf €40.857 zonder toeslagpartner, of €51.142 gezamenlijk inkomen met een toeslagpartner. Deze grenzen zijn al verwerkt in de berekening hierboven.",
    },
    {
      question: "Telt mijn spaargeld mee voor de zorgtoeslag?",
      answer:
        "Ja, naast inkomen geldt er ook een vermogensgrens. Heb je samen met eventuele beleggingen meer vermogen dan de grens die de Belastingdienst hanteert, dan vervalt het recht op zorgtoeslag, ook als je inkomen onder de grens blijft. Deze berekening houdt alleen rekening met inkomen; kijk voor de actuele vermogensgrens op de site van de Belastingdienst.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator"],
  popular: true,
  Component: ZorgtoeslagCalculator,
};
