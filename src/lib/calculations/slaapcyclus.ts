const MINUTEN_PER_CYCLUS = 90;
const INSLAAPTIJD_MINUTEN = 15;
const AANTAL_CYCLI_OPTIES = [3, 4, 5, 6];

export interface TijdstipInput {
  uur: number;
  minuut: number;
}

function naarMinuten({ uur, minuut }: TijdstipInput): number {
  return uur * 60 + minuut;
}

function naarTijdstip(totaalMinuten: number): TijdstipInput {
  const minutenInDag = ((totaalMinuten % 1440) + 1440) % 1440;
  return { uur: Math.floor(minutenInDag / 60), minuut: minutenInDag % 60 };
}

export interface SlaapoptieResult {
  tijdstip: TijdstipInput;
  aantalCycli: number;
}

/**
 * Slaap verloopt in cycli van gemiddeld 90 minuten. Wakker worden aan het
 * einde van een cyclus (in plaats van er middenin) voelt doorgaans minder
 * groggy aan. Bron: veelgebruikte vuistregel in slaaphygiëne-adviezen,
 * gebaseerd op de gemiddelde duur van een slaapcyclus.
 */
export function berekenBedtijden(wakkerWorden: TijdstipInput): SlaapoptieResult[] {
  const wakkerMinuten = naarMinuten(wakkerWorden);
  return AANTAL_CYCLI_OPTIES.map((aantalCycli) => ({
    aantalCycli,
    tijdstip: naarTijdstip(wakkerMinuten - aantalCycli * MINUTEN_PER_CYCLUS - INSLAAPTIJD_MINUTEN),
  })).reverse();
}

export function berekenWakkerWordTijden(gaSlapen: TijdstipInput): SlaapoptieResult[] {
  const slaapMinuten = naarMinuten(gaSlapen) + INSLAAPTIJD_MINUTEN;
  return AANTAL_CYCLI_OPTIES.map((aantalCycli) => ({
    aantalCycli,
    tijdstip: naarTijdstip(slaapMinuten + aantalCycli * MINUTEN_PER_CYCLUS),
  }));
}

export function formatTijdstip({ uur, minuut }: TijdstipInput): string {
  return `${String(uur).padStart(2, "0")}:${String(minuut).padStart(2, "0")}`;
}
