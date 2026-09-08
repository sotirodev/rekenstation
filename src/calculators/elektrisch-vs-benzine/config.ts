import { BatteryCharging } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { ElektrischVsBenzineCalculator } from "./Calculator";

export const elektrischVsBenzineConfig: CalculatorConfig = {
  slug: "elektrisch-vs-benzine-calculator",
  title: "Elektrisch vs benzine kosten calculator",
  shortTitle: "Elektrisch vs benzine calculator",
  category: "duurzaamheid",
  icon: BatteryCharging,
  summary: "Vergelijk de brandstofkosten van elektrisch rijden met benzine.",
  metaDescription:
    "Vergelijk gratis de jaarlijkse brandstofkosten van een elektrische auto met een benzineauto, op basis van je eigen kilometers en verbruik.",
  intro: "Vul je jaarkilometers en het verbruik van beide auto's in.",
  explanation: {
    heading: "Hoe wordt de vergelijking gemaakt?",
    body: [
      "Voor beide aandrijvingen wordt het jaarlijkse verbruik berekend (liters benzine of kWh stroom) en vermenigvuldigd met de prijs per liter of kWh. Het verschil is je geschatte jaarlijkse besparing.",
      "Deze vergelijking gaat alleen over brandstofkosten; aanschafprijs, afschrijving, wegenbelasting en bijtelling verschillen ook tussen elektrisch en benzine en zijn hier niet in meegenomen.",
    ],
  },
  faq: [
    {
      question: "Waarom houdt dit geen rekening met aanschafprijs?",
      answer:
        "Omdat aanschafprijzen sterk verschillen per model en per moment. Gebruik deze calculator samen met de autokosten- en bijtellingcalculator voor een vollediger beeld van de totale kosten.",
    },
  ],
  relatedSlugs: ["brandstofkosten-calculator", "autokosten-calculator", "bijtelling-calculator"],
  Component: ElektrischVsBenzineCalculator,
};
