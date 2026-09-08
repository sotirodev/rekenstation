export interface TaxBracket {
  /** Bovengrens van de schijf in euro's, of null voor de hoogste schijf. */
  upTo: number | null;
  rate: number;
}

export interface HeffingskortingFormule {
  max: number;
  afbouwStart: number;
  afbouwPercentage: number;
}

export interface ArbeidskortingSchijf {
  upTo: number | null;
  base: number;
  /** Percentage toegepast op het deel van het inkomen boven de vorige schijfgrens. */
  rate: number;
  /** Ondergrens van deze schijf (0 voor de eerste). */
  from: number;
}

export interface TaxYearData {
  jaar: number;
  /** AOW-leeftijd in dit jaar, in jaren (bron: Rijksoverheid/SVB). */
  aowLeeftijd: number;
  /** Box 1 schijven voor mensen onder de AOW-leeftijd. */
  box1: TaxBracket[];
  /** Box 1 schijven voor AOW-gerechtigden (geboren op of na 1 januari 1946). */
  box1Aow: TaxBracket[];
  algemeneHeffingskorting: HeffingskortingFormule;
  /** Algemene heffingskorting voor mensen die het hele jaar AOW-leeftijd hebben. */
  algemeneHeffingskortingAow: HeffingskortingFormule;
  arbeidskorting: ArbeidskortingSchijf[];
}
