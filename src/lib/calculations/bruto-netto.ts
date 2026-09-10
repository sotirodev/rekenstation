import { getTaxYearData } from "@/lib/tax-data";
import type { TaxBracket } from "@/lib/tax-data/types";

export type SalarisPeriode = "dag" | "week" | "4-weken" | "maand" | "kwartaal" | "jaar";

/**
 * Aantal loontijdvakken per jaar, conform de "Rekenvoorschriften voor de
 * geautomatiseerde loonadministratie" van de Belastingdienst (jaarbasis 260
 * dagen, waarvan de overige tijdvakken zijn afgeleid).
 */
export const PERIODES_PER_JAAR: Record<SalarisPeriode, number> = {
  dag: 260,
  week: 52,
  "4-weken": 13,
  maand: 12,
  kwartaal: 4,
  jaar: 1,
};

export interface BrutoNettoInput {
  bruto: number;
  periode: SalarisPeriode;
  belastingjaar: number;
  /** ISO-datum (YYYY-MM-DD), optioneel. Bepaalt of het AOW-tarief geldt. */
  geboortedatum?: string;
  /** Of de loonheffingskorting wordt toegepast (maar bij één werkgever/uitkering tegelijk). */
  loonheffingskorting: boolean;
  /** Peildatum om AOW-leeftijd te bepalen; standaard vandaag. Vooral handig voor testen. */
  peildatum?: Date;
}

export interface BrutoNettoResult {
  periode: SalarisPeriode;
  brutoPerJaar: number;
  brutoPerPeriode: number;
  nettoPerJaar: number;
  nettoPerPeriode: number;
  loonheffing: number;
  algemeneHeffingskorting: number;
  arbeidskorting: number;
  nettoPercentage: number;
  belastingjaar: number;
  heeftAowLeeftijd: boolean;
  loonheffingskortingToegepast: boolean;
}

function heeftAowLeeftijdBereikt(
  geboortedatum: Date,
  aowLeeftijd: number,
  peildatum: Date,
): boolean {
  const aowDatum = new Date(geboortedatum);
  // aowLeeftijd in maanden i.p.v. hele jaren, want sommige jaren (o.a. 2023: 66
  // jaar en 10 maanden) kennen een AOW-leeftijd die niet op een heel jaar valt.
  aowDatum.setMonth(aowDatum.getMonth() + Math.round(aowLeeftijd * 12));
  return peildatum >= aowDatum;
}

function berekenBox1Belasting(jaarinkomen: number, schijven: TaxBracket[]): number {
  let belasting = 0;
  let vorigeGrens = 0;

  for (const schijf of schijven) {
    const grens = schijf.upTo ?? Infinity;
    if (jaarinkomen <= vorigeGrens) break;
    const belastbaarInSchijf = Math.min(jaarinkomen, grens) - vorigeGrens;
    belasting += belastbaarInSchijf * schijf.rate;
    vorigeGrens = grens;
  }

  return belasting;
}

function berekenAlgemeneHeffingskorting(
  jaarinkomen: number,
  jaar: number,
  heeftAowLeeftijd: boolean,
): number {
  const taxData = getTaxYearData(jaar);
  const { max, afbouwStart, afbouwPercentage } = heeftAowLeeftijd
    ? taxData.algemeneHeffingskortingAow
    : taxData.algemeneHeffingskorting;

  if (jaarinkomen <= afbouwStart) return max;

  const korting = max - afbouwPercentage * (jaarinkomen - afbouwStart);
  return Math.max(0, korting);
}

function berekenArbeidskorting(jaarinkomen: number, jaar: number): number {
  const { arbeidskorting } = getTaxYearData(jaar);

  for (const schijf of arbeidskorting) {
    const grens = schijf.upTo ?? Infinity;
    if (jaarinkomen > schijf.from && jaarinkomen <= grens) {
      const bedrag = schijf.base + schijf.rate * (jaarinkomen - schijf.from);
      return Math.max(0, bedrag);
    }
  }

  return 0;
}

export function berekenBrutoNetto({
  bruto,
  periode,
  belastingjaar,
  geboortedatum,
  loonheffingskorting,
  peildatum = new Date(),
}: BrutoNettoInput): BrutoNettoResult {
  const periodesPerJaar = PERIODES_PER_JAAR[periode];
  const brutoPerJaar = bruto * periodesPerJaar;
  const taxData = getTaxYearData(belastingjaar);

  const heeftAowLeeftijd = geboortedatum
    ? heeftAowLeeftijdBereikt(new Date(geboortedatum), taxData.aowLeeftijd, peildatum)
    : false;

  const schijven = heeftAowLeeftijd ? taxData.box1Aow : taxData.box1;
  const belastingVoorKortingen = berekenBox1Belasting(brutoPerJaar, schijven);

  const algemeneHeffingskorting = loonheffingskorting
    ? berekenAlgemeneHeffingskorting(brutoPerJaar, belastingjaar, heeftAowLeeftijd)
    : 0;
  const arbeidskorting = loonheffingskorting
    ? berekenArbeidskorting(brutoPerJaar, belastingjaar)
    : 0;

  const loonheffing = Math.max(
    0,
    belastingVoorKortingen - algemeneHeffingskorting - arbeidskorting,
  );

  const nettoPerJaar = brutoPerJaar - loonheffing;

  return {
    periode,
    brutoPerJaar,
    brutoPerPeriode: brutoPerJaar / periodesPerJaar,
    nettoPerJaar,
    nettoPerPeriode: nettoPerJaar / periodesPerJaar,
    loonheffing,
    algemeneHeffingskorting,
    arbeidskorting,
    nettoPercentage: brutoPerJaar > 0 ? (nettoPerJaar / brutoPerJaar) * 100 : 0,
    belastingjaar,
    heeftAowLeeftijd,
    loonheffingskortingToegepast: loonheffingskorting,
  };
}
