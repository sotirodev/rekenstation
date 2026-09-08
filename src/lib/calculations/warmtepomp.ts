export interface WarmtepompInput {
  gasverbruikPerJaar: number;
  gasprijsPerM3: number;
  ketelrendementPercentage: number;
  copWarmtepomp: number;
  stroomprijsPerKwh: number;
}

export interface WarmtepompResult {
  huidigeGaskosten: number;
  geschatteStroomkosten: number;
  jaarlijkseBesparing: number;
  benodigdeStroomKwh: number;
}

/** Calorische bovenwaarde van Nederlands aardgas: ca. 9,77 kWh per m³. */
const KWH_PER_M3_GAS = 9.77;

export function berekenWarmtepomp({
  gasverbruikPerJaar,
  gasprijsPerM3,
  ketelrendementPercentage,
  copWarmtepomp,
  stroomprijsPerKwh,
}: WarmtepompInput): WarmtepompResult {
  const huidigeGaskosten = gasverbruikPerJaar * gasprijsPerM3;
  const warmtevraagKwh =
    gasverbruikPerJaar * KWH_PER_M3_GAS * (ketelrendementPercentage / 100);
  const benodigdeStroomKwh = copWarmtepomp > 0 ? warmtevraagKwh / copWarmtepomp : 0;
  const geschatteStroomkosten = benodigdeStroomKwh * stroomprijsPerKwh;

  return {
    huidigeGaskosten,
    geschatteStroomkosten,
    jaarlijkseBesparing: huidigeGaskosten - geschatteStroomkosten,
    benodigdeStroomKwh,
  };
}
