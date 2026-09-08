import { CircleDollarSign } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { StudieschuldCalculator } from "./Calculator";

export const studieschuldConfig: CalculatorConfig = {
  slug: "studieschuld-calculator",
  title: "Studieschuld aflossing calculator",
  shortTitle: "Studieschuld calculator",
  category: "studie",
  icon: CircleDollarSign,
  summary: "Bereken een indicatie van je maandelijkse aflossing op je studieschuld.",
  metaDescription:
    "Bereken gratis een indicatie van je maandelijkse aflossing op je studieschuld, annuïtair of lineair, met de rente en looptijd die jij invult.",
  intro: "Vul je studieschuld, rente en looptijd in voor een indicatie van je aflossing.",
  explanation: {
    heading: "Hoe wordt de aflossing berekend?",
    body: [
      "Deze calculator rekent net als bij een hypotheek: annuïtair (vaste maandlast) of lineair (dalende maandlast, met een vast aflossingsbedrag per maand).",
      "In werkelijkheid kent DUO een draagkrachtregeling, waarbij je aflossing kan meebewegen met je inkomen, en een standaard aflostermijn van 35 jaar.",
    ],
  },
  faq: [
    {
      question: "Wat is de draagkrachtregeling van DUO?",
      answer:
        "Bij de draagkrachtregeling betaal je nooit meer dan een bepaald percentage van je inkomen boven een drempelbedrag. Verdien je weinig, dan kan je maandelijkse aflossing lager uitvallen dan het standaardbedrag.",
    },
  ],
  relatedSlugs: ["studentenbudget-calculator", "bruto-netto-calculator"],
  Component: StudieschuldCalculator,
};
