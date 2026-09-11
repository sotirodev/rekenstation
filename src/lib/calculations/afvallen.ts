const KCAL_PER_KG_VET = 7_700;

export interface AfvallenInput {
  huidigGewichtKg: number;
  doelGewichtKg: number;
  dagelijksTekortKcal: number;
}

export interface AfvallenResult {
  teVerliezenKg: number;
  benodigdeDagen: number;
  benodigdeWeken: number;
}

/**
 * Vuistregel: ongeveer 7.700 kcal komt overeen met 1 kg lichaamsvet
 * (gebaseerd op de energiedichtheid van vetweefsel). Veelgebruikt
 * uitgangspunt bij het inschatten van de tijd die nodig is om af te vallen
 * bij een structureel calorietekort.
 */
export function berekenAfvallen({
  huidigGewichtKg,
  doelGewichtKg,
  dagelijksTekortKcal,
}: AfvallenInput): AfvallenResult {
  const teVerliezenKg = Math.max(0, huidigGewichtKg - doelGewichtKg);
  const benodigdeDagen =
    dagelijksTekortKcal > 0 ? (teVerliezenKg * KCAL_PER_KG_VET) / dagelijksTekortKcal : 0;

  return {
    teVerliezenKg,
    benodigdeDagen,
    benodigdeWeken: benodigdeDagen / 7,
  };
}
