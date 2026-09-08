export type Brandstoftype = "fossiel" | "elektrisch";

interface BijtellingJaarData {
  standaardPercentage: number;
  elektrischPercentage: number;
  elektrischCap: number;
}

/**
 * Bron: Belastingdienst.nl, officiële bijtellingspercentages voor auto's die
 * in het betreffende jaar voor het eerst op naam zijn gesteld (het percentage
 * geldt 60 maanden vanaf de eerste tenaamstelling).
 */
const BIJTELLING_DATA: Record<number, BijtellingJaarData> = {
  2025: { standaardPercentage: 0.22, elektrischPercentage: 0.17, elektrischCap: 30_000 },
  2026: { standaardPercentage: 0.22, elektrischPercentage: 0.18, elektrischCap: 30_000 },
};

export const BIJTELLING_JAREN = Object.keys(BIJTELLING_DATA).map(Number).sort((a, b) => b - a);

export interface BijtellingInput {
  cataloguswaarde: number;
  brandstoftype: Brandstoftype;
  jaar: number;
}

export interface BijtellingResult {
  bijtellingPerJaar: number;
  bijtellingPerMaand: number;
  toegepastPercentage: number;
}

export function berekenBijtelling({
  cataloguswaarde,
  brandstoftype,
  jaar,
}: BijtellingInput): BijtellingResult {
  const data = BIJTELLING_DATA[jaar];
  if (!data) throw new Error(`Geen bijtellingsgegevens beschikbaar voor jaar ${jaar}`);

  if (brandstoftype === "fossiel") {
    const bijtellingPerJaar = cataloguswaarde * data.standaardPercentage;
    return {
      bijtellingPerJaar,
      bijtellingPerMaand: bijtellingPerJaar / 12,
      toegepastPercentage: data.standaardPercentage * 100,
    };
  }

  const binnenCap = Math.min(cataloguswaarde, data.elektrischCap);
  const bovenCap = Math.max(0, cataloguswaarde - data.elektrischCap);
  const bijtellingPerJaar =
    binnenCap * data.elektrischPercentage + bovenCap * data.standaardPercentage;

  return {
    bijtellingPerJaar,
    bijtellingPerMaand: bijtellingPerJaar / 12,
    toegepastPercentage: (bijtellingPerJaar / cataloguswaarde) * 100,
  };
}
