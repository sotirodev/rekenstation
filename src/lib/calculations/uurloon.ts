export type UurloonModus = "salaris-naar-uurloon" | "uurloon-naar-salaris";

export interface UurloonInput {
  modus: UurloonModus;
  /** Bij "salaris-naar-uurloon": bruto maandsalaris. Bij "uurloon-naar-salaris": bruto uurloon. */
  bedrag: number;
  urenPerWeek: number;
}

export interface UurloonResult {
  uurloon: number;
  maandloon: number;
  jaarloon: number;
}

const WEKEN_PER_MAAND = 52 / 12;

export function berekenUurloon({ modus, bedrag, urenPerWeek }: UurloonInput): UurloonResult {
  const urenPerMaand = urenPerWeek * WEKEN_PER_MAAND;

  if (modus === "uurloon-naar-salaris") {
    const maandloon = bedrag * urenPerMaand;
    return { uurloon: bedrag, maandloon, jaarloon: maandloon * 12 };
  }

  const uurloon = urenPerMaand > 0 ? bedrag / urenPerMaand : 0;
  return { uurloon, maandloon: bedrag, jaarloon: bedrag * 12 };
}
