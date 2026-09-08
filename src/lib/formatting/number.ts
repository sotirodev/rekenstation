const numberFormatter = new Intl.NumberFormat("nl-NL", {
  maximumFractionDigits: 1,
});

export function formatNumber(value: number, fractionDigits: number = 1): string {
  if (!Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("nl-NL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatPercentage(value: number, fractionDigits: number = 1): string {
  if (!Number.isFinite(value)) return "0%";
  return `${numberFormatter.format(Number(value.toFixed(fractionDigits)))}%`;
}

/**
 * Parseert Nederlandse getalnotatie ("1.234,56" of "1234.56" of "1234,56")
 * naar een JavaScript number. Retourneert NaN bij ongeldige invoer.
 */
export function parseNlNumber(input: string): number {
  const trimmed = input.trim();
  if (trimmed === "") return NaN;

  const hasComma = trimmed.includes(",");
  const hasDot = trimmed.includes(".");

  let normalized = trimmed;
  if (hasComma && hasDot) {
    normalized = trimmed.replace(/\./g, "").replace(",", ".");
  } else if (hasComma) {
    normalized = trimmed.replace(",", ".");
  }

  return Number(normalized);
}
