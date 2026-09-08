import {
  Wallet,
  HeartPulse,
  Car,
  Home,
  Percent,
  Clock,
  Ruler,
  Wrench,
} from "lucide-react";
import type { Category } from "@/types/calculator";

export const categories: Category[] = [
  {
    slug: "geld-salaris",
    title: "Geld & Salaris",
    description: "Salaris, bruto-netto en uurloon berekenen.",
    icon: Wallet,
  },
  {
    slug: "gezondheid",
    title: "Gezondheid",
    description: "BMI, calorieën en andere gezondheidstools.",
    icon: HeartPulse,
  },
  {
    slug: "auto-vervoer",
    title: "Auto & Vervoer",
    description: "Autokosten en brandstofkosten berekenen.",
    icon: Car,
  },
  {
    slug: "wonen-hypotheek",
    title: "Wonen & Hypotheek",
    description: "Hypotheek en woonlasten berekenen.",
    icon: Home,
  },
  {
    slug: "btw-belastingen",
    title: "BTW & Belastingen",
    description: "BTW en andere belastingen berekenen.",
    icon: Percent,
  },
  {
    slug: "tijd",
    title: "Tijd",
    description: "Leeftijd, datums en tijdsberekeningen.",
    icon: Clock,
  },
  {
    slug: "maten-eenheden",
    title: "Maten & Eenheden",
    description: "Eenheden en maten omrekenen.",
    icon: Ruler,
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
