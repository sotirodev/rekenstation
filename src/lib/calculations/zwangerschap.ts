export interface ZwangerschapInput {
  /** ISO-datum (YYYY-MM-DD) van de eerste dag van de laatste menstruatie. */
  laatsteMenstruatie: string;
  /** ISO-datum (YYYY-MM-DD), standaard vandaag. */
  peildatum?: string;
}

export interface ZwangerschapResult {
  uitgerekendeDatum: string;
  zwangerschapsduurWeken: number;
  zwangerschapsduurDagen: number;
  trimester: 1 | 2 | 3;
}

const ZWANGERSCHAPSDUUR_DAGEN = 280;
const MS_PER_DAG = 1000 * 60 * 60 * 24;

/** Regel van Naegele: uitgerekende datum = eerste dag laatste menstruatie + 280 dagen. */
export function berekenZwangerschap({
  laatsteMenstruatie,
  peildatum,
}: ZwangerschapInput): ZwangerschapResult {
  const start = new Date(laatsteMenstruatie);
  const peil = peildatum ? new Date(peildatum) : new Date();

  const uitgerekend = new Date(start.getTime() + ZWANGERSCHAPSDUUR_DAGEN * MS_PER_DAG);

  const dagenOnderweg = Math.max(0, Math.round((peil.getTime() - start.getTime()) / MS_PER_DAG));
  const weken = Math.floor(dagenOnderweg / 7);
  const dagen = dagenOnderweg % 7;

  const trimester: 1 | 2 | 3 = weken < 13 ? 1 : weken < 27 ? 2 : 3;

  return {
    uitgerekendeDatum: uitgerekend.toISOString().slice(0, 10),
    zwangerschapsduurWeken: weken,
    zwangerschapsduurDagen: dagen,
    trimester,
  };
}
