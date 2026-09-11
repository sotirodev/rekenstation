export interface LeningInput {
  leenbedrag: number;
  renteJaarPercentage: number;
  looptijdMaanden: number;
}

export interface LeningResult {
  maandlast: number;
  totaleRente: number;
  totaleKosten: number;
}

/** Annuïtaire lening: vaste maandlast, vergelijkbaar met een annuïtaire hypotheek. */
export function berekenLening({
  leenbedrag,
  renteJaarPercentage,
  looptijdMaanden,
}: LeningInput): LeningResult {
  const maandRente = renteJaarPercentage / 100 / 12;

  const maandlast =
    maandRente === 0
      ? leenbedrag / looptijdMaanden
      : (leenbedrag * maandRente) / (1 - Math.pow(1 + maandRente, -looptijdMaanden));

  const totaleKosten = maandlast * looptijdMaanden;

  return {
    maandlast,
    totaleRente: totaleKosten - leenbedrag,
    totaleKosten,
  };
}
