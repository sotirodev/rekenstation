import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { LichaamsvetpercentageCalculator } from "./Calculator";

export const lichaamsvetpercentageConfig: CalculatorConfig = {
  slug: "lichaamsvetpercentage-calculator",
  title: "Lichaamsvetpercentage calculator",
  shortTitle: "Lichaamsvetpercentage",
  category: "gezondheid",
  icon: Ruler,
  summary: "Bereken een indicatie van je lichaamsvetpercentage op basis van omtrekmetingen.",
  metaDescription:
    "Bereken gratis een indicatie van je lichaamsvetpercentage met de US Navy-methode, op basis van lengte, nek-, taille- en (bij vrouwen) heupomtrek.",
  intro: "Vul je lengte en omtrekmetingen in voor een indicatie van je lichaamsvetpercentage.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt de US Navy-methode, ontwikkeld voor de Amerikaanse marine. De formule schat je lichaamsvetpercentage op basis van de omtrek van je nek en taille (en bij vrouwen ook je heup), in verhouding tot je lengte.",
      "Meet de nek net onder het strottenhoofd, de taille op het smalste punt van je torso, en bij vrouwen de heup op het breedste punt van het bekken, voor het meest betrouwbare resultaat.",
    ],
  },
  faq: [
    {
      question: "Hoe nauwkeurig is deze methode?",
      answer:
        "De US Navy-methode is een indicatie op basis van omtrekmetingen, geen medische meting zoals een DEXA-scan of huidplooimeting. De uitkomst kan enkele procentpunten afwijken van je werkelijke lichaamsvetpercentage.",
    },
    {
      question: "Waarom vraagt de calculator bij vrouwen ook om de heupomtrek?",
      answer:
        "De formule voor vrouwen houdt rekening met vetverdeling rond de heup, wat bij mannen niet nodig is gebleken voor een betrouwbare schatting.",
    },
  ],
  relatedSlugs: ["bmi-calculator", "ideaal-gewicht-calculator"],
  Component: LichaamsvetpercentageCalculator,
};
