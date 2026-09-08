export type WoningSituatie = "hoofdverblijf" | "niet-hoofdverblijf-woning" | "niet-woning";

interface OverdrachtsbelastingJaarData {
  hoofdverblijfPercentage: number;
  nietHoofdverblijfWoningPercentage: number;
  nietWoningPercentage: number;
  startersVrijstellingMaxWaarde: number;
}

/**
 * Bron: Belastingdienst.nl / Rijksoverheid.nl, officiële tarieven en de
 * startersvrijstelling-grens voor de overdrachtsbelasting.
 */
const OVERDRACHTSBELASTING_DATA: Record<number, OverdrachtsbelastingJaarData> = {
  2025: {
    hoofdverblijfPercentage: 0.02,
    nietHoofdverblijfWoningPercentage: 0.104,
    nietWoningPercentage: 0.104,
    startersVrijstellingMaxWaarde: 525_000,
  },
  2026: {
    hoofdverblijfPercentage: 0.02,
    nietHoofdverblijfWoningPercentage: 0.08,
    nietWoningPercentage: 0.104,
    startersVrijstellingMaxWaarde: 555_000,
  },
};

export const OVERDRACHTSBELASTING_JAREN = Object.keys(OVERDRACHTSBELASTING_DATA)
  .map(Number)
  .sort((a, b) => b - a);

export const STARTERSVRIJSTELLING_LEEFTIJD = { min: 18, max: 34 };

export interface OverdrachtsbelastingInput {
  aankoopprijs: number;
  situatie: WoningSituatie;
  /** Alleen relevant als situatie "hoofdverblijf" is. */
  gebruiktStartersvrijstelling: boolean;
  jaar: number;
}

export interface OverdrachtsbelastingResult {
  percentage: number;
  bedrag: number;
  vrijstellingToegepast: boolean;
}

export function berekenOverdrachtsbelasting({
  aankoopprijs,
  situatie,
  gebruiktStartersvrijstelling,
  jaar,
}: OverdrachtsbelastingInput): OverdrachtsbelastingResult {
  const data = OVERDRACHTSBELASTING_DATA[jaar];
  if (!data) throw new Error(`Geen overdrachtsbelastinggegevens beschikbaar voor jaar ${jaar}`);

  if (situatie === "niet-woning") {
    return {
      percentage: data.nietWoningPercentage * 100,
      bedrag: aankoopprijs * data.nietWoningPercentage,
      vrijstellingToegepast: false,
    };
  }

  if (situatie === "niet-hoofdverblijf-woning") {
    return {
      percentage: data.nietHoofdverblijfWoningPercentage * 100,
      bedrag: aankoopprijs * data.nietHoofdverblijfWoningPercentage,
      vrijstellingToegepast: false,
    };
  }

  // situatie === "hoofdverblijf"
  const komtInAanmerkingVoorVrijstelling =
    gebruiktStartersvrijstelling && aankoopprijs <= data.startersVrijstellingMaxWaarde;

  if (komtInAanmerkingVoorVrijstelling) {
    return { percentage: 0, bedrag: 0, vrijstellingToegepast: true };
  }

  return {
    percentage: data.hoofdverblijfPercentage * 100,
    bedrag: aankoopprijs * data.hoofdverblijfPercentage,
    vrijstellingToegepast: false,
  };
}
