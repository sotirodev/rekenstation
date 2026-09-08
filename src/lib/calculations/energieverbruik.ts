export interface EnergieverbruikInput {
  stroomverbruikPerJaar: number;
  prijsPerKwh: number;
  gasverbruikPerJaar: number;
  prijsPerM3: number;
  vasteKostenPerJaar: number;
}

export interface EnergieverbruikResult {
  stroomkostenPerJaar: number;
  gaskostenPerJaar: number;
  totaalPerJaar: number;
  totaalPerMaand: number;
}

export function berekenEnergieverbruik({
  stroomverbruikPerJaar,
  prijsPerKwh,
  gasverbruikPerJaar,
  prijsPerM3,
  vasteKostenPerJaar,
}: EnergieverbruikInput): EnergieverbruikResult {
  const stroomkostenPerJaar = stroomverbruikPerJaar * prijsPerKwh;
  const gaskostenPerJaar = gasverbruikPerJaar * prijsPerM3;
  const totaalPerJaar = stroomkostenPerJaar + gaskostenPerJaar + vasteKostenPerJaar;

  return {
    stroomkostenPerJaar,
    gaskostenPerJaar,
    totaalPerJaar,
    totaalPerMaand: totaalPerJaar / 12,
  };
}
