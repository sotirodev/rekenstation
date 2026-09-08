export interface StudentenbudgetInput {
  inkomstenPerMaand: number;
  uitgavenPerMaand: number;
}

export interface StudentenbudgetResult {
  saldoPerMaand: number;
  saldoPerJaar: number;
}

export function berekenStudentenbudget({
  inkomstenPerMaand,
  uitgavenPerMaand,
}: StudentenbudgetInput): StudentenbudgetResult {
  const saldoPerMaand = inkomstenPerMaand - uitgavenPerMaand;
  return { saldoPerMaand, saldoPerJaar: saldoPerMaand * 12 };
}
