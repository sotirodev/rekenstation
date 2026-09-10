import type { TaxYearData } from "./types";

/**
 * Bron: Belastingdienst.nl, officiële tabellen voor 2023 (box 1 tarieven onder
 * en boven AOW-leeftijd, algemene heffingskorting, arbeidskorting) en
 * Rijksoverheid.nl voor de AOW-leeftijd (66 jaar en 10 maanden in 2023). In
 * 2023 waren schijf 1 en 2 voor mensen onder de AOW-leeftijd samengevoegd tot
 * één schijf; de AOW-schijf 1 hieronder geldt voor mensen geboren op of na 1
 * januari 1946 (nagenoeg alle AOW-gerechtigden).
 */
export const taxData2023: TaxYearData = {
  jaar: 2023,
  aowLeeftijd: 66 + 10 / 12,
  box1: [
    { upTo: 73_031, rate: 0.3693 },
    { upTo: null, rate: 0.495 },
  ],
  box1Aow: [
    { upTo: 38_703, rate: 0.1903 },
    { upTo: 73_031, rate: 0.3693 },
    { upTo: null, rate: 0.495 },
  ],
  algemeneHeffingskorting: {
    max: 3_070,
    afbouwStart: 22_660,
    afbouwPercentage: 0.06095,
  },
  algemeneHeffingskortingAow: {
    max: 1_583,
    afbouwStart: 22_660,
    afbouwPercentage: 0.03141,
  },
  arbeidskorting: [
    { from: 0, upTo: 10_740, base: 0, rate: 0.08231 },
    { from: 10_740, upTo: 23_201, base: 884, rate: 0.29861 },
    { from: 23_201, upTo: 37_691, base: 4_605, rate: 0.03085 },
    { from: 37_691, upTo: 115_295, base: 5_052, rate: -0.0651 },
    { from: 115_295, upTo: null, base: 0, rate: 0 },
  ],
};
