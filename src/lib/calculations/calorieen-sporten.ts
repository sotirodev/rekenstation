export interface Activiteit {
  id: string;
  label: string;
  /** MET-waarde (Metabolic Equivalent of Task). Bron: Compendium of Physical
   * Activities (Ainsworth et al.), de standaardreferentie voor energieverbruik
   * per activiteit, onafhankelijk van jaar. */
  met: number;
}

export const ACTIVITEITEN: Activiteit[] = [
  { id: "wandelen-rustig", label: "Wandelen, rustig (4 km/u)", met: 3.5 },
  { id: "wandelen-stevig", label: "Wandelen, stevig (6 km/u)", met: 5.0 },
  { id: "hardlopen-8", label: "Hardlopen, 8 km/u", met: 8.3 },
  { id: "hardlopen-10", label: "Hardlopen, 10 km/u", met: 9.8 },
  { id: "hardlopen-12", label: "Hardlopen, 12 km/u", met: 11.8 },
  { id: "fietsen-rustig", label: "Fietsen, rustig", met: 4.0 },
  { id: "fietsen-matig", label: "Fietsen, matig tempo", met: 8.0 },
  { id: "fietsen-snel", label: "Fietsen, snel (>25 km/u)", met: 10.0 },
  { id: "zwemmen-rustig", label: "Zwemmen, rustig", met: 6.0 },
  { id: "zwemmen-intensief", label: "Zwemmen, intensief", met: 9.8 },
  { id: "krachttraining", label: "Krachttraining", met: 5.0 },
  { id: "yoga", label: "Yoga", met: 2.5 },
  { id: "traplopen", label: "Traplopen", met: 8.8 },
  { id: "voetballen", label: "Voetballen", met: 7.0 },
  { id: "tennissen", label: "Tennissen", met: 7.3 },
];

export interface CalorieenSportenInput {
  activiteitId: string;
  gewichtKg: number;
  duurMinuten: number;
}

export interface CalorieenSportenResult {
  verbruikteKcal: number;
}

export function berekenCalorieenSporten({
  activiteitId,
  gewichtKg,
  duurMinuten,
}: CalorieenSportenInput): CalorieenSportenResult {
  const activiteit = ACTIVITEITEN.find((a) => a.id === activiteitId);
  const met = activiteit?.met ?? 0;
  const duurUren = duurMinuten / 60;

  return { verbruikteKcal: met * gewichtKg * duurUren };
}
