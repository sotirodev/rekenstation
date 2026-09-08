export type AflossingsVorm = "annuitair" | "lineair";

export interface HypotheekInput {
  hypotheekbedrag: number;
  renteJaarPercentage: number;
  looptijdJaren: number;
  aflossingsvorm: AflossingsVorm;
}

export interface HypotheekResult {
  maandlastEersteMaand: number;
  totaleRente: number;
  totaleKosten: number;
  aflossingsvorm: AflossingsVorm;
}

export function berekenHypotheek({
  hypotheekbedrag,
  renteJaarPercentage,
  looptijdJaren,
  aflossingsvorm,
}: HypotheekInput): HypotheekResult {
  const maandRente = renteJaarPercentage / 100 / 12;
  const aantalMaanden = looptijdJaren * 12;

  if (aflossingsvorm === "lineair") {
    const aflossingPerMaand = hypotheekbedrag / aantalMaanden;
    const eersteRente = hypotheekbedrag * maandRente;
    const maandlastEersteMaand = aflossingPerMaand + eersteRente;

    // Rente daalt lineair mee met de resterende schuld.
    const totaleRente =
      maandRente *
      aantalMaanden *
      (hypotheekbedrag / 2 + hypotheekbedrag / (2 * aantalMaanden));

    return {
      maandlastEersteMaand,
      totaleRente,
      totaleKosten: hypotheekbedrag + totaleRente,
      aflossingsvorm,
    };
  }

  // Annuïtaire hypotheek: vaste maandlast.
  const maandlast =
    maandRente === 0
      ? hypotheekbedrag / aantalMaanden
      : (hypotheekbedrag * maandRente) /
        (1 - Math.pow(1 + maandRente, -aantalMaanden));

  const totaleKosten = maandlast * aantalMaanden;
  const totaleRente = totaleKosten - hypotheekbedrag;

  return {
    maandlastEersteMaand: maandlast,
    totaleRente,
    totaleKosten,
    aflossingsvorm,
  };
}
