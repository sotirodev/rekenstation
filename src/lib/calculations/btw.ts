export type BtwTarief = 21 | 9 | 0;
export type BtwModus = "excl-naar-incl" | "incl-naar-excl" | "alleen-btw";

export interface BtwInput {
  bedrag: number;
  tarief: BtwTarief;
  modus: BtwModus;
}

export interface BtwResult {
  bedragExclBtw: number;
  bedragInclBtw: number;
  btwBedrag: number;
  tarief: BtwTarief;
}

export function berekenBtw({ bedrag, tarief, modus }: BtwInput): BtwResult {
  const factor = tarief / 100;

  if (modus === "incl-naar-excl") {
    const bedragExclBtw = bedrag / (1 + factor);
    return {
      bedragExclBtw,
      bedragInclBtw: bedrag,
      btwBedrag: bedrag - bedragExclBtw,
      tarief,
    };
  }

  // "excl-naar-incl" en "alleen-btw" gaan beide uit van een bedrag exclusief BTW.
  const btwBedrag = bedrag * factor;
  return {
    bedragExclBtw: bedrag,
    bedragInclBtw: bedrag + btwBedrag,
    btwBedrag,
    tarief,
  };
}
