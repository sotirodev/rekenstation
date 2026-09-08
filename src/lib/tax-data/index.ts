import { taxData2025 } from "./2025";
import { taxData2026 } from "./2026";
import type { TaxYearData } from "./types";

export type { TaxYearData } from "./types";

/**
 * Registry van belastingjaren. Een nieuw jaar toevoegen: maak `YYYY.ts` met de
 * officiële Belastingdienst-tabellen en registreer het hier.
 */
export const taxYears: Record<number, TaxYearData> = {
  2025: taxData2025,
  2026: taxData2026,
};

export const availableTaxYears = Object.keys(taxYears)
  .map(Number)
  .sort((a, b) => b - a);

export const defaultTaxYear = Math.max(...availableTaxYears);

export function getTaxYearData(jaar: number): TaxYearData {
  const data = taxYears[jaar];
  if (!data) {
    throw new Error(`Geen belastinggegevens beschikbaar voor jaar ${jaar}`);
  }
  return data;
}
