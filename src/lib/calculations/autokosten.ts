export interface AutokostenInput {
  kmPerMaand: number;
  verbruikPer100km: number;
  brandstofprijsPerLiter: number;
  verzekeringPerMaand: number;
  wegenbelastingPerMaand: number;
  onderhoudPerMaand: number;
  afschrijvingPerMaand: number;
}

export interface AutokostenResult {
  brandstofkostenPerMaand: number;
  totaalPerMaand: number;
  totaalPerJaar: number;
  kostenPerKm: number;
}

export function berekenAutokosten({
  kmPerMaand,
  verbruikPer100km,
  brandstofprijsPerLiter,
  verzekeringPerMaand,
  wegenbelastingPerMaand,
  onderhoudPerMaand,
  afschrijvingPerMaand,
}: AutokostenInput): AutokostenResult {
  const literPerMaand = (kmPerMaand / 100) * verbruikPer100km;
  const brandstofkostenPerMaand = literPerMaand * brandstofprijsPerLiter;

  const totaalPerMaand =
    brandstofkostenPerMaand +
    verzekeringPerMaand +
    wegenbelastingPerMaand +
    onderhoudPerMaand +
    afschrijvingPerMaand;

  return {
    brandstofkostenPerMaand,
    totaalPerMaand,
    totaalPerJaar: totaalPerMaand * 12,
    kostenPerKm: kmPerMaand > 0 ? totaalPerMaand / kmPerMaand : 0,
  };
}
