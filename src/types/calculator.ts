import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export type CategorySlug =
  | "geld-salaris"
  | "gezondheid"
  | "auto-vervoer"
  | "wonen-hypotheek"
  | "btw-belastingen"
  | "tijd"
  | "maten-eenheden"
  | "toeslagen"
  | "energie"
  | "overige";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CalculatorConfig {
  slug: string;
  title: string;
  shortTitle: string;
  category: CategorySlug;
  icon: LucideIcon;
  summary: string;
  metaDescription: string;
  intro: string;
  explanation: {
    heading: string;
    body: string[];
  };
  faq: FaqItem[];
  relatedSlugs: string[];
  popular?: boolean;
  Component: ComponentType;
}
