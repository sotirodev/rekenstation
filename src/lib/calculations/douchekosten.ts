const OPWARMING_GRADEN = 25;
const SOORTELIJKE_WARMTE_WATER = 4.186; // kJ per kg per °C
const KJ_PER_KWH = 3600;
const KETELRENDEMENT = 0.85;

export interface DouchekostenInput {
  literPerMinuut: number;
  duurMinuten: number;
  waterprijsPerM3: number;
  energieprijsPerKwh: number;
}

export interface DouchekostenResult {
  volumeLiter: number;
  waterkosten: number;
  energiekosten: number;
  totaalPerBeurt: number;
}

/**
 * Waterkosten: volume × prijs per m3. Energiekosten: benodigde warmte om het
 * water op te warmen (uitgaand van een vaste opwarming van 25°C, van koud
 * leidingwater naar douchetemperatuur), gedeeld door een geschat
 * boilerrendement van 85% voor de werkelijke energie-input.
 */
export function berekenDouchekosten({
  literPerMinuut,
  duurMinuten,
  waterprijsPerM3,
  energieprijsPerKwh,
}: DouchekostenInput): DouchekostenResult {
  const volumeLiter = literPerMinuut * duurMinuten;
  const waterkosten = (volumeLiter / 1000) * waterprijsPerM3;

  const energieKwhTheoretisch =
    (volumeLiter * OPWARMING_GRADEN * SOORTELIJKE_WARMTE_WATER) / KJ_PER_KWH;
  const energiekosten = (energieKwhTheoretisch / KETELRENDEMENT) * energieprijsPerKwh;

  return {
    volumeLiter,
    waterkosten,
    energiekosten,
    totaalPerBeurt: waterkosten + energiekosten,
  };
}
