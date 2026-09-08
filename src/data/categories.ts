import {
  PiggyBank,
  Stethoscope,
  Route,
  Building2,
  Landmark,
  CalendarClock,
  ArrowLeftRight,
  Wrench,
  HandCoins,
  Zap,
} from "lucide-react";
import type { Category } from "@/types/calculator";

export const categories: Category[] = [
  {
    slug: "geld-salaris",
    title: "Geld & Salaris",
    description: "Salaris, bruto-netto en uurloon berekenen.",
    icon: PiggyBank,
  },
  {
    slug: "gezondheid",
    title: "Gezondheid",
    description: "BMI, calorieën en andere gezondheidstools.",
    icon: Stethoscope,
  },
  {
    slug: "auto-vervoer",
    title: "Auto & Vervoer",
    description: "Autokosten en brandstofkosten berekenen.",
    icon: Route,
  },
  {
    slug: "wonen-hypotheek",
    title: "Wonen & Hypotheek",
    description: "Hypotheek en woonlasten berekenen.",
    icon: Building2,
  },
  {
    slug: "btw-belastingen",
    title: "BTW & Belastingen",
    description: "BTW en andere belastingen berekenen.",
    icon: Landmark,
  },
  {
    slug: "tijd",
    title: "Tijd",
    description: "Leeftijd, datums en tijdsberekeningen.",
    icon: CalendarClock,
  },
  {
    slug: "maten-eenheden",
    title: "Maten & Eenheden",
    description: "Eenheden en maten omrekenen.",
    icon: ArrowLeftRight,
  },
  {
    slug: "toeslagen",
    title: "Toeslagen",
    description: "Zorgtoeslag en andere overheidstoeslagen berekenen.",
    icon: HandCoins,
  },
  {
    slug: "energie",
    title: "Energie",
    description: "Energieverbruik en -kosten berekenen.",
    icon: Zap,
  },
  {
    slug: "overige",
    title: "Overige",
    description: "Overige handige calculators.",
    icon: Wrench,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
