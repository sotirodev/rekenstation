export interface HartslagzoneDefinitie {
  naam: string;
  van: number;
  tot: number;
}

const ZONE_DEFINITIES: HartslagzoneDefinitie[] = [
  { naam: "Zone 1: Warming-up / herstel", van: 0.5, tot: 0.6 },
  { naam: "Zone 2: Vetverbranding", van: 0.6, tot: 0.7 },
  { naam: "Zone 3: Duurvermogen", van: 0.7, tot: 0.8 },
  { naam: "Zone 4: Anaeroob", van: 0.8, tot: 0.9 },
  { naam: "Zone 5: Maximaal", van: 0.9, tot: 1.0 },
];

export interface HartslagzoneResultaat {
  naam: string;
  vanBpm: number;
  totBpm: number;
}

export interface HartslagzonesResult {
  maxHartslag: number;
  zones: HartslagzoneResultaat[];
}

/**
 * Fox-formule (220 - leeftijd) voor de geschatte maximale hartslag, de meest
 * gebruikte vuistregel. Individuele variatie kan groot zijn; een
 * inspanningstest bij een sportarts geeft een preciezer getal.
 */
export function berekenHartslagzones(leeftijd: number): HartslagzonesResult {
  const maxHartslag = 220 - leeftijd;

  return {
    maxHartslag,
    zones: ZONE_DEFINITIES.map((zone) => ({
      naam: zone.naam,
      vanBpm: Math.round(maxHartslag * zone.van),
      totBpm: Math.round(maxHartslag * zone.tot),
    })),
  };
}
