export interface BrandstofkostenInput {
  afstandKm: number;
  verbruikPer100km: number;
  prijsPerLiter: number;
}

export interface BrandstofkostenResult {
  totaleKosten: number;
  kostenPerKm: number;
  benodigdeLiters: number;
}

export function berekenBrandstofkosten({
  afstandKm,
  verbruikPer100km,
  prijsPerLiter,
}: BrandstofkostenInput): BrandstofkostenResult {
  const benodigdeLiters = (afstandKm / 100) * verbruikPer100km;
  const totaleKosten = benodigdeLiters * prijsPerLiter;

  return {
    totaleKosten,
    kostenPerKm: afstandKm > 0 ? totaleKosten / afstandKm : 0,
    benodigdeLiters,
  };
}
