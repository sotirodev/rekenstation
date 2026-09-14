export type HuishoudType = "alleenstaand" | "twee-personen" | "drie-of-meer-personen";

interface HuurtoeslagJaarData {
  basishuurAlleenstaand: number;
  basishuurMeerpersoons: number;
  kwaliteitskortingsgrens: number;
  aftoppingsgrensKlein: number; // 1-2 personen
  aftoppingsgrensGroot: number; // 3+ personen
  maximaleHuurgrens: number;
  drempelinkomenAlleenstaand: number;
  drempelinkomenMeerpersoons: number;
  afbouwpercentageAlleenstaand: number;
  afbouwpercentageMeerpersoons: number;
}

/**
 * Bron: Rijksoverheid.nl / Belastingdienst (bedragen huurtoeslag 2026, bekendgemaakt
 * november 2025), gecontroleerd tegen een doorgerekend voorbeeld met bekende
 * uitkomst. Vanaf 2026 is de oude normhuur-formule (met a- en b-bedrag)
 * vervangen door een vaste basishuur met een lineaire, inkomensafhankelijke
 * afbouw. Alleen 2026 is op dit moment beschikbaar.
 */
const HUURTOESLAG_DATA: Record<number, HuurtoeslagJaarData> = {
  2026: {
    basishuurAlleenstaand: 202.52,
    basishuurMeerpersoons: 200.71,
    kwaliteitskortingsgrens: 498.2,
    aftoppingsgrensKlein: 713.02,
    aftoppingsgrensGroot: 764.14,
    maximaleHuurgrens: 932.93,
    drempelinkomenAlleenstaand: 23_425,
    drempelinkomenMeerpersoons: 31_500,
    afbouwpercentageAlleenstaand: 0.27,
    afbouwpercentageMeerpersoons: 0.22,
  },
};

export const HUURTOESLAG_JAREN = Object.keys(HUURTOESLAG_DATA).map(Number).sort((a, b) => b - a);

export interface HuurtoeslagInput {
  kaleHuurPerMaand: number;
  toetsingsinkomen: number;
  huishoudType: HuishoudType;
  jaar: number;
}

export interface HuurtoeslagResult {
  huurtoeslagPerMaand: number;
  huurtoeslagPerJaar: number;
  maximaleHuurgrens: number;
}

export function berekenHuurtoeslag({
  kaleHuurPerMaand,
  toetsingsinkomen,
  huishoudType,
  jaar,
}: HuurtoeslagInput): HuurtoeslagResult {
  const data = HUURTOESLAG_DATA[jaar];
  if (!data) throw new Error(`Geen huurtoeslaggegevens beschikbaar voor jaar ${jaar}`);

  const isAlleenstaand = huishoudType === "alleenstaand";
  const basishuur = isAlleenstaand ? data.basishuurAlleenstaand : data.basishuurMeerpersoons;
  const aftoppingsgrens =
    huishoudType === "drie-of-meer-personen" ? data.aftoppingsgrensGroot : data.aftoppingsgrensKlein;
  const drempelinkomen = isAlleenstaand ? data.drempelinkomenAlleenstaand : data.drempelinkomenMeerpersoons;
  const afbouwpercentage = isAlleenstaand
    ? data.afbouwpercentageAlleenstaand
    : data.afbouwpercentageMeerpersoons;

  const rekenhuur = Math.min(kaleHuurPerMaand, data.maximaleHuurgrens);

  const segment1 = Math.max(0, Math.min(rekenhuur, data.kwaliteitskortingsgrens) - basishuur);
  const segment2 = Math.max(0, Math.min(rekenhuur, aftoppingsgrens) - data.kwaliteitskortingsgrens);
  const segment3 = Math.max(0, rekenhuur - aftoppingsgrens);

  const maxToeslagPerMaand = segment1 * 1 + segment2 * 0.65 + segment3 * 0.4;
  const maxToeslagPerJaar = maxToeslagPerMaand * 12;

  const overschrijding = Math.max(0, toetsingsinkomen - drempelinkomen);
  const huurtoeslagPerJaar = Math.max(0, maxToeslagPerJaar - afbouwpercentage * overschrijding);

  return {
    huurtoeslagPerJaar,
    huurtoeslagPerMaand: huurtoeslagPerJaar / 12,
    maximaleHuurgrens: data.maximaleHuurgrens,
  };
}
