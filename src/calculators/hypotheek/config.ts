import { Home } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { HypotheekCalculator } from "./Calculator";

export const hypotheekConfig: CalculatorConfig = {
  slug: "hypotheek-calculator",
  title: "Hypotheek calculator",
  shortTitle: "Hypotheek calculator",
  category: "wonen-hypotheek",
  icon: Home,
  summary: "Bereken een indicatie van je maandlasten bij een hypotheek.",
  metaDescription:
    "Bereken een indicatie van je hypotheek maandlasten bij een annuïtaire of lineaire hypotheek. Gratis en snel, geen hypotheekadvies.",
  intro:
    "Vul je hypotheekbedrag, rente en looptijd in voor een indicatie van je maandlasten.",
  explanation: {
    heading: "Hoe werkt deze hypotheekberekening?",
    body: [
      "Bij een annuïtaire hypotheek betaal je elke maand hetzelfde bedrag, waarbij de verhouding tussen rente en aflossing gedurende de looptijd verschuift.",
      "Bij een lineaire hypotheek los je elke maand hetzelfde bedrag af, waardoor de rente (en dus de maandlast) geleidelijk daalt. De eerste maandlast is hierdoor hoger dan bij een annuïtaire hypotheek.",
      "Deze berekening is indicatief en houdt geen rekening met bijvoorbeeld hypotheekrenteaftrek, overlijdensrisicoverzekering of andere kosten.",
    ],
  },
  faq: [
    {
      question: "Is dit hypotheekadvies?",
      answer:
        "Nee, deze calculator geeft een indicatie van je maandlasten. Voor persoonlijk hypotheekadvies kun je terecht bij een erkend hypotheekadviseur.",
    },
    {
      question: "Wat is het verschil tussen annuïtair en lineair aflossen?",
      answer:
        "Bij annuïtair aflossen blijft de maandlast gelijk, bij lineair aflossen daalt de maandlast geleidelijk omdat je steeds hetzelfde bedrag aflost over een dalende restschuld.",
    },
  ],
  relatedSlugs: ["bruto-netto-calculator", "uurloon-calculator"],
  popular: true,
  Component: HypotheekCalculator,
};
