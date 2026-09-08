export type StudieschuldAflossingsvorm = "annuitair" | "lineair";

export interface StudieschuldInput {
  schuldbedrag: number;
  renteJaarPercentage: number;
  looptijdJaren: number;
  aflossingsvorm: StudieschuldAflossingsvorm;
}

export interface StudieschuldResult {
  maandlastEersteMaand: number;
  totaleRente: number;
  totaleKosten: number;
}

/** Zelfde rekenmethode als een annuitaire/lineaire hypotheek, toegepast op een studieschuld. */
export function berekenStudieschuld({
  schuldbedrag,
  renteJaarPercentage,
  looptijdJaren,
  aflossingsvorm,
}: StudieschuldInput): StudieschuldResult {
  const maandRente = renteJaarPercentage / 100 / 12;
  const aantalMaanden = looptijdJaren * 12;

  if (aflossingsvorm === "lineair") {
    const aflossingPerMaand = schuldbedrag / aantalMaanden;
    const eersteRente = schuldbedrag * maandRente;
    const totaleRente =
      maandRente *
      aantalMaanden *
      (schuldbedrag / 2 + schuldbedrag / (2 * aantalMaanden));

    return {
      maandlastEersteMaand: aflossingPerMaand + eersteRente,
      totaleRente,
      totaleKosten: schuldbedrag + totaleRente,
    };
  }

  const maandlast =
    maandRente === 0
      ? schuldbedrag / aantalMaanden
      : (schuldbedrag * maandRente) / (1 - Math.pow(1 + maandRente, -aantalMaanden));

  const totaleKosten = maandlast * aantalMaanden;

  return {
    maandlastEersteMaand: maandlast,
    totaleRente: totaleKosten - schuldbedrag,
    totaleKosten,
  };
}
