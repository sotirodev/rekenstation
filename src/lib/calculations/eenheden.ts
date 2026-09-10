export type EenhedenCategorie = "lengte" | "gewicht";

export type LengteEenheid = "mm" | "cm" | "m" | "km" | "inch" | "foot" | "mile";
export type GewichtEenheid = "mg" | "g" | "kg" | "ton" | "pond" | "lb" | "oz";

/** Omrekenfactor naar de basiseenheid (meter resp. gram). */
const LENGTE_NAAR_METER: Record<LengteEenheid, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  inch: 0.0254,
  foot: 0.3048,
  mile: 1609.344,
};

const GEWICHT_NAAR_GRAM: Record<GewichtEenheid, number> = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  ton: 1_000_000,
  // Nederlands pond: de gangbare 500 gram, niet te verwarren met het Engelse pound (lb).
  pond: 500,
  lb: 453.59237,
  oz: 28.349523125,
};

export interface EenhedenInput {
  categorie: EenhedenCategorie;
  waarde: number;
  van: LengteEenheid | GewichtEenheid;
  naar: LengteEenheid | GewichtEenheid;
}

export function berekenEenheden({ categorie, waarde, van, naar }: EenhedenInput): number {
  const factoren = categorie === "lengte" ? LENGTE_NAAR_METER : GEWICHT_NAAR_GRAM;
  const basisWaarde = waarde * factoren[van as keyof typeof factoren];
  return basisWaarde / factoren[naar as keyof typeof factoren];
}

export const LENGTE_EENHEDEN: LengteEenheid[] = ["mm", "cm", "m", "km", "inch", "foot", "mile"];
export const GEWICHT_EENHEDEN: GewichtEenheid[] = ["mg", "g", "kg", "ton", "pond", "lb", "oz"];
