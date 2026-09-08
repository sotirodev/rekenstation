export interface VakantiedagenInput {
  urenPerWeek: number;
  dagenPerWeek: number;
}

export interface VakantiedagenResult {
  wettelijkMinimumUren: number;
  wettelijkMinimumDagen: number;
  urenPerDag: number;
}

/**
 * Het wettelijk minimum aantal vakantie-uren is viermaal de overeengekomen
 * arbeidsduur per week (artikel 7:634 BW).
 */
export function berekenVakantiedagen({
  urenPerWeek,
  dagenPerWeek,
}: VakantiedagenInput): VakantiedagenResult {
  return {
    wettelijkMinimumUren: urenPerWeek * 4,
    wettelijkMinimumDagen: dagenPerWeek * 4,
    urenPerDag: dagenPerWeek > 0 ? urenPerWeek / dagenPerWeek : 0,
  };
}
