export type VakantiegeldPeriode = "maand" | "jaar";

export interface VakantiegeldInput {
  brutoloon: number;
  periode: VakantiegeldPeriode;
  percentage: number;
}

export interface VakantiegeldResult {
  brutoJaarloon: number;
  vakantiegeld: number;
  vakantiegeldPerMaandGereserveerd: number;
}

/** Wettelijk minimum vakantiegeld in Nederland is 8% van het bruto jaarloon. */
export const WETTELIJK_MINIMUM_VAKANTIEGELD_PERCENTAGE = 8;

export function berekenVakantiegeld({
  brutoloon,
  periode,
  percentage,
}: VakantiegeldInput): VakantiegeldResult {
  const brutoJaarloon = periode === "maand" ? brutoloon * 12 : brutoloon;
  const vakantiegeld = brutoJaarloon * (percentage / 100);

  return {
    brutoJaarloon,
    vakantiegeld,
    vakantiegeldPerMaandGereserveerd: vakantiegeld / 12,
  };
}
