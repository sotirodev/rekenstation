import { Ruler } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { EenhedenCalculator } from "./Calculator";

export const eenhedenConfig: CalculatorConfig = {
  slug: "eenheden-omrekenen",
  title: "Eenheden omrekenen",
  shortTitle: "Eenheden omrekenen",
  category: "maten-eenheden",
  icon: Ruler,
  summary: "Reken lengte- en gewichtseenheden snel naar elkaar om.",
  metaDescription:
    "Gratis eenheden omrekenen: reken lengte (mm, cm, m, km, inch, foot, mile) en gewicht (mg, g, kg, ton, pond, ounce) snel naar elkaar om.",
  intro: "Kies een categorie en de eenheden om snel om te rekenen.",
  explanation: {
    heading: "Hoe werkt deze omrekening?",
    body: [
      "Deze calculator rekent je waarde eerst om naar een vaste basiseenheid (meter voor lengte, gram voor gewicht) en vervolgens naar de gewenste eenheid, met de standaard internationale omrekenfactoren.",
    ],
  },
  faq: [
    {
      question: "Ondersteunt de calculator ook Engelse/Amerikaanse eenheden?",
      answer: "Ja, voor lengte kun je omrekenen naar en van inch, foot en mile, en voor gewicht naar pond (lb) en ounce (oz).",
    },
  ],
  relatedSlugs: [
    "cm-naar-inch-calculator",
    "km-naar-mijl-calculator",
    "kg-naar-pond-calculator",
    "percentage-calculator",
  ],
  Component: EenhedenCalculator,
};
