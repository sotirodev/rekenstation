const MS_PER_DAG = 1000 * 60 * 60 * 24;
const TOTAAL_VERLOF_WEKEN = 16;
const MINIMAAL_BEVALLINGSVERLOF_WEKEN = 10;

export interface ZwangerschapsverlofInput {
  /** ISO-datum (YYYY-MM-DD). */
  uitgerekendeDatum: string;
  /** Aantal weken vóór de uitgerekende datum waarop het zwangerschapsverlof ingaat (4, 5 of 6). */
  wekenVoorAanvang: number;
}

export interface ZwangerschapsverlofResult {
  eersteDagVerlof: string;
  laatsteWerkdag: string;
  wekenBevallingsverlof: number;
  indicatiefEindeTotaalVerlof: string;
}

function toIso(datum: Date): string {
  return datum.toISOString().slice(0, 10);
}

/**
 * Op basis van de Wet arbeid en zorg (WAZO): het zwangerschapsverlof gaat in
 * op een zelf gekozen moment tussen 6 en 4 weken vóór de uitgerekende datum.
 * Het totale verlof is minimaal 16 weken; het bevallingsverlof duurt minimaal
 * 10 weken, ongeacht de werkelijke bevallingsdatum. Bron: Rijksoverheid.nl.
 */
export function berekenZwangerschapsverlof({
  uitgerekendeDatum,
  wekenVoorAanvang,
}: ZwangerschapsverlofInput): ZwangerschapsverlofResult {
  const uitgerekend = new Date(uitgerekendeDatum);
  const eersteDagVerlof = new Date(uitgerekend.getTime() - wekenVoorAanvang * 7 * MS_PER_DAG);
  const laatsteWerkdag = new Date(eersteDagVerlof.getTime() - MS_PER_DAG);
  const indicatiefEindeTotaalVerlof = new Date(
    eersteDagVerlof.getTime() + (TOTAAL_VERLOF_WEKEN * 7 - 1) * MS_PER_DAG,
  );

  return {
    eersteDagVerlof: toIso(eersteDagVerlof),
    laatsteWerkdag: toIso(laatsteWerkdag),
    wekenBevallingsverlof: Math.max(
      MINIMAAL_BEVALLINGSVERLOF_WEKEN,
      TOTAAL_VERLOF_WEKEN - wekenVoorAanvang,
    ),
    indicatiefEindeTotaalVerlof: toIso(indicatiefEindeTotaalVerlof),
  };
}
