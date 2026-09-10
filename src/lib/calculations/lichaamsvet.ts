export type Geslacht = "man" | "vrouw";

export interface LichaamsvetInput {
  geslacht: Geslacht;
  lengteCm: number;
  nekCm: number;
  tailleCm: number;
  heupCm?: number;
}

export interface LichaamsvetResult {
  lichaamsvetPercentage: number;
}

/**
 * US Navy-methode voor lichaamsvetpercentage, gebaseerd op omtrekmetingen.
 * Bron: circumference-formule ontwikkeld voor de Amerikaanse marine (Hodgdon
 * & Beckett, 1984), veelgebruikt omdat er geen speciale apparatuur voor
 * nodig is.
 */
export function berekenLichaamsvet({
  geslacht,
  lengteCm,
  nekCm,
  tailleCm,
  heupCm,
}: LichaamsvetInput): LichaamsvetResult {
  if (geslacht === "man") {
    const noemer =
      1.0324 - 0.19077 * Math.log10(tailleCm - nekCm) + 0.15456 * Math.log10(lengteCm);
    return { lichaamsvetPercentage: 495 / noemer - 450 };
  }

  const heup = heupCm ?? 0;
  const noemer =
    1.29579 -
    0.35004 * Math.log10(tailleCm + heup - nekCm) +
    0.221 * Math.log10(lengteCm);
  return { lichaamsvetPercentage: 495 / noemer - 450 };
}
