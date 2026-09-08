import { Flame } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { CalorieCalculator } from "./Calculator";

export const calorieConfig: CalculatorConfig = {
  slug: "calorie-calculator",
  title: "Calorie calculator",
  shortTitle: "Calorie calculator",
  category: "gezondheid",
  icon: Flame,
  summary: "Bereken je geschatte dagelijkse caloriebehoefte (BMR en TDEE).",
  metaDescription:
    "Bereken gratis je basaalmetabolisme (BMR) en dagelijkse caloriebehoefte (TDEE) op basis van geslacht, leeftijd, lengte, gewicht en activiteitsniveau.",
  intro:
    "Vul je gegevens in om een schatting te krijgen van je dagelijkse caloriebehoefte.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator gebruikt de Mifflin-St Jeor formule om je basaalmetabolisme (BMR) te schatten: de energie die je lichaam in rust verbrandt. Door de BMR te vermenigvuldigen met een activiteitsfactor krijg je een schatting van je totale dagelijkse energiebehoefte (TDEE).",
      "Dit is een schatting. Je werkelijke caloriebehoefte kan afwijken door bijvoorbeeld spiermassa, hormoonhuishouding of andere persoonlijke factoren.",
    ],
  },
  faq: [
    {
      question: "Wat is het verschil tussen BMR en TDEE?",
      answer:
        "BMR is de energie die je lichaam in volledige rust verbrandt. TDEE houdt ook rekening met je dagelijkse activiteit en beweging.",
    },
    {
      question: "Is dit medisch advies?",
      answer:
        "Nee, dit is een schatting bedoeld ter indicatie. Raadpleeg bij vragen over voeding of gewicht een arts of diëtist.",
    },
  ],
  relatedSlugs: ["bmi-calculator"],
  Component: CalorieCalculator,
};
