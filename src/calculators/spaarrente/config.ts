import { TrendingUp } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { SpaarrenteCalculator } from "./Calculator";

export const spaarrenteConfig: CalculatorConfig = {
  slug: "spaarrente-calculator",
  title: "Spaarrente calculator",
  shortTitle: "Spaarrente calculator",
  category: "geld-salaris",
  icon: TrendingUp,
  summary: "Bereken hoe je spaargeld groeit met rente-op-rente.",
  metaDescription:
    "Bereken gratis hoe je spaargeld groeit met rente-op-rente (samengestelde interest), inclusief maandelijkse inleg.",
  intro: "Vul je startkapitaal, inleg, rente en looptijd in om je eindkapitaal te berekenen.",
  explanation: {
    heading: "Wat is rente-op-rente?",
    body: [
      "Bij rente-op-rente (samengestelde interest) wordt de rente die je hebt ontvangen elke periode opnieuw meegeteld, waardoor je saldo sneller groeit dan bij enkelvoudige rente.",
      "Deze calculator rekent maandelijks: elke maand wordt rente berekend over het actuele saldo, waarna je eventuele inleg wordt toegevoegd.",
    ],
  },
  faq: [
    {
      question: "Houdt dit rekening met belasting over spaargeld?",
      answer:
        "Nee, deze calculator houdt geen rekening met box 3-belasting over je vermogen. Het werkelijke rendement na belasting kan lager uitvallen.",
    },
  ],
  relatedSlugs: ["samengestelde-interest-calculator", "bruto-netto-calculator"],
  Component: SpaarrenteCalculator,
};
