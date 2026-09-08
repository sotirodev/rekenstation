import type { TaxYearData } from "./types";

/**
 * Bron: Belastingdienst.nl, officiële tabellen voor 2026 (box 1 tarieven onder
 * en boven AOW-leeftijd, algemene heffingskorting, arbeidskorting) en
 * Rijksoverheid.nl voor de AOW-leeftijd. De AOW-schijf 1 hieronder geldt voor
 * mensen geboren op of na 1 januari 1946 (nagenoeg alle AOW-gerechtigden).
 */
export const taxData2026: TaxYearData = {
  jaar: 2026,
  aowLeeftijd: 67,
  box1: [
    { upTo: 38_883, rate: 0.3575 },
    { upTo: 78_426, rate: 0.3756 },
    { upTo: null, rate: 0.495 },
  ],
  box1Aow: [
    { upTo: 38_883, rate: 0.1785 },
    { upTo: 78_426, rate: 0.3756 },
    { upTo: null, rate: 0.495 },
  ],
  algemeneHeffingskorting: {
    max: 3_115,
    afbouwStart: 29_736,
    afbouwPercentage: 0.06398,
  },
  algemeneHeffingskortingAow: {
    max: 1_556,
    afbouwStart: 29_736,
    afbouwPercentage: 0.03195,
  },
  arbeidskorting: [
    { from: 0, upTo: 11_965, base: 0, rate: 0.08324 },
    { from: 11_965, upTo: 25_845, base: 996, rate: 0.31009 },
    { from: 25_845, upTo: 45_592, base: 5_300, rate: 0.0195 },
    { from: 45_592, upTo: 132_920, base: 5_685, rate: -0.0651 },
    { from: 132_920, upTo: null, base: 0, rate: 0 },
  ],
};
