export type PercentageModus =
  | "percentage-van"
  | "welk-percentage"
  | "percentage-verandering";

export interface PercentageInput {
  modus: PercentageModus;
  waardeA: number;
  waardeB: number;
}

export interface PercentageResult {
  modus: PercentageModus;
  uitkomst: number;
}

/**
 * - "percentage-van": waardeA% van waardeB
 * - "welk-percentage": welk percentage is waardeA van waardeB
 * - "percentage-verandering": procentuele verandering van waardeA naar waardeB
 */
export function berekenPercentage({ modus, waardeA, waardeB }: PercentageInput): PercentageResult {
  switch (modus) {
    case "percentage-van":
      return { modus, uitkomst: (waardeA / 100) * waardeB };
    case "welk-percentage":
      return { modus, uitkomst: waardeB === 0 ? 0 : (waardeA / waardeB) * 100 };
    case "percentage-verandering":
      return {
        modus,
        uitkomst: waardeA === 0 ? 0 : ((waardeB - waardeA) / waardeA) * 100,
      };
  }
}
