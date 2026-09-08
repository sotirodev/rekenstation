export interface ElektrischVsBenzineInput {
  kilometersPerJaar: number;
  verbruikBenzinePer100km: number;
  benzineprijsPerLiter: number;
  verbruikElektrischPer100km: number;
  stroomprijsPerKwh: number;
}

export interface ElektrischVsBenzineResult {
  kostenBenzinePerJaar: number;
  kostenElektrischPerJaar: number;
  besparingPerJaar: number;
}

export function berekenElektrischVsBenzine({
  kilometersPerJaar,
  verbruikBenzinePer100km,
  benzineprijsPerLiter,
  verbruikElektrischPer100km,
  stroomprijsPerKwh,
}: ElektrischVsBenzineInput): ElektrischVsBenzineResult {
  const kostenBenzinePerJaar =
    (kilometersPerJaar / 100) * verbruikBenzinePer100km * benzineprijsPerLiter;
  const kostenElektrischPerJaar =
    (kilometersPerJaar / 100) * verbruikElektrischPer100km * stroomprijsPerKwh;

  return {
    kostenBenzinePerJaar,
    kostenElektrischPerJaar,
    besparingPerJaar: kostenBenzinePerJaar - kostenElektrischPerJaar,
  };
}
