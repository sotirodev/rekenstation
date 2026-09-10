import type { TaxYearData } from "./types";

/**
 * Bron: Belastingdienst.nl, officiële tabellen voor 2024 (box 1 tarieven onder
 * en boven AOW-leeftijd, algemene heffingskorting, arbeidskorting) en
 * Rijksoverheid.nl voor de AOW-leeftijd. In 2024 waren schijf 1 en 2 voor
 * mensen onder de AOW-leeftijd samengevoegd tot één schijf; de AOW-schijf 1
 * hieronder geldt voor mensen geboren op of na 1 januari 1946 (nagenoeg alle
 * AOW-gerechtigden).
 */
export const taxData2024: TaxYearData = {
  jaar: 2024,
  aowLeeftijd: 67,
  box1: [
    { upTo: 75_518, rate: 0.3697 },
    { upTo: null, rate: 0.495 },
  ],
  box1Aow: [
    { upTo: 38_098, rate: 0.1907 },
    { upTo: 75_518, rate: 0.3697 },
    { upTo: null, rate: 0.495 },
  ],
  algemeneHeffingskorting: {
    max: 3_362,
    afbouwStart: 24_812,
    afbouwPercentage: 0.0663,
  },
  algemeneHeffingskortingAow: {
    max: 1_735,
    afbouwStart: 24_812,
    afbouwPercentage: 0.03421,
  },
  arbeidskorting: [
    { from: 0, upTo: 11_490, base: 0, rate: 0.08425 },
    { from: 11_490, upTo: 24_820, base: 968, rate: 0.31433 },
    { from: 24_820, upTo: 39_957, base: 5_158, rate: 0.02471 },
    { from: 39_957, upTo: 124_934, base: 5_532, rate: -0.0651 },
    { from: 124_934, upTo: null, base: 0, rate: 0 },
  ],
};
