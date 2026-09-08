interface ZorgtoeslagJaarData {
  standaardpremie: number;
  drempelinkomen: number;
  eigenBijdrageSingle: number;
  eigenBijdragePartner: number;
  afbouwPercentage: number;
  maxInkomensgrensSingle: number;
  maxInkomensgrensPartner: number;
}

/**
 * Bron: Belastingdienst.nl (officiële maximale inkomensgrenzen) en Taxlive.nl
 * (formuleparameters standaardpremie/drempelinkomen/percentages, gepubliceerd
 * n.a.v. het Belastingplan 2026). Alleen 2026 is op dit moment beschikbaar.
 */
const ZORGTOESLAG_DATA: Record<number, ZorgtoeslagJaarData> = {
  2026: {
    standaardpremie: 2_119,
    drempelinkomen: 29_736,
    eigenBijdrageSingle: 0.01912,
    eigenBijdragePartner: 0.04289,
    afbouwPercentage: 0.1373,
    maxInkomensgrensSingle: 40_857,
    maxInkomensgrensPartner: 51_142,
  },
};

export const ZORGTOESLAG_JAREN = Object.keys(ZORGTOESLAG_DATA).map(Number).sort((a, b) => b - a);

export interface ZorgtoeslagInput {
  toetsingsinkomen: number;
  heeftToeslagpartner: boolean;
  jaar: number;
}

export interface ZorgtoeslagResult {
  zorgtoeslagPerJaar: number;
  zorgtoeslagPerMaand: number;
  maxInkomensgrens: number;
}

export function berekenZorgtoeslag({
  toetsingsinkomen,
  heeftToeslagpartner,
  jaar,
}: ZorgtoeslagInput): ZorgtoeslagResult {
  const data = ZORGTOESLAG_DATA[jaar];
  if (!data) throw new Error(`Geen zorgtoeslaggegevens beschikbaar voor jaar ${jaar}`);

  const standaardpremie = heeftToeslagpartner ? data.standaardpremie * 2 : data.standaardpremie;
  const eigenBijdragePercentage = heeftToeslagpartner
    ? data.eigenBijdragePartner
    : data.eigenBijdrageSingle;
  const maxInkomensgrens = heeftToeslagpartner
    ? data.maxInkomensgrensPartner
    : data.maxInkomensgrensSingle;

  if (toetsingsinkomen >= maxInkomensgrens) {
    return { zorgtoeslagPerJaar: 0, zorgtoeslagPerMaand: 0, maxInkomensgrens };
  }

  const normpremie =
    eigenBijdragePercentage * Math.min(toetsingsinkomen, data.drempelinkomen) +
    data.afbouwPercentage * Math.max(0, toetsingsinkomen - data.drempelinkomen);

  const zorgtoeslagPerJaar = Math.max(0, standaardpremie - normpremie);

  return {
    zorgtoeslagPerJaar,
    zorgtoeslagPerMaand: zorgtoeslagPerJaar / 12,
    maxInkomensgrens,
  };
}
