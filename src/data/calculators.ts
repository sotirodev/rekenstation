import type { CalculatorConfig, CategorySlug } from "@/types/calculator";
import { brutoNettoConfig } from "@/calculators/bruto-netto/config";
import { bmiConfig } from "@/calculators/bmi/config";
import { btwConfig } from "@/calculators/btw/config";
import { hypotheekConfig } from "@/calculators/hypotheek/config";
import { calorieConfig } from "@/calculators/calorie/config";
import { percentageConfig } from "@/calculators/percentage/config";
import { autokostenConfig } from "@/calculators/autokosten/config";
import { leeftijdConfig } from "@/calculators/leeftijd/config";
import { uurloonConfig } from "@/calculators/uurloon/config";
import { brandstofkostenConfig } from "@/calculators/brandstofkosten/config";
import { eenhedenConfig } from "@/calculators/eenheden/config";
import { datumverschilConfig } from "@/calculators/datumverschil/config";
import { vakantiegeldConfig } from "@/calculators/vakantiegeld/config";
import { zzpUurtariefConfig } from "@/calculators/zzp-uurtarief/config";
import { zwangerschapConfig } from "@/calculators/zwangerschap/config";
import { bijtellingConfig } from "@/calculators/bijtelling/config";
import { overdrachtsbelastingConfig } from "@/calculators/overdrachtsbelasting/config";
import { zorgtoeslagConfig } from "@/calculators/zorgtoeslag/config";
import { transitievergoedingConfig } from "@/calculators/transitievergoeding/config";
import { vakantiedagenConfig } from "@/calculators/vakantiedagen/config";
import { energieverbruikConfig } from "@/calculators/energieverbruik/config";
import { spaarrenteConfig } from "@/calculators/spaarrente/config";
import { ovulatieConfig } from "@/calculators/ovulatie/config";
import { studieschuldConfig } from "@/calculators/studieschuld/config";
import { studentenbudgetConfig } from "@/calculators/studentenbudget/config";
import { zonnepanelenConfig } from "@/calculators/zonnepanelen/config";
import { warmtepompConfig } from "@/calculators/warmtepomp/config";
import { elektrischVsBenzineConfig } from "@/calculators/elektrisch-vs-benzine/config";

/**
 * Registry van alle calculators. Een nieuwe calculator toevoegen:
 * 1. `lib/calculations/x.ts` — pure berekeningsfunctie
 * 2. `calculators/x/config.ts` + `calculators/x/Calculator.tsx`
 * 3. Importeer en voeg de config hieronder toe
 */
export const calculators: CalculatorConfig[] = [
  brutoNettoConfig,
  bmiConfig,
  btwConfig,
  hypotheekConfig,
  calorieConfig,
  percentageConfig,
  autokostenConfig,
  leeftijdConfig,
  uurloonConfig,
  brandstofkostenConfig,
  eenhedenConfig,
  datumverschilConfig,
  vakantiegeldConfig,
  zzpUurtariefConfig,
  zwangerschapConfig,
  bijtellingConfig,
  overdrachtsbelastingConfig,
  zorgtoeslagConfig,
  transitievergoedingConfig,
  vakantiedagenConfig,
  energieverbruikConfig,
  spaarrenteConfig,
  ovulatieConfig,
  studieschuldConfig,
  studentenbudgetConfig,
  zonnepanelenConfig,
  warmtepompConfig,
  elektrischVsBenzineConfig,
];

export function getCalculator(slug: string): CalculatorConfig | undefined {
  return calculators.find((calculator) => calculator.slug === slug);
}

export function getCalculatorsBySlug(slugs: string[]): CalculatorConfig[] {
  return slugs
    .map((slug) => getCalculator(slug))
    .filter((calculator): calculator is CalculatorConfig => Boolean(calculator));
}

export function getCalculatorsByCategory(category: CategorySlug): CalculatorConfig[] {
  return calculators.filter((calculator) => calculator.category === category);
}

export function getPopularCalculators(): CalculatorConfig[] {
  return calculators.filter((calculator) => calculator.popular);
}
