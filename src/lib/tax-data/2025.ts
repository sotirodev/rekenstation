import type { TaxYearData } from "./types";

/**
 * Bron: Belastingdienst.nl, officiële tabellen voor 2025 (box 1 tarieven onder
 * en boven AOW-leeftijd, algemene heffingskorting, arbeidskorting) en
 * Rijksoverheid.nl voor de AOW-leeftijd. De AOW-schijf 1 hieronder geldt voor
 * mensen geboren op of na 1 januari 1946 (nagenoeg alle AOW-gerechtigden).
 */
export const taxData2025: TaxYearData = {
  jaar: 2025,
  aowLeeftijd: 67,
  box1: [
    { upTo: 38_441, rate: 0.3582 },
    { upTo: 76_817, rate: 0.3748 },
    { upTo: null, rate: 0.495 },
  ],
  box1Aow: [
    { upTo: 38_441, rate: 0.1792 },
    { upTo: 76_817, rate: 0.3748 },
    { upTo: null, rate: 0.495 },
  ],
  algemeneHeffingskorting: {
    max: 3_068,
    afbouwStart: 28_406,
    afbouwPercentage: 0.06337,
  },
  algemeneHeffingskortingAow: {
    max: 1_536,
    afbouwStart: 28_406,
    afbouwPercentage: 0.0317,
  },
  arbeidskorting: [
    { from: 0, upTo: 12_169, base: 0, rate: 0.08053 },
    { from: 12_169, upTo: 26_288, base: 980, rate: 0.3003 },
    { from: 26_288, upTo: 43_071, base: 5_220, rate: 0.02258 },
    { from: 43_071, upTo: 129_078, base: 5_599, rate: -0.0651 },
    { from: 129_078, upTo: null, base: 0, rate: 0 },
  ],
};
