export interface OverurenInput {
  uurloon: number;
  aantalOveruren: number;
  toeslagPercentage: number;
}

export interface OverurenResult {
  vergoedingPerOveruur: number;
  totaleVergoeding: number;
}

export function berekenOveruren({
  uurloon,
  aantalOveruren,
  toeslagPercentage,
}: OverurenInput): OverurenResult {
  const vergoedingPerOveruur = uurloon * (1 + toeslagPercentage / 100);

  return {
    vergoedingPerOveruur,
    totaleVergoeding: vergoedingPerOveruur * aantalOveruren,
  };
}
