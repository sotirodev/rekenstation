export type Geslacht = "man" | "vrouw";

export interface IdeaalGewichtInput {
  lengteCm: number;
  geslacht: Geslacht;
}

export interface IdeaalGewichtResult {
  ideaalGewichtKg: number;
}

const CM_PER_INCH = 2.54;
const INCHES_ONDERGRENS = 60; // 152,4 cm, de ondergrens waarvoor de Devine-formule is opgesteld.

/**
 * Devine-formule (1974), de meest gebruikte formule voor ideaal lichaamsgewicht
 * in de medische literatuur. Uitgedrukt in metrische eenheden via omrekening
 * naar inches, wat de oorspronkelijke (Amerikaanse) formule gebruikt.
 */
export function berekenIdeaalGewicht({
  lengteCm,
  geslacht,
}: IdeaalGewichtInput): IdeaalGewichtResult {
  const inches = lengteCm / CM_PER_INCH;
  const inchesBovenOndergrens = inches - INCHES_ONDERGRENS;
  const basisGewicht = geslacht === "man" ? 50 : 45.5;
  const ideaalGewichtKg = basisGewicht + 2.3 * inchesBovenOndergrens;

  return { ideaalGewichtKg };
}
