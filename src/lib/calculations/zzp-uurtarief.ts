export interface ZzpUurtariefInput {
  gewenstNettoJaarinkomen: number;
  zakelijkeKostenPerJaar: number;
  factureerbareUrenPerJaar: number;
  belastingReserveringPercentage: number;
}

export interface ZzpUurtariefResult {
  benodigdBrutoInkomen: number;
  benodigdeOmzet: number;
  uurtarief: number;
}

/**
 * Eenvoudig, indicatief model: rekent het gewenste nettojaarinkomen op naar de
 * omzet die daarvoor nodig is, gegeven een reservering voor inkomstenbelasting/
 * premies en de zakelijke kosten, en deelt dat door het aantal factureerbare uren.
 */
export function berekenZzpUurtarief({
  gewenstNettoJaarinkomen,
  zakelijkeKostenPerJaar,
  factureerbareUrenPerJaar,
  belastingReserveringPercentage,
}: ZzpUurtariefInput): ZzpUurtariefResult {
  const reserveringsFactor = 1 - belastingReserveringPercentage / 100;
  const benodigdBrutoInkomen =
    reserveringsFactor > 0 ? gewenstNettoJaarinkomen / reserveringsFactor : gewenstNettoJaarinkomen;

  const benodigdeOmzet = benodigdBrutoInkomen + zakelijkeKostenPerJaar;
  const uurtarief = factureerbareUrenPerJaar > 0 ? benodigdeOmzet / factureerbareUrenPerJaar : 0;

  return { benodigdBrutoInkomen, benodigdeOmzet, uurtarief };
}
