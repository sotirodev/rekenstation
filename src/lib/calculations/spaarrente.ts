export interface SpaarrenteInput {
  startkapitaal: number;
  maandelijkseInleg: number;
  rentePercentagePerJaar: number;
  looptijdJaren: number;
}

export interface SpaarrenteResult {
  eindkapitaal: number;
  totaalIngelegd: number;
  totaleRente: number;
}

/** Rekent met maandelijkse rente-op-rente (samengestelde interest). */
export function berekenSpaarrente({
  startkapitaal,
  maandelijkseInleg,
  rentePercentagePerJaar,
  looptijdJaren,
}: SpaarrenteInput): SpaarrenteResult {
  const maandRente = rentePercentagePerJaar / 100 / 12;
  const aantalMaanden = Math.round(looptijdJaren * 12);

  let saldo = startkapitaal;
  for (let maand = 0; maand < aantalMaanden; maand += 1) {
    saldo = saldo * (1 + maandRente) + maandelijkseInleg;
  }

  const totaalIngelegd = startkapitaal + maandelijkseInleg * aantalMaanden;

  return {
    eindkapitaal: saldo,
    totaalIngelegd,
    totaleRente: saldo - totaalIngelegd,
  };
}
