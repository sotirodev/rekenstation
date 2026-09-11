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
  | "studie"
  | "duurzaamheid"
  | "overige";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  /** Langere introductietekst, getoond bovenaan de categoriepagina zelf. */
  intro: string;
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
  /** ISO-datum (YYYY-MM-DD). Alleen zetten bij calculators met jaarlijks wijzigende officiële cijfers. */
  laatstGecontroleerd?: string;
  Component: ComponentType;
}
