export interface StroomkostenApparaatInput {
  wattage: number;
  uurPerDag: number;
  stroomprijsPerKwh: number;
}

export interface StroomkostenApparaatResult {
  kwhPerDag: number;
  kostenPerDag: number;
  kostenPerMaand: number;
  kostenPerJaar: number;
}

export function berekenStroomkostenApparaat({
  wattage,
  uurPerDag,
  stroomprijsPerKwh,
}: StroomkostenApparaatInput): StroomkostenApparaatResult {
  const kwhPerDag = (wattage / 1000) * uurPerDag;
  const kostenPerDag = kwhPerDag * stroomprijsPerKwh;

  return {
    kwhPerDag,
    kostenPerDag,
    kostenPerMaand: kostenPerDag * 30,
    kostenPerJaar: kostenPerDag * 365,
  };
}
