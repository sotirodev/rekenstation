import { HandCoins } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HuurtoeslagCalculator } from "./Calculator";

export const huurtoeslagConfig: CalculatorConfig = {
  slug: "huurtoeslag-calculator",
  title: "Huurtoeslag calculator 2026",
  shortTitle: "Huurtoeslag calculator",
  category: "toeslagen",
  icon: HandCoins,
  summary: "Bereken een indicatie van je huurtoeslag.",
  metaDescription:
    "Bereken gratis een indicatie van je huurtoeslag voor 2026 op basis van je kale huur, inkomen en huishouden.",
  intro: "Vul je kale huur, inkomen en huishouden in om een indicatie van je huurtoeslag te krijgen.",
  explanation: {
    heading: "Hoe wordt huurtoeslag berekend?",
    body: [
      "Sinds 2026 betaal je zelf een vaste basishuur (€202,52 als alleenstaande, €200,71 in een meerpersoonshuishouden). Van het deel van je huur daarboven krijg je tot de kwaliteitskortingsgrens (€498,20) alles vergoed, tussen de kwaliteitskortingsgrens en de aftoppingsgrens 65%, en daarboven tot de maximale huurgrens (€932,93) nog 40%.",
      "Verdien je meer dan het drempelinkomen (€23.425 alleenstaand, €31.500 met een meerpersoonshuishouden), dan wordt dit bedrag verminderd: 27 cent per euro extra inkomen als alleenstaande, of 22 cent per euro in een meerpersoonshuishouden.",
      "Bijvoorbeeld: bij een kale huur van €600 en een inkomen tot het drempelinkomen kom je als alleenstaande uit op ongeveer €361,85 huurtoeslag per maand.",
    ],
  },
  faq: [
    {
      question: "Telt mijn vermogen (spaargeld) mee voor huurtoeslag?",
      answer:
        "Ja, naast inkomen geldt er ook een vermogensgrens. Heb je meer vermogen dan de grens die de Belastingdienst hanteert, dan vervalt het recht op huurtoeslag, ook als je inkomen onder de grens blijft. Deze berekening houdt alleen rekening met inkomen; kijk voor de actuele vermogensgrens op toeslagen.nl.",
    },
    {
      question: "Tellen servicekosten mee in de huur?",
      answer:
        "Nee, sinds 2026 telt alleen de kale huur mee voor de berekening van huurtoeslag, servicekosten worden niet meer meegerekend.",
    },
    {
      question: "Wat als mijn huur hoger is dan de maximale huurgrens?",
      answer:
        "Je hebt nog steeds recht op huurtoeslag, maar de berekening gaat dan uit van de maximale huurgrens (€932,93) in plaats van je werkelijke huur. Het bedrag daarboven telt niet mee.",
    },
    {
      question: "Geldt deze berekening ook voor jongeren onder de 21?",
      answer:
        "Nee, voor huurders onder de 21 jaar gelden andere regels en een lagere maximale huurgrens. Gebruik voor die situatie de proefberekening op toeslagen.nl.",
    },
  ],
  relatedSlugs: ["zorgtoeslag-calculator", "bruto-netto-calculator"],
  Component: HuurtoeslagCalculator,
};
