import { Clock } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { defaultTaxYear } from "@/lib/tax-data";
import { NettoUurloonCalculator } from "./Calculator";

export const nettoUurloonConfig: CalculatorConfig = {
  slug: "netto-uurloon-calculator",
  title: `Netto uurloon calculator ${defaultTaxYear}`,
  shortTitle: "Netto uurloon",
  category: "geld-salaris",
  icon: Clock,
  summary: "Bereken je netto uurloon uit je bruto uurloon.",
  metaDescription:
    "Bereken snel je netto uurloon uit je bruto uurloon en uren per week, met de actuele Belastingdienst-tarieven.",
  intro: "Vul je bruto uurloon en je uren per week in om je netto uurloon te zien.",
  explanation: {
    heading: "Hoe wordt het netto uurloon berekend?",
    body: [
      "Deze calculator rekent je bruto uurloon eerst om naar een bruto jaarsalaris (uitgaand van 52 werkweken per jaar), berekent daarover de loonheffing volgens de officiële Belastingdienst-tarieven, en deelt het nettoresultaat weer terug naar een netto uurloon.",
    ],
  },
  faq: [
    {
      question: "Waarom is dit anders dan gewoon mijn bruto uurloon delen door het belastingpercentage?",
      answer:
        "De Nederlandse loonheffing werkt met oplopende belastingschijven en heffingskortingen die afhankelijk zijn van je totale jaarinkomen, niet van een vast percentage per uur. Daarom rekent deze calculator via je volledige jaarsalaris.",
    },
    {
      question: "Houdt dit rekening met vakantiegeld?",
      answer:
        "Nee, deze berekening gaat uit van je uurloon zonder vakantiegeld. Gebruik de vakantiegeld calculator om te zien wat vakantiegeld je extra oplevert.",
    },
  ],
  relatedSlugs: ["uurloon-calculator", "bruto-netto-calculator"],
  Component: NettoUurloonCalculator,
};
