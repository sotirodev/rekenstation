const MS_PER_DAG = 1000 * 60 * 60 * 24;
const DAGEN_PER_JAAR = 365.25;

interface TransitievergoedingJaarData {
  maximumBedrag: number;
}

/**
 * Bron: Rijksoverheid.nl (formule: 1/3 bruto maandsalaris per dienstjaar,
 * naar rato voor een onvolledig jaar) en het jaarlijks vastgestelde maximum
 * (gepubliceerd door SZW/Staatscourant, hier overgenomen via meerdere
 * onafhankelijke vakpublicaties).
 */
const TRANSITIEVERGOEDING_DATA: Record<number, TransitievergoedingJaarData> = {
  2025: { maximumBedrag: 98_000 },
  2026: { maximumBedrag: 102_000 },
};

export const TRANSITIEVERGOEDING_JAREN = Object.keys(TRANSITIEVERGOEDING_DATA)
  .map(Number)
  .sort((a, b) => b - a);

export interface TransitievergoedingInput {
  brutoMaandsalaris: number;
  startdatum: string;
  einddatum: string;
  jaar: number;
}

export interface TransitievergoedingResult {
  dienstjaren: number;
  bedragVoorMaximum: number;
  vergoeding: number;
  maximumToegepast: boolean;
}

export function berekenTransitievergoeding({
  brutoMaandsalaris,
  startdatum,
  einddatum,
  jaar,
}: TransitievergoedingInput): TransitievergoedingResult {
  const data = TRANSITIEVERGOEDING_DATA[jaar];
  if (!data) throw new Error(`Geen transitievergoedingsgegevens beschikbaar voor jaar ${jaar}`);

  const start = new Date(startdatum);
  const eind = new Date(einddatum);
  const dagenInDienst = Math.max(0, (eind.getTime() - start.getTime()) / MS_PER_DAG);
  const dienstjaren = dagenInDienst / DAGEN_PER_JAAR;

  const bedragVoorMaximum = (brutoMaandsalaris / 3) * dienstjaren;
  const maximum = Math.max(data.maximumBedrag, brutoMaandsalaris * 12);
  const vergoeding = Math.min(bedragVoorMaximum, maximum);

  return {
    dienstjaren,
    bedragVoorMaximum,
    vergoeding,
    maximumToegepast: bedragVoorMaximum > maximum,
  };
}
