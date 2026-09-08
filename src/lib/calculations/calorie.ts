export type Geslacht = "man" | "vrouw";
export type Activiteitsniveau =
  | "zittend"
  | "licht-actief"
  | "matig-actief"
  | "zeer-actief"
  | "extreem-actief";

export interface CalorieInput {
  geslacht: Geslacht;
  leeftijd: number;
  lengteCm: number;
  gewichtKg: number;
  activiteitsniveau: Activiteitsniveau;
}

export interface CalorieResult {
  bmr: number;
  tdee: number;
}

const ACTIVITEITSFACTOR: Record<Activiteitsniveau, number> = {
  zittend: 1.2,
  "licht-actief": 1.375,
  "matig-actief": 1.55,
  "zeer-actief": 1.725,
  "extreem-actief": 1.9,
};

/** Mifflin-St Jeor formule voor de basaalmetabolisme (BMR). */
export function berekenCalorieBehoefte({
  geslacht,
  leeftijd,
  lengteCm,
  gewichtKg,
  activiteitsniveau,
}: CalorieInput): CalorieResult {
  const basis = 10 * gewichtKg + 6.25 * lengteCm - 5 * leeftijd;
  const bmr = geslacht === "man" ? basis + 5 : basis - 161;
  const tdee = bmr * ACTIVITEITSFACTOR[activiteitsniveau];

  return { bmr, tdee };
}
