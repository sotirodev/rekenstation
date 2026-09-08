export interface DatumVerschilInput {
  /** ISO-datum (YYYY-MM-DD) */
  datumA: string;
  /** ISO-datum (YYYY-MM-DD) */
  datumB: string;
}

export interface DatumVerschilResult {
  totaalDagen: number;
  jaren: number;
  maanden: number;
  dagen: number;
  totaalWeken: number;
}

export function berekenDatumVerschil({ datumA, datumB }: DatumVerschilInput): DatumVerschilResult {
  const a = new Date(datumA);
  const b = new Date(datumB);
  const [vroeg, laat] = a <= b ? [a, b] : [b, a];

  let jaren = laat.getFullYear() - vroeg.getFullYear();
  let maanden = laat.getMonth() - vroeg.getMonth();
  let dagen = laat.getDate() - vroeg.getDate();

  if (dagen < 0) {
    maanden -= 1;
    const vorigeMaand = new Date(laat.getFullYear(), laat.getMonth(), 0);
    dagen += vorigeMaand.getDate();
  }
  if (maanden < 0) {
    jaren -= 1;
    maanden += 12;
  }

  const msPerDag = 1000 * 60 * 60 * 24;
  const totaalDagen = Math.round((laat.getTime() - vroeg.getTime()) / msPerDag);

  return {
    totaalDagen,
    jaren,
    maanden,
    dagen,
    totaalWeken: Math.floor(totaalDagen / 7),
  };
}
