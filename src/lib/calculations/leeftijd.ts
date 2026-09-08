export interface LeeftijdInput {
  /** ISO-datum (YYYY-MM-DD) */
  geboortedatum: string;
  /** ISO-datum (YYYY-MM-DD), standaard vandaag */
  peildatum?: string;
}

export interface LeeftijdResult {
  jaren: number;
  maanden: number;
  dagen: number;
  totaalDagen: number;
  dagenTotVolgendeVerjaardag: number;
}

function dagenTussen(a: Date, b: Date): number {
  const msPerDag = 1000 * 60 * 60 * 24;
  return Math.round((b.getTime() - a.getTime()) / msPerDag);
}

export function berekenLeeftijd({ geboortedatum, peildatum }: LeeftijdInput): LeeftijdResult {
  const geboorte = new Date(geboortedatum);
  const peil = peildatum ? new Date(peildatum) : new Date();

  let jaren = peil.getFullYear() - geboorte.getFullYear();
  let maanden = peil.getMonth() - geboorte.getMonth();
  let dagen = peil.getDate() - geboorte.getDate();

  if (dagen < 0) {
    maanden -= 1;
    const vorigeMaand = new Date(peil.getFullYear(), peil.getMonth(), 0);
    dagen += vorigeMaand.getDate();
  }
  if (maanden < 0) {
    jaren -= 1;
    maanden += 12;
  }

  let volgendeVerjaardag = new Date(peil.getFullYear(), geboorte.getMonth(), geboorte.getDate());
  if (volgendeVerjaardag < peil) {
    volgendeVerjaardag = new Date(peil.getFullYear() + 1, geboorte.getMonth(), geboorte.getDate());
  }

  return {
    jaren,
    maanden,
    dagen,
    totaalDagen: dagenTussen(geboorte, peil),
    dagenTotVolgendeVerjaardag: dagenTussen(peil, volgendeVerjaardag),
  };
}
